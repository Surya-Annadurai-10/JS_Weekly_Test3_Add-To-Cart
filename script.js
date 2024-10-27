let productDetails = document.querySelector(".product-details");
let productName = document.querySelector(".product");
let productValue = document.querySelector(".count");
let addBtn = document.querySelector(".add");
let cartDetails = document.querySelector(".cart-details");
let productCart = document.querySelector(".product-cart");
let countNum = document.querySelector(".no");
let productTotal = document.querySelector("product-total");

let data = [];
let count = 0;
addBtn.addEventListener("click", (event) => {
  if (productName.value == "" || productValue.value == "") {
    alert("Enter Data..!");
    return;
  }

  let obj = {};

  obj.id = count;
  
  obj.name = productName.value;
  obj.price = productValue.value;
  obj.count = 1;

  data.push(obj);
 
  let div2 = document.createElement("div");
  div2.classList.add("product-box");
  div2.id = `${count}`;
  div2.innerHTML = `
            <p clas="product-cart">${obj.name}</p>
             <div class="product-cal">
            <p>
             <span class="no">${obj.count}</span>
            x 
            <span class="product-total">${obj.count * productValue.value}</span></p>
  `;
 cartDetails.appendChild(div2);

  let div = document.createElement("div");
  div.classList.add(`product-box`);
  div.classList.add(`product-box-left`);
  div.id = `${count}`
  div.innerHTML = `
                        <p>${obj.name}</p>
                        <p>&#8377; ${obj.price}</p>
                        <div class="buttons">
                        <button class="button1">-</button>
                        <span class="num-count">${obj.count}</span>
                        <button  class="button2">+</button>
                        </div>  
   `;

  productDetails.appendChild(div);
  productName.value = "";
  productValue.value = "";
  count++;
  let para = document.querySelector(".product-para");
  if (productDetails.childNodes.length >= 5) {
    para.style.display = "none";
  }
let div2numCount = document.querySelector(".no");
let div2Total = document.querySelector(".product-total")
let numCount = document.querySelector(".num-count")


// console.log(numCount);
 div.addEventListener("click" , (event) =>{
     if (event.target.classList.contains("button1")){
      countNum =  minus(div.id);
      if(countNum <= 0){
        div.remove();
        div2.remove();
        count = 0;
      } 
      numCount.classList.add(`num-count${div.id}`);
      let newNumCount= document.querySelector(`.num-count${div.id}`)
     console.log(newNumCount);
      console.log(div.id);
      newNumCount.innerText = countNum;
     div2numCount.innerText = countNum;
     div2Total.innerText = data[div.id].price * data[div.id].count 
    // console.log(countNum)
     }else if (event.target.classList.contains("button2")){
        countNum = plus(div.id);
        numCount.classList.add(`num-count${div.id}`);
        let newNumCount= document.querySelector(`.num-count${div.id}`)
        console.log(newNumCount);
        newNumCount.innerText = countNum;
        div2numCount.innerText = countNum;  
     div2Total.innerText = data[div.id].price * data[div.id].count 

    }
   
 })



});

function plus(id){
   let ans ;

   data.forEach((value) =>{
    if (value.id == id){
        ans = ++value.count ;
      }
   })

   return (ans);
}

function minus(id){
    let ans;
   data.forEach((value,index) =>{
     if (value.id == id){
       ans = --value.count ;
     }
   })

 return (ans);
}