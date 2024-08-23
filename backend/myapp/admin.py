from django.contrib import admin
from myapp.models import FeaturedCar,PopularCar,UppcomingCar
# Register your models here.
admin.site.register(FeaturedCar)
admin.site.register(PopularCar)
admin.site.register(UppcomingCar)
