import type {
  ChangeEvent,
  InputHTMLAttributes,
} from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}

export function Input({
  value,
  onChange,
  ...props
}: InputProps) {
  return (
    <input
      className="
        w-full
        rounded-md
        bg-gray-200
        px-4
        py-2
        text-gray-700
        outline-none
        transition-all
        placeholder:text-gray-500
        focus:ring-2
        focus:ring-purple-500
      "
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}