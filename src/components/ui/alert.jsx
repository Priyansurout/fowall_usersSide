import React from 'react';

const alertVariants = ({ variant }) => {
  const baseClasses = "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground";
  
  const variants = {
    default: "bg-background text-foreground",
    destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
  };

  return `${baseClasses} ${variants[variant || 'default']}`;
};

const Alert = React.forwardRef(({ className = "", variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={`${alertVariants({ variant })} ${className}`}
    {...props}
  />
));

const AlertTitle = React.forwardRef(({ className = "", ...props }, ref) => (
  <h5
    ref={ref}
    className={`mb-1 font-medium leading-none tracking-tight ${className}`}
    {...props}
  />
));

const AlertDescription = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm [&_p]:leading-relaxed ${className}`}
    {...props}
  />
));

Alert.displayName = "Alert";
AlertTitle.displayName = "AlertTitle";
AlertDescription.displayName = "AlertDescription";

export default {
  Alert,
  AlertTitle,
  AlertDescription
};