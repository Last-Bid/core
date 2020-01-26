from rest_framework.validators import ValidationError
from rest_framework.response import Response
# todo add decorators for nice api wrapping (error responses), permissions


def api_error_response(func):
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except ValidationError as e:
            raise e
        except Exception as e:
            return Response({
                "Success": False,
                "Error": str(e),
            }, status=500)
    return wrapper
