import csv 

with open('test.csv', 'w') as csv_file: 
    writer = csv.writer(csv_file)
    writer.writerow(['user_id', "user_name", "user_age"])
    writer.writerow([234, 'alice',  1234])
    writer.writerow([232344, 'bob',  12])
    writer.writerow([232344, 'anna',  14])

with open("test.csv") as csv_file: 
    reader = csv.reader(csv_file)
    for line in reader:
        print(line)

    print(reader.line_num)