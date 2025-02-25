import styles from "./Modal.module.scss";
import { useBtnClose } from "shared/hooks/useBtnClose";

export type Props = {
  active: boolean;
  setActive(arg0: boolean): void;
  children: React.ReactElement;
};

export function Modal({ active, setActive, children }: Props) {
  useBtnClose(setActive);
  return (
    <div
      className={`${styles.modal} ${active ? styles.open : ""}`}
      onClick={() => setActive(false)}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <svg
          className={styles.close}
          onClick={() => setActive(false)}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 3L3 21"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M21 21L3 3"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        {children}
      </div>
    </div>
  );
}
