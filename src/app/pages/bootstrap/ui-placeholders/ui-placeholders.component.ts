import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-ui-placeholders',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './ui-placeholders.component.html',
  styleUrl: './ui-placeholders.component.scss'
})
export class UiPlaceholdersComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Placeholders', active: true }];

      Prism.highlightAll();
    }
}
