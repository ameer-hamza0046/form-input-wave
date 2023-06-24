const [emailLabel, passwordLabel] = document.querySelectorAll(".field > div");
const [emailInput, passwordInput] = document.querySelectorAll(".field > input");

const stringToSpanString = (txt) => {
  let str = "";
  [...txt].forEach((c) => {
    str += `<span>${c}</span>`;
  });
  return str;
};

emailLabel.innerHTML = stringToSpanString(emailLabel.innerHTML);
passwordLabel.innerHTML = stringToSpanString(passwordLabel.innerHTML);

const emailLabelSpan = document.querySelectorAll(".email span");
const passwordLabelSpan = document.querySelectorAll(".password span");

const delay = 40;

emailInput.addEventListener("focusin", () => {
  let t = 0;
  emailLabelSpan.forEach((span) => {
    setTimeout(() => {
      span.classList.add("focused");
    }, 0 + delay * t);
    t++;
  });
});

emailInput.addEventListener("focusout", () => {
  if (emailInput.value !== "") {
    return;
  }
  let t = 0;
  emailLabelSpan.forEach((span) => {
    setTimeout(() => {
      span.classList.remove("focused");
    }, delay * t);
    t++;
  });
});

passwordInput.addEventListener("focusin", () => {
  let t = 0;
  passwordLabelSpan.forEach((span) => {
    setTimeout(() => {
      span.classList.add("focused");
    }, delay * t);
    t++;
  });
});

passwordInput.addEventListener("focusout", () => {
  if (passwordInput.value !== "") {
    return;
  }
  let t = 0;
  passwordLabelSpan.forEach((span) => {
    setTimeout(() => {
      span.classList.remove("focused");
    }, delay * t);
    t++;
  });
});
