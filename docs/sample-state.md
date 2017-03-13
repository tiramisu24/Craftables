{
  currentUser: {
    id: 1,
    username: "user1"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  project: {
    1: {
      title: "Sample State",
      body: "is useful to plan",
      image_url: "img1",
      author_id: 1,
      steps: {
          1:{
            title: "Step1",
            body: "how to do step 1",
            image_url: "img11"
          },
          2:{
            title: "Step2",
            body: "how to do step 2",
            image_url: "img12"
          }
        }
      comments: {
        1: {
          1: {
            title: "comment1",
            body: "stuff in comment1",
            username: "user1"
          }
        }
      }
      }
    }
  },
  search: {
    keywords: ["search", "word"]
  }
}
