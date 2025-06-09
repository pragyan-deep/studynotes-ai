"use client"

import { useState } from "react"
import { Note } from "@/types"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageSquare } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface NoteViewProps {
  note: Note
  onEdit: () => void
}

export function NoteView({ note, onEdit }: NoteViewProps) {
  const [summary, setSummary] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const generateSummary = async () => {
    if (loading) return
    
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: note.content }),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to generate summary")
      }
      
      const data = await response.json()
      setSummary(data.summary)
    } catch (err) {
      console.error("Error generating summary:", err)
      setError(err instanceof Error ? err.message : "Failed to generate summary")
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{note.title}</h1>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={onEdit}>
            Edit Note
          </Button>
          <Button 
            variant="outline" 
            onClick={generateSummary} 
            disabled={loading}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            {loading ? "Generating..." : "Summarize"}
          </Button>
        </div>
      </div>
      
      <div className="text-sm text-gray-500">
        Last updated: {new Date(note.updated_at).toLocaleString()}
      </div>
      
      <div className="border p-4 rounded-md bg-white dark:bg-gray-800 min-h-[300px]">
        <ReactMarkdown>{note.content}</ReactMarkdown>
      </div>
      
      {error && (
        <div className="p-4 border border-red-300 bg-red-50 dark:bg-red-900/20 rounded-md text-red-800 dark:text-red-200">
          {error}
        </div>
      )}
      
      {summary && (
        <div className="border p-4 rounded-md bg-purple-50 dark:bg-purple-900/20">
          <div className="flex items-center mb-2 text-purple-800 dark:text-purple-300">
            <MessageSquare className="mr-2 h-4 w-4" />
            <h3 className="font-semibold">AI Summary</h3>
          </div>
          <ReactMarkdown>{summary}</ReactMarkdown>
        </div>
      )}
    </div>
  )
} 