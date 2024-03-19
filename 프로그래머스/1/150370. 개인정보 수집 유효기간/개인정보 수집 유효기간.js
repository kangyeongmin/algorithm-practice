// 모든 달은 28일


function solution(today, terms, privacies) {
    var answer = [];
    const [todayYear, todayMonth, todayDate] = today.split('.').map((x) => Number(x))
    const TERMS = {}
    
    for(const term of terms){
        const [type, period] = term.split(' ')
        if(!TERMS[type]) TERMS[type] = Number(period)
    }
    
    let index = 1
    for(const privacy of privacies){
        const [agree, type] = privacy.split(' ')
        const [year, month, date] = agree.split('.').map((x) => Number(x))
        let months = 0; 
        // console.log(todayDate.getUTCFullYear(), agreeDate.getUTCFullYear())
        if(todayYear > year)
            months += (todayYear - year) * 12
        
        // console.log(todayDate.getUTCMonth(), agreeDate.getUTCMonth())
        todayMonth >= month ? 
            months += todayMonth - month :   
            months -= month - todayMonth
        
        let days = months * 28
        todayDate > date ? 
            days += todayDate - date :
            days -= (date - todayDate)
        
        // console.log(days)
        if(days >= TERMS[type]*28) answer.push(index)
        index++
    }
    
    return answer.sort((a,b) => a-b);
}