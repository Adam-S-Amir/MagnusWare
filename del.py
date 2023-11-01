# import os

# # Function to delete all .md files
# def delete_md_files(root_dir):
#     for foldername, subfolders, filenames in os.walk(root_dir):
#         for filename in filenames:
#             if filename.endswith('.gitrepo'):
#                 file_path = os.path.join(foldername, filename)
#                 os.remove(file_path)
#                 print(f"Deleted: {file_path}")

# # Specify the root directory where you want to delete .md files
# root_directory = './'

# delete_md_files(root_directory)

import os

# Function to delete specific folders
def delete_folders(root_dir, folder_names):
    for foldername, subfolders, filenames in os.walk(root_dir):
        for subfolder in list(subfolders):
            if subfolder in folder_names:
                folder_path = os.path.join(foldername, subfolder)
                for root, dirs, files in os.walk(folder_path):
                    for file in files:
                        file_path = os.path.join(root, file)
                        os.remove(file_path)
                        print(f"Deleted file: {file_path}")
                os.rmdir(folder_path)
                print(f"Deleted folder: {folder_path}")

# Specify the root directory and folder names to delete
root_directory = './'  # Change this to the directory where you want to delete folders
folders_to_delete = [".vscode", ".github"]  # Add folder names you want to delete

delete_folders(root_directory, folders_to_delete)
