import { Component } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss'],
  standalone:true,
  imports:[SimplebarAngularModule,BreadcrumbsComponent]
})
export class ScrollbarComponent {
  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Advance UI' }, { label: 'Scrollbar', active: true }];
  }

  options = { autoHide: false };
}
