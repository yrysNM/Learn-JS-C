from pathlib import Path

files_dir_path = Path("files")
files_dir_path.mkdir(exist_ok=True)

with open(files_dir_path / "first.txt", 'w') as f:
    f.write("First line\n")
    f.write("Second line\n")

with open(files_dir_path / "second.txt", 'w') as f:
    lines = [
        'First line in the second file',
        "Second line in the second file",
        "Last line in the second file"
    ]
    # (f.write(line + "\n") for line in lines)
    for line in lines:
        f.write(line + "\n")
