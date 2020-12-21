import jwt
from Backend.Config import environmentVariables, pwd_context

def encrypt_password(password):
    return pwd_context.encrypt(password)


def check_encrypted_password(password, hashed):
    return pwd_context.verify(password, hashed)

def returnPayload(stringToken):
    byteToken = stringToken.encode()
    byteToken = byteToken[2:len(byteToken)-1]
    return jwt.decode(byteToken, 'secret')

def makeToken(user_id):
    payload = {
        'user_id' : user_id
    }
    encodedToken = str(jwt.encode(
        payload,
        environmentVariables['jwtSecret'],
        algorithm='HS256'))
    return encodedToken