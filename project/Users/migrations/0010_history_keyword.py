# Generated by Django 5.0.6 on 2024-06-27 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0009_remove_history_keyword_history_country_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='history',
            name='keyword',
            field=models.CharField(default='No keyword', max_length=100),
        ),
    ]
