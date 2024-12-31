import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-ui-badges',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './ui-badges.component.html',
  styleUrl: './ui-badges.component.scss'
})
export class UiBadgesComponent {
  
    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [
        { label: 'Base UI' },
        { label: 'Badges', active: true }
      ];

      Prism.highlightAll();
    }

}
