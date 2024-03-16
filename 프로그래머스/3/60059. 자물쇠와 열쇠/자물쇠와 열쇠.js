// 시계방향으로 90도 회전
function rotate(key) {
    const rotatedKey = []
    for(let i=0; i<key.length; i++){
        const rotatedRow = []
        for(const row of key){
            rotatedRow.push(row[i])
        }
        rotatedKey.push(rotatedRow.reverse())
    }
    return rotatedKey
}

// 확장된 부분은 0이든 1이든 상관없는 숫자 2로 만듦
function makeExpandedLock(key, lock) {
    const expandedLock = []
    const expandedLength = (key.length-1)*2 + lock.length
    
    for(let i=0; i<key.length-1; i++){
        expandedLock.push([...Array(expandedLength)].map((_) => 2))
    }
    for(let i=0; i<lock.length; i++){
        const row = [...Array(key.length-1)].map((_) => 2)
        for(let j=0; j<lock[i].length; j++){
            lock[i][j] === 1 ? row.push(0) : row.push(1)
        }
        [...Array(key.length-1)].forEach((_) => row.push(2))
        expandedLock.push(row)
    }
    for(let i=0; i<key.length-1; i++){
        expandedLock.push([...Array(expandedLength)].map((_) => 2))
    }
    return expandedLock
}

function check(key, lock, startX, startY) {
    let right = 0
    for(let i=startX; i<startX + key.length; i++){
        for(let j=startY; j<startY + key.length; j++){
            if(lock[j][i] === 2) continue
            if(lock[j][i] === key[j-startY][i-startX]) {
                lock[j][i] === 1 && right++
            }
            else {
                return -1
            }
        }
    }
    return right
}

function open(key, lock, target) {
    const length = lock.length - key.length + 1
    // console.log(length)
    for(let i=0; i<length; i++){
        for(let j=0; j<length; j++){
            // console.log(i, j)
            if(target === check(key, lock, i, j))
                return true
        }
    }
    return false
}

function solution(key, lock) {
    let target = 0
    for(const row of lock){
        for(const value of row){
            value === 0 && target++
        }
    }
    
    const expandedLock = makeExpandedLock(key, lock)
    for(let i=0; i<4; i++){ 
        key = rotate(key)   
        if(open(key, expandedLock, target))
            return true
    }
    
    return false
}