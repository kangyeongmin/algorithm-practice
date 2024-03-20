function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

const discount = [40, 30, 20, 10]

function purchase(person, emoticonsCase, emoticons){
    const [discount, budget] = person
    let sum = 0
    let plus = 0
    for(let i=0; i<emoticonsCase.length; i++){
        if(discount <= emoticonsCase[i]){
            sum += emoticons[i] * (100 - emoticonsCase[i]) / 100
        }
    }
    
    if(sum >= budget){
        sum = 0
        plus = 1
    }
    return [sum, plus]
}

function solution(users, emoticons) {
    const emoticonsCases = permutation(discount, emoticons.length)
    const results = []
    // console.log(emoticonsCases)
    for(const emoticonsCase of emoticonsCases){
        let plus = 0
        let price = 0
        
       
        for(const user of users){
            const [userPrice, userPlus] = purchase(user, emoticonsCase, emoticons)
            plus += userPlus
            price += userPrice
        }
        // console.log(JSON.stringify(emoticonsCase))
        
        results.push([plus, price])
    }
    
    // console.log(emoticonsCases)
    
    results.sort((a,b) => a[0]===b[0] ? b[1] - a[1] : b[0] - a[0])   
    // console.log(results)
    
    return results[0];
}