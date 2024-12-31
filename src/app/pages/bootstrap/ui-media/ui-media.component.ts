import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';
@Component({
  selector: 'app-ui-media',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './ui-media.component.html',
  styleUrl: './ui-media.component.scss'
})
export class UiMediaComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Media Object', active: true }];

      Prism.highlightAll();
    }
}
