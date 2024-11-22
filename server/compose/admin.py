"""
COMPOSE APP ADMIN CONFIG
"""

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from compose.models.WeatherStation import WeatherStation
from compose.models.WeatherModel import atWater_station


admin.site.register(WeatherStation)
admin.site.register(atWater_station)