from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf.urls import url

urlpatterns = [
    path('api/', include('rest_framework.urls')),
    path('api/rest-auth/', include('rest_auth.urls')),
    path('api/rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api/real-admin/', admin.site.urls),

    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),

    url(r'^', include('django.contrib.auth.urls')),
    path('accounts/', include('allauth.urls')),
]
