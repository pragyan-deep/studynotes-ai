"use client"

import { useState } from "react"
import { Note } from "@/types"
import { Button } from "@/components/ui/button"
import { Edit, Trash } from "lucide-react"

interface NoteCardProps {
  note: Note
  onEdit: (note: Note) => void
  onDelete: (id: string) => void
}

export function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleEdit = () => {
    onEdit(note)
  }
  
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this note?")) {
      setIsLoading(true)
      try {
        await onDelete(note.id)
      } catch (error) {
        console.error("Error deleting note:", error)
      } finally {
        setIsLoading(false)
      }
    }
  }
  
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2 truncate">{note.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {note.content}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">
          {new Date(note.updated_at).toLocaleDateString()}
        </span>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleEdit}
            disabled={isLoading}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleDelete}
            disabled={isLoading}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
} 