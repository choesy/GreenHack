import requests
import json
from infobip_api_client.api_client import ApiClient, Configuration
from infobip_api_client.model.sms_advanced_textual_request import SmsAdvancedTextualRequest
from infobip_api_client.model.sms_destination import SmsDestination
from infobip_api_client.model.sms_response import SmsResponse
from infobip_api_client.model.sms_textual_message import SmsTextualMessage
from infobip_api_client.api.send_sms_api import SendSmsApi
from infobip_api_client.exceptions import ApiException

def sendEmail():
    BASE_URL = "https://gywkrr.api.infobip.com"
    API_KEY = "App f1679473885f48d0215cfab864a383c1-afb3a460-89f1-4c3a-83df-e246daea020b"

    SENDER_EMAIL = "choesy@selfserviceib.com"
    RECIPIENT_EMAIL = "alekshrastic@gmail.com"
    EMAIL_SUBJECT = "This is a sample email subject"
    EMAIL_TEXT = "This is a sample email message."

    formData = {
        "from": SENDER_EMAIL,
        "to": RECIPIENT_EMAIL,
        "subject": EMAIL_SUBJECT,
        "text": EMAIL_TEXT
    }

    all_headers = {
        "Authorization": API_KEY
    }

    response = requests.post(BASE_URL + "/email/2/send", files=formData, headers=all_headers)
    #print("Status Code: " + str(response.status_code))
    #print(response.json())

def getPath(line):
    response=requests.get("https://api.ontime.si/api/v1/lpp/route-shapes/?groups="+str(line),headers={'content-type':'application/json','X-CSRFToken':'SIXrNXvPfaWUWlrfCopl7DtwlwwU9sXzoKoxyJ6UDC3k1VoevWx2SEaFno6QgEpO'})
    data=json.loads(response.text)
    print(data)
    data={"points":[[float(dat["lat"]),float(dat["lng"])]for dat in data["results"][0]["trips"][0]["shape"]]}
    
    return data

def getBicycle():
    response=requests.get("https://api.ontime.si/api/v1/bicikelj/",headers={'content-type':'application/json','X-CSRFToken':'SIXrNXvPfaWUWlrfCopl7DtwlwwU9sXzoKoxyJ6UDC3k1VoevWx2SEaFno6QgEpO'})
    data=json.loads(response.text)
    data={"points":[[float(data["results"][i]["lat"]),float(data["results"][i]["lng"]),data["results"][i]["location_name"]]for i in range(len(data["results"]))]}
    return data

def getAvant():
    response=requests.get("https://api.ontime.si/api/v1/avant2go/",headers={'content-type':'application/json','X-CSRFToken':'SIXrNXvPfaWUWlrfCopl7DtwlwwU9sXzoKoxyJ6UDC3k1VoevWx2SEaFno6QgEpO'})
    data=json.loads(response.text)
    data={"points":[[float(data["results"][i]["lat"]),float(data["results"][i]["lng"]),data["results"][i]["location_name"]]for i in range(len(data["results"]))]}
    return data
def sendSms():

    """
    * Send an sms message by using Infobip API.
    *
    * This example is already pre-populated with your account data:
    * 1. Your account Base URL
    * 2. Your account API key
    * 3. Your recipient phone number
    *
    * THIS CODE EXAMPLE IS READY BY DEFAULT. HIT RUN TO SEND THE MESSAGE!
    *
    * Send sms API reference: https://www.infobip.com/docs/api#channels/sms/send-sms-message
    * See Readme file for details.
    """

    BASE_URL = "https://gywkrr.api.infobip.com"
    API_KEY = "f1679473885f48d0215cfab864a383c1-afb3a460-89f1-4c3a-83df-e246daea020b"

    SENDER = "InfoSMS"
    RECIPIENT = "38651244632"
    MESSAGE_TEXT = "This is a sample message"

    client_config = Configuration(
            host= BASE_URL,
            api_key={"APIKeyHeader": API_KEY},
            api_key_prefix={"APIKeyHeader": "App"},
        )

    api_client = ApiClient(client_config)

    sms_request = SmsAdvancedTextualRequest(
            messages=[
                SmsTextualMessage(
                    destinations=[
                        SmsDestination(
                            to=RECIPIENT,
                        ),
                    ],
                    _from=SENDER,
                    text=MESSAGE_TEXT,
                )
            ])

    api_instance = SendSmsApi(api_client)

    try:
        api_response: SmsResponse = api_instance.send_sms_message(sms_advanced_textual_request=sms_request)
        print(api_response)
    except ApiException as ex:
        print("Error occurred while trying to send SMS message.")
        print(ex)
