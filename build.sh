#!/usr/bin/env bash
if ! ./util_scripts/build_frontend/build_frontend.sh; then
  echo "Frontend build failed."
  exit 1
fi
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
