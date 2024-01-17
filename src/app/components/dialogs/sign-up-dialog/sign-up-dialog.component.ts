import { Component } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MatDialog } from '@angular/material/dialog'
import { AuthService } from '../../../core/service/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignUpModel } from '../../../core/models/sign-up-model';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-sign-up-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, ReactiveFormsModule],
  templateUrl: './sign-up-dialog.component.html',
  styleUrl: './sign-up-dialog.component.css'
})
export class SignUpDialogComponent {

  signUpFrom = new FormGroup({
    username: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    fullName: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    passwordConfirm: new FormControl('', { nonNullable: true }),
  })

  response: string | undefined


  constructor(private auth: AuthService, private dialog: MatDialog) { }

  signUp() {

    this.auth.signUp({
      username: this.signUpFrom.value.username!,
      email: this.signUpFrom.value.email!,
      fullName: this.signUpFrom.value.fullName!,
      password: this.signUpFrom.value.password!,
      passwordConfirm: this.signUpFrom.value.passwordConfirm!,
      roles: [
        
      ]
    }).subscribe((res: any) => {
      if (res && res.id) {
        this.response = 'Account created successfully, please login'
      }
    })
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent)

  }

}
