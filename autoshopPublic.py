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
def p():
    return "y"

@client.request
def s():
    with open("./shoutout.txt", "r") as f:
        x = f.read()
        # x += "+" + str(float(requests.get('https://blockbit.yippymishy.repl.co/balance/' + client.get_requester().lower()).json()['balance']))
        # ^ this line of code returns the viewer's balance, delimited by the "+" character
        return x

@events.event
def on_set(event):
    if (event.user == "yippymishy"):
        v = scratch3.Encoding.decode(event.value).split("$")
        if (v[0] == "notif"):
            if (v[1].lower() == sellerUsername):
                print(v)
                l = open("./autolog.txt", "a")
                l.write("\n"+str(v))
                l.close()
                if (float(v[2]) >= 3):
                    f = open("./shoutout.txt", "w")
                    f.write(v[3])
                    f.close()

                    '''if (float(v[2]) >= 1):
                    user = session.connect_user(v[3])
                    proj = user.projects(limit=None, offset=0)
                    proj = proj[random.randint(0,len(proj)-1)]
                    proj.love()

                    if (float(v[2]) >= 2):
                        proj.favorite()

                        if (float(v[2]) >= 4):
                            user.follow()'''

events.start(thread=True)
print("Listening for gives")
client.run(thread=True)
print("Shoutout server started")
