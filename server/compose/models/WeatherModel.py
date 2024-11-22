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


    # 'date_time': ['2024-11-21T06:00:00Z'],
    # 'air_temp_set_1': [31.52],
    # 'relative_humidity_set_1': [34.48],
    # 'wind_speed_set_1': [0.53],
    # 'wind_direction_set_1': [48.86],
    # 'wind_gust_set_1': [3.02],
    # 'solar_radiation_set_1': [0.0],
    # 'outgoing_radiation_sw_set_1': [5.33],
    # 'incoming_radiation_lw_set_1': [258.67],
    # 'snow_depth_set_1': [16.0],
    # 'surface_temp_set_1': [16.85],
    # 'volt_set_1': [12.03],
    # 'wind_cardinal_direction_set_1d': ['NE'],
    # 'dew_point_temperature_set_1d': [6.46]},
