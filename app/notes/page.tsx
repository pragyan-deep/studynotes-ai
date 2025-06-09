"use client"

import { useState, useEffect } from "react"
import { Note } from "@/types"
import { supabase } from "@/lib/supabase"
import { NoteCard } from "@/components/note/note-card"
import { NoteForm } from "@/components/note/note-form"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedNote, setSelectedNote] = useState<Note | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  
  useEffect(() => {
    fetchNotes()
  }, [])
  
  async function fetchNotes() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .order("updated_at", { ascending: false })
      
      if (error) {
        throw error
      }
      
      setNotes(data || [])
    } catch (error) {
      console.error("Error fetching notes:", error)
    } finally {
      setLoading(false)
    }
  }
  
  async function handleSaveNote(note: Partial<Note>) {
    try {
      if (note.id) {
        // Update existing note
        const { error } = await supabase
          .from("notes")
          .update({ 
            title: note.title, 
            content: note.content,
            updated_at: new Date().toISOString()
          })
          .eq("id", note.id)
        
        if (error) throw error
        
        setNotes(notes.map(n => n.id === note.id ? { ...n, ...note, updated_at: new Date().toISOString() } : n))
      } else {
        // Create new note
        const { data, error } = await supabase
          .from("notes")
          .insert([
            { 
              title: note.title, 
              content: note.content,
              user_id: "user123", // Replace with actual user ID from auth
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            }
          ])
          .select()
        
        if (error) throw error
        
        setNotes([...(data || []), ...notes])
      }
      
      setSelectedNote(null)
      setIsCreating(false)
    } catch (error) {
      console.error("Error saving note:", error)
    }
  }
  
  async function handleDeleteNote(id: string) {
    try {
      const { error } = await supabase
        .from("notes")
        .delete()
        .eq("id", id)
      
      if (error) throw error
      
      setNotes(notes.filter(note => note.id !== id))
    } catch (error) {
      console.error("Error deleting note:", error)
    }
  }
  
  function handleEditNote(note: Note) {
    setSelectedNote(note)
    setIsCreating(false)
  }
  
  function handleCreateNew() {
    setSelectedNote(null)
    setIsCreating(true)
  }
  
  function handleCancel() {
    setSelectedNote(null)
    setIsCreating(false)
  }
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Notes</h1>
        <Button onClick={handleCreateNew} disabled={isCreating}>
          <Plus className="mr-2 h-4 w-4" />
          New Note
        </Button>
      </div>
      
      {selectedNote && (
        <div className="mb-6 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Note</h2>
          <NoteForm 
            note={selectedNote} 
            onSave={handleSaveNote} 
            onCancel={handleCancel} 
          />
        </div>
      )}
      
      {isCreating && (
        <div className="mb-6 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Create New Note</h2>
          <NoteForm onSave={handleSaveNote} onCancel={handleCancel} />
        </div>
      )}
      
      {loading ? (
        <p>Loading notes...</p>
      ) : notes.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-4">You don't have any notes yet.</p>
          {!isCreating && (
            <Button onClick={handleCreateNew}>
              <Plus className="mr-2 h-4 w-4" />
              Create your first note
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map(note => (
            <NoteCard 
              key={note.id} 
              note={note} 
              onEdit={handleEditNote} 
              onDelete={handleDeleteNote} 
            />
          ))}
        </div>
      )}
    </div>
  )
}