import React from 'react'
import { cn } from '~/lib/utils'
import { Label } from './ui/label'
import InputError from './input-error'

const FormFieldLayout = ({
  children,
  label,
  description,
  fieldName,
  error,
  className,
}: {
  children: React.ReactNode
  label: string
  fieldName: string
  description?: string
  error?: string
  className?: string
}) => {
  return (
    <div className={cn('space-form-field', className)}>
      <div className="">
        <Label htmlFor={fieldName} className={cn(error ? 'text-destructive' : '')}>
          {label}
        </Label>
        {description && <p className="form-description">{description}</p>}
      </div>
      {children}
      <InputError message={error} className="mt-2 font-semibold" />
    </div>
  )
}

export default FormFieldLayout
