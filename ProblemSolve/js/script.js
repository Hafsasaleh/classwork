function larg(n1,n2,n3){
    if(n1>n2>n3){
        return n1+"is largest number";
    }
    else if(n2>n1>n3){
        return n2+"is largest number";
    }
    else if(n3>n1>n2){
        return n3+"is largest number";
    }
    else{
        return "error"
    }

}
console.log(larg(1,2,3))