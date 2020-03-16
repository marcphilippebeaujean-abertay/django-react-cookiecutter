FROM python:3.7.7-buster

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo deb "https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update
RUN yes | apt-get install npm
RUN yes | apt-get install yarn

COPY . .
RUN ./build.sh

EXPOSE 8000
CMD gunicorn -b 0.0.0.0:8000 project_config.wsgi.prod:application