import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './load-componate.component.html',
  styleUrl: './load-componate.component.scss'
})
export class LoadComponateComponent {
  @Input() template!: TemplateRef<any>;
  @Input() contextData: any;
}
