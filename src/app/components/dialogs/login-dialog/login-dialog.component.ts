import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatDialogTitle, MatDialogContent, MatDialog } from '@angular/material/dialog'
import { AuthService } from '../../../core/service/auth/auth.service';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';


@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, ReactiveFormsModule],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent {

  loginForm = new FormGroup({
    username: new FormControl('', { nonNullable: false }),
    password: new FormControl('', { nonNullable: false })
  })


  constructor(private auth: AuthService, private dialog: MatDialog) { }

  signIn() {
    this.auth.signIn(this.loginForm.value.username!, this.loginForm.value.password!)
  }

  openSignupDialog() {
    this.dialog.open(SignUpDialogComponent)
  }


}
