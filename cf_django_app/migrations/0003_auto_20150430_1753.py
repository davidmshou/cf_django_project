# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cf_django_app', '0002_user_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='comment',
            field=models.TextField(blank=True),
        ),
    ]
