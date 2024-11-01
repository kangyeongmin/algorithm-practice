function timeToArray(time) {
  return time.split(":").map((x) => Number(x));
}

function inRange(mm_start, mm, mm_end, ss_start, ss, ss_end) {
  // 분이 다 같을때를 체크하는 것이 어려웠음.
  if (mm_start == mm_end && mm_start == mm)
    return ss_start <= ss && ss <= ss_end;

  if (mm == mm_start) return ss_start <= ss;
  if (mm_start < mm && mm < mm_end) return true;
  if (mm == mm_end) return ss <= ss_end;

  return false;
}

function solution(video_len, pos, op_start, op_end, commands) {
  let [mm, ss] = timeToArray(pos);
  let [mm_start, ss_start] = timeToArray(op_start);
  let [mm_end, ss_end] = timeToArray(op_end);
  let [mm_limit, ss_limit] = timeToArray(video_len);

  if (inRange(mm_start, mm, mm_end, ss_start, ss, ss_end)) {
    mm = mm_end;
    ss = ss_end;
  }

  commands.forEach((command) => {
    if (command === "next") {
      ss += 10;
      if (ss > 59) {
        mm += 1;
        ss -= 60;
      }
      if ((mm == mm_limit && ss > ss_limit) || mm > mm_limit) {
        mm = mm_limit;
        ss = ss_limit;
      }

      if (inRange(mm_start, mm, mm_end, ss_start, ss, ss_end)) {
        mm = mm_end;
        ss = ss_end;
      }
    } else if (command === "prev") {
      ss -= 10;
      if (ss < 0) {
        mm -= 1;
        ss += 60;
      }
      if (mm < 0) {
        mm = 0;
        ss = 0;
      }

      if (inRange(mm_start, mm, mm_end, ss_start, ss, ss_end)) {
        mm = mm_end;
        ss = ss_end;
      }
    }
  });

  return [mm, ss].map((x) => String(x).padStart(2, "0")).join(":");
}
