#!/usr/bin/env bash
pip install -r requirements.txt
./util_scripts/build_frontend/build_frontend.sh
python manage.py test
python manage.py collectstatic --no-input
python manage.py migrate
