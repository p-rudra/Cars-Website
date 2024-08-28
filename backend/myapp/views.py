from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from django.http import JsonResponse
from . import models
# Create your views here.
class HelloWorldView(APIView):
    def get(self,request):
        return Response({'message':'Hello World!'})
def home(request):
    return HttpResponse('Home Page')

def featured_cars(request):
    cars=models.FeaturedCar.objects.all()
    cars_list=[]

    for car in cars:
        cars_list.append(
        {
            'car_name': car.car_name,
            'car_price':str(car.car_price),
            'car_image':car.car_image.url,
            'launch_date':car.launch_date.strftime('%d-%b-%Y'),
            'on_road_price':car.on_road_price,
        })
    return JsonResponse(cars_list,safe=False)

def popular_cars(request):
    cars=models.PopularCar.objects.all()
    p_cars_list=[]

    for car in cars:
        p_cars_list.append(
        {
            'car_name': car.car_name,
            'car_price':str(car.car_price),
            'car_image':car.car_image.url,
            'on_road_price':car.on_road_price,
        })
    return JsonResponse(p_cars_list,safe=False)

def upcoming_cars(request):
    cars=models.UppcomingCar.objects.all()
    u_cars_list=[]
    for car in cars:
        u_cars_list.append(
        {
            'car_name': car.car_name,
            'start_car_price':str(car.start_car_price),
            'end_car_price':str(car.end_car_price),
            'car_image':car.car_image.url,
            'type':car.type,
            'on_road_price':car.on_road_price,
        })
    return JsonResponse(u_cars_list,safe=False)
def newcars(request):
    return HttpResponse('Hello')


def car_list(request):
    budget = request.GET.get('budget')
    fuel_type = request.GET.get('fuel_type')
    transmission = request.GET.get('transmission')
    seating_capacity = request.GET.get('seating_capacity')
    body_type = request.GET.get('body_type')

    cars=models.Car.objects.all()

    if budget:
        cars = cars.filter(price__lte=budget)
    if fuel_type:
        cars = cars.filter(fuel_type=fuel_type)
    if transmission:
        cars = cars.filter(transmission=transmission)
    if seating_capacity:
        cars = cars.filter(seating_capacity=seating_capacity)
    if body_type:
        cars = cars.filter(body_type=body_type)

    cars_list = []
    for car in cars:
        cars_list.append(
            {'name':car.name,
             'price':car.price,
             'fuel_type':car.fuel_type,
             'transmission':car.transmission,
             'seating_capacity':car.seating_capacity,
             'body_type':car.body_type,
             'car_image':car.car_image.url ,
             'car_price':car.car_price,
             'type':car.type
             }
        )

    return JsonResponse(cars_list,safe=False)