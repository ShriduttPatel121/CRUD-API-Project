export type SignupBodyType = {
    name: string;
    password: string;
}

export class InvalidPassword extends Error {
    constructor(message: string) {
        super(message);
        
        this.name = 'InvalidPassword';
    }
}