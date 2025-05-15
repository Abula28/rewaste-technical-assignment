export interface ModalI {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: "small" | "medium" | "large";
}
