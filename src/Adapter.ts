// deno-lint-ignore-file ban-types no-unused-vars
import type {
  Engine,
  ViewConfig,
} from "https://deno.land/x/view_engine@v10.6.0/lib/viewEngine.type.ts";
import { Bart } from "./Bart.ts";

export const bart = new Bart();

export const bartEngine: Engine = (
  template: string,
  data: object = {},
  config: ViewConfig = {},
  filename = "",
) => {
  return new Promise<string>((resolve, reject) => {
    try {
      const result = bart.compile(template)(
        data as Record<string, unknown>,
      ) as string;
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};
