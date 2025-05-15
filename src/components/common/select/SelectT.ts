export interface SelectOptionT {
  value: string;
  label: React.ReactNode;
  render?: (option: {
    value: string;
    label: React.ReactNode;
  }) => React.ReactNode;
}

export interface SelectI {
  options: SelectOptionT[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}
