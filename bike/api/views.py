from rest_framework.decorators import api_view
from rest_framework.response import Response
from bike.models import Bike, User, Role, Rating, Reservation
from .serializers import BikeSerializer, UserSerializer
from bike.forms import MyUserCreationForm

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

@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUser(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user)
    return Response(serializer.data)

@api_view(['GET'])
def getUserForm(request):
    form = MyUserCreationForm()
    print('=+++', form)
    return Response(str(form))