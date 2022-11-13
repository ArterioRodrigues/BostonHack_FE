from twilio.rest import Client

# Your Account SID from twilio.com/console
account_sid = "AC4b29b8dce895a730947187f22826b96e"
# Your Auth Token from twilio.com/console
auth_token  = "your_auth_token"

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+15558675309", 
    from_="+15017250604",
    body="Hello from Python!")

print(message.sid)