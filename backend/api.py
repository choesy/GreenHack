from flask import Flask,render_template,redirect,request,jsonify
import functions
app = Flask(__name__,static_url_path='/static')

@app.route("/")
def index_page(): 
    return app.send_static_file('index.html')

@app.route("/getPath",methods=['GET'])
def getPath():
    line=request.args.get("line")
    if line is None:
        line=6
    response = jsonify(functions.getPath(line))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/getBicycles",methods=['GET'])
def getBicycle():
    response=jsonify(functions.getBicycle())
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/getAvant",methods=['GET'])
def getAvant():
    response=jsonify(functions.getAvant())
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
    
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
    app.run(debug=True,host='0.0.0.0',port='80')


#algoritem za detekcijo vožnje