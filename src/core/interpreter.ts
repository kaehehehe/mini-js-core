import { createExecutionContext } from "./executionContext";
import { CallStack } from "./callStack";

// CallStack 인스턴스
const callStack = new CallStack();

function simulateFunction(name: string, fn: () => void) {
  const context = createExecutionContext(name, "function", {});
  callStack.push(context);

  console.log(`[RUN] ${name} 실행 시작`);
  fn();
  console.log(`[RUN] ${name} 실행 종료`);

  callStack.pop();
}

// 글로벌 컨텍스트 생성
function simulateGlobal() {
  const globalContext = createExecutionContext(
    "GlobalContext",
    "global",
    globalThis
  );
  callStack.push(globalContext);

  console.log("[RUN] GlobalContext 실행 시작");

  simulateFunction("foo", () => {
    simulateFunction("bar", () => {
      // bar 내부
    });
  });

  console.log("[RUN] GlobalContext 실행 종료");
  callStack.pop();
}

simulateGlobal();
