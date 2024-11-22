"""
Synoptic Weather API Data
"""

from django.db import models

class atWater_station(models.Model):
    """ Weather Data Model """

    time_stamp = models.DateTimeField()
    air_temp = models.FloatField()
    relative_humidity = models.FloatField()
    wind_speed = models.FloatField()
    wind_direction = models.CharField()
    wind_gust = models.FloatField()
    solar_radiation = models.FloatField()
    outgoing_radiation_lw = models.FloatField()
    incoming_radiation_lw = models.FloatField()
    snow_depth = models.FloatField()
    surface_temp = models.FloatField()
    volt = models.FloatField()
    wind_cardinal_direction = models.FloatField()
    dew_point_temperature = models.FloatField()

    def __str__(self):
        return self.weatherStation

