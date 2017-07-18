if logged_in?
  json.extract! user, :username
end