import {spawn as spwn} from 'child_process';
import fs from 'fs';

const spawn = (cmd, args) => new Promise((resolve, reject) => {
  const cp = spwn(cmd, args);
  const error = [];
  const stdout = [];
  cp.stdout.on('data', (data) => {
    stdout.push(data.toString());
  });

  cp.on('error', (e) => {
    error.push(e.toString());
  });

  cp.on('close', () => {
    if (error.length) reject(error.join(''));
    else resolve(stdout.join(''));
  });
});

function readFile() {
  return fs.readFileSync('./links-extra.txt').toString();
}

async function stateMachine(textContent) {
  const lines = textContent.split('\n');

  for (let line of lines) {
    const cleanedLine = line.trim();
    const lcLine = cleanedLine.toLocaleLowerCase();
    if (!lcLine) {
      continue;
    }
    let [name, episodeUrl] = cleanedLine.split('http');
    name = name.trim().replace(/[^A-Za-z0-9À-ž]/gi, '.');
    episodeUrl = `https${episodeUrl}`;

    const directoryName = `extras`;
    console.log(directoryName, name);

    await spawn("yt-dlp", [episodeUrl, '-o', `./downloads/${directoryName}/${name}.%(ext)s`])
  }
}

stateMachine(readFile());
