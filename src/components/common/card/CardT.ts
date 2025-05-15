import type { GetSkipsReqI } from "@/api";

export interface CardI extends GetSkipsReqI {
  handleSelect: (id: number) => void;
}
