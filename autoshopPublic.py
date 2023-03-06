# Declarations

import scratchattach as scratch3
import requests
import random

sellerUsername = "USERNAME"
session = scratch3.login(sellerUsername, "PASSWORD")

conn = session.connect_cloud(801936472)
client = scratch3.CloudRequests(conn)
events = scratch3.CloudEvents(669020072)

# Cloud

@client.request
def p(): # Ping command, just to check if this server is online
    return "y"

@client.request
def s(): # Send the contents of shoutout.txt
    with open("./shoutout.txt", "r") as f:
        x = f.read()
        # x += "+" + str(float(requests.get('https://blockbit.yippymishy.repl.co/balance/' + client.get_requester().lower()).json()['balance']))
        # ^ This line of code adds the "+" character and the viewer's balance 
        return x

@events.event
def on_set(event):
    if (event.user == "yippymishy"):
        # BlockBit server has sent a message
        
        v = scratch3.Encoding.decode(event.value).split("$")
        
        if (v[0] == "notif"):
            if (v[1].lower() == sellerUsername): # This code runs when this server receives a notification that someone gave @sellerUsername BlockBits
                
                print(v)
                l = open("./autolog.txt", "a")
                l.write("\n"+str(v))
                l.close()
                # ^ Log this transaction
                
                if (float(v[2]) >= 3): # This code runs when someone gives @sellerUsername 3 BB or more
                    f = open("./shoutout.txt", "w")
                    f.write(v[3])
                    f.close()
                    # ^ Overwrite shoutout.txt with the buyer's username

events.start(thread=True)
print("Listening for gives")
client.run(thread=True)
print("Shoutout server started")
