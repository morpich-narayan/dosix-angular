import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateRegistryService {

  constructor() { }

  private templates: Map<string, TemplateRef<any>> = new Map();

  registerTemplate(template: TemplateRef<any>,key: string = 'template'): void {
    this.templates.set(key, template);
  }

  getTemplate(key: string): TemplateRef<any> | undefined {
    return this.templates.get(key);
  }

  destroyAll(): void {
    this.templates.clear()
  }

  ngOnDestroy() {
    console.log('test');
  }
}
