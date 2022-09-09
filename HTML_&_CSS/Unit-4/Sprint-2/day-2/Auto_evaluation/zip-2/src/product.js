function Product(n,b,p,d) {
  // Complete the constructor function
   this.name=n
   this.brand=b
   this.price=p
   this.description=d
   this.sold=false
}

// Create these two methods in Product prototype :-

// changePrice

Product.prototype.changePrice=function(input){
  this.price=input 
}


// toggleStatus

Product.prototype.toggleStatus=function(){
  this.sold = !this.sold
}

// Do not change this
export default Product;
