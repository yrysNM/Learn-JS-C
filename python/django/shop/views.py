from django.shortcuts import render
from django.http import HttpResponse

from .models import Course, Category;


def index(request): 
    courses = Course.objects.all()
    # return HttpResponse(','.join([course.title for course in courses]))
    # return HttpResponse(''.join([str(course.title) + '<br />' for course in courses]))
    return HttpResponse(courses)