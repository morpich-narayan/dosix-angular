import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';
import { SimplebarAngularModule } from 'simplebar-angular';
@Component({
  selector: 'app-ui-lists',
  standalone: true,
  imports: [BreadcrumbsComponent,SimplebarAngularModule],
  templateUrl: './ui-lists.component.html',
  styleUrl: './ui-lists.component.scss'
})
export class UiListsComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Lists', active: true }];

      Prism.highlightAll();
    }
}
