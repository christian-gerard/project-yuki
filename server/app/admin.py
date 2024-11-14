"""
DJANGO ADMIN CONFIG
"""

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _

from core import models

admin.site.site_title = "Orka"
admin.site.site_header = "Orka Admin"


admin.site.register(models.User, UserAdmin)