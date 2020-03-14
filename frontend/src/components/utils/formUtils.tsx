export const handleInputChange = (
  event: React.FormEvent<HTMLInputElement>,
  formData: Object,
  setFormData: Function
) => {
  const target = event.currentTarget;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;
  if (!formData.hasOwnProperty(name)) {
    console.error(
      "handleInputChange in formUtils.sx tried to update a form element that was not in the form data object"
    );
  } else {
    setFormData({
      ...formData,
      [name]: value
    });
  }
};

export const toggleSubmitButton = (inputButtonId: string) => {
  const submitBtn = document.getElementById(inputButtonId) as HTMLInputElement;
  submitBtn.disabled = !submitBtn.disabled;
  if (submitBtn.disabled) {
    submitBtn.classList.add("disabled");
  } else {
    submitBtn.classList.remove("disabled");
  }
};

export const hideAllInputErrorMessages = (
  formInputFieldNames: Array<String>
) => {
  formInputFieldNames.forEach(fieldName => {
    const errorDisplayElement = document.getElementById(`${fieldName}-error`);
    if (errorDisplayElement !== null) {
      errorDisplayElement.classList.add("d-none");
    }
  });
};

export const displayInputErrorMessages = (
  faultyInputFieldNames: Array<String>
) => {
  faultyInputFieldNames.forEach(fieldName => {
    const errorDisplayElement = document.getElementById(`${fieldName}-error`);
    if (errorDisplayElement === null) {
      console.error(
        `The html element used to display an error for input field "${fieldName}" could not be found`
      );
    } else {
      errorDisplayElement.classList.remove("d-none");
    }
  });
};

export const displayServerErrorMessagesInErrorDiv = (
  errorDivId: string,
  errorData: Array<String>
) => {
  const responseErrorMessages = document.getElementById(
    errorDivId
  ) as HTMLElement;
  for (let errorKey in errorData) {
    responseErrorMessages.insertAdjacentHTML(
      "afterbegin",
      `<small class="text-danger form-text">${errorData[errorKey][0]}</small>`
    );
  }
};

export const displaySingleErrorMessageInErrorDiv = (
  errorDivId: string,
  error: String
) => {
  const responseErrorMessages = document.getElementById(
    errorDivId
  ) as HTMLElement;
  responseErrorMessages.insertAdjacentHTML(
    "afterbegin",
    `<small class="text-danger form-text">${error}</small>`
  );
};

export const resetForm = (formId: string) => {
  const form = document.getElementById(formId) as HTMLFormElement;
  Array.from(form.getElementsByTagName("input")).forEach(inputField => {
    if (inputField.type === "checkbox") {
      inputField.checked = false;
    } else {
      inputField.value = "";
    }
  });
};
