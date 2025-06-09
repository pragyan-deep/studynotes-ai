"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Note } from "@/types"
import { supabase } from "@/lib/supabase"
import { NoteView } from "@/components/note/note-view"
import { NoteForm } from "@/components/note/note-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [note, setNote] = useState<Note | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  
  useEffect(() => {
    if (params.id) {
      fetchNote(params.id)
    }
  }, [params.id])
  
  async function fetchNote(id: string) {
    try {
      setLoading(true)
      setError(null)
      
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .eq("id", id)
        .single()
      
      if (error) {
        throw error
      }
      
      setNote(data)
    } catch (error) {
      console.error("Error fetching note:", error)
      setError("Failed to load note. It may have been deleted or you don't have access.")
    } finally {
      setLoading(false)
    }
  }
  
  async function handleSaveNote(updatedNote: Partial<Note>) {
    if (!note) return
    
    try {
      const { error } = await supabase
        .from("notes")
        .update({ 
          title: updatedNote.title, 
          content: updatedNote.content,
          updated_at: new Date().toISOString()
        })
        .eq("id", note.id)
      
      if (error) throw error
      
      // Refresh note data
      fetchNote(note.id)
      setIsEditing(false)
    } catch (error) {
      console.error("Error updating note:", error)
      alert("Failed to update note")
    }
  }
  
  function handleCancel() {
    setIsEditing(false)
  }
  
  function handleEdit() {
    setIsEditing(true)
  }
  
  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <p>Loading note...</p>
      </div>
    )
  }
  
  if (error || !note) {
    return (
      <div className="container mx-auto p-4">
        <div className="p-4 border rounded-md bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200">
          {error || "Note not found"}
        </div>
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={() => router.push("/notes")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Notes
        </Button>
      </div>
    )
  }
  
  return (
    <div className="container mx-auto p-4">
      <Button 
        variant="outline" 
        className="mb-4"
        onClick={() => router.push("/notes")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Notes
      </Button>
      
      {isEditing ? (
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Edit Note</h2>
          <NoteForm 
            note={note} 
            onSave={handleSaveNote} 
            onCancel={handleCancel} 
          />
        </div>
      ) : (
        <NoteView note={note} onEdit={handleEdit} />
      )}
    </div>
  )
} 