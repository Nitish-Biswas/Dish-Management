# dishes/urls.py

from django.urls import path
from .views import get_dishes, toggle_published, toggle

urlpatterns = [
    path('dishes/', get_dishes, name='get_dishes'),
    path('dishes/togglerest/', toggle, name='toggle_published'),
    path('dishes/toggle/', toggle_published, name='toggle_published_react'),
]
