"""
DJANGO SETTINGS
"""
from pathlib import Path
import os


BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = os.environ.get('SECRET_KEY', 'changeme')
DEBUG = os.environ.get('DEBUG',  False)

ALLOWED_HOSTS = []

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'app',
    'core',
    'compose',
    'analysis'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'app.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'app.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'HOST': os.environ.get('CORE_DB_HOST'),
        'NAME': os.environ.get('CORE_DB_NAME'),
        'USER': os.environ.get('CORE_DB_USER'),
        'PASSWORD': os.environ.get('CORE_DB_PASS'),
        'OPTIONS': {
            'sslmode': 'disable',  # Disable SSL explicitly
        },
    },
    'build': {
        'ENGINE': 'django.db.backends.postgresql',
        'HOST': os.environ.get('BUILD_DB_HOST'),
        'NAME': os.environ.get('BUILD_DB_NAME'),
        'USER': os.environ.get('BUILD_DB_USER'),
        'PASSWORD': os.environ.get('BUILD_DB_PASS'),
        'OPTIONS': {
            'sslmode': 'disable',  # Disable SSL explicitly
        },
    },
    'analysis': {
        'ENGINE': 'django.db.backends.postgresql',
        'HOST': os.environ.get('ANALYSIS_DB_HOST'),
        'NAME': os.environ.get('ANALYSIS_DB_NAME'),
        'USER': os.environ.get('ANALYSIS_DB_USER'),
        'PASSWORD': os.environ.get('ANALYSIS_DB_PASS'),
        'OPTIONS': {
            'sslmode': 'disable',  # Disable SSL explicitly
        },
    }
}

# USER SETTINGS

AUTH_USER_MODEL = 'core.User'

# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
