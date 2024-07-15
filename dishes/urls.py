# dishes/urls.py

from django.urls import path
from .views import get_dishes, toggle_published

urlpatterns = [
    path('dishes/', get_dishes, name='get_dishes'),
    path('dishes/toggle/', toggle_published, name='toggle_published'),
]
