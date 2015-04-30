# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cf_django_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='comment',
            field=models.CharField(max_length=254, blank=True),
        ),
    ]
