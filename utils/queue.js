class Queue {
  constructor() {
    this.queue = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.queue[this.rear] ? this.rear - this.front + 1 : 0;
  }

  add(value) {
    if (!this.size()) {
      this.queue[0] = value;
      return;
    }
    this.rear++;
    this.queue[this.rear] = value;
  }

  pop() {
    let temp;
    temp = this.queue[this.front];
    delete this.queue[this.front];

    if (this.size() === 1) {
      this.front = 0;
      this.rear = 0;
      return temp;
    }

    this.front += 1;
    return temp;
  }
}
