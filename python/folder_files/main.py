from ntpath import isfile
from pathlib import Path


def rm_directory_and_files(path: Path):
    for child in path.iterdir():
        if child.is_file():
            child.unlink()
        else:
            rm_directory_and_files(child)
    path.rmdir()


def read_file(path):
    with open(path) as txt_file:
        while True:
            line = txt_file.readline()
            if not line:
                break
            print(line)


dir_files = Path(f"files")
dir_files.mkdir(exist_ok=True)

first_file = Path(dir_files / "first.txt")
second_file = Path(dir_files / "second.txt")


with open(first_file, 'w') as f:
    f.write("Hello world\n")
    f.write("Hi\n")

with open(second_file, "w") as f:
    f.write("Rise to mountain\n")
    f.write("Go to first line")


read_file(first_file)
read_file(second_file)
rm_directory_and_files(dir_files)