import os
import json

directory = "./A/System64/Images/Icons/"
icon_paths = {}
icon_sizes = {"512x512", "256x256", "128x128", "64x64", "48x48", "32x32", "16x16"}

for filename in os.listdir(directory):
    if any(size in filename for size in icon_sizes):
        # Extract the image name without the size and extension
        image_name = os.path.splitext(filename)[0]

        # Remove the size from the image name
        for size in icon_sizes:
            image_name = image_name.replace(f"-{size}", "")

        # Construct the full path to the image
        image_path = os.path.join(directory, filename)

        # Add the image to the icon_paths dictionary
        if image_name not in icon_paths:
            icon_paths[image_name] = {}

        # Add the image path for the respective size
        for size in icon_sizes:
            if f"{size}" in filename:
                icon_paths[image_name][size.split("x")[0]] = image_path

# Output the dictionary
with open("./A/System64/Images/Icons.json", "w") as json_file:
    json.dump(icon_paths, json_file, indent=4)