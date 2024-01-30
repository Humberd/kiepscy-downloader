# syntax=docker/dockerfile:1

FROM ubuntu:jammy
WORKDIR /code
ARG DEBIAN_FRONTEND=noninteractive
COPY ./docker-scripts.sh /code/docker-scripts.sh
RUN chmod +x /code/docker-scripts.sh && /code/docker-scripts.sh

ADD . /code