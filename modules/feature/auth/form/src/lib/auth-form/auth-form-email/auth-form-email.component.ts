import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../auth-form.component';
import { inject, OnInit } from '@angular/core';

@Component({
  selector: 'lib-auth-form-email',
  imports: [CommonModule],
  templateUrl: './auth-form-email.component.html',
  styleUrl: './auth-form-email.component.scss',
})
export class AuthFormEmailComponent {
  //Injetando as informações do pai do email
  control = inject(AuthFormComponent).form.controls.email;
}
