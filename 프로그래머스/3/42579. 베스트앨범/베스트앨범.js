function solution(genres, plays) {
    var answer = [];
    const playlist = {}
    const order = []
    
    for(let i=0; i<genres.length; i++){
        if(!playlist[genres[i]]){
            playlist[genres[i]] = []
        }
        
        playlist[genres[i]].push([plays[i],i])
    }
//     Object.keys(playlist).map((genre) => {
        
//     })

    Object.keys(playlist).map((genre, index) => {
        const sum = playlist[genre].reduce((accumulator, currentValue) => accumulator                     + currentValue[0], 0,);
        order.push([genre, sum])
        playlist[genre] = playlist[genre].sort((a,b) => {
            if(b[0] === a[0]) return a[1] - b[1] 
            return b[0]-a[0]
        })
    })
    
    order.sort((a,b) => b[1] - a[1])
    order.forEach((best) => {
        answer.push((playlist[best[0]][0][1]))
        if(playlist[best[0]][1])
            answer.push((playlist[best[0]][1][1]))
    })
    
    // console.log(playlist, order)
    
    return answer;
}