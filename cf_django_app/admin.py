from django.contrib import admin
from .models import User


class CategoryUser(admin.ModelAdmin):
    list_display = ['email', 'user_id']

    class Meta:
        model = User

admin.site.register(User, CategoryUser)
