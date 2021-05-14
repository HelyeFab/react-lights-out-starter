exports.randomlyLit = function(){
    if(Math.floor(Math.random() * 2) === 1)
    { return true} else {
        return false
    }

}



exports.cellIdentifier = function(arr, length){
   for(let i=0; i<length; i++){
       arr.push(i+1)
   }
   return arr
}



// Math.floor(Math.random() * 2)