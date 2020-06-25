function findLeaders(leadersteps){
    
    var rightMostElement = leadersteps[leadersteps.length-1];
    var leadersArray = [rightMostElement];
    
    for(var i = leadersteps.length-1; i >= 0; i--){
    
        if(leadersteps[i] > rightMostElement) {
            rightMostElement = leadersteps[i];
            leadersArray.push(leadersteps[i])      
        }
    }
    
    return leadersArray;
}

module.exports = findLeaders