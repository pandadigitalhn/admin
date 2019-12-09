import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AuxiliarService } from 'app/_auxiliar/auxiliar.service';
import { Login } from 'app/_models/Login.model';

@Component({
    selector: 'login-2',
    templateUrl: './login-2.component.html',
    styleUrls: ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class Login2Component implements OnInit {

    myLogin: Login = new Login();
    loginForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        public _auxiliar: AuxiliarService, public _router: Router
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', Validators.required]
        });
    }

    login() {
        this.myLogin.username = this.loginForm.controls.username.value;
        this.myLogin.password = this.loginForm.controls.password.value;
        
        this._auxiliar.validarLogin(this.myLogin).subscribe(result => {
            if (result.isValid) {
                sessionStorage.setItem('currentUser', JSON.stringify(this.myLogin));
                console.log("Entraste");
            }
        }, error => {
            console.log('Usuario ó Contraseña Incorrecto', error);
        })
    }
}
