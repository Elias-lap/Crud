var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var Addbroduct=document.getElementById("Addbroduct")



// if (localStorage.getItem("products") != null) {
//   products = JSON.parse(localStorage.getItem("products"));
//   dispalyproducts(products);
// }

var productsContainer = [];
if(localStorage.getItem('products') !=null){
  productsContainer=JSON.parse(localStorage.getItem('products'))
  displayProduct (productsContainer)
}
function addproduct() {
  if (validate()==true){
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };
  if (Addbroduct.innerHTML=='Add product'){
   
    productsContainer.push(product);
  }else{
   
    productsContainer.splice(count,1,product)
    Addbroduct.innerHTML=('Add product')
  }
  localStorage.setItem('products' ,JSON.stringify(productsContainer) )
  displayProduct (productsContainer)
  clearform() 
  }
  else{
    alert('ProductName Invaled')
  }
 
}
 function clearform() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescInput.value = "";
}
function displayProduct (arr){
  var cartona= ''
  for ( var i=0 ; i < arr.length ; i++){
    cartona +=` <tr>
    <td>${i}</td>
    <td>${arr[i].name}</td>
    <td>${arr[i].price}</td>
    <td>${arr[i].category}</td>
    <td>${arr[i].desc}</td>
    <td><button onclick="setFormUpdate(${i})" class=" btn btn-outline-primary btn-sm">Update</button></td>
    <td><button  onclick="deleteproduct(${i});" class=" btn btn-outline-danger btn-sm">Delete</button></td>
   
   </tr>`;
  }
  document.getElementById('tablebody').innerHTML=cartona;


}

function deleteproduct(productIndex){
  productsContainer.splice(productIndex,1);
  localStorage.setItem('products' ,JSON.stringify(productsContainer) );
  displayProduct(productsContainer);
}

function searchProduct (term){

  var matchedProduct = []
  for( var i=0 ; i < productsContainer.length ; i++){
    if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase())===true)
    {
      matchedProduct.push(productsContainer[i])
    }
  }
  displayProduct(matchedProduct)
}
var count='0'
function setFormUpdate (index){
  count=index

    productNameInput.value=productsContainer[index].name
  productPriceInput.value=productsContainer[index].price
   productCategoryInput.value=productsContainer[index].category
   productDescInput.value=productsContainer[index].desc
  Addbroduct.innerHTML=('Update Product')

}


function validate(){
  var regex = /^[A-Z][a-z]{3,8}$/
  return  regex.test(productNameInput.value)==true
  
}




// function setFormUpdate(i){
//    index = i
//   Addbroduct.classList.replace('d-block','d-none')
//   Update.classList.replace('d-none','d-block')
//   productNameInput.value=productsContainer[i].name
//   productPriceInput.value=productsContainer[i].price
//   productCategoryInput.value=productsContainer[i].category
//   productDescInput.value=productsContainer[i].desc
//   var newAdd ={
//     name:productNameInput.value,
//     price: productPriceInput.value,
//     category: productCategoryInput.value,
//     desc: productDescInput.value,
//   };
//   productsContainer.push(newAdd)
//   productsContainer.splice(index,1,newAdd)
  
// }

// var index =0
// function setUpdate(index){
  
//   productsContainer.splice(index,1,newAdd)


// }























































