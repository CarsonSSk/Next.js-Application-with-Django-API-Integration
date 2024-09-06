from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('charts.urls')),  # This includes the URLs from the charts app
]
