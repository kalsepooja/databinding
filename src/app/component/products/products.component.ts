import { Component, OnDestroy, OnInit } from "@angular/core";


@Component({
    selector: `app-products`,
    templateUrl:`products.component.html`,
    styleUrls: [`./products.component.scss`]
})
export class ProductsComponent implements OnInit, OnDestroy{
    skills = ["html", "css", "js", "angular", "jquery", "Bootstrap"];
    isDisable: boolean = true;
    proInCart: string = `no product is added in cart`;
    noOfProInCart: number = 0;
    searchProduct: string = '';
    searchedProduct: string = `no product is searched yet`;

    updateItem(){
        console.log('clicked !!!');
        this.noOfProInCart++;
        this.proInCart = `${this.noOfProInCart} is added into the cart`;
    };

    removeItem(){
        console.log('removed !!!');
        this.noOfProInCart--;
        // this.proInCart;

        if(this.noOfProInCart === 0){
            this.proInCart = `${this.noOfProInCart} is added into the cart`;
        }else{
            this.proInCart = `${this.noOfProInCart} product is added`
        }
    };

    onProductSearch(eve:Event){
        let val = (eve.target as HTMLInputElement).value;
        console.log(val);
        this.searchProduct =val;
        
    };

    OnSearchedProduct(eve:Event){
        let val = (eve.target as HTMLInputElement).value;
        console.log(val);

    }

    ngOnInit(): void {
        this.isDisable = false;
// this.searchedProduct;
// console.log(this.searchedProduct)
    }
    ngOnDestroy(): void {
    } 
    
}