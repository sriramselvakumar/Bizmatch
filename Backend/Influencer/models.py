from django.db import models
from django.core.validators import MinLengthValidator
# Create your models here.

class Influencer(models.Model):
    user_id = models.CharField(unique=True, max_length=90,blank=False, default='')
    firstName = models.CharField(max_length=90,validators=[MinLengthValidator(1)])
    lastName = models.CharField(max_length=90,validators=[MinLengthValidator(1)])
    email = models.CharField(max_length=90,unique=True,validators=[MinLengthValidator(5)])
    password = models.CharField(max_length=90, validators=[MinLengthValidator(9)])

