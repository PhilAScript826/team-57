from flask import Flask, render_template
import os 
import json

app = Flask(__name__)             # create an app instance

@app.route("/")
def home():
    json_array = []
    path = '../../team-57'
    for file in os.listdir(path):
        if file.endswith('.json'):
            j = json.load(open(os.path.join(path,file)))['data']
            
            json_array.append(j)
    
    print(len(json_array))
    return render_template('index.html', json_array=json_array)
    
    
if __name__ == "__main__":        # on running python app.py  
    app.run(debug=True)                     # run the flask app