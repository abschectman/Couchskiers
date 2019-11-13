class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end

  def speak(data)
    # user = User.find_by(session_token: session[:session_token]
    # debugger
    # channel = Channel.find_by(reservation_id: params["reservation_id"]["id"])
    message = Message.create!(body: data['message'], reservation_id: params["reservation_id"], user_id: params["user_id"])
    socket = {message: message.body,
    reservation_id: message.reservation_id,
    user_id: message.user_id,
    id: message.id
  }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed()
      # ActionCable.server.remote_connections.where(user_id: params["user-id"]).disconnect
  end
end
