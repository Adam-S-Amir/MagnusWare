import os

# Function to delete all .md files
def delete_md_files(root_dir):
    for foldername, subfolders, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.gitrepo'):
                file_path = os.path.join(foldername, filename)
                os.remove(file_path)
                print(f"Deleted: {file_path}")

# Specify the root directory where you want to delete .md files
root_directory = './'

delete_md_files(root_directory)
