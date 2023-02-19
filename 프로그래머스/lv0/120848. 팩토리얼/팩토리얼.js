function solution(n) {
    var answer = 0;
    return answer;
}

function solution(n) {
    let ans = 1;

    for(let i = 1; i <= n; i++){
        ans *= i;
        
        if(ans === n){
            return i;
        }
        
        if(ans > n){
            return i - 1;
        }
    }
}