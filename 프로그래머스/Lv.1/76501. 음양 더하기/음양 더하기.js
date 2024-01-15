function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i<absolutes.length; i++) {
        if(signs[i] === true) {
            answer += absolutes[i];
        }else {
            answer += (-1) * absolutes[i];
        }
    }
    return answer;
}

// 길이 비교
// 만약 불리언 값이 true면 answer에 absolutes배열을 담고 아니면 absolutes배열에 -1 곱해서 answer에 담아줘 그리고 return;