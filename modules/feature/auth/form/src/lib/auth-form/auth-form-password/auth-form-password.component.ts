import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../auth-form.component';
import { inject } from '@angular/core';

@Component({
  selector: 'lib-auth-form-password',
  imports: [CommonModule],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
})
export class AuthFormPasswordComponent {
  control = inject(AuthFormComponent).form.controls.password;
}
