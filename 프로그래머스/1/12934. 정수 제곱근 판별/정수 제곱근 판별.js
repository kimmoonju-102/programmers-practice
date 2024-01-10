function solution(n) {
    if (n === 1) return 4;  // 1은 양의 정수 1의 제곱이므로 2^2 = 4를 리턴
    
    for (let i = 1; i <= n / 2; i++) {
        if (i * i === n) {
            return (i + 1) * (i + 1);  // n이 양의 정수 i의 제곱이라면 (i+1)^2를 리턴
        }
    }
    
    return -1;  // 양의 정수 i의 제곱이 아니면 -1을 리턴
}