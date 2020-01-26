from django.db import models
from user.models import User


# Create your models here.
class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    url = models.URLField()
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)


class Transaction(models.Model):
    transaction_id = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    # def delete(self):
