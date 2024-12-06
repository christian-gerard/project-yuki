"""
Weather Station Model
"""
from django.db import models
from . import WeatherStation

class Observation(models.Model):
    """Fields for Weather Station"""

    time_stamp = models.DateTimeField()
    air_temp = models.FloatField(max_digits=10, decimal_places=2, default=0.00)
    relative_humidity = models.FloatField(max_digits=10, decimal_places=2, default=0.00)
    wind_speed = models.FloatField(max_digits=10, decimal_places=2, default=0.00)
    wind_direction = models.CharField(max_length=255)
    wind_gust = models.FloatField(max_digits=10, decimal_places=2, default=0.00)
    surface_temp = models.FloatField(max_digits=10, decimal_places=2, default=0.00)
    volt = models.FloatField(max_digits=10, decimal_places=2, default=0.00)
    wind_cardinal_direction = models.FloatField(max_digits=10, decimal_places=2, default=0.00)
    dew_point_temperature = models.FloatField(max_digits=10, decimal_places=2, default=0.00)

    station_id = models.ForeignKey(
        WeatherStation,
        related_name='observations',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.name
