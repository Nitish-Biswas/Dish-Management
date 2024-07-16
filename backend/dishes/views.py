# dishes/views.py

from rest_framework import decorators, response, status
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Dish
from .serializer import DishSerializer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from django.http import JsonResponse
@decorators.api_view(['GET'])
def get_dishes(request):
    dishes = Dish.objects.all()
    serializer = DishSerializer(dishes, many=True)
    return response.Response(serializer.data)

@decorators.api_view(['GET', 'POST'])
def toggle(request):
    if request.method == 'POST':
        
        dish_id = request.data.get('dishId')
        try:
            dish = Dish.objects.get(pk=dish_id)
            dish.isPublished = not dish.isPublished
            dish.save()

            channel_layer = get_channel_layer()
            async_to_sync(channel_layer.group_send)(
                'dishes',
                {   
                    'type': 'dish_update',
                    'data': DishSerializer(dish).data
                }
            )
            print(DishSerializer(dish).data)
            return HttpResponse(f'Dish status toggled. New status: {dish.isPublished}')
        except Dish.DoesNotExist:
            return HttpResponse('Dish not found', status=404)
    return render(request, 'to.html')

@decorators.api_view(['POST'])
def toggle_published(request):
    dish_id = request.data.get('dishId')
    dish = Dish.objects.get(dishId=dish_id)
    dish.isPublished = not dish.isPublished
    dish.save()
    return response.Response(DishSerializer(dish).data)