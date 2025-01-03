import { Component } from '@angular/core';

import { DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { Editor, NgxEditorModule, TOOLBAR_FULL } from 'ngx-editor';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';
import { NgSelectModule } from '@ng-select/ng-select';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone:true,
  imports:[BreadcrumbsComponent,NgSelectModule,NgxEditorModule,DropzoneModule],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
  ],
})

// Add Product Component
export class AddProductComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  editor!: Editor;
  toolbar: any = TOOLBAR_FULL;
  files: File[] = []; 
  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Ecommerce', active: true },
      { label: 'Add Product', active: true }
    ];
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    // Destroy the editor instance to prevent memory leaks
    this.editor.destroy();
  }
  // File Upload
  public dropzoneConfig: DropzoneConfigInterface = {
    clickable: true,
    addRemoveLinks: true,
    previewsContainer: false
  };

  uploadedFiles: any[] = [];

  // File Upload
  imageURL: any;
  onUploadSuccess(event: any) {
    setTimeout(() => {
      this.uploadedFiles.push(event[0]);
    }, 0);
  }

  // File Remove
  removeFile(event: any) {
    this.uploadedFiles.splice(this.uploadedFiles.indexOf(event), 1);
  }

  selectedValue = ['Fashion', 'Style', 'Brands', 'Puma'];
  public items: string[] = ['Fashion', 'Style', 'Brands', 'Puma'];

}
