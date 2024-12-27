import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';
import { ScrollspyDirective } from '../../../../core/diractive/scrollspy.directive';

@Component({
  selector: 'app-scrollspy',
  templateUrl: './scrollspy.component.html',
  styleUrls: ['./scrollspy.component.scss'],
  standalone:true,
  imports:[CommonModule,BreadcrumbsComponent,ScrollspyDirective]
})
export class ScrollspyComponent {
  currentSection = 'fat';

  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Advance UI' }, { label: 'ScrollSpy', active: true }];
  }


  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section: any) {
    document.querySelector('#' + section)?.scrollIntoView();
  }

  constructor() { }

}
