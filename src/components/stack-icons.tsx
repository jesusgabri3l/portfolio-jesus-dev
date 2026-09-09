import {
  SiVuedotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiJest,
} from "react-icons/si";
import { FaCloud } from "react-icons/fa";
import type { IconType } from "react-icons";

export const stackIcons: Record<string, IconType | undefined> = {
  vuedotjs: SiVuedotjs,
  react: SiReact,
  typescript: SiTypescript,
  nodedotjs: SiNodedotjs,
  express: SiExpress,
  javascript: SiJavascript,
  jest: SiJest,
  cloud: FaCloud,
};
