function solution(s) {
    var answer = '';
    const result = s.split(' ');
    
    const result2 = result.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    
    answer = result2.join(' ')
    return answer;
}

// 문자열 띄어쓰기 공백을 기준으로 나누어 배열 값으로 변환
// 단어의 첫번째 글자만 대문자로 변화해주는 기능
// 다시 배열을 문자열로 변환