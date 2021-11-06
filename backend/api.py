from flask import Flask,render_template,redirect
import requests
import json

app = Flask(__name__)

@app.route("/")
def index_page(): 
    return render_template("base.html")

@app.route("/getPath",methods=['GET'])
def getPath():
    response=requests.get("https://api.ontime.si/api/v1/lpp/route-shapes/?groups=3",headers={'content-type':'application/json','X-CSRFToken':'SIXrNXvPfaWUWlrfCopl7DtwlwwU9sXzoKoxyJ6UDC3k1VoevWx2SEaFno6QgEpO'})
    data=json.loads(response.text)
    data=str(data["results"][0]["trips"][0]["shape"])
    return data

if __name__ == '__main__':
    app.run(debug=True)

#pošlji maile prek infobip
#algoritem za detekcijo vožnje