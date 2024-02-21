function solution(begin, target, words) {
  const queue = [[begin, 0, words]];

  while (queue.length) {
    const [now, count, rest] = queue.shift();
    if (now === target) return count;

    for (let i = 0; i < rest.length; i++) {
      let different = 0;
      rest[i].split("").forEach((w, j) => {
        if (w !== now.split("")[j]) different++;
      });
      if (different === 1) {
        queue.push([
          rest[i],
          count + 1,
          rest.filter((word) => word !== rest[i]),
        ]);
      }
    }
  }
  return 0;
}
