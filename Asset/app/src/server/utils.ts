export function requireNodeEnvVar(name: string): string {
  const value = process.env[name];
  if (value === undefined) {
   return 'server/util-problem'
    // throw new Error(`Env var ${name} is undefined`);
  } else {
    return value;
  }
}
