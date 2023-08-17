function getNumber(array,sum){
    for(let i=-0; i<array.length; i++)
    {
        for(var j=i+1; j<array.length; j++)
        {
            if(array[i]+array[j]===sum){
                return[sum];
            }
        }
    }
    return"no matching found"
}

console.log(getNumber([1,2,3,4,5],9))
