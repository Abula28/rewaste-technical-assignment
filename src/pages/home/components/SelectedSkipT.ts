import type { GetSkipsReqI } from "@/api";

export interface SelectedSkipI extends GetSkipsReqI {
  handleCancel: () => void;
  handleOk: () => void;
}
