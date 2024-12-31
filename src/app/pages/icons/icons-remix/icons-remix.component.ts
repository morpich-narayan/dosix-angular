import { Component } from '@angular/core';
import { icons } from './data';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-icons-remix',
  standalone: true,
  imports: [BreadcrumbsComponent ],
  templateUrl: './icons-remix.component.html',
  styleUrl: './icons-remix.component.scss'
})
export class IconsRemixComponent {
  breadCrumbItems!: Array<{}>;
  icons!: any;


  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Icons' },
      { label: 'Remix', active: true }
    ];

    this.icons = icons;
    var iconData = "";
    /**
     * Blank Icon set
     */
    //  this.icons.push({ name: 'blank', hex: 'f68c' });
    const icons1 = JSON.parse(icons);

    Object.keys(icons1).forEach((key: any) => {

      if (key === "Editor") {
        iconData = iconData + '<div class="card"><div class="card-body"><h4 class="card-title">' + key + ' </h4><p class="card-title-desc mb-2">Use <code>&lt;i class="ri-bold"&gt;&lt;/i&gt;</code> <span class="badge badge-success">v 2.4.1</span>.</p><div class="row icon-demo-content">';
        Object.keys(icons1[key]).forEach((k: any) => {
          iconData += '<div class="col-xl-3 col-lg-4 col-sm-6">\
            <i class="ri-'+ k + '"></i> ri-' + k + '</div>';
        });
      } else {
        iconData = iconData + '<div class="card"><div class="card-body"><h4 class="card-title">' + key + ' </h4><p class="card-title-desc mb-2">Use <code>&lt;i class="ri-home-line"&gt;&lt;/i&gt;</code> or <code>&lt;i class="ri-home-fill"&gt;&lt;/i&gt;</code> <span class="badge badge-success">v 2.4.1</span>.</p><div class="row icon-demo-content">';
        if (icons1[key]) {
          Object.keys(icons1[key]).forEach((k: any) => {
            iconData += '<div class="col-xl-3 col-lg-4 col-sm-6" onClick="geticon()">\
              <i class="ri-'+ k + '-line"></i> ri-' + k + '-line\
          </div><div class="col-xl-3 col-lg-4 col-sm-6">\
              <i class="ri-'+ k + '-fill"></i> ri-' + k + '-fill\
          </div>';

          });
        }
      }
      iconData += '</div></div></div>';
    });
    const element: HTMLElement = document.getElementById('icons') as HTMLElement
    element.innerHTML = iconData
  }

   /***
   * change icon version
   */
   isNew(icon: any) {
    return icon.version === 'Buildings';
  }
}

