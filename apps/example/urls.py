from django.urls import path, include
from rest_framework import routers
from apps.example import views

router = routers.DefaultRouter()
router.register(r'ejemplo', views.EjemploView, 'ejemplo')

urlpatterns = [
    path('', views.render_template_base),
    # path('api/get_all_example', views.get_all_ejemplos, name='get_all_ejemplos'),
    path('api/', include(router.urls)),
]