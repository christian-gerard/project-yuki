"""
Weather Station Model
"""
from django.db import models
from . import WeatherStation

class Observation(models.Model):
    """Fields for Weather Station"""

    time_stamp = models.DateTimeField()
    air_temp = models.FloatField()
    relative_humidity = models.FloatField()
    wind_speed = models.FloatField()
    wind_direction = models.CharField(max_length=255)
    wind_gust = models.FloatField()
    surface_temp = models.FloatField()
    volt = models.FloatField()
    wind_cardinal_direction = models.FloatField()
    dew_point_temperature = models.FloatField()

    station_id = models.ForeignKey(
        WeatherStation,
        related_name='observations',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.name
