import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-tables-basic',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './tables-basic.component.html',
  styleUrl: './tables-basic.component.scss'
})
export class TablesBasicComponent {
   // bread crum items
   breadCrumbItems!: Array<{}>;

   ngOnInit(): void {
     this.breadCrumbItems = [{ label: 'Tables' }, { label: 'Basic Tables', active: true }];
     Prism.highlightAll();
   }

}
