import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../auth-form.component';
import { inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '@ecommerce/auth-data-acess';
import { Router } from '@angular/router';
@Component({
  selector: 'lib-auth-form-password',
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
})
export class AuthFormPasswordComponent {
  control = inject(AuthFormComponent).form.controls.password;
  emailValue = inject(AuthFormComponent).form.controls.email.value;
  authService = inject(AuthService);
  router = inject(Router);
  login() {
    this.authService.setEmail(this.emailValue);
    this.router.navigate(['/']);
  }
}
