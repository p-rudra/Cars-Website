# Generated by Django 5.1 on 2024-09-13 04:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0007_featuredcar_battery_capacity_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='featuredcar',
            name='mileage',
            field=models.CharField(blank=True, default='', max_length=100, null=True),
        ),
    ]
