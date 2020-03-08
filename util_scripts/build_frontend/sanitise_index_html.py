from tempfile import mkstemp
from shutil import move
import os.path
from os import fdopen, remove
import re

index_html_file_path = os.path.join(os.getcwd(), "templates", "index.html")

pattern = re.compile("(href|src)=\"(?!\/static\/)")

insert_text = "/static"

fh, abs_path = mkstemp()
with fdopen(fh, 'w') as new_file:
    with open(index_html_file_path) as f:
        for i, line in enumerate(f):
            new_line = line
            for x, match in enumerate(re.finditer(pattern, line)):
                match_index = match.end()
                text_to_insert = insert_text
                if line[match_index] != "/":
                    text_to_insert += "/"
                new_line = new_line[:match_index+(x*len(text_to_insert))] + text_to_insert + new_line[match_index+(x*len(text_to_insert)):]
            new_file.write(new_line)
    remove(index_html_file_path)
    # Move new file
    move(abs_path, index_html_file_path)
