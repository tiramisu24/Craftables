


  @comments.each do |comment|
    json.set! comment.id, (json.comment comment, partial: 'api/comments/comment', as: :comment)
  end
