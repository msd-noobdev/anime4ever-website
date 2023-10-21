const validateInput = (input, regx, errorText) => {
  let regexResult = regx.test(input.value);
  if (regexResult) {
    errorText.classList.add("d-none");
    return true;
  } else {
    errorText.classList.remove("d-none");
    return false;
  }
};

export { validateInput };
