import { type BundledLanguage } from "shiki";
export declare function shikiHL(code: string, lang: BundledLanguage): Promise<string>;
export declare function readStdin(): Promise<string>;
