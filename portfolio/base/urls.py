from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('/', views.home),
    path('about', views.about),
    path('about/', views.about),
    path('about/michael', views.michael),
    path('about/michael/', views.michael),
    path('about/huzefa', views.huzefa),
    path('about/huzefa/', views.huzefa),
]
