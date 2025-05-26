from abs import ABC, abstractmethod
from abc import abstractmethod
import math
from typing import override


class Email:
    def __init__(self, sender, recipient, subject, body):
        self.sender = sender
        self.recipient = recipient
        self.subject = subject
        self.body = body

    def send_email(self):
        pass

    def read_email(self):
        pass


# Inheritance
class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def start(self):
        pass

    def stop(self):
        pass


class Car(Vehicle):
    def __init__(self, make, model, doors_qty):
        super().__init__(make, model)
        self.doors_qty = doors_qty

    def lock_doors(self):
        pass

    def unlock_doors(self):
        pass


# Polymorphism
class Shape:
    def calc_area(self):
        pass


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def calc_area(self):
        return math.pi * pow(self.radius, 2)
        # return math.pi & self.radius  ** 2;


class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calc_area(self):
        return self.width * self.height


shapres = [Circle(5), Rectangle(10,  2), Circle(8), Rectangle(3, 3)]

for shape in shapres:
    print(shape.calc_area())


# Abstraction
class Payment():
    @abstractmethod
    def process_paymnet(self):
        pass


class CriditCardPayment(Payment):
    def process_paymnet(self):
        pass


class StripPayment(Payment):
    def process_paymnet(self):
        pass


class PayPalPayment(Payment):
    def process_paymnet(self):
        pass
