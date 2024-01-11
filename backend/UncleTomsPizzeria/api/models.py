from django.db import models


class Topping(models.Model):
    name = models.CharField(max_length=32, verbose_name='Nazwa')

    def __str__(self):
        return self.name


class Pizza(models.Model):
    name = models.CharField(max_length=32, verbose_name='Nazwa')
    toppings = models.ManyToManyField(Topping)
    price_small = models.DecimalField(max_digits=5, decimal_places=2, verbose_name='Cena mała')
    price_medium = models.DecimalField(max_digits=5, decimal_places=2, verbose_name='Cena średnia')
    price_large = models.DecimalField(max_digits=5, decimal_places=2, verbose_name='Cena duża')