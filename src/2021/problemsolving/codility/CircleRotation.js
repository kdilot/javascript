function solution(A, K) {
  if (A.length === 0 || K === 0) return A;
  //  빈배열 입력이 가능해서 조건추가

  let arr = [...A];

  for (let i = 0; i < K; i++) {
    const rotate = arr.pop();
    arr = [rotate, ...arr];
  }

  return arr;
}
