from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import EmployeeUserSerializer
from .models import EmployeeUser
from django.conf import settings
from django.core.mail import send_mail
from rest_framework_simplejwt.authentication import JWTAuthentication
from .permissions import EmployeeRegistrationPermissions

class EmployeeUserAPI(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [EmployeeRegistrationPermissions]

    def post(self, request):
        serializer = EmployeeUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            first_name = serializer.data.get('first_name')
            email = serializer.data.get('email')

            subject = 'User Registration Mail'
            message = f'Congratulation {first_name}!!,\n'\
                        'you are successfully registerd for Billing Market app!'
            email_form = settings.EMAIL_HOST_USER
            recipient_list = [email]
            send_mail(subject, message, email_form, recipient_list)
            return Response(data=serializer.data, status=201)
        return Response(data=serializer.errors,status=400)
