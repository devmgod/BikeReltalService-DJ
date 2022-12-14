from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(unique=True, null=False)
    class role(models.TextChoices):
        MANAGER = "MG", _('Manager')
        CLIENT = "CL", _('Client')

    avatar = models.ImageField(null=True, default='avatar.svg')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

class Bike(models.Model):
    model = models.CharField(max_length=200, null=False)
    color = models.CharField(max_length=200, null=True)
    location = models.CharField(max_length=200, null=True)
    
    status = models.BooleanField(default=False)

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.model

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    bike = models.ForeignKey(Bike, on_delete=models.CASCADE)
    rate = models.FloatField(max_length=5, null=False)

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.rate

class Reservation(models.Model):
    host = models.ForeignKey(User, on_delete=models.CASCADE)
    model = models.ForeignKey(Bike, on_delete=models.CASCADE)
    amount = models.IntegerField(max_length=200, null=False)

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.amount