from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
import uuid
from Influencer.serializers import InfluencerSerializer
from Influencer.models import Influencer
from Backend.Authentication import encrypt_password,\
    makeToken,\
    check_encrypted_password

# Create your views here.
"""
request {
    email: string, 
    password: string, 
    firstName: string,
    lastName: string
}
"""
@api_view(['POST'])
def registerInfluencer(request):
    if request.method == 'POST':
        influencerData = JSONParser().parse(request)
        influencerData['user_id'] = str(uuid.uuid1())
        pwd = encrypt_password(influencerData['password'])
        influencerData['password'] = pwd
        serializedInfluencer = InfluencerSerializer(data=influencerData)
        if serializedInfluencer.is_valid():
            encodedToken = makeToken(influencerData['user_id'])
            serializedInfluencer.save()
            return JsonResponse({'success': True,
                                 'token': encodedToken,
                                 'influencer': serializedInfluencer.data
                                 }, status=status.HTTP_201_CREATED)
        return JsonResponse({'success': False,
                             'errors' : serializedInfluencer.errors
                            }, status= status.HTTP_400_BAD_REQUEST)

"""
request {
    email: string, 
    password: string, 
}
"""
@api_view(['POST'])
def loginInfluencer(request):
    if request.method == 'POST':
        influencerData = JSONParser().parse(request)
        try:
            influencer = Influencer.objects.get(email=influencerData['email'])
            verified = check_encrypted_password(
                influencerData['password'],
                influencer.password
            )
            if verified:
                encodedToken = makeToken(influencer.user_id)
                return JsonResponse({'success': True,
                                     'token' : encodedToken
                                     },
                                    status= status.HTTP_200_OK
                                    )
            else:
                return JsonResponse({
                    'success' : False,
                    'message': 'Email or password is invalid'
                },
                status= status.HTTP_406_NOT_ACCEPTABLE
                )
        except Influencer.DoesNotExist:
            return JsonResponse({
                'success' : False,
                'message': 'Email or password is invalid'
            },
            status=status.HTTP_406_NOT_ACCEPTABLE
            )