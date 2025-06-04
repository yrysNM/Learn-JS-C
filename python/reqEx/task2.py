import re


def check_password(password: str): 
    length_pattern = re.compile(r"^.*\S{8,}+.*$")
    lowercase_pattern = re.compile(r"^.*[a-z]+.*$")
    uppercase_pattern = re.compile(r"^.*[A-Z]+.*$")
    number_pattern = re.compile(r"^.*[0-9]+.*$")
    special_symbol_pattern = re.compile(r"^.*[@%#!&*^]+.*$")
    no_whitespace_pattern = re.compile(r"^\S*$")

    if not re.fullmatch(no_whitespace_pattern, password): 
        return (False, "No whitespaces allowed in the password")
    
    if not re.fullmatch(length_pattern, password): 
        return (False, "Password  must have at least 8 character")

    if not re.fullmatch(lowercase_pattern, password): 
        return (False, "Password must have at least one lowercase letter")
    
    if not re.fullmatch(uppercase_pattern, password):
        return (False, "Password must have at least one uppercase letter")
    
    if not re.fullmatch(number_pattern, password): 
        return (False, "Password must have at least one number")
    
    if not re.fullmatch(special_symbol_pattern, password): 
        return (False, "Password must have at least on special symbol @%#!&*^")
    
