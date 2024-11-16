# PROJECT YUKI　雪

Snowpack analysis for the Wasatch front

## Server

##### Dev Environment Set Up

###### Set Up Virtual Environment

```
cd server
# cd into server folder
python -m venv venv
# Create virtual environment folder
source venv/bin/activate
# Activate the environment
# Use "deactivate" to exit venv
```

###### Install Dependencies

```
pip install -r requirements.txt
```

###### Declare Environment Variables

```
touch .env
```


**Add the folowing variables to .env file**

CORE_DB_HOST=core_db

CORE_DB_NAME=yuki_core_db

CORE_DB_USER=devuser

CORE_DB_PASS=changeme

BUILD_DB_HOST=build_db

BUILD_DB_NAME=yuki_build_db

BUILD_DB_USER=devuser

BUILD_DB_PASS=changeme

ANALYSIS_DB_HOST=analysis_db

ANALYSIS_DB_NAME=yuki_analysis_db

ANALYSIS_DB_USER=devuser

ANALYSIS_DB_PASS=changeme

ALLOWED_HOSTS=0.0.0.0

SECRET_KEY=[INSERT NEW SECRET KEY]

DEBUG=True



**Save the .env file**

###### Build & Run Docker Containers

```
docker compose build
# Build takes around 1-2 min
docker compose up
# Takes around 2 min first time running
```

###### DIRECTORY

0.0.0.0:8000 = DJANGO APP

0.0.0.0:8000/admin = DJANGO ADMIN

0.0.0.0:5050 = PGADMIN
