
let products = prods.products


let minprice = document.querySelector("#minprice")
let maxprice = document.querySelector("#maxprice")
let starsDiv = document.querySelector("#stars")

let starFilrer = ()=>{
    let stars = [1,2,3,4,5]
    stars.map((star)=>{
        let span = document.createElement("span")
        span.innerHTML = '&star;';
        span.id = `start-${star}`
        span.onclick = (e)=>{
            for(s of starsDiv.children)
               s.innerHTML = `&star;`
            for (s of starsDiv.children ){
                if (s.id <= e.target.id)
                    s.innerHTML = `&starf;`
            }
            afficherProducts(products.filter(p=>Math.round(p.rating)==e.target.id.split("-")[1]))
        }
        starsDiv.appendChild(span)
    })
}
starFilrer()
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
    let { id, title , description, price, thumbnail,rating } = product
    let stars = ''
    console.log(Math.floor(rating))
    for ( star of Array.from(Array(Math.floor(rating))))
        stars +='&starf;'
    for (star of Array.from(Array(Math.floor(6 - rating))))
        stars += '&star;'

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
    <span>${stars}</span>
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


afficherProducts(products.slice(0,9))


let afficherLiA9alMel10Dinar = ()=>{
    afficherProducts2(products.filter(({price})=>price<50))
}


let btnPrix = document.querySelector("#btnprix")


//btnPrix.onclick = afficherLiA9alMel10Dinar