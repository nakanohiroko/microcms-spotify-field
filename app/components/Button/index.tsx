import styles from "./index.module.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = ({ label, onClick, type = "button", disabled = false }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles.button}>
      {label}
    </button>
  );
};
