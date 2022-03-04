export interface BuildExecutorSchema {
  configFile?: string;
  baseHref?: string;
  frameworkConfigFile?: string;
  fileReplacements?: { file: string; with: string }[];
  outDir?: string
  ssr?: string
}
