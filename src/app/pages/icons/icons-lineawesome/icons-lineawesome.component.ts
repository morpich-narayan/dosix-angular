import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-icons-lineawesome',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './icons-lineawesome.component.html',
  styleUrl: './icons-lineawesome.component.scss'
})
export class IconsLineawesomeComponent {
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Lineawesome', active: true }
    ];
  }

}
