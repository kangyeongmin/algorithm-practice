function calFee(fees, minutes) {
    const [baseTime, baseFee, minTime, minFee] = fees
    
    if(minutes > baseTime){
        return baseFee + (Math.ceil((minutes - baseTime)/minTime))*minFee
    }
    else {
        return baseFee
    }
}

function solution(fees, records) {
    var answer = [];
    const carsIn = {}
    let carsTime = {}
    
    for(let i=0; i<records.length; i++){
        const [time, carNum, state] = records[i].split(' ')
        
        if(state === 'IN') {
            carsIn[carNum] = time.split(':').map((x) => Number(x))
            console.log(time.split(':').map((x) => Number(x)))
        }
        if(state === 'OUT') {
            const [hour, min] = time.split(':').map((x) => Number(x))
            let elapsedTime = (hour - carsIn[carNum][0])*60
            min > carsIn[carNum][1] ? elapsedTime += min - carsIn[carNum][1] : elapsedTime -= (carsIn[carNum][1] - min)

            if(carsTime[carNum]) carsTime[carNum] += elapsedTime
            else carsTime[carNum] = carsTime[carNum] = elapsedTime
            delete carsIn[carNum]
        }
        
    }
    Object.entries(carsIn).forEach((c) => {
        const [hour, min] = c[1]
        let elapsedTime = (23 - hour)*60 + 59 - min
        if(!carsTime[c[0]]) {
            carsTime[c[0]] = elapsedTime
        }
        else {
            carsTime[c[0]] += elapsedTime
        }
    })
    carsTime = Object.entries(carsTime).sort((a,b) => a[0] - b[0])
    carsTime.forEach((c) => answer.push(calFee(fees, c[1])))
    return answer;
}