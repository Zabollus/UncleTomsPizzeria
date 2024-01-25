from rest_framework import serializers
from api.models import Topping, Pizza


class ToppingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topping
        fields = ['id', 'name']


class PizzaSerializer(serializers.ModelSerializer):
    toppings = ToppingSerializer(read_only=True, many=True)
    toppings_id = serializers.PrimaryKeyRelatedField(queryset=Topping.objects.all(), write_only=True)

    class Meta:
        model = Pizza
        fields = ['id', 'name', 'toppings', 'toppings_id', 'price_small', 'price_medium', 'price_large']
