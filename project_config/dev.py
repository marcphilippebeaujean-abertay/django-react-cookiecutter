from .base import *

DEBUG = True

ALLOWED_HOSTS = ['*']
CORS_ORIGIN_WHITELIST = ['http://localhost:3000', 'http://127.0.0.1:3000']

WSGI_APPLICATION = 'project_config.wsgi.dev.application'

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
DEFAULT_FROM_EMAIL = 'example@mail.com'

SECRET_KEY = '-vc5w$d3lzz4eb5p@etjdrmms&@@09t$vstbed^-h_+j^su^e'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}