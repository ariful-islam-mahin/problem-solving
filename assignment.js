// feet to mile converter
function feetToMile(feet){
    var mile = feet / 5280;
    if(feet < 0){
        return "negative value is can't be accepted";
    }
    return mile;
}
 
// wood calculator
function woodCalculator(chair, table, bed){
    var total =(chair * 1 + table * 3 + bed * 5);
    return total;
}

// brick calculator
function brickCalculator(floor) {
    var brick = 1000; 
    if(floor > 20){
      return (10 * 15 * brick) + (10 * 12 * brick) + ((floor - 20) * 10 * brick);
   }
     else if(floor > 10 && floor <= 20) {
       return (10 * 15 * brick) + ((floor - 10) * 12 * brick);
     }
     else{
        return (floor * 15 * brick);
     }  
}

// tiny friend
function tinyFriend(name){
    var tinyName = name[0];
    for(i = 0; i < name.length; i++){
        var element = name[i];
        if(element < tinyName){
            tinyName = element;
        }
    }
    return tinyName;
}
