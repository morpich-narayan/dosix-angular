import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  standalone:true,
  imports:[CommonModule],
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input({ required: true })
  breadcrumbItems!: Array<{
    active?: boolean;
    label?: string;
  }>;

  Item!: Array<{
    label?: string;
  }>;

  constructor(private ts:TitleService) { }

  ngOnInit(): void {

    const getPageTitle = this.breadcrumbItems.find(x=> x.active);

    if (getPageTitle && getPageTitle.label) {
      this.ts.setItem(getPageTitle?.label)
    }

  }
}
