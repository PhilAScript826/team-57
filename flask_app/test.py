import os
import json
json_array = []
path = '../../team-57'
for file in os.listdir(path):
    if file.endswith('.json'):
        print("This is the file:", file)
        print(os.path.join(path,file))
        j = json.load(open(os.path.join(path,file)))
        print(j)
        json_array.append(j)