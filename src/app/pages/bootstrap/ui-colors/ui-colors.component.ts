import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-ui-colors',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './ui-colors.component.html',
  styleUrl: './ui-colors.component.scss'
})
export class UiColorsComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Colors', active: true }];

      Prism.highlightAll();
    }
}
