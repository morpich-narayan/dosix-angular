import { Component, ComponentFactoryResolver, ComponentRef, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { LoadComponateComponent } from './load-componate/load-componate.component';
import { CommonModule } from '@angular/common';
import { TemplateRegistryService } from '../../../core/service/template-registry.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TitleService } from '../../../core/service/title.service';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


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
  private destroy$ = new Subject<void>(); // Observable to notify unsubscription


  constructor(private templateRegistry: TemplateRegistryService, private titleService: TitleService, private router: Router) {
    this.titleService.currentTitle.pipe(takeUntil(this.destroy$)).subscribe(data => {
      if (data) {
        this.currentTitle = data
      }
    })

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          this.loadTemplate();
        }, 500);
      });
  }

  ngAfterViewInit() {
    this.loadTemplate();
  }

  ngOnInit() { }

  loadTemplate(key: string = 'template'): void {
    const template = this.templateRegistry.getTemplate(key);
    if (template) {
      this.currentTemplate = template;
    } else {
      this.currentTemplate = null
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(); // Emit a value to complete all subscriptions
    this.destroy$.complete(); // Complete the `destroy$` observable
  }
}
