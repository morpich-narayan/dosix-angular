import { Component, ComponentFactoryResolver, ComponentRef, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { LoadComponateComponent } from './load-componate/load-componate.component';
import { CommonModule } from '@angular/common';
import { TemplateRegistryService } from '../../../core/service/template-registry.service';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '../../../core/service/title.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [LoadComponateComponent, CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  currentTemplate!: TemplateRef<any> | null;
  currentTitle!: string;

  constructor(private templateRegistry: TemplateRegistryService, private titleService: TitleService) {
    this.titleService.currentTitle.subscribe(data => {
      if (data) {
        this.currentTitle = data
      }
    })
  }
  
  ngAfterViewInit() {
    this.loadTemplate();
  }
  
  ngOnInit() {}

  loadTemplate(key: string = 'template'): void {
    const template = this.templateRegistry.getTemplate(key);
    if (template) {
      setTimeout(() => {
        this.currentTemplate = template;
      }, 0);
    }
  }
}
