import styles from "./index.module.css";
import classNames from "classnames";

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
};

export const InputField = ({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  error,
}: InputFieldProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={classNames(styles.input, {
          [styles.inputError]: !!error,
        })}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
