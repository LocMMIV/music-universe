import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, variant = 'primary', className, ...rest }: Props) {
  return (
    <button className={`${styles.root} ${styles[variant]} ${className ?? ''}`} {...rest}>
      {children}
    </button>
  );
}
