class UserSessionsController < ApplicationController
  def create
    if current_user # already signed in
      flash[:notice] = "You've already signed in"
      puts "🌟You've already signed in"
      redirect_to root_path
    else # not signed in yet
      puts "🌟 not signed in yet"
      pp request.env["omniauth.auth"]
      account = AuthAccount.authenticate(request.env["omniauth.auth"])

      if account.user # user already exists
        flash[:notice] = "Signed in successfully"
        puts "🌟Signed in successfully"
      else # user doesn't exist yet
        puts "🌟Signed up successfully. Thank you!"
        ActiveRecord::Base.transaction do
          user = User.create_with_account!(account)
          account.user = user
          account.save!
          flash[:notice] = "Signed up successfully. Thank you!"
        end
      end
      UserSession.create(account.user)
      redirect_to root_path
    end
  rescue => e
    puts "🌟 #{e}"
    flash[:error] = e
    redirect_to root_path
  end

  def destroy
    current_user_session&.destroy
    redirect_to root_path
  end
end
