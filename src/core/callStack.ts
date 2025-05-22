import type { ExecutionContext } from "./executionContext";

export class CallStack {
  private stack: ExecutionContext[] = [];

  push(context: ExecutionContext) {
    this.stack.push(context);
    this.log();
  }

  pop() {
    const popped = this.stack.pop();
    this.log();
    return popped;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  log() {
    console.log(
      "[CallStack]",
      this.stack.map((ctx) => ctx.name)
    );
  }
}
