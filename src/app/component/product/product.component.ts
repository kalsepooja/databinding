import { Component, OnDestroy, OnInit } from "@angular/core";

// <!-- difference between string interpolation and property binding -->
// <!-- >> data received in form of html element string interpolation wont work
//  it will contact html element but property binding avoid concat of html element-->

//  <!-- >> string interpolation wont work on self close tage (empty tage) -->

//  <!-- >> Databinding -->

// <!-- the communication / transfer of data from template to ts or vice versa called data-binding -->

// <!-- {{}} >> string interpolation syntax >> one way binding >> ts to template --> 
// <!-- [] >> property binding syntax >> one way binding >> ts to template -->
// <!-- () >> event binding syntax >> one way binding >>  template to ts  -->
// <!-- [] + () = [()] >> event binding syntax >> two way data - binding >>  template to ts | ts to template  -->

// <!-- Template element in Angular behaves in both ways as html element as well as doc.obj 


@Component({
    selector: `app-product`,
    templateUrl: `product.component.html`,
    styleUrls: [`./product.component.scss`]
})
export class ProductComponent implements OnInit, OnDestroy{
    productName: string = "apple";
    productId: number = 123;
    productStaus: string = 'ordered';
    isDisable: boolean = true;
    isReady: string = "hello barbie"

    ngOnInit(): void {
        this.isDisable = false;
    }
    ngOnDestroy(): void {
        
    }
}