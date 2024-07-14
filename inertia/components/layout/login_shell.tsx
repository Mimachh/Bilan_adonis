import type { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface LoginShellProps {
  title: string
  children: ReactNode
  description?: string
}
export function LoginShell(props: LoginShellProps) {
  const { title, children, description } = props
  
  return (
    <div className='min-h-screen w-full flex items-center justify-center px-5 md:px-0'>
      <Card className="md:w-[380px] md:px-0 px-4 w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  )
}
