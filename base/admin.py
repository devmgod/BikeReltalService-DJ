from django.contrib import admin

# Register your models here.

from .models import Bike, Rating, Reservation, User, Role

admin.site.register(User)
admin.site.register(Bike)
admin.site.register(Rating)
admin.site.register(Reservation)
admin.site.register(Role)