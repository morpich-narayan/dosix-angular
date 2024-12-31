import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-ui-cards',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './ui-cards.component.html',
  styleUrl: './ui-cards.component.scss'
})
export class UiCardsComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Cards', active: true }];
      Prism.highlightAll();
    }

}
