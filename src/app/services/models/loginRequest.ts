export class LoginRequest{
    name: string;
    password: string;

    constructor(inputName: string, inputPassword: string){
        this.name = inputName;
        this.password = inputPassword;
    }
}