function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(var i=0;i<participant.length;i++) {
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

// participant와 completion 비교해서 배열에서 없는 아이디 찾기 