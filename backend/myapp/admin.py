from django.contrib import admin
from myapp.models import FeaturedCar,PopularCar,UppcomingCar,Car,User,PopularCarReview,FeaturedCarReview
# Register your models here.
admin.site.register(FeaturedCar)
admin.site.register(PopularCar)
admin.site.register(UppcomingCar)
admin.site.register(Car)
admin.site.register(User)
admin.site.register(FeaturedCarReview)
admin.site.register(PopularCarReview)
