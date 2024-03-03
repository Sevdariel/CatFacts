import { FormControl } from '@angular/forms';

export interface ICatFact {
    data: Array<string>;
}

export interface ILoginForm {
    login: FormControl;
    password: FormControl;
}
