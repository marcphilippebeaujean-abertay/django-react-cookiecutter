import os.path
import shutil


backend_dir = os.path.join(os.getcwd(), '..')
backend_static_dir = os.path.join(backend_dir, "static")
backend_templates_dir = os.path.join(backend_dir, "templates")
frontend_build_dir = os.path.join(backend_dir, "frontend", "build")

backend_index_file = (os.path.join(backend_templates_dir, "index.html"))
if os.path.isfile(backend_index_file):
    os.remove(backend_index_file)
frontend_index_file = (os.path.join(frontend_build_dir, "index.html"))
if os.path.isfile(frontend_index_file):
    shutil.move(frontend_index_file, backend_templates_dir)
if os.path.isdir(frontend_build_dir):
    backend_static_folder = os.path.join(backend_dir, "static")
    shutil.rmtree(backend_static_folder, ignore_errors=True)
    os.mkdir(backend_static_folder)
    frontend_build_static_dir = os.path.join(frontend_build_dir, "static")
    for d in os.listdir(frontend_build_static_dir):
        shutil.move(os.path.join(frontend_build_static_dir, d), backend_static_dir)
    shutil.rmtree(frontend_build_static_dir)
    for f in os.listdir(frontend_build_dir):
        shutil.move(os.path.join(frontend_build_dir, f), backend_static_dir)