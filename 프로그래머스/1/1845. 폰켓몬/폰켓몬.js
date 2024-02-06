function solution(nums) {
    const uniqueNums = new Set(nums);
    const maxPick = nums.length/2
    
    if (uniqueNums.size >= maxPick) {
        return maxPick;
    } else { 
        return uniqueNums.size;
    }
}

// 우선 중복되는 번호 제거
// 선택할 수 있는 최대 폰켓몬 수 = N/2
// 만약 선택할 수 있는 폰켓몬 종류가 N/2 이상이라면, 최대한 다양한 종류를 선택할 수 있음
// 선택할 수 있는 폰켓몬 종류가 N/2 보다 적다면, 중복을 제거한 종류의 수가 최대 선택 가능한 종류의 수