let messageErrors = "";
let submitButton = document.querySelector('.module_form button[type="submit"]');
let alreadySubmitted = false;

export function setUSPhoneNumber(element) {
    let number = element.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    element.value = !number[2] ? number[1] : '(' + number[1] + ') ' + number[2] + (number[3] ? '-' + number[3] : '');
}
export function setupUSPhoneNumber(element) {
    element.addEventListener('input', function () {
        setUSPhoneNumber(element);
    });
}

export function submitContactForm(element){
    let form = element;
    let status = document.querySelector(".module_form .module_messages");
    async function handleSubmit(e) {
        e.preventDefault();
        
        if(alreadySubmitted == false) {
            let errors;
            errors = validateLength(document.querySelector('.module_form input[name="name"]'),2);
            errors = validationPhone(document.querySelector('.module_form .input-us-format'));
            errors = validateEmailAccount(document.querySelector('.module_form input[name="email"]'));
            
            if(messageErrors == ""){
                let data = new FormData(e.target);
                submitButton.disabled = true;
                submitButton.innerHTML = "Sending...";
                fetch(e.target.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    },
                    signal: AbortSignal.timeout(3000) // Added just to abort if the request takes more than 3 seconds
                }).then(response => {
                    /*if (response.ok) {
                        
                    } else {
                        
                    }*/
                    successForm();
                }).catch(error => {
                    successForm();
                });
            }
        }
        else {
            status.innerHTML = "You already submit a form!";
        }
        
    }
    function successForm() {
        status.innerHTML = "Thanks for your submission!";
        status.classList.remove("module_messages--error");
        status.classList.add("module_messages--success");
        submitButton.innerHTML = "Submitted";
        form.reset();
        alreadySubmitted = true;
    }
    element.addEventListener("submit", handleSubmit)
}

export function showErrors() {
    let status = document.querySelector(".module_form .module_messages");
    if(messageErrors.length > 0) {
        status.innerHTML = 'The following errors must be corrected<br>' + messageErrors;
        status.classList.add("module_messages--error");
    }
    else {
        status.innerHTML = "";
    }
}

export function validateLength(element, length){
    let errorString = element.getAttribute('placeholder') + ' needs at least ' + length + ' characters.<br>';
    removeError(errorString, element);

    if(element.value.trim().length < length) {
        addError(errorString, element);
    }
    else {
        errorString = "";
    }
    showErrors();
    return errorString;
}

export function validationPhone(element) {
    let errorString = element.getAttribute('placeholder') + ' is required.<br>';
    removeError(errorString, element);
    if(element.value.trim().length == 0) {
        addError(errorString, element);
    }
    else {
        errorString = 'Please review your ' + element.getAttribute('placeholder') + ' format/length.<br>';
        
        removeError(errorString, element);
        if (element.value.trim().length < 14 || !/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(element.value)) {
            addError(errorString, element);
        }
        else {
            errorString = "";
        }
    }
    showErrors();
    return errorString;
}

export function validateEmailAccount(element){
    let errorString = element.getAttribute('placeholder') + ' is required.<br>';
    removeError(errorString, element);
    if(element.value.trim().length == 0) {
            addError(errorString, element);
    }
    else {
        errorString = 'Incorrect ' + element.getAttribute('placeholder') + ' format.<br>';
        removeError(errorString, element);
        if (!/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@+([_a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]{2,200}\.[a-zA-Z]{2,6}$/.test(element.value.trim())) {
            addError(errorString, element);
        }
        else {
            errorString = "";
        }
    }
    showErrors();
    return errorString;
}

export function addError(errorString, element) {
    messageErrors += errorString;
    element.classList.add("input--error");
}

export function removeError(errorString, element) {
    let status = document.querySelector(".module_form .module_messages");
    messageErrors = messageErrors.replace(errorString, "");
    status.innerHTML = status.innerHTML.replace(errorString, "");
    element.classList.remove("input--error");
}