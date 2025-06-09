export type Note = {
  id: string;
  title: string;
  content: string;
  user_id: string;
  created_at: string;
  updated_at: string;
};

export type User = {
  id: string;
  email: string;
  name?: string;
};

export type StudySession = {
  id: string;
  note_id: string;
  user_id: string;
  start_time: string;
  end_time?: string;
  duration?: number;
}; 