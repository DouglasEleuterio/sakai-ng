import {Component, OnInit} from '@angular/core';
import { first } from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../../../service/login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit{

    password!: string;
    username!: string;

    loginForm!: FormGroup;
    loading = false;
    submitted = false;
    error: any;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: LoginService
    ) {
        if (this.authenticationService.userValue) {
            this.router.navigate(["/"]);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ["", Validators.required],
            password: ["", Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.error = "";
        this.loading = true;
        this.authenticationService
            .login(this.f['username'].value, this.f['password'].value)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from route parameters or default to '/'
                    //TODO implementar
                    const returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
                    this.router.navigate([returnUrl]);
                },
                error: (err) => {
                    if (err) {
                        this.error = err;
                    }
                },
            });
    }

    private parseError(error: any) {
        return error === "INVALID_CREDENTIALS"
            ? "Nome de usuário ou senha inválido!"
            : error;
    }
}
