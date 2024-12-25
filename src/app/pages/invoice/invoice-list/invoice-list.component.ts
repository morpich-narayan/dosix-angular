import { Component } from '@angular/core';
import { BreadcrumbsComponent } from "../../../../core/componate/breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent {
  breadCrumbItems = [
    { label: 'Invoice', active: true },
    { label: 'Invoice List', active: true }
  ];
}
