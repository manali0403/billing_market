from django.urls import path
from .views import EmployeeUserAPI

urlpatterns = [
    path('register/', EmployeeUserAPI.as_view())
]