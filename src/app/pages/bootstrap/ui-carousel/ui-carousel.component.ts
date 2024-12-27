import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-ui-carousel',
  standalone: true,
  imports: [CarouselModule,BreadcrumbsComponent],
  templateUrl: './ui-carousel.component.html',
  styleUrl: './ui-carousel.component.scss'
})
export class UiCarouselComponent {

  
    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Carousel', active: true }];
      Prism.highlightAll();
    }

}
