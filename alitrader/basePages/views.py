from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect


def index(request):
    return render(request, "basePages/home.html")

def signUp(request):
    pass

def login(request):
    return render(request, "basePages/login.html")


def a(request):
    return render(request, "basePages/a.html")


