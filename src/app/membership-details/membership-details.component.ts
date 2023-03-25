import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-membership-details',
  templateUrl: './membership-details.component.html',
  styleUrls: ['./membership-details.component.css'],
})
export class MembershipDetailsComponent {
  product: Product | undefined;
  products = [...products];

  
  constructor(
    private route: ActivatedRoute,
    private registerService: RegisterService
  ) {}
  
  ngOnInit() {
   
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.registerService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
