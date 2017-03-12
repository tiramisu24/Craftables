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

#Search Result Page**

**SearchResultContainer**
  * SearchMessage
    * keyword
  * ProjectIndex

#Project Page**
  **ProjectContainer**
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

#User Profile Page
**UserContainer**
  * UpdateProfilePicButton
  * CreatedProjects
  * FavoritedProjects

  ## Routes

  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/home" | "HomeContainer" |
  | "/home/project/:projectId" | "NotesContainer" |
  | "/home/search-results" | "SearchResultsContainer"
  | "/new-project" | "NewProjectContainer" |
  | "/search" | "Search" |
  | "/users/userId" | "UserContainer" |
