var myCart = [];
if (sessionStorage.myCart != null) {
    myCart = JSON.parse(sessionStorage.myCart);
}
if (sessionStorage.shoppingcartamount != null) {
    document.getElementById("shoppingcartnav").innerHTML = "Varukorg (" + JSON.parse(sessionStorage.shoppingcartamount) + ")";
}

function freeshipping(x) { //toggles free shipping popup
    document.getElementById("freeshipping").style.display = x;
}
