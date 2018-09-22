module.exports = function longestConsecutiveLength(array) {
  // your solution here
  array.sort(function(a, b){
        return a-b;
    });
    var result = [];
    result[array.length-1] = 1;
    for(let i=0; i<result.length;i++){
        result[i]=1;
    }
    var numberpos=0;
    if(array.length==1) result = [1];
    else
    for(var i=0; i<array.length-1; i++){
        
        if(array[i+1]-array[i]==1)
            result[numberpos]++;
        else{
            numberpos++;
        }
    }
    function getMaxOfArray(numArray){
        return Math.max.apply(null, numArray);
    }
    if(array.length>0)
        return getMaxOfArray(result);
    else return false;
}
