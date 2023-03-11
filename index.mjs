import {spawn as spwn} from 'child_process';

const spawn = (
    cmd,
    args,
) => new Promise((resolve, reject) => {
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

try {
  const stdOut = await spawn('docker', ['--version']);
  console.log('stdOut: ', stdOut);
} catch (error) {
  console.log('error: ', error);
  process.exit(1);
}

console.log('hello');
