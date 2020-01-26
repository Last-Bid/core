from django.urls import path, include
from rest_framework import routers
from .endpoints import ProductsEndpoint
from .views import *

router = routers.DefaultRouter()
router.register('products', ProductsEndpoint, 'products')

urlpatterns = [
    path('', include(router.urls))
]