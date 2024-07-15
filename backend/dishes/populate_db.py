# dishes/populate_db.py

import os
import django
import sys
sys.path.append('/Users/nitish_biswas/Documents/GitHub/Virtual_env/Dish-Management/backend')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from dishes.models import Dish

data = [
    {
        "dishName": "Jeera Rice",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg",
        "isPublished": True
    },
    {
        "dishName": "Paneer Tikka",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg",
        "isPublished": True
    },
    {
        "dishName": "Rabdi",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg",
        "isPublished": True
    },
    {
        "dishName": "Chicken Biryani",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg",
        "isPublished": True
    },
    {
        "dishName": "Alfredo Pasta",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg",
        "isPublished": True
    }
]

for item in data:
    dish = Dish(**item)
    dish.save()
