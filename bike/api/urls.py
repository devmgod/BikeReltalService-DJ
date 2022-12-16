from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes),
    path('bikes/', views.getBikes),
    path('bikes/<str:pk>', views.getBike),
    path('users/', views.getUsers),
    path('users/<str:pk>', views.getUser),
    path('get-user-form/', views.getUserForm)
]
