import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-invoice-overview',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './invoice-overview.component.html',
  styleUrl: './invoice-overview.component.scss'
})
export class InvoiceOverviewComponent {
  breadCrumbItems = [
    { label: 'Invoice', active: true },
    { label: 'Invoice Overview', active: true }
  ];
}
