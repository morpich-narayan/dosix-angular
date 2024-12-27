import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-ui-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule,BreadcrumbsComponent ],
  templateUrl: './ui-dropdowns.component.html',
  styleUrl: './ui-dropdowns.component.scss'
})
export class UiDropdownsComponent {

  
  // bread crum items
  breadCrumbItems!: Array<{}>;
  isDropup = true;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Dropdowns', active: true }];

    Prism.highlightAll();
  }
}
