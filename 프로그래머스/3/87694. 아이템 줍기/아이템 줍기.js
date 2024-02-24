function solution(rectangle, characterX, characterY, itemX, itemY) {
  let [minX, minY, maxX, maxY] = rectangle[0];
  rectangle.forEach((r) => {
    const [x1, y1, x2, y2] = r;
    if (x1 < minX) minX = x1;
    if (y1 < minY) minY = y1;
    if (x2 > maxX) maxX = x2;
    if (y2 > maxY) maxY = y2;
  });
  const board = Array.from({ length: maxY + 1 }, (_) =>
    Array.from({ length: maxX + 1 }, (_) => 0)
  );
  const points = Array.from({ length: maxY + 1 }, (_) =>
    Array.from({ length: maxX + 1 }, (_) => [])
  );

  // step1. 도형따라 선그리기
  for (let k = 0; k < rectangle.length; k++) {
    const [x1, y1, x2, y2] = rectangle[k];
    for (let i = x1; i <= x2; i++) {
      board[y1][i] = 1;
      board[y2][i] = 1;
      points[y1][i].push(k);
      points[y2][i].push(k);
    }
    for (let j = y1 + 1; j < y2; j++) {
      board[j][x1] = 1;
      board[j][x2] = 1;
      points[j][x1].push(k);
      points[j][x2].push(k);
    }
  }

  // step2. 도형 내부에 있는 선 지우기
  for (const r of rectangle) {
    const [x1, y1, x2, y2] = r;
    for (let i = x1 + 1; i < x2; i++) {
      for (let j = y1 + 1; j < y2; j++) {
        if (board[j][i] === 1) board[j][i] = 0;
      }
    }
  }

  // step3. bfs 시작
  const queue = [[characterX, characterY, 0]];
  while (queue.length) {
    const [x, y, result] = queue.shift();
    if (x == itemX && y == itemY) return result;
    board[y][x] = 0;
    if (x - 1 >= minX && board[y][x - 1] && isSame([x, y], [x - 1, y]))
      queue.push([x - 1, y, result + 1]);
    if (x + 1 <= maxX && board[y][x + 1] && isSame([x, y], [x + 1, y]))
      queue.push([x + 1, y, result + 1]);
    if (y - 1 >= minY && board[y - 1][x] && isSame([x, y], [x, y - 1]))
      queue.push([x, y - 1, result + 1]);
    if (y + 1 <= maxY && board[y + 1][x] && isSame([x, y], [x, y + 1]))
      queue.push([x, y + 1, result + 1]);
  }

  // 같은 도형의 선상인지, 다른 도형에 덮여있는 선인지 확인하는 함수
  function isSame(start, end) {
    if (
      points[start[1]][start[0]].length > 1 &&
      points[end[1]][end[0]].length > 1
    ) {
      if (
        JSON.stringify(points[start[1]][start[0]]) ===
        JSON.stringify(points[end[1]][end[0]])
      )
        return false;
    }

    for (const r of rectangle) {
      const [x1, y1, x2, y2] = r;
      if (
        start[1] === end[1] &&
        (y1 === start[1] || y2 === start[1]) &&
        x2 >= start[0] &&
        x1 <= start[0] &&
        x2 >= end[0] &&
        x1 <= end[0]
      ) {
        return true;
      }
      if (
        start[0] === end[0] &&
        (x1 === start[0] || x2 === start[0]) &&
        y2 >= start[1] &&
        y1 <= start[1] &&
        y2 >= end[1] &&
        y1 <= end[1]
      ) {
        return true;
      }
    }
    return false;
  }
}
