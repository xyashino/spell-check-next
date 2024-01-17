type ExtendWithClass<T extends Record<string, any>> = {
  className?: string;
} & T;
