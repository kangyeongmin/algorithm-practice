function solution(cap, n, deliveries, pickups) {
    var answer = 0
    
    while(deliveries[n-1] === 0 && pickups[n-1] === 0){
        deliveries.pop()
        pickups.pop()
        n--
    }
    
    let distance = n
    while(deliveries.length || pickups.length){
        let truck = 0
        while(deliveries.length){
            truck += deliveries.pop()
            if(truck > cap){
                deliveries.push(truck-cap)
                break
            }
        }
        truck = 0
        while(pickups.length){
            truck += pickups.pop()
            if(truck > cap){
                pickups.push(truck-cap)
                break
            }
        }
       
        answer += distance
        distance = Math.max(deliveries.length, pickups.length)
    }

    return answer*2;
}