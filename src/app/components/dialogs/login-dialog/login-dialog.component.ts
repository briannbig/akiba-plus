import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogTitle, MatDialogContent } from '@angular/material/dialog'
import { AuthService } from '../../../core/service/auth/auth.service';


@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, ReactiveFormsModule],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent {


  constructor(private auth: AuthService) { }

  signIn() {
    this.auth.signIn("", "")
  }


}
