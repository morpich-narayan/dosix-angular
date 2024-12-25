import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-invoice-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, BreadcrumbsComponent],
  templateUrl: './invoice-create.component.html',
  styleUrl: './invoice-create.component.scss'
})
export class InvoiceCreateComponent {
  breadCrumbItems = [
    { label: 'Invoice' },
    { label: 'Invoice Create', active: true }
  ];
  formArray = new FormArray<FormGroup>([]);
  formGroup!: FormGroup;

  subTotal: number = 0;
  estimated: number = 0;
  discount: number = 0;
  shippingCharge: number = 65;
  totalAmount: number = 0;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      paymentStatus: new FormControl('',Validators.required),
      productDetails: this.formArray
    })
  }

  ngOnInit() {
    this.addProduct();

    this.formArray.valueChanges.pipe(debounceTime(500)).subscribe(data => {
      this.calculateSubtotal();
    })
  }

  addProduct() {
    if (!this.formArray.valid) {
      this.formArray.markAllAsTouched()
      return
    }


    this.formArray.push(this.createProductDetail());
  }

  deleteProduct(index: number) {
    if ((this.formArray.value).length <= 1) {
      return
    }
    this.formArray.removeAt(index);
    this.calculateSubtotal();
  }

  calculateSubtotal() {
    this.subTotal = this.formArray.controls.reduce((amt, formGroup) => {
      const amount = formGroup.get('amount')?.value || 0;
      return amt + amount;
    }, 0)

    this.prepareAllInvoice()
  }

  prepareAllInvoice() {
    this.estimated = this.subTotal * (18 / 100);
    this.discount = this.subTotal * (30 / 100);

    this.totalAmount = this.subTotal + this.shippingCharge + this.estimated + this.discount;
  }

  onRateChange(index: number) {
    const getAmountCtrl = this.formArray.at(index).get('rate');
    const getQtyCtrl = this.formArray.at(index).get('qty');

    this.calculateAmout(getAmountCtrl?.value, getQtyCtrl?.value, index)
  }

  onQtyChange(index: number) {
    const getAmountCtrl = this.formArray.at(index).get('rate');
    const getQtyCtrl = this.formArray.at(index).get('qty');

    this.calculateAmout(getAmountCtrl?.value, getQtyCtrl?.value, index)
  }

  increment(index: number) {
    const getQtyCtrl = this.formArray.at(index).get('qty');

    if (getQtyCtrl) {
      getQtyCtrl.setValue(getQtyCtrl.value + 1);
    }

    this.onQtyChange(index)
  }

  decrement(index: number) {
    const getQtyCtrl = this.formArray.at(index).get('qty');

    if (getQtyCtrl) {
      getQtyCtrl.setValue(getQtyCtrl.value - 1);
    }

    this.onQtyChange(index)
  }

  calculateAmout(price: number, qty: number, index: number) {

    const amControl = this.formArray.at(index).get('amount');

    if (amControl) {
      amControl.setValue(price * qty)
    }
  }

  save(){
    console.log(this.formGroup.value);
  }

  createProductDetail() {
    return this.fb.group({
      productDetails: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      rate: new FormControl(0, Validators.required),
      qty: new FormControl(0, Validators.required),
      amount: new FormControl({ value: 0, disabled: true }, Validators.required),
    })
  }

}
