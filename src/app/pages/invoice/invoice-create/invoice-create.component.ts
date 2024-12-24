import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './invoice-create.component.html',
  styleUrl: './invoice-create.component.scss'
})
export class InvoiceCreateComponent {
  formArray = new FormArray<FormGroup>([]);
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.formGroup = this.fb.group({
    //   productDetails: this.formArray
    // })
  }

  ngOninit() {
    this.addProduct();
  }

  addProduct() {

  }

  createProductDetail() {
    return this.fb.group({
      productDetails: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      rate: new FormControl(0, Validators.required),
      qty: new FormControl(0, Validators.required),
      amount: new FormControl(0, Validators.required),
    })
  }

}
