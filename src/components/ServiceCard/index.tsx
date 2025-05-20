import React from 'react'
import * as LucideIcons from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  extended?: boolean
}

export function ServiceCard({ title, description, icon, extended = false }: ServiceCardProps) {
  // Render the icon component safely
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'Flower':
        return <LucideIcons.Flower className="h-8 w-8 text-rose-600" />
      case 'Home':
        return <LucideIcons.Home className="h-8 w-8 text-rose-600" />
      case 'BookOpen':
        return <LucideIcons.BookOpen className="h-8 w-8 text-rose-600" />
      case 'Calendar':
        return <LucideIcons.Calendar className="h-8 w-8 text-rose-600" />
      case 'Gift':
        return <LucideIcons.Gift className="h-8 w-8 text-rose-600" />
      case 'Package':
        return <LucideIcons.Package className="h-8 w-8 text-rose-600" />
      default:
        return <LucideIcons.Building className="h-8 w-8 text-rose-600" />
    }
  }

  return (
    <Card className={`${extended ? 'h-full' : ''} group transition-all duration-300 hover:shadow-md hover:-translate-y-1`}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/30 transition-all duration-300 group-hover:bg-rose-200 dark:group-hover:bg-rose-800/40">
          {renderIcon(icon)}
        </div>
        <CardTitle className="text-xl transition-colors duration-300 group-hover:text-rose-600 dark:group-hover:text-rose-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}
