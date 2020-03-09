#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

yarn install
yarn build
python "${DIR}/move_files.py"
python "${DIR}/sanitise_index_html.py"
