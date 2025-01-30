let item1 = true
let balance = 10000
let item2 = true
function Template(titler, imager, itemname, price){
    let add = document.getElementById("lister").appendChild(document.createElement("li"));
    add.classList.add("listdesign");

    let heading = add.appendChild(document.createElement("h1"));
    heading.innerText = titler;
    heading.classList.add("listname");

    let image = add.appendChild(document.createElement("img"));
    image.classList.add("icon");
    image.src = imager;

    let button = add.appendChild(document.createElement("button"));
    button.classList.add("button")
    button.innerText = "Remove from cart"
    button.onclick = function() { 
        Remove(add, itemname); 
    };
    localStorage.setItem(itemname, price);
}

function Add() {
    if (item1) {
        Template("Item 1", "image-removebg-preview (5).png", "Item1", 5000);
        item1 = false;
    }
}
function Add1() {
    if (item2) {
        Template("Item 2", "image-removebg-preview (5).png", "Item2", 3000);
        item2 = false;
    }
}
function Remove(item, itemname) {
    item.remove();
    localStorage.removeItem(itemname);
    if (itemname === "Item1") {
        item1 = true;
    } else if (itemname === "Item2") {
        item2 = true;
    }

}

function purchaseall() {
    let cost = 0;
    if (item1 == false && item2 ==false) {
        cost = 8000;
        if (balance<cost) {
            console.log("Insuficient balance: "+balance)
        } else{
        balance = balance -cost
        console.log(" New balance: "+balance)
        }
    } else if (item1 == false && item2 == true) {
        cost = 3000
        if (balance<cost) {
            console.log("Insuficient balance: "+balance)
            
        } else{
        balance = balance -cost
        console.log("New Balance "+balance)
        }
    }else if (item1 == true && item2 == false) {
        cost = 5000
        if (balance<cost) {
            console.log("Insuficient balance: "+balance)
        } else{
        balance = balance -cost
        console.log("New Balance  "+balance)
        }
    } else {
        console.log("You have nothing in your cart")
    }

}