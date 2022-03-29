class V1::MessagesController < ApplicationController
  def index
    random = rand(1..5)
    @message = Message.find(random)
    render json: { :messages => [
      {
        :text => @message.text
      }
    ] }.to_json
  end
end