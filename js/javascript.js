var productNameInput= document.getElementById('productName');
var productPriceInput= document.getElementById('productPrice');
var productCatgoryInput= document.getElementById('productCatgory');
var productDescInput= document.getElementById('productDesc');
var productSearchInput= document.getElementById('searchProduct');
var productImgInput= document.getElementById('productImg');
var addBtn= document.getElementById('addBtn');
var clearBtn= document.getElementById('clearBtn');
var updateBtn= document.getElementById('updateBtn');
var contaenr=[];
if (localStorage.getItem('product') !== null) {
    contaenr =JSON.parse(localStorage.getItem('product'));
    displayProduct();
}

function addProdact(){
  
    
    var product={
        code: productNameInput.value ,
        price: productPriceInput.value ,
        catogry: productCatgoryInput.value ,
        description:productDescInput.value,
        img:`img/${productImgInput.files[0].name}`,
    }
    contaenr.push(product);
    clearForm();
    displayProduct();
    localStorage.setItem('product' , JSON.stringify(contaenr))
}

function clearData(){
    localStorage.removeItem('product');
    contaenr=[];
    displayProduct();
}


function clearForm(){
    productDescInput.value=null;
    productNameInput.value=null;
    productCatgoryInput.value=null;
    productPriceInput.value=null;
}

function displayProduct(){
    
    var pox ='';
    for (let i = 0; i < contaenr.length; i++) {
     pox+=`
        <div class="col-2 py-2 ">
            <div class="product ">
            <img class="w-100" src="${contaenr[i].img}" alt="productimg">
            <h2 class="h4">${contaenr[i].code}</h2>
            <p class="text-secondary">${contaenr[i].description}</p>
            <h3 class="h5"> <span class="fw-bolder">Price :</span> ${contaenr[i].price}</h3>
            <h3 class="h5"> <span class="fw-bolder">Catgory :</span> ${contaenr[i].catogry}</h3>
             <button onclick="deleteProduct(${i}) " class="btn btn-outline-danger w-100 m-1 " >Delete <i class="fas fa-trash"></i></button>
             <button onclick="setFormUpdate(${i})" class="btn btn-outline-warning w-100 m-1 " >update <i class="fas fa-trash"></i></button>
            </div>
    </div>

     `
     
    }
    document.getElementById('dis').innerHTML=pox;
}

function deleteProduct(index){
contaenr.splice(index ,1);
displayProduct();
localStorage.setItem('product' , JSON.stringify(contaenr))
}





function searchProduct(){
     var term = productSearchInput.value;
     var pox =``;
    
for (var i = 0; i < contaenr.length; i++) {
   
if (contaenr[i].code.toLowerCase().includes(term.toLowerCase())) {
    pox+=`
        <div class="col-2 py-2 ">
            <div class="product ">
            <img class="w-100" src="img/${productImgInput.files[i].name}" alt="productimg">
            <h2 class="h4">${contaenr[i].code}</h2>
            <p class="text-secondary">${contaenr[i].description}</p>
            <h3 class="h5"> <span class="fw-bolder">Price :</span> ${contaenr[i].price}</h3>
            <h3 class="h5"> <span class="fw-bolder">Catgory :</span> ${contaenr[i].catogry}</h3>
             <button onclick="deleteProduct(${i}) " class="btn btn-outline-danger w-100 m-1 " >Delete <i class="fas fa-trash"></i></button>
             <button  class="btn btn-outline-warning w-100 m-1 " >update <i class="fas fa-trash"></i></button>
            </div>
    </div> `
  }
}


document.getElementById('dis').innerHTML=pox;

}

var i ;
function setFormUpdate(index){
    i=index;
    addBtn.classList.add('d-none');
    clearBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none');
    productNameInput.value=contaenr[index].code;
    productPriceInput.value=contaenr[index].price;
    productCatgoryInput.value=contaenr[index].catogry;
    productDescInput.value=contaenr[index].description;


}

function updateProduct(i){
    addBtn.classList.remove('d-none');
    clearBtn.classList.remove('d-none');
    updateBtn.classList.add('d-none');
contaenr[i].code=productNameInput.value;
contaenr[i].price=productPriceInput.value;
contaenr[i].catogry=productCatgoryInput.value;
contaenr[i].description=productDescInput.value;
displayProduct();
localStorage.setItem('product' , JSON.stringify(contaenr));
clearForm();

}
