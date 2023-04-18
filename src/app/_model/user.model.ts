import {AuthoritieModel} from "./authoritie.model";

export class UserModel{
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    token?: string;
    email?: string

    authorities: AuthoritieModel[] | undefined
}
