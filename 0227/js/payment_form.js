var dataList = {
    "Comfort Sleeper" : "650",
    "Morgan Kids Bed " : "975",
    "Entertainment Cabinet" : "480",
}

var productTag = document.getElementById("product_name")
for (p_name in dataList) {
    console.log(p_name)
    productTag.innerHTML += `<option value="${p_name}">${p_name}</option>`
}

var priceTag = document.getElementById("product_price")
function changeProduct() {
	var value = productTag.value
    console.log(dataList[value])

    // priceTag.innerHTML = '<input type="number" value="0" readonly></input>'
    if (value != "") {
        var productPrice = dataList[value]
        priceTag.value = productPrice
    }
}

var quantityTag = document.getElementById("quantity")
var totalPriceTag = document.getElementById("total_price")
function updateTotalPrice() {
    price = priceTag.value
    quantity = quantityTag.value
    
    totalPriceTag.value = price * quantity
}

var ccList = [
    "VISA",
    "Master Card",
    "American Express",
]
var ccTag = document.getElementById("cc_card")
    console.log(ccList)

    for (var i = 0; i < ccList.length; i++) {
        console.log(ccList[i])
        ccTag.innerHTML += `<option value="${ccList[i]}">${ccList[i]}</option>`
    }
    
    // ccTag.innerHTML += `<option value="${cc_name}">${cc_name}</option>`
