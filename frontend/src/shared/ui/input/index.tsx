'use client';
import { useId } from 'react';
import { cn } from '~/shared/lib/utils';

type InputProps = Omit<React.ComponentProps<'input'>, 'label'> & {
  label?: React.ReactNode;
  hintText?: React.ReactNode;
  endIcon?: React.ReactElement;
};

const Input = ({
  endIcon,
  className,
  id,
  label,
  hintText,
  type = 'text',
  ...props
}: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = `${inputId}-hint`;

  return (
    <div className={cn('flex flex-col gap-2 w-full', className)}>
      {label && (
        <label htmlFor={inputId} className="text-md text-fg-default">
          {label}
        </label>
      )}
      <div className="flex bg-gray-100 p-1">
        <input
          id={inputId}
          className={'outline-none flex-1'}
          type={type}
          {...props}
        />
        {endIcon && (
          <label
            className="size-8 content-center justify-items-center cursor-text"
            htmlFor={inputId}
          >
            {endIcon}
          </label>
        )}
      </div>
      {hintText && (
        <div className={cn('mt-1 text-sm text-fg-muted')} id={hintId}>
          {hintText}
        </div>
      )}
    </div>
  );
};

export default Input;
