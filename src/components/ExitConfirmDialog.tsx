import styles from '../styles/ResetConfirmModal.module.css';

interface ExitConfirmDialogProps {
  onCancel: () => void;
  onExit: () => void;
}

export default function ExitConfirmDialog({ onCancel, onExit }: ExitConfirmDialogProps) {
  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Exit PaceRead">
      <div className={styles.card}>
        <h2 className={styles.title}>Exit PaceRead?</h2>
        <p className={styles.message}>
          Your reading position is saved automatically.
        </p>
        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onCancel} autoFocus>
            Cancel
          </button>
          <button className={styles.confirmBtn} onClick={onExit}>
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}
