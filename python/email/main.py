from email.message import EmailMessage
import smtplib
from pathlib import Path
from string import Template


my_email = EmailMessage()
html_template = Template(Path("templates/index.html").read_text())
html_content = html_template.substitute({"name": "Yrys ", 'date': "tommorow"})

my_email['from'] = "Yrysbek"
my_email["to"] = 'test@gmail.com'   
my_email['subject'] = "Test html template"
# my_email.set_content("Hello world")
my_email.set_content(html_content, 'html')

with smtplib.SMTP(host="localhost", port=2525) as smtp_server:
    smtp_server.ehlo()
    # smtp_server.starttls()
    # smtp_server.login("username", "password")
    smtp_server.send_message(my_email)
    print("Email was send! ")