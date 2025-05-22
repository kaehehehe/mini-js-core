export type ExecutionContextType = "global" | "function";

export interface ExecutionContext {
  type: ExecutionContextType;
  name: string;
  lexicalEnvironment: Record<string, any>;
  variableEnvironment: Record<string, any>;
  thisBinding: any;
}

export function createExecutionContext(
  name: string,
  type: ExecutionContextType = "function",
  thisBinding: any = null
): ExecutionContext {
  return {
    type,
    name,
    lexicalEnvironment: {},
    variableEnvironment: {},
    thisBinding,
  };
}
