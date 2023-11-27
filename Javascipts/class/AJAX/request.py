import requests


request = "https://64145bef36020cecfda6550f.mockapi.io/person"
response = requests.get(request).json()
print(response)