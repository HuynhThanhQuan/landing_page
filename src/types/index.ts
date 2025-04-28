export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
} 