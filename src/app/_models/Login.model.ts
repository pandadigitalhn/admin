export class Login {
    username: string;
    password: string;
    isValid: boolean;
    accessToken: string;
    message: string;
    userCategoryId: string;

    constructor() {
        this.username = '';
        this.password = '';
        this.isValid = false;
        this.accessToken = '';
        this.message = '';
        this.userCategoryId = '';
    }
}