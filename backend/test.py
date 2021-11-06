import requests
import json
response=requests.get("https://api.ontime.si/api/v1/lpp/route-shapes/?groups=3",headers={'content-type':'application/json','X-CSRFToken':'SIXrNXvPfaWUWlrfCopl7DtwlwwU9sXzoKoxyJ6UDC3k1VoevWx2SEaFno6QgEpO'})
data=json.loads(response.text)
data=data["results"][0]["trips"][1]["shape"]
print(data)
