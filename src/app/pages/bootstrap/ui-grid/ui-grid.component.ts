import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';


@Component({
  selector: 'app-ui-grid',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './ui-grid.component.html',
  styleUrl: './ui-grid.component.scss'
})
export class UiGridComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Grid', active: true }];

      Prism.highlightAll();
    }
}
