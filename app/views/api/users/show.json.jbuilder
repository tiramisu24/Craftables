json.partial! 'api/users/user', user: @user

json.projects @user.projects
