from rest_framework import serializers
from Influencer.models import Influencer

class InfluencerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Influencer
        fields = ('id',
                  'user_id',
                  'firstName',
                  'lastName',
                  'email',
                  'password')