import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../auth-form.component';
import { inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-auth-form-email',
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './auth-form-email.component.html',
  styleUrl: './auth-form-email.component.scss',
})
export class AuthFormEmailComponent {
  //Injetando as informações do pai do email
  control = inject(AuthFormComponent).form.controls.email;
}
