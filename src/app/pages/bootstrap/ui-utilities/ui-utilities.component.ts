import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-ui-utilities',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './ui-utilities.component.html',
  styleUrl: './ui-utilities.component.scss'
})
export class UiUtilitiesComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Utilities', active: true }];

      Prism.highlightAll();
    }
}
