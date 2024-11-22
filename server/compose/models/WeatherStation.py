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


#     'ELEVATION': '8752.0',
#    'LATITUDE': '40.59148',
#    'LONGITUDE': '-111.63778',


    def __str__():
        return self.name


    pass