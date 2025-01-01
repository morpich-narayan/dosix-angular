import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';
import { NgbCarouselModule, NgbDropdownModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

@Component({
  selector: 'app-ecommerce-product-details',
  standalone: true,
  imports: [BreadcrumbsComponent,NgbCarouselModule,NgbTooltip,NgbDropdownModule,SimplebarAngularModule],
  templateUrl: './ecommerce-product-details.component.html',
  styleUrl: './ecommerce-product-details.component.scss'
})
export class EcommerceProductDetailsComponent {
  breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Product Overview', active: true }];
}
