from ntpath import isfile
from pathlib import Path


def rm_directory_and_files(path: Path):
    for child in path.iterdir():
        if child.is_file():
            child.unlink()
        else:
            rm_directory_and_files(child)
    path.rmdir()


def ReadFiles(path):
    with open(f"{curr_path}/{path}") as txt_file:
        while True:
            line = txt_file.readline()
            if not line:
                break
            print(line)


curr_path = "./python/folder_files"
dir_files = Path(f"{curr_path}/files")

if dir_files.exists():
    rm_directory_and_files(dir_files)

dir_files.mkdir()


with open(f"{curr_path}/files/first.txt", 'w') as first_file:
    first_file.write("Hello world\n")
    first_file.write("Hi\n")

with open(f"{curr_path}/files/second.txt", "w") as second_file:
    second_file.write("Rise to mountain\n")
    second_file.write("Go to first line")


ReadFiles("files/first.txt")
ReadFiles("files/second.txt")
