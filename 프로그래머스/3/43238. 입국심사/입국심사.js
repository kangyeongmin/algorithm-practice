function solution(n, times) {
    times = times.sort((a,b) => a-b)
    const length = times.length
    let max = times[length - 1]*n
    let min = times[0]
    
    while(min<=max){
        let mid = Math.floor((max + min)/2)
        let temp = 0
        
        for(let i=0; i<length; i++){
            temp +=  Math.floor(mid / times[i])
            if(temp > n) break
        }
        
        if(temp < n){
            min = mid + 1
        }
        else {
            max = mid - 1
        }
    }
    return min;
}