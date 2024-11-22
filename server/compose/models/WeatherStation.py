"""
Weather Station Model
"""
from django.db import models

class WeatherStation(models.Model):
    """Fields for Weather Station"""
    station_id = models.IntegerField()
    name = models.CharField()
    elevation = models.FloatField()
    latitude = models.FloatField()
    longitude = models.FloatField()


    def __str__(self):
        return self.name