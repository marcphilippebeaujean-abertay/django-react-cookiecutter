from .base import *


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project_config.prod")
application = get_wsgi_application()
