# StudyNotes AI - MVP Product Requirements Document

## 1. Executive Summary

**Product Vision**: An AI-powered tool that automatically organizes student documents by subject and generates meaningful study notes from uploaded files.

**Target Users**: College and university students who have multiple documents scattered across different formats and need organized, digestible study materials.

**MVP Goal**: Validate core value proposition with a simple, functional product that processes common document types and generates basic study notes.

## 2. Problem Statement

Students struggle with:
- Documents scattered across multiple formats (PDF, DOC, PPT, images)
- Time-consuming manual organization by subject
- Difficulty extracting key information from lengthy materials
- Lack of consistent note-taking structure across different sources

## 3. Success Metrics

**Primary KPIs:**
- File processing success rate: >90%
- Subject classification accuracy: >70%
- User completion rate: >60% (users who upload AND download generated notes)
- Time to process per document: <30 seconds

**Secondary KPIs:**
- User retention (return within 7 days): >40%
- Average files processed per user: >5
- User satisfaction score: >4/5

## 4. User Stories

### Core User Journey
**As a student, I want to:**
1. Upload multiple study documents in one session
2. Have them automatically sorted by subject
3. Get summarized notes I can use for studying
4. Download or view these notes in an organized format

### Specific User Stories
- **Upload**: "I can drag and drop my files and see upload progress"
- **Processing**: "I can see when my files are being processed and get updates"
- **Organization**: "My files are automatically sorted into subject folders"
- **Notes**: "I get bullet-point summaries and key concepts from each document"
- **Access**: "I can view, download, and share my generated notes"

## 5. Functional Requirements

### 5.1 File Upload & Management
**Must Have:**
- Support file formats: PDF, DOCX, PPTX, JPG, PNG
- Drag-and-drop interface with upload progress
- File size limit: 10MB per file, 50MB total per session
- Basic file validation and error handling

**Nice to Have:**
- Batch upload from Google Drive/Dropbox
- File preview before processing

### 5.2 Document Processing
**Must Have:**
- Text extraction from all supported formats
- OCR for image-based documents
- Handle documents in English language
- Error handling for corrupted/unreadable files

**Nice to Have:**
- Support for handwritten notes (advanced OCR)
- Multi-language support

### 5.3 Subject Classification
**Must Have:**
- Classify documents into common subjects:
  - Mathematics
  - Science (Biology, Chemistry, Physics)
  - Computer Science
  - Business/Economics
  - History
  - Literature/English
  - Psychology
  - General/Other
- Manual override option for incorrect classifications
- Confidence score display

### 5.4 Note Generation
**Must Have:**
- Extract and summarize key concepts
- Generate bullet-point outlines
- Identify important terms and definitions
- Create structured headings and subheadings
- Output in clean, readable format

**Nice to Have:**
- Generate study questions from content
- Create concept maps
- Highlight important formulas/equations

### 5.5 User Interface
**Must Have:**
- Clean, intuitive file upload interface with direct Supabase Storage integration
- Subject-based folder organization with real-time Supabase queries
- Notes viewer with markdown rendering and live data updates
- Download generated notes as PDF/DOCX
- Mobile-responsive design
- Real-time processing status via Supabase subscriptions

**Nice to Have:**
- Dark mode
- Note editing capabilities with direct database updates
- Search within generated notes using Supabase full-text search

## 6. Technical Requirements

### 6.1 Architecture
- **Frontend**: Next.js with React + Direct Supabase queries
- **Backend**: Next.js API routes (for secure AI processing only)
- **Database**: Supabase (PostgreSQL) with direct frontend queries
- **Storage**: Supabase Storage
- **Deployment**: Vercel
- **AI Processing**: OpenAI API (via secure API routes)

**Data Flow Architecture:**
- Frontend handles all Supabase read/write operations directly
- API routes only for secure operations (AI processing, file parsing)
- Real-time updates via Supabase subscriptions in frontend
- File upload directly to Supabase Storage from frontend

### 6.2 Performance Requirements
- File upload: Complete within 30 seconds for 10MB file
- Text extraction: Process within 15 seconds per document
- Note generation: Complete within 45 seconds per document
- Page load time: <3 seconds
- 99% uptime

### 6.3 Security & Privacy
- Files stored securely in Supabase Storage
- No permanent storage of file content after processing
- Generated notes stored for 30 days by default
- Basic input validation and sanitization

## 7. Non-Functional Requirements

### 7.1 Scalability
- Handle 100 concurrent users
- Process up to 1000 files per day
- Horizontal scaling capability on Vercel

### 7.2 Reliability
- Graceful error handling for failed uploads
- Retry mechanisms for AI processing failures
- Clear error messages for users

### 7.3 Usability
- Zero learning curve - intuitive interface
- Works on desktop and mobile browsers
- Accessible design (basic WCAG compliance)

## 8. MVP Scope & Limitations

### In Scope
- Basic file processing for 5 document types
- Subject classification for 8 common subjects
- Simple note generation (summaries and outlines)
- Web-based interface only
- English language only
- Anonymous usage (no user accounts)

### Out of Scope
- Advanced AI agents or multi-document reasoning
- Real-time collaboration features
- Integration with LMS platforms
- Mobile app
- Advanced analytics or learning insights
- User accounts and authentication
- Payment processing

## 9. User Experience Flow

1. **Landing Page**: User sees upload interface with clear instructions
2. **Upload**: Direct file upload to Supabase Storage with progress indicators
3. **Processing**: Real-time status updates via Supabase subscriptions during AI processing
4. **Results**: Files organized in subject folders with generated notes (live data from Supabase)
5. **Review**: User can view notes, edit classifications (direct database updates), and download notes
6. **Share**: Generated shareable link for accessing notes later (Supabase RLS for access control)

## 10. Risk Mitigation

### Technical Risks
- **AI API Rate Limits**: Implement queuing system and usage monitoring
- **Large File Processing**: Set clear size limits and timeout handling
- **OCR Accuracy**: Provide manual text input option as fallback

### Business Risks
- **User Adoption**: Focus on simple, immediate value delivery
- **Cost Management**: Monitor AI API usage and implement usage caps
- **Competition**: Emphasize speed and simplicity as differentiators

## 11. Launch Plan

### Phase 1: Internal Testing (Week 1)
- Developer testing with various document types
- Basic functionality and error handling validation

### Phase 2: Beta Testing (Week 2)
- 10-15 students from local university
- Gather feedback on accuracy and usability
- Iterate based on core user feedback

### Phase 3: Soft Launch (Week 3-4)
- Release to broader student community (50-100 users)
- Monitor performance and success metrics
- Prepare for scaling based on demand

## 12. Future Roadmap (Post-MVP)

**Version 1.1**: User accounts, file history, improved accuracy
**Version 1.2**: Study questions generation, flashcards
**Version 2.0**: Multi-document analysis, learning paths
**Version 2.1**: LMS integrations, collaboration features

---

**Document Version**: 1.0  
**Last Updated**: June 2025  
**Owner**: Product Development Team