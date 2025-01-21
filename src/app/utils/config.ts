type RuntimeEnvConfig = {
  githubUsername?: string;
  githubToken?: string;
}
   
export const runtimeEnvConfig: RuntimeEnvConfig = {
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
  githubToken: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
}