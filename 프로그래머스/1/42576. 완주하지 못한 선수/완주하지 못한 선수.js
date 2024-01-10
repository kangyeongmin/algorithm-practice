function solution(participant, completion) {
    var answer = '';
    
    let pMap = new Map()
    participant.map((p, i) => {
        let count = 1;
        
        if(pMap.has(p)) {
            count = pMap.get(p) +1
        };
        
        pMap.set(p, count)
    })
    
    completion.map((c, i) => {
        const current = pMap.get(c)
        pMap.set(c, current -1)
        
    })
    Array.from(pMap).map((p) => {
        if(p[1] === 1) answer = p[0]
    })
    return answer;
}