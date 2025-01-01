import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-ecommerce-products',
  standalone: true,
  imports: [CountUpModule,BreadcrumbsComponent],
  templateUrl: './ecommerce-products.component.html',
  styleUrl: './ecommerce-products.component.scss'
})
export class EcommerceProductsComponent {

  breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Products', active: true }];

}
