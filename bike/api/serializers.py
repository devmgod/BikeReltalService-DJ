from rest_framework.serializers import ModelSerializer
from bike.models import Bike

class BikeSerializer(ModelSerializer):
    class Meta:
        model = Bike
        fields = '__all__'