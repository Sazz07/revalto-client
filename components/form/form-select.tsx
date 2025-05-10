'use client';

import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type FormSelectProps = {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  options: Option[];
  icon?: ReactNode;
  disabled?: boolean;
};

export function FormSelect({
  name,
  label,
  placeholder,
  description,
  options,
  icon,
  disabled,
}: FormSelectProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <div className='relative'>
            {icon && (
              <div className='absolute left-3 top-3 z-10 h-4 w-4 text-muted-foreground'>
                {icon}
              </div>
            )}
            <FormControl>
              <Select
                disabled={disabled}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger className={icon ? 'pl-10' : ''}>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
          </div>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
