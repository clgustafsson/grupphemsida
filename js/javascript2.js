if (sessionStorage.shoppingcartamount != null) {
    document.getElementById("shoppingcartnav").innerHTML = "Varukorg (" + JSON.parse(sessionStorage.shoppingcartamount) + ")";
}
var myCart = [];
if (sessionStorage.myCart != null) {
    myCart = JSON.parse(sessionStorage.myCart);
}

function freeshipping(x) { //toggles free shipping popup
    document.getElementById("freeshipping").style.display = x;
}

function addtocart(name, price, inputname) { //adding item to shoppingcart
  if (document.getElementById(inputname).validity.valid == true) {
    var found = false;
    var amount = Math.abs(document.getElementById(inputname).value);
    myCart.forEach(function (item) {
        if (item[0] == name) {
            item[1] += amount;
            item[3] = parseInt(item[1]) * parseInt(price);
            found = true;
        }
    });
    if (!found) {
        var totalproductprice = price * amount;
        myCart.push([name, amount, price, totalproductprice]);
    }
    var shoppingcartamount = 0;
    myCart.forEach(function (item) {
        shoppingcartamount += item[1];
    });
    document.getElementById("shoppingcartnav").innerHTML = "Varukorg (" + shoppingcartamount + ")";
    sessionStorage.shoppingcartamount = shoppingcartamount;
    sessionStorage.myCart = JSON.stringify(myCart);
  }
}
