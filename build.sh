#!/usr/bin/env bash
yarn install
yarn build
pip3 install -r requirements.txt
if ! yes yes | python3 manage.py test; then
  echo "Tests failed."
  exit 1
fi
python3 manage.py collectstatic --no-input
if ! python3 manage.py migrate; then
  echo "Migration failed."
  exit 1
fi
