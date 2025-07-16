import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, variant = 'primary', className, onClick }: ButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2";
  
  const variants = {
    primary: "bg-gradient-purple text-primary-foreground shadow-glow-purple hover:shadow-glow-purple-strong hover:scale-105",
    secondary: "border border-accent text-accent-foreground hover:bg-accent/10"
  };

  return (
    <button 
      className={cn(baseClasses, variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;