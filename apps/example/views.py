from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EjemploModelSerializer

from apps.example.models import EjemploModel
# Create your views here.


def render_template_base(request):
    context = {
        'ejemplo': [],
    }
    return render(
        request,
        'template_base.html',
        context
    )


class EjemploView(viewsets.ModelViewSet):
    serializer_class = EjemploModelSerializer
    queryset = EjemploModel.objects.all()