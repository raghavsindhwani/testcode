//To understand the problem or algo please visit https://www.geeksforgeeks.org/trapping-rain-water/

const trapwater = (numberofblocks) => {
    let len = numberofblocks.length;
    if(!len) return 0; 
    let unitsofwater = 0;
    let left = 0, right = len - 1;
    let maxLeft = 0, maxRight = 0;
    
    while(left<=right){
      if(numberofblocks[left] <= numberofblocks[right]){
        if(numberofblocks[left] >=maxLeft) maxLeft = numberofblocks[left];
        else unitsofwater += maxLeft-numberofblocks[left];
        left++;
      }
      else{
        if(numberofblocks[right] >= maxRight) maxRight = numberofblocks[right];
        else unitsofwater += maxRight-numberofblocks[right];
        right--;
      }        
    }
    return unitsofwater;
  };


module.exports = trapwater;