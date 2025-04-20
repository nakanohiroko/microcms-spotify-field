import styles from "./index.module.css";
import { InputField } from "../InputField";
import { Button } from "../Button";

type InputWithButtonProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  buttonLabel: string;
  onButtonClick: () => void;
  error?: string;
};

export const InputWithButton = ({
  label,
  value,
  onChange,
  placeholder,
  buttonLabel,
  onButtonClick,
  error,
}: InputWithButtonProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <InputField
          label={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          error={error}
        />
      </div>
      <Button label={buttonLabel} onClick={onButtonClick} />
    </div>
  );
};
