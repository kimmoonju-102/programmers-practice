function solution(price) {
    if(price >= 500000) {
        return Math.floor(price * 0.8); //80%
    }
    if(price >= 300000) {
        return Math.floor(price * 0.9); //10%
    }
    if(price >= 100000) {
        return Math.floor(price * 0.95); //5%할인
    }
    return price;
}

//소수점 이하 버리기 => Math.floor() 사용하기
//return 순서도 생각하기 => 50만원이면 바로 끝낼 수 있으니 앞에다가 코드 작성
