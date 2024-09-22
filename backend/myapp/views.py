from audioop import avg
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from . import models
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from django.db.models import Avg
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User
from django.contrib.auth.hashers import make_password
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from .models import FeaturedCar, PopularCar, FeaturedCarReview, PopularCarReview
# Create your views here.
class HelloWorldView(APIView):
    def get(self,request):
        return Response({'message':'Hello World!'})
def home(request):
    return HttpResponse('Home Page')

# To send the data featured cars / trending cars data from backend to frontend
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
            'ex_showroom_price':car.ex_showroom_price,
            'individual_registration':car.individual_registration,
            'insurance':car.insurance,
            'other_charges':car.other_charges,
            'fuel_type':car.fuel_type,
            'transmission':car.transmission,
            'seating_capacity':car.seating_capacity,
            'battery_capacity':car.battery_capacity,
            'driving_range':car.driving_range,
            'mileage':car.mileage,
            'engine':car.engine
        })
    return JsonResponse(cars_list,safe=False)

# To send the data of popular cars data from backend to frontend
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
            'ex_showroom_price':car.ex_showroom_price,
            'individual_registration':car.individual_registration,
            'insurance':car.insurance,
            'other_charges':car.other_charges,
            'fuel_type':car.fuel_type,
            'transmission':car.transmission,
            'seating_capacity':car.seating_capacity,
            'battery_capacity':car.battery_capacity,
            'driving_range':car.driving_range,
            'mileage':car.mileage,
            'engine':car.engine
        })
    return JsonResponse(p_cars_list,safe=False)

# To send the data of upcoming cars data from backend to frontend
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
            'ex_showroom_price':car.ex_showroom_price,
            'individual_registration':car.individual_registration,
            'insurance':car.insurance,
            'other_charges':car.other_charges,
            'fuel_type':car.fuel_type,
            'transmission':car.transmission,
            'seating_capacity':car.seating_capacity,
            'battery_capacity':car.battery_capacity,
            'driving_range':car.driving_range,
            'mileage':car.mileage,
            'engine':car.engine
        })
    return JsonResponse(u_cars_list,safe=False)
def newcars(request):
    return HttpResponse('Hello')


# This function is used for applying filters and then sends the details to frontend
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


# This function is used for ratings of particular car
def cars_detail(request,car_name):
    car=get_object_or_404(models.FeaturedCar,car_name=car_name)
    reviews = FeaturedCarReview.objects.filter(featured_car=car).values('rating', 'description')
    average_rating = FeaturedCarReview.objects.filter(featured_car=car).aggregate(Avg('rating'))['rating__avg'] or 0
    car_data={
            'car_name': car.car_name,
            'car_price':str(car.car_price),
            'car_image':car.car_image.url,
            'launch_date':car.launch_date.strftime('%d-%b-%Y'),
            'on_road_price':car.on_road_price,
            'ex_showroom_price':car.ex_showroom_price,
            'individual_registration':car.individual_registration,
            'insurance':car.insurance,
            'other_charges':car.other_charges,
            'fuel_type':car.fuel_type,
            'transmission':car.transmission,
            'seating_capacity':car.seating_capacity,
            'battery_capacity':car.battery_capacity,
            'driving_range':car.driving_range,
            'mileage':car.mileage,
            'engine':car.engine,
            'description':car.description,
            'car_type':car.car_type,
            'id':car.id,
            'reviews': list(reviews),
            'average_rating': round(average_rating, 2),
        }
    return JsonResponse(car_data)

# This function is used for ratings of particular car
def p_car_details(request, car_name):
    car = get_object_or_404(models.PopularCar, car_name=car_name)
    
    reviews = PopularCarReview.objects.filter(popular_car=car).values('rating', 'description')
    
    average_rating = PopularCarReview.objects.filter(popular_car=car).aggregate(Avg('rating'))['rating__avg'] or 0
    
    # Car data to be returned as JSON
    car_data = {
        'car_name': car.car_name,
        'car_price': str(car.car_price),
        'car_image': car.car_image.url,
        'on_road_price': car.on_road_price,
        'ex_showroom_price': car.ex_showroom_price,
        'individual_registration': car.individual_registration,
        'insurance': car.insurance,
        'other_charges': car.other_charges,
        'fuel_type': car.fuel_type,
        'transmission': car.transmission,
        'seating_capacity': car.seating_capacity,
        'battery_capacity': car.battery_capacity,
        'driving_range': car.driving_range,
        'mileage': car.mileage,
        'engine': car.engine,
        'description': car.description,
        'car_type': car.car_type,
        'id': car.id,
        'reviews': list(reviews),
        'average_rating': round(average_rating, 2),
    }
    
    return JsonResponse(car_data)




# This function is used for signup
@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')

            if not username or not email or not password:
                return JsonResponse({'error': 'All fields are required'}, status=400)

            
            hashed_password = make_password(password)

            
            user = User.objects.create(
                username=username,
                email=email,
                password=hashed_password
            )

            return JsonResponse({'message': 'User created successfully'}, status=201)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)

# This function is used for login
@csrf_exempt
def login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            if not email or not password:
                return JsonResponse({'error': 'Both email and password are required'}, status=400)

            
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return JsonResponse({'error': 'Invalid credentials'}, status=400)

            if not check_password(password, user.password):
                return JsonResponse({'error': 'Invalid credentials'}, status=400)

            return JsonResponse({'message': 'Login successful', 'user': {'username': user.username, 'email': user.email}}, status=200)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)



@csrf_exempt 
def submit_review(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            car_id = data.get('car_id')
            car_type = data.get('car_type')
            rating = data.get('rating')
            description = data.get('description')

           
            if not car_id or not car_type or not rating or not description:
                return JsonResponse({'error': 'Missing required fields.'}, status=400)

           
            if car_type == 'featured':
                car = get_object_or_404(models.FeaturedCar, id=car_id)
                review = models.FeaturedCarReview.objects.create(
                    featured_car=car,
                    rating=rating,
                    description=description
                )
            elif car_type == 'popular':
                car = get_object_or_404(models.PopularCar, id=car_id)
                review = models.PopularCarReview.objects.create(
                    popular_car=car,
                    rating=rating,
                    description=description
                )
            else:
                return JsonResponse({'error': 'Invalid car type.'}, status=400)

            return JsonResponse({'message': 'Review submitted successfully.'})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)