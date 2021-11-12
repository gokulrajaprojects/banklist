let curBal=3080;
let depsoit=5020;
let withdraw=1180;
let username;
let pass
let movements = document.querySelector('.movement');

//Login 
document.querySelector(".login-btn",).addEventListener('click',function(){
    username = document.querySelector('#user').value;
    pass = document.querySelector('#pass').value;
    if(username != "" && pass != undefined){
        document.querySelector("#display").classList.toggle('hidden');
        document.querySelector('#user').value = "";
        document.querySelector('#pass').value = "";
        document.querySelector('.welcome').textContent =`Welcome back ${username} 😇`;
    }
    
    
});

//Close Account
document.querySelector("#close-btn",).addEventListener('click',function(){
    let userclose = document.querySelector('#c-to').value;
    let pin = document.querySelector('#c-pin').value;
   
    if(userclose == username && pin==pass){
        document.querySelector("#display").classList.toggle('hidden');
        document.querySelector('#c-to').value = "";
        document.querySelector('#c-pin').value = "";
        document.querySelector('.welcome').textContent =`Log in to get started`;
    }
    else{
        document.querySelector('#c-to').value = "";
        document.querySelector('#c-pin').value = "";
    }
    // arr.map((value, index) => console.log(`${value} ${index+1}`));
});
let def = 8;
//Transfer
document.querySelector('#trs').addEventListener('click',function(){
    let to = document.querySelector('#t-to').value
    let amt = document.querySelector('#t-amt').value
    amt=Number(amt);
    curBal-=amt;
    withdraw+=amt;
    document.querySelector('.cur-bal').textContent=curBal;
    document.querySelector('#out').textContent=withdraw
    document.querySelector('#t-to').value = "";
    document.querySelector('#t-amt').value = "";

    let div = document.createElement("div");
    movements.appendChild(div);
    var addd = `${def+1} WITHDRAWL`;
    let child = document.querySelector('.movement').children[def];
    child.classList.add('movements-row');
    child.classList.add('new');
    console.log(document.querySelector('.new').children.length)

});

//Loan
document.querySelector('#add').addEventListener('click',function(){
    let amt = document.querySelector('#r-to').value;
    amt=Number(amt);
    curBal+=amt;
    depsoit+=amt;
    document.querySelector('.cur-bal').textContent=curBal;
    document.querySelector('#in').textContent=depsoit;
    document.querySelector('#r-to').value = "";
    
});







