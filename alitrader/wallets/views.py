from django.shortcuts import render

from django.http import HttpResponse, HttpResponseRedirect




def index(request):
    return HttpResponse("<h1>hello</h1>")


def inspectWallet(request):
    return render(request, "wallets/inspectWallet.html")

def findWallet(request):
    if request.method == 'GET':

        return render(request, "wallets/findWallets.html", {'walletData': [], 'min':0, 'max':1})


