# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.AutoField(serialize=False, primary_key=True)),
                ('first_name', models.CharField(max_length=60)),
                ('last_name', models.CharField(max_length=60, blank=True)),
                ('email', models.EmailField(unique=True, max_length=254, blank=True)),
            ],
        ),
    ]
