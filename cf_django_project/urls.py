from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^home/', include('cf_django_app.urls')),  # SS: Home page for app.
    url(r'^admin/', include(admin.site.urls)),
)

# SS: (Not working) Attempting to serve static files in production environment
if not settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_PATH)
