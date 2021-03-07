//  Climbing the Leaderboard

const func = (scores, alice) => {
  const aliceRank = [];

  // Timeout
  // alice.forEach((score) => {
  //     const newRank = [...new Set([...scores, score])].sort((a, b) => b - a);
  //     const index = newRank.findIndex((rank) => rank === score);
  //     aliceRank.push(index + 1);
  // })

  const newRank = [...new Set([...scores])].sort((a, b) => b - a);
  for (const aliceScore of alice) {
    while (aliceScore >= newRank[newRank.length - 1]) {
      newRank.pop();
    }
    aliceRank.push(newRank.length + 1);
  }

  return aliceRank;
};

func([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]);
