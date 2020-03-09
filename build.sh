#!/bin/bash

yarn install
yarn build
python "./util_scripts/build_frontend/move_files.py"

pip install -r requirements.txt
python manage.py test
python manage.py collectstatic --no-input
python manage.py migrate