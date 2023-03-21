"use strict";
class UserForm {
    login;
    password;
    valid = false;
    token;
    isValid(login) {
        return login.length > 3;
    }
}
// new UserForm().token
