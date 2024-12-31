import { Component, inject, TemplateRef } from '@angular/core';
import * as Prism from 'prismjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from '../../../../core/componate/toasts-container.component';
import { ToastService } from '../../../../core/service/toast.service';


@Component({
  selector: 'app-ui-notifications',
  standalone: true,
  imports: [BreadcrumbsComponent,NgbTooltip,ToastsContainer ],
  templateUrl: './ui-notifications.component.html',
  styleUrl: './ui-notifications.component.scss'
})
export class UiNotificationsComponent {

  
  
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Notifications', active: true }];

    Prism.highlightAll();
  }

  toastService = inject(ToastService);

	showStandard(template: TemplateRef<any>) {
		this.toastService.show({ template });
	}

	showSuccess(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-success text-light', delay: 10000 });
	}

	showDanger(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-danger text-light', delay: 15000 });
	}



}
