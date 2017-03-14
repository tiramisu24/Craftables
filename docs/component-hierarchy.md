#Component Hierarchy

**Header**
  * AuthForm
  * SearchBar
  * Profile Page
  * Menu
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

**AuthorDetailContainer**
  * Image
  * Bio

#Main Page

**HomeContainer**
  * SearchBoxContainer
  * ProjectIndexContainer

**SearchBoxContainer**
  * Image
  * Categories
  * SearchBar

**ProjectIndexContainer**
  * ProjectIndex

#Search Result Page

**SearchResultContainer**
  * SearchMessage
    * keyword
  * ProjectIndex

#Project Page
**ProjectContainer**
  * Favorite Button
  * Made Project Button
  * StepContainer
      * Steps
      * Next/Prev Step Buttons
  * ProjectDetail
    * Image
    * Description
  * CommentsContainer
    * Comments
  * ProjectInfoContainer
    * Views
    * AuthorDetailContainer


#New Project
**NewProjectContainer**
  * AddIntro
    * Image
    * Description
    * PreviewButton
    * SaveButton
    * PublishButton
  * AddStep
    * Image
    * Description
    * AddStepButton

#User Profile Page
**UserContainer**
  * UpdateProfilePicButton
  * CreatedProjectsContainer
    * ProjectIndex
  * FavoritedProjectsContainer
    * ProjectIndex
  * AuthorDetailContainer


  ## Routes

  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/" | "HomeContainer" |
  | "/project/:projectId" | "NotesContainer" |
  | "/search-results" | "SearchResultsContainer"|
  | "/new-project" | "NewProjectContainer" |
  | "/search" | "Search" |
  | "/users/:username" | "UserContainer" |
