# Generated by Django 5.0.6 on 2024-06-09 02:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0006_history'),
    ]

    operations = [
        migrations.AlterField(
            model_name='history',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='history', to='Users.user'),
        ),
    ]