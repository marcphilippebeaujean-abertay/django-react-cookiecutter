from .base import *

DOMAIN = '*' # TODO: change to your domain

DEBUG = False

ALLOWED_HOSTS = [DOMAIN]

WSGI_APPLICATION = 'project_config.wsgi.prod.application'

EMAIL_BACKEND = 'django_smtp_ssl.SSLEmailBackend'
EMAIL_HOST = 'email-smtp.eu-central-1.amazonaws.com'
EMAIL_PORT = 465
EMAIL_HOST_USER = os.environ.get('AWS_SES_SMTP_USER')
EMAIL_HOST_PASSWORD = os.environ.get('AWS_SES_PASSWORD')
EMAIL_USE_SSL = True
DEFAULT_FROM_EMAIL = os.environ.get('SENDING_EMAIL')

SECRET_KEY = os.environ.get('SECRET_KEY')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get('DATABASE_NAME'),
        'USER': os.environ.get('DATABASE_USER'),
        'PASSWORD': os.environ.get('DATABASE_PASSWORD'),
        'HOST': os.environ.get('DATABASE_URL'),
        'PORT': os.environ.get('DATABASE_PORT'),
    }
}