from django.urls import path
from Influencer import views

urlpatterns = [
    path('registerInfluencer',views.registerInfluencer),
    path('loginInfluencer', views.loginInfluencer)
]