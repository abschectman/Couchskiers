class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end

  def speak(data)
    channel = Channel.find_by(reservation_id: params["reservation_id"])
    message = Message.create(body: data['message'], channel_id: channel.id)
    socket = {message: message.body}
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
