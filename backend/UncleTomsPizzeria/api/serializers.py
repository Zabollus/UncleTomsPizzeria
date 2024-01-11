from rest_framework import serializers
from api.models import Topping, Pizza


class ToppingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topping
        fields = ['id', 'name']


class PizzaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pizza
        fields = ['id', 'name', 'toppings', 'price_small', 'price_medium', 'price_large']
