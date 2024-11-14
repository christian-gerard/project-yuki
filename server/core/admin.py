"""
CORE APP ADMIN CONFIG
"""

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from core.models.user import User


admin.site.register(User)