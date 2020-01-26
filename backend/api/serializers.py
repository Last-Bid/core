from rest_framework import serializers
from api.models import Product


class ProductSerializer(serializers.Serializer):
    class Meta:
        model = Product
        fields = '__all__'
