from .base import *

DEBUG = True

ALLOWED_HOSTS = ['*']
CORS_ORIGIN_ALLOW_ALL = True # If this is used then `CORS_ORIGIN_WHITELIST` will not have any effect
#CORS_ALLOW_CREDENTIALS = True

WSGI_APPLICATION = 'project_config.wsgi.dev.application'

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
DEFAULT_FROM_EMAIL = 'example@mail.com'

SECRET_KEY = '-vc5w$d3lzz4eb5p@etjdrmms&@@09t$vstbed^-h_+j^su^e'

DATABASES = {
    'default': {
        'ENGINE': 'tenant_schemas.postgresql_backend',
        'NAME': 'django_db',
        'USER': 'postgres',
        'PASSWORD': 'mysecretpassword',
        'HOST': '0.0.0.0',
        'PORT': '3306'
    }
}