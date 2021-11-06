from flask import Flask,render_template,redirect,request
import functions
app = Flask(__name__)

@app.route("/")
def index_page(): 
    return render_template("base.html")

@app.route("/getPath",methods=['GET'])
def getPath():
    data=functions.getPath()
    return data

@app.route("/getBicycles",methods=['GET'])
def getBicycle():
    data=functions.getBicycle()
    return data

    
#pošlji maile prek infobip
@app.route("/sendEmail",methods=['GET'])
def sendEmail():
    functions.sendEmail(print(request.args.get('recipient')))
    return "0"

@app.route("/sendSms",methods=['GET'])
def sendSms():
    functions.sendSms(request.args.get('num'))
    return "0"

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port='80')


#algoritem za detekcijo vožnje