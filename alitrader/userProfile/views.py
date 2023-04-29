from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect


def profile(request):
    return render(request, "userProfiles/userProfile.html")

def index(request):
    return HttpResponse("<h1>hello</h1>")

def login(request):
    return render(request, "basePages/login.html")


def a(request):
    return render(request, "basePages/a.html")






