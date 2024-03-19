function isPrime(N) {
  // 1은 소수가 아니다.
  if (N === 1) return false;
  // 2부터 N제곱근까지의 수로 N을 나눴을 때
  for (let i = 2; i <= Math.sqrt(N); i++) {
    // 나누어 떨어지는 경우가 한 번이라도 있으면 N은 소수가 아니다.
    if (N % i === 0) return false;
  }
  // 모두 나누어 떨어지지 않으면 N은 소수이다.
  return true;
}

function solution(n, k) {
    var answer = 0;
    const str = []
    
    while(n/k !== 0){
        str.push(n%k)
        n = Math.floor(n/k)
    }
    const arr = str.reverse()

    let word = []
    // console.log(arr)
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0) {
            const num = Number(word.join(''))
            if(num === 1 || num === 0) {
                word = []
                continue
            }
            else if(isPrime(num)){
                // console.log(i, num)
                answer++
                word = []
            }
            continue
        }
        word.push(arr[i])
        if(i===arr.length-1){
            const num = Number(word.join(''))
            if(num === 1 || num === 0) {
                word = []
                continue
            }
            else if(isPrime(num)){
                // console.log(i, num)
                answer++
                word = []
            }
        }
    }

    
    return answer;
}