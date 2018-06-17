class Api::EmotweetController < ApplicationController
  def create
    update_params = {
      emoji: params[:emoji_native],
      tweet: params[:message],
      tweeted_by: params[:user_id],
    }
    @emotweet = Emotweet.create!(update_params)

    render json: @emotweet
  end
end
