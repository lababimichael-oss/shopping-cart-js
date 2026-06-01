//user will put his product name
//put price
//put how many
//when press add 
//the product name will be displayed
//the product price will be displayed too  × quantity

//and it gonna display the totalprice

//lastly we gonna save it to local storage
localStorage.clear()
const totalcost = document.querySelector('#totalcost');
const productname  = document.querySelector('#productname');

const productprice  = document.querySelector('#productprice');

const productquantity  = document.querySelector('#productquantity');

const addbtn = document.querySelector('#addbtn');

const savebtn = document.querySelector('#savebtn');

const display = document.querySelector('#display');

const products = []
const savedproducts = JSON.parse(localStorage.getItem('products'))

if(savedproducts){
  savedproducts.forEach(product=>{
    products.push(product);
  const h2  = document.createElement('h2');
 h2.innerHTML = `${product.name} ${product.quantity} ${product.price}`;
 
 const deletebtn = document.createElement('button');
  
  deletebtn.innerHTML = 'delete';
  
  deletebtn.addEventListener('click',()=>{
    h2.remove();
    
  });
  display.appendChild(h2)
  h2.appendChild(deletebtn)
  
  })
}

function calculateTotal(){
  const total = products.reduce((sum,product)=>{
  return  sum +( product.price * product.quantity)
  },0)
  totalcost.innerHTML = `total : ${total}`
}

addbtn.addEventListener('click',()=>{
 
 const h2  = document.createElement('h2');
 h2.innerHTML = `${productname.value} x${productquantity.value}  -R${productprice.value}`;
 
 products.push({
  name: productname.value,
  price: Number(productprice.value),
  quantity: Number(productquantity.value)
})
 
  calculateTotal()
 
 const deletebtn = document.createElement('button');
  
  deletebtn.innerHTML = 'delete';
  
  
  deletebtn.addEventListener('click',()=>{
    h2.remove();
  })
  display.appendChild(h2)
  h2.appendChild(deletebtn)
   
   calculateTotal();
   
  productname.value = '';
  productprice.value = '';
  productquantity.value = '';
})

savebtn.addEventListener('click',()=>{
  localStorage.setItem('products',JSON.stringify(products))
  
})

 
