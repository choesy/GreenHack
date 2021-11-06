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
    print(request.args.get('user'))
    functions.sendEmail()
    return "0"

@app.route("/sendSms",methods=['GET'])
def sendSms():
    print(request.args.get('user'))
    functions.sendSms()
    return "0"

if __name__ == '__main__':
    app.run(debug=True)


#algoritem za detekcijo vožnje