from rest_framework.serializers import ModelSerializer
from bike.models import Bike, User, Reservation, Role, Rating

class BikeSerializer(ModelSerializer):
    class Meta:
        model = Bike
        fields = ['model', 'color', 'location', 'status', 'amount']

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'avatar', 'date_joined']