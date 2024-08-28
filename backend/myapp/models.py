from django.db import models

# Create your models here.
class FeaturedCar(models.Model):
    car_name=models.CharField(max_length=255)
    car_price=models.DecimalField(max_digits=10,decimal_places=2)
    car_image=models.ImageField(upload_to='car_images/')
    launch_date=models.DateField()
    on_road_price=models.CharField(max_length=255)

    def __str__(self):
        return self.car_name
class PopularCar(models.Model):
    car_name=models.CharField(max_length=255)
    car_price=models.DecimalField(max_digits=10,decimal_places=2)
    car_image=models.ImageField(upload_to='car_images/')
    on_road_price=models.CharField(max_length=255)

    def __str__(self):
        return self.car_name

class UppcomingCar(models.Model):
    car_name=models.CharField(max_length=255)
    start_car_price=models.DecimalField(max_digits=10,decimal_places=2,default=0.00)
    end_car_price=models.DecimalField(max_digits=10,decimal_places=2,default=0.00)
    type=models.CharField(max_length=255)
    car_image=models.ImageField(upload_to='car_images/')
    on_road_price=models.CharField(max_length=255)
    def __str__(self):
        return self.car_name


class Car(models.Model):
    name=models.CharField(max_length=100)
    price=models.IntegerField()
    fuel_type=models.CharField(max_length=50)
    transmission=models.CharField(max_length=50)
    seating_capacity=models.IntegerField()
    body_type=models.CharField(max_length=50)
    car_image=models.ImageField(upload_to='car_images/')
    car_price=models.DecimalField(max_digits=10,decimal_places=2,default=0.00)
    type=models.CharField(max_length=255,default=' ')
    def __str__(self):
        return  self.name
