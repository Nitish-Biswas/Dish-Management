# dishes/urls.py

from django.urls import path
from .views import get_dishes, toggle_published, togglere_published

urlpatterns = [
    path('dishes/', get_dishes, name='get_dishes'),
    path('dishes/toggle/', toggle_published, name='toggle_published'),
    path('dishes/togglere/', togglere_published, name='toggle_published_react'),
]
