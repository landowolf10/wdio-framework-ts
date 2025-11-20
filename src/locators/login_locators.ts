class LoginLocators {
    get homeOption () {
        return $("~Home");
    }

    get loginOption () {
        return $("~Login");
    }

    get inputUsername () {
        return $("~input-email");
    }

    get inputPassword () {
        return $("~input-password");
    }

    get submitButton () {
        return $("~button-LOGIN");
    }

    get modalWindowLogin () {
        return $("//*[@text='You are logged in!' or @label='You are logged in!']");
    }

    get wrongElement () {
        return $("//*[@text='wrong']");
    }
}

export default LoginLocators;