from django.shortcuts import render

def login(request):
    return render(request, "basePages/login.html")
