//  입력값 체크 부족
function solution(A) {
  const positiveList = [...new Set(A.filter((number) => number > 0).sort((a, b) => a - b))];
  if (positiveList.length === 0) return 1;

  for (let i = 0; i < positiveList.length - 1; i++) {
    if (positiveList[i] + 1 !== positiveList[i + 1]) return positiveList[i] + 1;
  }

  return Math.max(...positiveList) + 1;
}

//  ===========================================================

function solution(A) {
  if (A.length === 0) return 1;
  const positiveList = [...new Set(A.filter((number) => number > 0).sort((a, b) => a - b))];
  if (positiveList.length === 0) return 1;

  let smallest = 1;
  for (let i = 0; i < positiveList.length; i++) {
    if (positiveList[i] > smallest) {
      return smallest;
    }
    smallest++;
  }

  return smallest;
}

solution([1, 3, 6, 4, 1, 2]);
