import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  items = this.registerService.getItems();
  price: number;
  chosenProgram: string;

  registerForm = this.formBuilder.group({
    firstname: '',
    lastname: '',

    address: '',
  });

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.registerService.clearCart();
    console.warn('Your order has been submitted', this.registerForm.value);
    window.alert('Your order has been submitted!');
    this.registerForm.reset();
    this.chosenProgram = '';
    this.price = 0;
  }

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.chosenProgram = this.items.length > 0 ? this.items[0].name : '';
    this.price = this.items.length > 0 ? this.items[0].price : 0;
  }
}
