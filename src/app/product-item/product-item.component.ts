import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }
  clickOnItem(image){
    (document.querySelector("#"+this.product.id) as HTMLImageElement).src = image;
  }
  draw(cnt:number){
    let star="";
    for(let i=0;i<cnt;i++){
       star+="*";
    }
   window.alert(star);
  }
}