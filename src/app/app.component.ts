import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './components/dialogs/login-dialog/login-dialog.component';
import { AuthService } from './core/service/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Akiba plus';
  isSignedIn: boolean = false
  constructor(public dialog: MatDialog, private auth: AuthService) { }

  ngOnInit(): void {
    this.isSignedIn = this.auth.signedIn()
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent)
      .afterClosed().subscribe(() => {
        this.isSignedIn = this.auth.signedIn()
      })
  }

  logout() {
    this.auth.signOut()
    this.isSignedIn = this.auth.signedIn()
  }
}
