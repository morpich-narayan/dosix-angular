import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success-msg',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './success-msg.component.html',
  styleUrl: './success-msg.component.scss'
})
export class SuccessMsgComponent {

}
