import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-ui-embed-video',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './ui-embed-video.component.html',
  styleUrl: './ui-embed-video.component.scss'
})
export class UiEmbedVideoComponent {

    // bread crum items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Embed Video', active: true }];

      Prism.highlightAll();
    }
}
