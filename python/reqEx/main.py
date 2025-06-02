import re 

def check_email(email: str): 
    email_regexp = r"^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$"
    email_check_pattern = re.compile(email_regexp); 
    validation_result = "valid" if email_check_pattern.fullmatch(email) else 'not valid'; 
    return (email, validation_result);


print(check_email("test#gmail.com"))
print(check_email("test2@geemail.sub.com"))
print(check_email("student#gmail.edu.sfu.com"))
print(check_email("student2@edu.sgu.com"))
