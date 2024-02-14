function solution(routes) {
    var answer = 1;
    routes = routes.sort((a,b) => a[1] - b[1])
    let max = routes[0][1]
    
    for(const route of routes){
        if(max < route[0]) {
            max = route[1]
            answer++
        }
    }
    
    return answer;
}