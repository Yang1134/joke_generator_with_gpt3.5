# Generated by Django 5.0.6 on 2024-06-09 01:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0004_alter_user_options_alter_user_managers_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='country',
            field=models.CharField(choices=[('MY', 'Malaysia'), ('IN', 'India'), ('CN', 'China'), ('KR', 'South Korea'), ('QA', 'Qatar')], max_length=20),
        ),
    ]