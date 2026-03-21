import { textFieldStyles } from "@/ui/styles/textFieldStyles";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
  disabled?: boolean;
}

export default function TextField({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  disabled = false,
}: TextFieldProps) {
  return (
    <div className={textFieldStyles.container}>
      <label className={textFieldStyles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={error ? textFieldStyles.inputError : textFieldStyles.input}
      />
      {error && <p className={textFieldStyles.errorMessage}>{error}</p>}
    </div>
  );
}
