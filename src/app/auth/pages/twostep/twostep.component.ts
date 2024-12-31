import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-twostep',
  standalone: true,
  imports: [RouterLink,NgOtpInputModule],
  templateUrl: './twostep.component.html',
  styleUrl: './twostep.component.scss'
})
export class TwostepComponent {
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '80px',
      'height': '50px'
    }
  };
}
