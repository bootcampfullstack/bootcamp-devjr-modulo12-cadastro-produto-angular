import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/interfaces/Category';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  categories : Category [] = [];

  @Input()
  product ?: Product;

  @Output()
  saveEmitter = new EventEmitter();

  formGroupProduct: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
    this.formGroupProduct = this.formBuilder.group({
       id : [''],
       name : [''],
       description : [''],
       category : [''],
       price : [''],
       newProduct : [''],
       promotion : [''],
    })

  }

  ngOnInit(): void {
  }

  save(){
    console.log(this.formGroupProduct.value);
    this.saveEmitter.emit(this.formGroupProduct.value);
    this.formGroupProduct.reset();
  }

  cancel(){
    this.saveEmitter.emit(false);
  }

  selectedCategory(category1: Category, category2 : Category){
    return category1 && category2 ? category1.id === category2.id : false;
  }

}
