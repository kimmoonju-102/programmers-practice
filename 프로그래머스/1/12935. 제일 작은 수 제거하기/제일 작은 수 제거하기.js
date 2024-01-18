function solution(arr) {
    var answer = [];
    if (arr.length === 1){
        return[-1]
    };
    const min = Math.min(...arr);
    return arr.filter((n) => n !== min);
}

// arr은 길이 1이상인 배열이니깐 1보다 작으면 -1을 리턴한다.
// 배열을 최소값을 찾아서 삭제해준다.
