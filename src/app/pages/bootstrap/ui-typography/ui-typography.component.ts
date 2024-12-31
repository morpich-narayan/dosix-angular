import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-ui-typography',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './ui-typography.component.html',
  styleUrl: './ui-typography.component.scss'
})
export class UiTypographyComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Typography', active: true }];

      Prism.highlightAll();
    }
}
