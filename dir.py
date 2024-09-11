import os
import json

def generate_dir_structure(path):
    result = {}
    for item in os.listdir(path):
        if item in ['.git', '.vscode']:
            continue
        item_path = os.path.join(path, item)
        if os.path.isdir(item_path):
            result[item] = generate_dir_structure(item_path)
        else:
            result[item] = None
    return result

current_directory = os.getcwd()
dir_structure = generate_dir_structure(current_directory)

json_structure = json.dumps(dir_structure, indent=2)
print(json_structure)

with open("./filesystem.json", "w") as f:
    f.write(json_structure)
