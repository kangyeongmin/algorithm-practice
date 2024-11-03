function solution(sticker) {
    var answer = 0
    const length = sticker.length
    
    if (length==1) return sticker[0]
    
    const dp1 = [...Array(length)].map(() => 0)
    const dp2 = [...Array(length)].map(() => 0)
    
    sticker.forEach((s, i) => {
        if (i==0) dp1[i] = s
        else if (i==1) dp1[i] = dp1[0]
        else if (i==length-1) return
        else dp1[i] = Math.max(dp1[i-1], dp1[i-2] + s)
    })
    
    sticker.forEach((s, i) => {
        if (i==0) dp2[i] = 0
        else if (i==1) dp2[i] = s
        else dp2[i] = Math.max(dp2[i-1], dp2[i-2] + s)
    })
    
    return dp1[length-2] >= dp2[length-1] ? dp1[length-2] : dp2[length-1] 
}