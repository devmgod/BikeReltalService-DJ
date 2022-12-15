from rest_framework.serializers import ModelSerializer
from bike.models import Bike

class BikeSerializer(ModelSerializer):
    class Meta:
        model = Bike
        fields = ['model', 'color', 'location', 'status', 'amount']