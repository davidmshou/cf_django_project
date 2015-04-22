from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Scott says hey there world! <br /><a href='/home/about'>About</a>")

def about(request):
    return HttpResponse("Scott says hey this is about me! <br /><a href='/home/'>Home</a>")
