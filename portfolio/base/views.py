from django.shortcuts import render


# Create your views here.
def about(request):
    return render(request, 'base/choice.html')


def michael(request):
    return render(request, 'base/michael.html')


def huzefa(request):
    return render(request, 'base/huzefa.html')
