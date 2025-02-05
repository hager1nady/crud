let ProductsList = [
    { name: "iphone", price: 30000, category: "mobile", description: "goood" },
    { name: "realme", price: 6000, category: "mobile", description: "goood" },
    { name: "samsung", price: 40000, category: "mobile", description: "goood" },
    { name: "oppo", price: 9000, category: "mobile", description: "goood" },
    { name: "nokia", price: 7000, category: "mobile", description: "goood" },
    { name: "redmi", price: 8000, category: "mobile", description: "goood" },
]
if (localStorage.getItem("productsList") != null) {
    ProductsList = JSON.parse(localStorage.getItem("productsList"))
}
//////////display products ///////////////////////////////////////
let productsContainer = ''
function displayProducts() {
    for (var i = 0; i < ProductsList.length; i++) {
        productsContainer += `
                 <tr>
                    <td>${i + 1}</td>
                    <td>${ProductsList[i].name}</td>
                    <td>${ProductsList[i].price}</td>
                    <td>${ProductsList[i].category}</td>
                    <td>${ProductsList[i].description}</td>
                    <td> <button onclick="updateProduct(${i})">Update</button>
                    <button onclick="deleteProduct(${i})">Delete</button></td>
                </tr>
        `
    }
    document.getElementById('producTtable').innerHTML = productsContainer
}
displayProducts()
/////////////////// add product //////////////////////////////////
let productName = document.getElementById('productName')
let productPrice = document.getElementById('productPrice')
let productCategory = document.getElementById('productCategory')
let productDescription = document.getElementById('productDescription')
function addProduct() {

    if (validationName() && validationPrice() && validationCategory() && validationDescription()) {
        productsContainer = ''
        let productObj = {
            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            description: productDescription.value
        }
        ProductsList.push(productObj)
        localStorage.setItem("productsList", JSON.stringify(ProductsList))
    }
    clearInputs()
    displayProducts()
}
function clearInputs() {
    productName.value = ''
    productPrice.value = ''
    productCategory.value = ''
    productDescription.value = ''
}
function deleteProduct(index) {
    productsContainer = ''
    ProductsList.splice(index, 1)
    localStorage.setItem("productsList", JSON.stringify(ProductsList))
    displayProducts()
}
function updateProduct(index) {
    productsContainer = ''
    ProductsList[index].name = productName.value || ProductsList[index].name
    ProductsList[index].price = productPrice.value || ProductsList[index].price
    ProductsList[index].category = productCategory.value || ProductsList[index].category
    ProductsList[index].description = productDescription.value || ProductsList[index].description
    localStorage.setItem("productsList", JSON.stringify(ProductsList))
    displayProducts()
}
function searchProduct() {
    let searchInput = document.getElementById('searchInput')
    searchInput.addEventListener("input", function () {
        productsContainer = ''
        for (var i = 0; i < ProductsList.length; i++) {
            if (ProductsList[i].name.includes(searchInput.value)) {
                productsContainer += `
                    <tr>
                       <td>${i + 1}</td>
                       <td>${ProductsList[i].name}</td>
                       <td>${ProductsList[i].price}</td>
                       <td>${ProductsList[i].category}</td>
                       <td>${ProductsList[i].description}</td>
                       <td> <button onclick="updateProduct(${i})">Update</button>
                       <button onclick="deleteProduct(${i})">Delete</button></td>
                   </tr>
                 `
            }
        }
        document.getElementById('producTtable').innerHTML = productsContainer

    })
}
searchProduct()


// Validation Name
function validationName() {
    // اخد البيانات من جوه الحقل
    let inputNameValue = productName.value;
    // اعمل الباتيرن اللي هطبق علبه واقارن بيه
    let regexName = /^[A-Z][a-z]{3,10}$/
    let match = regexName.test(inputNameValue)
    if (match) {
        document.getElementById("hent").innerHTML = "";
        return true
    } else {
        document.getElementById("hent").innerHTML = "Please enter first one capital character and enter from 3 to 10 small character";
        document.getElementById("hent").style.color = "red";
        document.getElementById("hent").style.fontSize = "14px";
        document.getElementById("hent").style.display = "block"
        document.getElementById("hent").style.marginBottom = "10px";
        return false
    }
}
// Validation Price
function validationPrice() {
    let priceInputValue = document.getElementById("productPrice").value
    let regexPrice = /^\d{3,6}$/
    let match = regexPrice.test(priceInputValue);
    if (match) {
        document.getElementById("hentPrice").innerHTML = "";
        return true
    } else {
        document.getElementById("hentPrice").innerHTML = "Please enter from 3 to 8 digits";
        document.getElementById("hentPrice").style.color = "red";
        document.getElementById("hentPrice").style.fontSize = "14px";
        document.getElementById("hentPrice").style.display = "block"
        document.getElementById("hentPrice").style.marginBottom = "10px";
        return false
    }

}

// Validation Category

function validationCategory() {
    let categoryInputValue = document.getElementById("productCategory").value
    let regexCategory = /^[A-z]{3,10}$/
    let match = regexCategory.test(categoryInputValue);
    if (match) {
        document.getElementById("hentCategort").innerHTML = "";
        return true
    } else {
        document.getElementById("hentCategort").innerHTML = "Please enter from 3 to 10 characters capital or small";
        document.getElementById("hentCategort").style.color = "red";
        document.getElementById("hentCategort").style.fontSize = "14px";
        document.getElementById("hentCategort").style.display = "block"
        document.getElementById("hentCategort").style.marginBottom = "10px";
        return false
    }
}


// Validation Description

function validationDescription() {
    let descriptionInputValue = document.getElementById("productDescription").value
    let regexDescription = /^[A-z]{3,100}$/
    let match = regexDescription.test(descriptionInputValue);
    if (match) {
        document.getElementById("hentDesc").innerHTML = "";
        return true
    } else {
        document.getElementById("hentDesc").innerHTML = "Please enter from 3 to 100 characters capital or small";
        document.getElementById("hentDesc").style.color = "red";
        document.getElementById("hentDesc").style.fontSize = "14px";
        document.getElementById("hentDesc").style.display = "block"
        document.getElementById("hentDesc").style.marginBottom = "10px";
        return false
    }
}









































