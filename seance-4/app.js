
let products = prods.products


let minprice = document.querySelector("#minprice")
let maxprice = document.querySelector("#maxprice")

let categorySelect = document.querySelector("#category")

let  fillCategories   =  () =>{
    let categories = new Set(products.map(p=>p.category))
    for (categorie of categories){
        let option = document.createElement("option")
        option.value = categorie
        option.innerText = categorie
        categorySelect.appendChild(option)

    }

}

fillCategories()

categorySelect.onchange = (e)=>{
    afficherProducts(products.filter(p => p.category ==e.target.value))
}

let changeMinAndMaxPrice = ()=>{
    let newProducts = [...products]
    newProducts.sort((a,b)=>a.price-b.price)
   
    minprice.children[0].min = newProducts[0].price
    minprice.children[0].max = newProducts[newProducts.length -1].price
    maxprice.children[0].min = newProducts[0].price
    maxprice.children[0].max = newProducts[newProducts.length -1].price
}

changeMinAndMaxPrice()

minprice.children[0].onchange = (e)=>{
    minprice.children[1].innerHTML = `${e.target.value} dt`
    afficherProducts2(products.filter(p =>p.price >= e.target.value  && p.price <=Number(maxprice.children[0].value)  ))
}
maxprice.children[0].onchange = (e)=>{
    maxprice.children[1].innerHTML = `${e.target.value} dt`
    afficherProducts2(products.filter(p =>   p.price >= Number(minprice.children[0].value)  && p.price <= e.target.value  ))

}



function createProduct(product){
    let { id, title , description, price, thumbnail } = product
    let productHTML = `
    <div class="product">
    <img
      src="${thumbnail}"
      alt=""
    />
    <h2>${title}</h2>
    <p>
      ${description}
    </p>
    <b>${price} dt </b>
  </div>
    `
    return productHTML
}
createProduct(products[0])

let createProduct2 = ({ id, title , description, price, thumbnail })=>{
    let div =  document.createElement("div")
    let img  = document.createElement("img")
    let h2  = document.createElement("h2")
    let p  = document.createElement("p")
    let b  = document.createElement("b")

    div.classList.add("product")
    img.src=thumbnail
    h2.innerHTML = title
    p.innerHTML = description
    b.innerHTML = price
    

    div.appendChild(img)
    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(b)

    return div
}
let winYodhhrouLesporduits =  document.querySelector(".products")

function afficherProducts(products){
    winYodhhrouLesporduits.innerHTML =""
    for (product of products){
        winYodhhrouLesporduits.innerHTML += createProduct(product)
    }
}
function afficherProducts2(products){
    winYodhhrouLesporduits.innerHTML =""
    for (product of products){
        let elElement = createProduct2(product)
        winYodhhrouLesporduits.appendChild(elElement)
    }
}


afficherProducts2(products.slice(0,9))


let afficherLiA9alMel10Dinar = ()=>{
    afficherProducts2(products.filter(({price})=>price<50))
}


let btnPrix = document.querySelector("#btnprix")


//btnPrix.onclick = afficherLiA9alMel10Dinar