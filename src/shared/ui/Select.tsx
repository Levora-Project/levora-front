import { forwardRef, type SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, className = "", id, children, ...props },
  ref,
) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="font-medium text-neutral-800 text-xs">
          {label}
        </label>
      )}
      <select
        ref={ref}
        id={id}
        className={`h-10 px-3 rounded-sm border border-neutral-200 text-sm
          focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent
          disabled:opacity-50 disabled:pointer-events-none
          ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
});

export default Select;
