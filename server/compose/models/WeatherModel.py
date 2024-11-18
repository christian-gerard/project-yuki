"""
Synoptic Weather API Data
"""

from django.db import models

class WeatherData(models.Model):
    """ Weather Data Model """

    weatherStation = models.DecimalField()
    temperature = models.DecimalField()

    def __str__(self):
        return self.weatherStation
