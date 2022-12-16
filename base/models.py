from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MaxValueValidator, MinValueValidator



class Role(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
class User(AbstractUser):
    name = models.CharField(max_length=200, null=False)
    email = models.EmailField(unique=True, null=False)

    avatar = models.ImageField(null=True, default='avatar.svg')
    role = models.ManyToManyField(Role, related_name='position', blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

class Bike(models.Model):
    model = models.CharField(max_length=200, null=False)
    color = models.CharField(max_length=200, null=True)
    location = models.CharField(max_length=200, null=True)
    
    status = models.BooleanField(default=False)

    amount = models.IntegerField(null=True)

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.model

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    bike = models.ForeignKey(Bike, on_delete=models.SET_NULL, null=True)
    rate = models.FloatField(
        # default=5,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __float__(self):
        return self.rate

class Reservation(models.Model):
    host = models.ForeignKey(User, on_delete=models.CASCADE)
    bike_model = models.ForeignKey(Bike, on_delete=models.SET_NULL, null=True)
    amount = models.IntegerField(null=False)

    start_date = models.DateField(auto_now=False, auto_now_add=False)
    end_date = models.DateField(auto_now=False, auto_now_add=False)

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __int__(self):
        return self.amount