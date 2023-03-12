const emailEl = document.getElementById("email") as HTMLInputElement,
  titleEl = document.getElementById("title") as HTMLInputElement,
  textEl = document.getElementById("text") as HTMLTextAreaElement,
  checkboxEl = document.querySelector("#checkbox") as HTMLInputElement,
  submitFormEl = document.querySelectorAll("form");

interface IFormData {
  email: string;
  title: string;
  text: string;
  checkbox: boolean;
}

let formData = {
  email: emailEl.value,
  title: titleEl.value,
  text: textEl.value,
  checkbox: checkboxEl.checked,
};

function validateFormDate(data: IFormData): data is IFormData {
  /**
   * This norrowing only works for 1 level deep objects
   * @import
   */
  if (Object.values(data).includes("") || !data.checkbox) {
    alert("Pease, complete all fields");
    return false;
  } else {
    return true;
  }
}

function checkFormData(data: IFormData): void {
  const { email } = data;
  const emails = ["example@gmail.com", "@example@ex.com", "admin@gmail.com"];

  if (emails.some((e) => e === email)) {
    alert("This is email is already exist");
  } else {
    console.log(data);

    alert("Posting data...");
  }
}

function handleSubmit() {
  // Можно и создавать другой объект для соблюдения иммутабельности, но пока не обязательно
  formData = {
    email: emailEl?.value ?? "",
    title: titleEl?.value ?? "",
    text: textEl?.value ?? "",
    checkbox: checkboxEl?.checked ?? false,
  };
  if (validateFormDate(formData)) {
    checkFormData(formData);
  }
}

submitFormEl.forEach((form) =>
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmit();
  })
);
