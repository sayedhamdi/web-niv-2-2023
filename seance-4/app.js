
let products = prods.products


function afficher(){    
    products.forEach(prod =>{
        document.body.innerHTML+="<li>"+prod.brand + "</li>"
    })
}

afficherFilters()
afficher()