import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

// Constructor
@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [RouterModule],
})
export class HeaderComponent {
  @Input({ required: true }) title = '';
}
