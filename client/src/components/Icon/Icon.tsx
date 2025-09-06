import React from 'react';
import './Icon.scss';

type Variant = 'filled' | 'outlined' | 'round' | 'sharp';

interface IconProps {
  name: string;      // tên icon, ví dụ "home", "search"
  variant?: Variant; // kiểu icon: filled, outlined, round, sharp
  size?: number;     // kích thước icon (px)
  className?: string; // custom CSS class
}

export default function Icon({
  name,
  variant = 'filled',
  size = 24,
  className = '',
}: IconProps) {
  const baseClass =
    variant === 'filled'
      ? 'material-icons'
      : `material-icons-${variant}`;

  return (
    <span
      className={`${baseClass} ${className}`}
      style={{ fontSize: size }}
    >
      {name}
    </span>
  );
}
