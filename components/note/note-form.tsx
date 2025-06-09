"use client"

import { useState, useEffect } from "react"
import { Note } from "@/types"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

interface NoteFormProps {
  note?: Note
  onSave: (note: Partial<Note>) => Promise<void>
  onCancel: () => void
}

export function NoteForm({ note, onSave, onCancel }: NoteFormProps) {
  const [title, setTitle] = useState(note?.title || "")
  const [content, setContent] = useState(note?.content || "")
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    if (note) {
      setTitle(note.title)
      setContent(note.content)
    }
  }, [note])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim()) {
      alert("Title is required")
      return
    }
    
    setIsLoading(true)
    try {
      await onSave({
        id: note?.id,
        title,
        content,
      })
      
      if (!note) {
        // Clear form if creating a new note
        setTitle("")
        setContent("")
      }
    } catch (error) {
      console.error("Error saving note:", error)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Note title"
          disabled={isLoading}
          required
        />
      </div>
      
      <div>
        <label htmlFor="content" className="block text-sm font-medium mb-1">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded-md min-h-[200px]"
          placeholder="Write your note here..."
          disabled={isLoading}
        />
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : note ? "Update Note" : "Save Note"}
        </Button>
      </div>
    </form>
  )
} 