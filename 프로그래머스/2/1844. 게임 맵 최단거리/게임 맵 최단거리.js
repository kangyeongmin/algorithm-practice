// dfs 
// function solution(maps) {
//     var answer = 0;
//     let distance = 1;
//     const n = maps[0].length
//     const m = maps.length
//     const flags = Array.from({ length: m }, (_) => Array.from({ length: n }, (_) => false));
    
//     function dfs(pos) {
//         const [x, y] = pos
//         let isMove = false
//         console.log(pos)
        
//         if(x === n-1 && y === m-1) {
//             answer = distance
//             console.log('도착')
//             return
//         }
        
//         // 오른쪽
//         if(x < n - 1 && maps[y][x+1] && !flags[y][x+1]){
//             distance++
//             flags[y][x+1] = true
//             isMove = true
//             console.log(pos, '오른쪽', distance)
//             dfs([x+1, y])
//         }
//         // 아래
//         if(y < m - 1 && maps[y+1][x] && !flags[y+1][x]){
//             distance++
//             flags[y+1][x] = true
//             isMove = true
//             console.log(pos, '아래쪽', distance)
//             dfs([x, y+1])
//         } 
//         // 위
//         if(y !== 0 && maps[y-1][x] && !flags[y-1][x]){
//             distance++
//             flags[y-1][x] = true
//             isMove = true
//             console.log(pos, '위', distance)
//             dfs([x, y-1])
//         }
//         // 왼쪽
//         if(x !== 0 && maps[y][x-1] && !flags[y][x-1]){
//             distance++
//             flags[y][x-1] = true
//             isMove = true
//             console.log(pos, '왼쪽', distance)
//             dfs([x-1, y])
//         }
        
//         if(!isMove && answer === 0) {
//             answer = -1
//         }
//     }
    
//     // dfs 시작
//     flags[0][0] = true
//     dfs([0,0])
    
//     return answer;
// }

// bfs
function solution(maps) {
    const n = maps[0].length - 1;
    const m = maps.length - 1;
    const queue = [[0,0,1]];
    while (queue.length) {
        const [x,y,move] = queue.shift();
        if (x == n && y == m) return move;
        if (!maps[y][x]) continue;
        maps[y][x] = false;
        if (x-1 >= 0 && maps[y][x-1]) queue.push([x-1,y,move+1]);
        if (x+1 <= n && maps[y][x+1]) queue.push([x+1,y,move+1]);
        if (y-1 >= 0 && maps[y-1][x]) queue.push([x,y-1,move+1]);
        if (y+1 <= m && maps[y+1][x]) queue.push([x,y+1,move+1]);
    }
    return -1;
}