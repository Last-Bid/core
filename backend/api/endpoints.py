from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet, ViewSet

from api.decorators import api_error_response
from api.models import Product
from api.serializers import ProductSerializer


class ProductsEndpoint(ReadOnlyModelViewSet):
    """
    ReadOnly will automatically generate list and details views for us
    """
    serializer_class = ProductSerializer
    queryset = Product.objects.all().order_by('pk')

    @api_error_response
    def create(self, request):
        """
        Equivalent of a Post command at the ProductsEndpoint
        :param request:
        :return:
        """
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data
        return ValueError

