import Page from './Page';

class LoginPage extends Page {
    get email() {
        return $('')
    }

    get password() {
        return $('')
    }

    get loginButton() {
        return $('')
    }

    get forgotPasswordButton() {
        return $('')
    }

    get courseRegistrationButton() {
        return $('')
    }

    open() {
        browser.url('https://sandbox-engage.igolf.com/sign-in');
    }

    login() {
        this.loginButton.click();
    }
}

export default new LoginPage();