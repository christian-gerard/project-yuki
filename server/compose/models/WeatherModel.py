"""
Synoptic Weather API Data
"""

from django.db import models

def WeatherData(models.Manager):
    """ Weather Data Model """

    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.name
