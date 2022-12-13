from django.db import models
from django.utils.translation import gettext_lazy as _

class User(models.Model):
    username = models.CharField(max_length=200, null=True)
    email = models.EmailField(unique=True, null=False)
    class role(models.TextChoices):
        MANAGER = "MG", _('Manager')
        CLIENT = "CL", _('Client')

    avatar = models.ImageField(null=True)