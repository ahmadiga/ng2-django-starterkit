from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from main import views

router = DefaultRouter(trailing_slash=False)
router.register(r'user', views.UserViewSet)
urlpatterns = [
    url(r'^', include(router.urls)),
]
