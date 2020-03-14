#!/bin/bash

PROJECT_DIR_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../.." >/dev/null 2>&1 && pwd )"
FRONTEND_PROJECT_DIR_PATH="${PROJECT_DIR_PATH}/frontend"

cd "${FRONTEND_PROJECT_DIR_PATH}" || exit 1
yarn install
yarn build
python "${PROJECT_DIR_PATH}/util_scripts/build_frontend/move_files.py"