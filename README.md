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
