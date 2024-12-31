import { Component, TemplateRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TemplateRegistryService } from '../../../core/service/template-registry.service';
import { LoadTopbarContantComponent } from "../../../core/componate/load-topbar-contant/load-topbar-contant.component";
import { CommonModule } from '@angular/common';
import { TopbarItem } from '../../../core/interface/Topbar.model';
import { TitleService } from '../../../core/service/title.service';

@Component({
  standalone: true,
  imports: [RouterModule, LoadTopbarContantComponent, CommonModule],
  template: `
    <ng-template #dashboardTemplate>
      <app-load-topbar-contant [topbarItem]="topData" (titleChanged)="updateTitle($event)"></app-load-topbar-contant>
    </ng-template>
    <router-outlet></router-outlet>
  `,
  providers: []
})
export class InvoiceLayoutsComponent implements OnInit, AfterViewInit {
  topData: TopbarItem[] = [];
  @ViewChild('dashboardTemplate') dashboardTemplate!: TemplateRef<any>;
  currentTitle!: string;

  constructor(private templateRegistry: TemplateRegistryService, private activatedRoute: ActivatedRoute, private titleService: TitleService) {
  }

  ngOnInit() {
    this.getChildRoutes();

  }

  ngAfterViewInit() {
    this.templateRegistry.registerTemplate(this.dashboardTemplate);
  }

  updateTitle(title: string) {
    this.currentTitle = title;
    this.titleService.setItem(this.currentTitle)
  }

  getChildRoutes() {
    const childRoutes = this.activatedRoute.routeConfig?.children;

    if (childRoutes) {
      this.topData = childRoutes
        .filter(route => route.data)
        .map(({ component, ...rest }) => rest) as TopbarItem[];
    }
  }

  ngOnDestroy() {
    if (this.templateRegistry) {
      this.templateRegistry.unregisterTemplate('template');
    }
  }
}
