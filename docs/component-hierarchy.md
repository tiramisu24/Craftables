#Component Hierarchy

**Header**
  * AuthForm
  * SearchBar
  * Profile Page
  * Explore
  * Publish
  * Categories

**AuthFormContainer**
  * AuthForm

**ProjectIndex**
  * Image
  * Title
  * Views
  * Favorites

#Main Page

**HomeContainer**
  * SearchBox
  * ProjectIndex

**SearchBoxContainer**
  * Image
  * Categories
  * SearchBar

**ProjectIndexContainer**
  * ProjectIndex

**Search Result Page**

**SearchResultContainer**
  * SearchMessage
    * keyword
  * ProjectIndex

**Project Page**
  * ProjectDetail
    * Step
    * Image
    * Description
  * Comments
  * AuthorDetail
    * Image
    * Bio
  * Favorite

#New Project
**NewProjectContainer**
  * NewProject
  * NewProjectButton


  ## Routes

  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/home" | "HomeContainer" |
  | "/home/note/:noteId" | "NotesContainer" |
  | "/home/notebook/:notebookId/note/:noteId" | "NotebookContainer" |
  | "/home/tag/:tagId/note/:notedId" | "TagContainer" |
  | "/home/search-results" | "SearchResultsContainer"
  | "/new-note" | "NewNoteContainer" |
  | "/search" | "Search" |
  | "/new-notebook" | "NewNotebook" |
  | "/new-tag" | "NewTag" |
  | "/tag-search" | "TagSearch" |
  | "/notebook-search" | "NotebookSearch" |
