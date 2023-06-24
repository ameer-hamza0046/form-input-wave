const [emailLabel, passwordLabel] = document.querySelectorAll(".field > div")
const [emailInput, passwordInput] = document.querySelectorAll(".field > input")

const stringToSpanString = (txt) => {
    let str = "";
    [...txt].forEach(c => {
        str += `<span>${c}</span>`;
    })
    return str;
}

emailLabel.innerHTML = stringToSpanString(emailLabel.innerHTML);
passwordLabel.innerHTML = stringToSpanString(passwordLabel.innerHTML);

const emailLabelSpan = document.querySelectorAll(".email span");
const passwordLabelSpan = document.querySelectorAll(".password span");

emailInput.addEventListener("focusin", () => {
    let t = 0;
    emailLabelSpan.forEach(span => {
        setTimeout(() => {
            span.classList.add("focused");
        }, 0 + 100 * t);
        t++;
    })
})

emailInput.addEventListener("focusout", () => {
    let t = 0;
    emailLabelSpan.forEach(span => {
        setTimeout(() => {
            span.classList.remove("focused");
        }, 0 + 100 * t);
        t++;
    })
})

passwordInput.addEventListener("focusin", () => {
    let t = 0;
    passwordLabelSpan.forEach(span => {
        setTimeout(() => {
            span.classList.add("focused");
        }, 0 + 100 * t);
        t++;
    })
})

passwordInput.addEventListener("focusout", () => {
    let t = 0;
    passwordLabelSpan.forEach(span => {
        setTimeout(() => {
            span.classList.remove("focused");
        }, 0 + 100 * t);
        t++;
    })
})