function solution(word) {
    var answer = 0;
    const DICT = ['A', 'E', 'I', 'O', 'U'];
    let isDone = false;
    
    function concatWord(str) {
        if(str.length > 5 || isDone) return;

        if(str === word){
            isDone = true
            return
        }
        
        answer++
        
        for(let i=0; i<5; i++){
            concatWord(str+DICT[i])
        }
    }
    
    concatWord('')
    
    return answer;
}