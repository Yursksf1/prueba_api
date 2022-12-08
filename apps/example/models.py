from django.db import models
from django.utils.timezone import now

# Create your models here.
class EjemploModel(models.Model):

    campo = models.CharField(
        max_length=20
    )
    
    created_date = models.DateTimeField(default=now, editable=False)
