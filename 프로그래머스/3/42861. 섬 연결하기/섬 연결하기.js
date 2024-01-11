function solution(n, costs) {
    var answer = 0;
    let parent = Array.from({length: n}, (_, i) => i)
    costs = costs.sort((a,b) => a[2] - b[2])
    
    for(const costArr of costs){
        const [a,b,cost] = costArr
        if(parent[a] === parent[b]) continue
        
        if(parent.filter((p) => p === parent[b]).length >
           parent.filter((p) => p === parent[a]).length) {
            parent = parent.map((p) => p === parent[a] ? p = parent[b] : p)
        }
        else {
            parent = parent.map((p) => p === parent[b] ? p = parent[a] : p)
        }
        answer += cost
    }
    
    return answer;
}