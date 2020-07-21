from django.urls import path
from . import views

urlpatterns = [
    path('about', views.about),
    path('about/', views.about),
    path('about/michael', views.michael),
    path('about/michael/', views.michael),
    path('about/huzefa', views.huzefa),
    path('about/huzefa/', views.huzefa),
]
