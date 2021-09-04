let productList=["Sony Xperia","Samsung Galaxy","Nokia 6","Xiaomi Redmi Node 4","Apple iPhone 6S","Xiaomi Mi 5s Plus","Apple Iphone 8 Plus","Fujitsu F-04E","Oppo A71"];
function showAllProduct(){
let content="";
for(let i=0;i<productList.length;i++){
    content+=' <tr>\n' +
        '        <td>'+productList[i]+'</td>\n' +
        '        <td><button onclick="editProduct('+i+')">Edit</button></td>\n' +
        '        <td><button onclick="deleteProduct('+i+')">Delete</button></td>\n' +
        '    </tr>'
}
document.getElementById("products").innerHTML=content;
document.getElementById("sum").innerText=productList.length+"products"
}
showAllProduct();
function addNewProduct(){
    let newP=document.getElementById("newProduct").value;
    productList.push(newP);
    showAllProduct();
    document.getElementById("newProduct").value="";
}
function deleteProduct(index){
    productList.splice(index,1);
    showAllProduct();
}
function editProduct(index){
    let editP=prompt("What Product want to edit?",productList[index]);
    productList[index]=editP;
    showAllProduct();
}