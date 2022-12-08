
from rest_framework import serializers
from apps.example.models import EjemploModel


class EjemploModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = EjemploModel
        fields = ('id', 'campo', 'created_date')


