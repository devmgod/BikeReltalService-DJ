from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes),
    path('bikes/', views.getBikes),
    path('bikes/<str:pk>', views.getBike),
]
