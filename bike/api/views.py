from rest_framework.decorators import api_view
from rest_framework.response import Response
from bike.models import Bike
from .serializers import BikeSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /api',
        'GET /api/bikes',
        'GET /api/rooms/:id',
    ]
    return Response(routes)

@api_view(['GET'])
def getBikes(request):
    bikes = Bike.objects.all()
    serializer = BikeSerializer(bikes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getBike(request, pk):
    bike = Bike.objects.get(id=pk)
    serializer = BikeSerializer(bike)
    return Response(serializer.data)