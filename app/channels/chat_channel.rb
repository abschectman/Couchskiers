class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end

  def speak(data)
    # channel = Channel.find_by(reservation_id: params["reservation_id"]["id"])
    message = Message.create!(body: data['message'], reservation_id: params["reservation_id"], user_id: params["user_id"])
    socket = {message: message.body,
    reservation_id: message.reservation_id,
    user_id: message.user_id
  }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
