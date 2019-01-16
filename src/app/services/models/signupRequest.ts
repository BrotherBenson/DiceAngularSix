export class SignupRequest{
    name: string;
    password: string;
    passwordConfirmation: string;

    constructor(inputName: string, inputPassword: string, inputConfirmPassword: string){
        this.name = inputName;
        this.password = inputPassword;
        this.passwordConfirmation = inputConfirmPassword;
    }
}