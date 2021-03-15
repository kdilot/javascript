function solution(A) {
  const resultArray = [];

  //  타임아웃 (for문 안에 slice, reduce 사용)
  for (let i = 1; i < A.length; i++) {
    resultArray.push(Math.abs(A.slice(0, i).reduce((a, b) => a + b) - A.slice(i, A.length).reduce((a, b) => a + b)));
  }

  return Math.min(...resultArray);
}

//  ===========================================================

//  시간복잡도 반영
function solution(A) {
  const sum = A.reduce((a, b) => a + b, 0);
  let left = 0;
  let right = sum;
  const resultArray = [];

  //  for문 안에서 계산하던 합계를 미리 계산
  for (let i = 0; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];
    resultArray.push(Math.abs(left - right));
  }

  return Math.min(...resultArray);
}

solution([3, 1, 2, 4, 3]);
