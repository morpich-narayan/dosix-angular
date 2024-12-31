import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-icons-boxicons',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './icons-boxicons.component.html',
  styleUrl: './icons-boxicons.component.scss'
})
export class IconsBoxiconsComponent {
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Boxicons', active: true }
    ];
  }
}
