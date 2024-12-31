import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateRegistryService {

  constructor() { }

  private templates: Map<string, TemplateRef<any>> | null = new Map();

  registerTemplate(template: TemplateRef<any>, key: string = 'template'): void {
    if (this.templates) {
      this.templates?.set(key, template);
    }
  }

  getTemplate(key: string): TemplateRef<any> | undefined {
    if (this.templates) {
      return this.templates.get(key);
    }else{
      return undefined
    }
  }

  destroyAll(): void {
    if (this.templates) {
      this.templates.clear();
      this.templates = null;
    }
  }

  
  unregisterTemplate(key: string = 'template'): void {
    if (this.templates?.has(key)) {
      this.templates.delete(key);
      console.log(`Template with key '${key}' unregistered.`);
    }
  }
}
