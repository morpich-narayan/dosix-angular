import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';
@Component({
  selector: 'app-ui-tabs',
  standalone: true,
  imports: [BreadcrumbsComponent,TabsModule ],
  templateUrl: './ui-tabs.component.html',
  styleUrl: './ui-tabs.component.scss'
})
export class UiTabsComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Tabs', active: true }];

      Prism.highlightAll();
    }
}
