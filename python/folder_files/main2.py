from pathlib import Path

files_dir_path = Path("files")
files_dir_path.mkdir(exist_ok=True)


first_file = Path(files_dir_path / 'first.txt')
second_file = Path(files_dir_path / 'second.txt')

with open(first_file, 'w') as f:
    f.write("First line\n")
    f.write("Second line\n")

with open(second_file, 'w') as f:
    lines = [
        'First line in the second file',
        "Second line in the second file",
        "Last line in the second file"
    ]
    # (f.write(line + "\n") for line in lines)
    for line in lines:
        f.write(line + "\n")


with open(first_file) as f: 
    print(f.read())
    
with open(second_file) as f: 
    print(f.readline());

first_file.unlink()
second_file.unlink()

files_dir_path.rmdir()