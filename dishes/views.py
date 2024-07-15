# dishes/views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Dish
from .Serializers import DishSerializer

@api_view(['GET'])
def get_dishes(request):
    dishes = Dish.objects.all()
    serializer = DishSerializer(dishes, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def toggle_published(request):
    dish_id = request.data.get('dishId')
    dish = Dish.objects.get(dishId=dish_id)
    dish.isPublished = not dish.isPublished
    dish.save()
    return Response(DishSerializer(dish).data)
