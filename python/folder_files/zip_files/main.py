from zipfile import ZipFile
from pathlib import Path

with ZipFile("my_files.zip", mode="w") as my_zip_file:
    my_zip_file.extractall("my_files_second") 
    for file in Path("files").iterdir(): 
        print(file)
        my_zip_file.write(file)