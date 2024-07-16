from django.urls import path
from .consumers import DishConsumer

websocket_urlpatterns = [
    path('ws/dishes/', DishConsumer.as_asgi()),
]
