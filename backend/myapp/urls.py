from django.urls import path
from .views import HelloWorldView
from . import views
urlpatterns=[
    path('api/sample/',HelloWorldView.as_view()),
    path('home/',views.home),
    path('api/featured-cars/',views.featured_cars,name='featured-cars'),
    path('api/popular-cars/',views.popular_cars,name='popular-cars'),
    path('api/upcoming-cars/',views.upcoming_cars,name='upcoming-cars'),
    path('api/cars/',views.car_list,name='car-list'),
    path('api/car-details/<str:car_name>/',views.cars_detail,name='car-details'),
    path('api/p-car-details/<str:car_name>/',views.p_car_details,name='p-car-details'),
    path('signup/',views.signup,name='signup'),
    path('login/',views.login,name='login'),
    path('review/',views.submit_review,name='review'),
]