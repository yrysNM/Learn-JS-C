var emailEl = document.getElementById("email"), titleEl = document.getElementById("title"), textEl = document.getElementById("text"), checkboxEl = document.querySelector("#checkbox"), submitFormEl = document.querySelectorAll("form");
var formData = {
    email: emailEl.value,
    title: titleEl.value,
    text: textEl.value,
    checkbox: checkboxEl.checked
};
function validateFormDate(data) {
    /**
     * This norrowing only works for 1 level deep objects
     * @import
     */
    if (Object.values(data).includes("") || !data.checkbox) {
        alert("Pease, complete all fields");
        return false;
    }
    else {
        return true;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "@example@ex.com", "admin@gmail.com"];
    if (emails.some(function (e) { return e === email; })) {
        alert("This is email is already exist");
    }
    else {
        console.log(data);
        alert("Posting data...");
    }
}
function handleSubmit() {
    var _a, _b, _c, _d;
    // Можно и создавать другой объект для соблюдения иммутабельности, но пока не обязательно
    formData = {
        email: (_a = emailEl === null || emailEl === void 0 ? void 0 : emailEl.value) !== null && _a !== void 0 ? _a : "",
        title: (_b = titleEl === null || titleEl === void 0 ? void 0 : titleEl.value) !== null && _b !== void 0 ? _b : "",
        text: (_c = textEl === null || textEl === void 0 ? void 0 : textEl.value) !== null && _c !== void 0 ? _c : "",
        checkbox: (_d = checkboxEl === null || checkboxEl === void 0 ? void 0 : checkboxEl.checked) !== null && _d !== void 0 ? _d : false
    };
    if (validateFormDate(formData)) {
        checkFormData(formData);
    }
}
submitFormEl.forEach(function (form) {
    return form.addEventListener("submit", function (e) {
        e.preventDefault();
        handleSubmit();
    });
});
