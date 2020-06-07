# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all

user0 = User.create!(username: 'demousername', password: 'demopassword')
user1 = User.create!(username: 'marikasanuki', password: 'marikasanuki')

track0 = Track.create!(title: 'Programs',
                artist: 'Mac Miller', 
                album: 'Programs',
                lyrics: 
                    "[Intro]
                    Yep, yep, yep, yuh, yep, yep

                    [Verse 1]
                    I don't got a reason to lie, they gave me the key to the sky
                    But I'd rather open my eyes, 'cause that's what'll keep me alive
                    Somethin' that's easin' my mind (Mind), please do not fuck up my day (No)
                    Everybody wanna headline, I don't got nothin' to say
                    'Cept I'm comin' back with the freshness
                    You know I love makin' a entrance
                    Now now, don't get defensive, time is a matter of seconds
                    One, two, yeah
                    Off to see the wizard, lead the picture
                    Me and liquor, evil mixture, demons glitter
                    Clean the whiskers, he be Mr. Fisherman
                    Back on my shit again, doin' my own dance
                    Feel the rhythm that's no hands, I tell ya vision like programs
                    Busy livin' on triple digits, young old man
                    Y'all dead wrong, I'm upper with the echelon
                    So butter when the bread long
                    I'm goin' strong 'til my head gone, 'til my head gone
                    Yeah, floatin' back up on the scene, I'm sayin' hello (Hello!)
                    Do my thing, I'm pullin' strings like Tom Morello
                    I keep it movin', you be doin' way too much
                    I ain't tellin' time, just tell you when it's up (Yep)

                    [Chorus]
                    Yeah, I'm only keepin' good company
                    I am not talkin' to you if you don't have love for me
                    Yeah, one for you and one for me (Yeah, yeah)
                    I am not talkin' to you if you don't have love for me (Love for me)

                    [Verse 2]
                    Yeah, I mean wow, do not touch that dial, I've waited a while
                    Been around, just like word of mouth, you gon' hear me out, and I-
                    And I, and I, and I put that on my house
                    I'm always goin' overboard, I better swim before I drown (Drown)
                    I'm like rubber with the bounce, hundred be the count
                    Drummin' loud as thunder with the sounds, yeah
                    (Bang, bang, bang, bang)
                    I was younger, fuck around, every summer wild
                    Always had it jumpin' at the house
                    Yeah, clappin' for y'all (Y'all), I'm into havin' it all (All)
                    Feelin' like Shaq with the call (Call)
                    Stature is tall (Tall), rollin' around with the homies
                    A battery pack on my dawgs (Yeah)
                    Fuck with my thoughts (Yeah), havin' enough ain't a lot (Lot)
                    Puttin' a check in the box, straight to the top (Top), it don't matter
                    Never mind the pattern when you takin' your shot, woo!
                    Yeah, enough with the bullshit, enough with the bullshit
                    Enough with the extras, fuck all my money
                    I swear I been through it (Swear I been through it)
                    Fuck all the losin' (Yeah), that's just an illusion
                    Gotta keep them comin' back for more to keep it movin' (Yeah, yeah)"
)

track1 = Track.create!(title: 'Turning Tables',
                artist: 'Adele', 
                album: '21',
                lyrics: 
                    "[Verse 1]
                    Close enough to start a war
                    All that I have is on the floor
                    God only knows what we're fighting for
                    All that I say, you always say more

                    [Pre-Chorus]
                    I can't keep up with your turning tables
                    Under your thumb, I can't breathe

                    [Chorus]
                    So, I won't let you close enough to hurt me
                    No, I won't rescue you to just desert me
                    I can't give you the heart you think you gave me
                    It's time to say goodbye to turning tables
                    To turning tables

                    [Verse 2]
                    Under haunted skies, I see you
                    Ooh, where love is lost, your ghost is found
                    I braved a hundred storms to leave you
                    As hard as you try, no, I will never be knocked down

                    [Pre-Chorus]
                    I can't keep up with your turning tables
                    Under your thumb, I can't breathe
                    [Chorus]
                    So, I won't let you close enough to hurt me
                    No, I won't rescue you to just desert me
                    I can't give you the heart you think you gave me
                    It's time to say goodbye to turning tables
                    Turning tables

                    [Bridge]
                    Next time, I'll be braver
                    I'll be my own savior when the thunder calls for me
                    Next time, I'll be braver
                    I'll be my own savior, standing on my own two feet

                    [Chorus]
                    I won't let you close enough to hurt me
                    No, I won't rescue you to just desert me
                    I can't give you the heart you think you gave me
                    It's time to say goodbye to turning tables
                    To turning tables

                    [Outro]
                    Turning tables, yeah
                    Turn, no, no, no-oh"
)


track2 = Track.create!(title: 'Algorhythm',
                artist: 'Childish Gambino', 
                album: '3.15.20',
                lyrics: 
                    "[Verse 1]
                    Supercomputer status, walkin' along streets
                    Everyone is an addict, stumbling concrete
                    What was the motivation? Constant communication
                    Everybody wanna get chose like Moses
                    Came out Mother Earth smelling like roses
                    Summon the new edition, made it way too efficient
                    Made us the guinea pig and did it with no permission
                    Told it to call a friend, didn't tell it to listen
                    So very scary, so binary, zero or one
                    Like or dislike, coal mine canary
                    I dream in color, not black and white
                    You sell your daughter on that data stream
                    Dopamine make it hit now
                    Humans don't understand, humans gon' sell a lie
                    Humans gotta survive, we know we gon' die
                    Nothing can live forever, you know we gon' try
                    Life, is it really worth it? The algorhythm is perfect, mmh

                    [Chorus]
                    Everybody (Everybody), move your body, now do it (Now do it)
                    Here is something (Ooh), that's gonna make you move and groove
                    (Please don't lose that tempo)
                    Algorhythm
                    (Moving how they say so)
                    Algorhythm


                    [Verse 2]
                    Step, step, slide, slide
                    Move your body from side to side
                    Clap your hands, don't spite the vibe
                    Keep on moving, you might survive
                    Pressure is to evolve, take a bite of the apple
                    We crush it into the sauce, how do we know the cost?
                    How do we know the truth without feeling what could be false?
                    Freedom of being wrong, freedom of being lost
                    Wait a minute, wait a minute (Wait a minute, wait a minute)
                    Feelin' like the devil did it (Devil did it, ooh)
                    Lord willing, I'ma step to it (Step to it)
                    You gon' fall behind if you can't do it (Ooh, yeah)
                    Ooh, we eating good over here now (Yeah)
                    Is you eating good over there now? (No)
                    Human ain't the move, do I care now? (No)
                    Looking for something worth it, the algorhythm is perfect, mmh

                    [Chorus]
                    Everybody (Everybody), move your body, now do it (Now do it)
                    Here is something (Ooh), that's gonna make you move and groove
                    (Please don't lose that tempo)
                    Algorhythm
                    (Moving how they say so)
                    Algorhythm (Woo)
                    Everybody (Everybody), move your body, now do it (Now do it)
                    Here is something (Ooh), that's gonna make you move and groove
                    Algorhythm (Woo)
                    Algorhythm (Yeah, yeah)"
)


track3 = Track.create!(title: 'Bug A Boo',
                artist: 'Destiny’s Child', 
                album: 'The Writing’s on the Wall',
                lyrics: 
                    "[Hook]
                    You make me wanna throw my pager out the window
                    Tell MCI to cut the phone poles
                    Break my lease so I can move
                    Cause you a bug a boo, a bug a boo
                    I wanna put your number on the call block
                    Have AOL make my emails stop
                    Cause you a bug a boo
                    You bugging what? you bugging who? You bugging me!
                    And don't you see it ain't cool

                    [Verse 1]
                    It's not hot that you be calling me, stressing me
                    Paging my beeper you're just non-stop
                    And it's not hot that you be leaving me messages
                    Every 10 minutes and then you stop by
                    When I first met you, you were cool
                    But it was game you had me fooled
                    Cause 20 minutes after I gave you my number
                    You already had my mailbox full

                    [Pre-Hook]
                    So what, you bought a pair of shoes
                    What now I guess you think I owe you?
                    You don't have to call as much as you do
                    I'd give 'em back to be through with you
                    And so what, my momma likes you
                    What now I guess you think I will too?
                    Even if the pope said he likes you too
                    I don't really care cause you're a bug a boo

                    [Hook (Beyoncé)]
                    You make me wanna throw my pager out the window (Hey)
                    Tell MCI to cut the phone poles
                    Break my lease so I can move
                    Cause you a bug a boo, a bug a boo (A bug a boo)
                    I wanna put your number on the call block
                    Have AOL make my emails stop
                    Cause you a bug a boo
                    You buggin' what? You buggin' who? You buggin' me!
                    And don't you see it ain't cool?

                    [Verse 2]
                    It's not hot, that when I'm blocking your phone number
                    You call me from over your best friends house
                    And its not hot, that I can't even go out with my girlfriends
                    Without you tracking me down
                    You need to chill out with that mess
                    Cause you can't keep havin' me stressed
                    Cause every time my phone rings it seems to be you
                    And I'm praying that it is someone else

                    [Pre-Hook (Beyoncé)]
                    So what, you bought a pair of shoes
                    What now I guess you think I owe you? (Owe you)
                    You don't have to call as much as you do
                    I'd give 'em back to be through with you
                    And so what, my momma likes you (So what!)
                    What now I guess you think I will too?
                    Even if the pope said he likes you too
                    I don't give a damn cause you're a bug a boo

                    [Hook (Beyoncé)]
                    You make me wanna throw my pager out the window
                    Tell MCI to cut the phone poles
                    Break my lease so I can move
                    Cause you a bug a boo, a bug a boo (A bug a boo)
                    I wanna put your number on the call block
                    Have AOL make my emails stop
                    Cause you a bug a boo
                    You bugging what? You bugging who? You bugging me!
                    And don't you see it ain't cool?

                    [Bridge]
                    When you call me on the phone you're bugging me
                    When you follow me around you're bugging me
                    Everything you do be bugging me
                    You buggin' me, You buggin' me
                    When you show up at my door you're buggin' me
                    When you open up your mouth you're buggin' me
                    Every time I see your face you're buggin' me
                    You're buggin' me, buggin' me

                    [Hook (Beyoncé)]
                    You make me wanna throw my pager out the window
                    Tell MCI to cut the phone poles (Turn my phone off!)
                    Break my lease so I can move
                    Cause you a bug a boo, a bug a boo (A bug a boo)
                    I wanna put your number on the call block
                    Have AOL make my emails stop
                    Cause you a bug a boo
                    You bugging what? You bugging who? You bugging me!
                    And don't you see it ain't cool?

                    You make me wanna throw my pager out the window
                    Tell MCI to cut the phone poles
                    Break my lease so I can move
                    Cause you a bug a boo, a bug a boo
                    I wanna put your number on the call block
                    Have AOL make my emails stop
                    Cause you a bug a boo
                    You bugging what? you bugging who? You bugging me!
                    And don't you see it ain't cool

                    [Commandment #5: Beyoncé]
                    Thou shall not get into temptation"
)
track4 = Track.create!(title: 'The Code',
                artist: 'The Game featuring 21 Savage', 
                album: 'Born 2 Rap',
                lyrics: 
                    "[Chorus: 21 Savage & The Game]
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul ('Fore I sell my soul)
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul ('Fore I sell my soul)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)

                    [Verse 1: The Game]
                    I was young, black, and ashy, '42 khakis
                    Red rag in my pocket
                    Throwin' up Blood to any car that ever pass me
                    Gangbang classy
                    Gold herringbone, mama said I'm too flashy
                    Niggas wanna jack me, tell 'em, 'Run it,' like a track meet
                    On my DMX shit, tell my enemies to get at me
                    I'm from Compton where the bitches carry ratchets
                    And niggas in wheelchairs ain't never heard of Degrassi
                    Raw hand, I'm gutter, Dre had to Aftermath me
                    Had a flow when I was a rider, Compton like Tallahassee
                    First album classic, second album classic
                    So I skipped the hoodrats and went straight to the Cassies
                    N.Y.C., top down, Big blastin'
                    Nas said I'd be a legend, nigga, don't gas me
                    Hot in '97, Funk Flex had to ask me
                    'How you make it out that beef with Hov?'
                    Nigga, my passion

                    [Interlude: The Game]
                    I was in New York the first time I heard 'Dear Summer' on Hot 97
                    Top of the W Hotel, 54th & Broadway
                    Lookin' out my window at Diddy in a Sean John sweatsuit
                    I felt ambushed by New York niggas
                    It's still West Side though

                    [Chorus: 21 Savage & The Game]
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul ('Fore I sell my soul)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Fuck 12)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul ('Fore I sell my soul)
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul ('Fore I sell my soul)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)

                    [Interlude: The Game]
                    See the thing I miss about hip hop the most
                    Was the storytelling
                    That B.I.G. shit, that Nas shit, that Slick Rick shit
                    That Tribe Called Quest
                    You know that, that cruisin' the street in my '64, R.I.P. to Eazy
                    I ain't got nothin' against new hip hop, I fuck with all you niggas
                    And remember, nigga, I was young too, let's go

                    [Verse 2: The Game]
                    Made it out the hood and some, I'm on my fourth passport
                    God gave me all this shit, I ain't have to ask for it
                    Gold Daytons on a '97 Honda Passport
                    Black ski mask on, runnin' from the task force
                    Uzi, had the cash for it, and I had the stash for it
                    Foot on the brake, hit the wipers, open the dashboard
                    Sold drugs, made straight A's, and I was playin' sports
                    Youngin and fresh, six bricks inside a Jansport
                    Fast forward, countin' this money on Aftermath for it
                    Bought a new Ferrari, gave my bitch ten stacks
                    Told her don't come back here 'til she got an ass for it
                    Told her run through mackin' in Louis to get a bag for it
                    I give you classics when you ask for it
                    I Vince Carter-ed everything Just Blaze threw off the backboard
                    Fuck a Grammy, that is not what I come back for
                    I came for hip-hop, niggas forgot to lock the back door

                    [Chorus: 21 Savage & The Game]
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul ('Fore I sell my soul)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Fuck 12)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul ('Fore I sell my soul)
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul ('Fore I sell my soul)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Woo)

                    [Verse 3: 21 Savage]
                    Ask around Atlanta, Savage known to let it bang bang (Bang)
                    Gang gang, get a nigga stabbed in the chain gang
                    Lieutenant like I'm Dam' Wayne, bring the major pain, pain
                    Candlelight, Fox 5, fish fry, gang gang
                    All I know is A-B-C-D-E-F-G shit (C)
                    Wet 'em with the chopper, watch a nigga get seasick (Sea)
                    Throwin' up the pyramid, like I'm from Egypt (Gang)
                    The hunnid round see-through, y'all so see-through (Bop)
                    I know real Crips and they say they never see you
                    Just like Clifford, I'm the big red Blood, ayy
                    Glock 45, get a big red slug
                    You ain't Blood, you a bitch, you a big red stud (Oh)
                    Way before the rap, I trappin' out the cold
                    I didn't know how to water whip, I straight dropped the dope (Oh)
                    All these guns in the car, I gotta wear a seatbelt
                    I ain't got no license, so I gotta wear my seatbelt (Skrrt)
                    I do this shit myself, nigga, I don't need no help
                    Walk up on 'em with that, God help me, he a priest now (Bop)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)
                    Posted on the block, deuce-deuce in my sock
                    Feel like Mozzy, I got one up top (Yeah)
                    Couple years, real niggas gon' be extinct
                    Bitch, I got a MAC-10 under this mink
                    Pull up, let it blink, nigga, I don't think (Oh)
                    Your hood Titanic, we gon' make that shit sink (Straight up)

                    [Chorus: 21 Savage, The Game]
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul ('Fore I sell my soul)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Fuck 12)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul (Soul)
                    Live by the code, die by the code, never been a ho
                    Bury me before I sell my soul
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)
                    AK with the stock (Stock), thirty on the Glock (Glock)
                    Kill all the opps (Opps), ride on the cops (Cops)"
)

track5 = Track.create!(title: 'React',
                artist: 'The Pussycat Dolls', 
                album: 'TPD3*',
                lyrics: 
                    "[Verse 1]
                    When I get messed up at the party
                    I make a scene and get upset
                    But when I wake up in the morning
                    You bring me breakfast in bed and act like there's nothin' to forget

                    [Pre-Chorus]
                    Maybe I should count my blessings
                    That you're just that type
                    So call me masochistic
                    But sometimes, I want to fight

                    [Chorus]
                    Every time I leave, you pull me closer
                    I hang up the phone, you call me back
                    Why don't you mess me 'round like you're supposed to?
                    You're turning me cruel 'cause I'm just wanting you to react

                    [Post-Chorus]
                    Hey, hey, hey
                    Hey, hey, hey, hey
                    Hey, hey, hey
                    You're turning me cruel 'cause I'm just wanting you to react

                    [Verse 2]
                    If I say jump, you just say 'How high?'
                    I think you might love me to death
                    The way you do me, boy, you're too nice
                    You gas me up when I wanna be losin' my breath

                    [Pre-Chorus]
                    Maybe I should count my blessings
                    That you're just that type
                    So call me masochistic
                    But sometimes, I want to fight (Rrah)

                    [Chorus]
                    Every time I leave, you pull me closer
                    I hang up the phone, you call me back
                    Why don't you mess me 'round like you're supposed to?
                    You're turning me cruel 'cause I'm just wanting you to react
                    Looking for a little confrontation
                    Now I know the nice guys turn me bad
                    The less you do, the more it makes me crazy (Crazy)
                    You're turning me cruel 'cause I'm just wanting you to react

                    [Post-Chorus]
                    Hey, hey, hey
                    Hey, hey, hey, hey
                    Hey, hey, hey
                    You're turning me cruel 'cause I'm just wanting you to react

                    [Chorus]
                    Every time I leave, you pull me closer (Pull me closer)
                    I hang up the phone, you call me back
                    Why don't you mess me 'round like you're supposed to? (Mess me 'round)
                    You're turning me cruel 'cause I'm just wanting you to react
                    Looking for a little confrontation
                    Now I know the nice guys turn me bad
                    The less you do the more it makes me crazy
                    You're turning me cruel 'cause I'm just wanting you to react

                    [Post-Chorus]
                    Hey, hey, hey
                    Hey, hey, hey, hey
                    Hey, hey, hey
                    You're turning me cruel 'cause I'm just wanting you to react"
)

track6 = Track.create!(title: 'Call on Me',
                artist: 'Eric Prydz', 
                album: 'Eric Prydz',
                lyrics: 
                    "[Intro/Chorus]
                    Valerie
                    Call on me, call me
                    Call on me, call me
                    Call on me, call me
                    Call on me, call me
                    Call on me, call me
                    Call on me, call me
                    I'm the same boy I used to be

                    [Chorus]
                    Call me, call on me
                    Call me, call on me
                    Call me, call on me, call me
                    I'm the same boy I used to be

                    [Instrumental]

                    [Chrous]
                    I'm the same boy I used to be
                    Call me, call on me
                    Call me, call on me
                    Call me, call on me, call me
                    I'm the same boy I used to be

                    [Instrumental]

                    [Bridge]
                    Same boy I used to be
                    Me, call on me
                    Call on me, call me
                    Call on me, call me
                    Call on me, call me
                    Call on me, call me
                    Call on me, call me
                    Call on me, call me
                    I'm the same boy I used to be

                    [Chorus]
                    Call me, call on me
                    Call me, call on me
                    Call me, call on me, call me
                    I'm the same boy I used to be

                    [Chorus]
                    Call me, call on me
                    Call me, call on me
                    Call me, call on me, call me
                    I'm the same boy I used to be"
)

track7 = Track.create!(title: 'Controlla',
                artist: 'Drake', 
                album: 'Views',
                lyrics: 
                    "[Verse 1: Drake]
                    Right, my yiy just changed
                    You just buzzed the front gate
                    I thank God you came
                    How many more days could I wait?
                    I made plans with you
                    And I won't let 'em fall through
                    I, I, I, I, I

                    [Chorus: Drake]
                    I think I'd lie for you
                    I think I'd die for you
                    Jodeci 'Cry for You'
                    Do things when you want me to
                    Like controlla, controlla, yeah
                    Like controlla, controlla, yeah

                    [Verse 2: Drake]
                    Okay, you like it, when I get
                    Aggressive, tell you to
                    Go slower, go faster
                    Like controlla, controlla, yeah
                    Like controlla, controlla, yeah

                    [Bridge: Drake]
                    And I’m never on a waste ting, shawty
                    I do it how you say you want it
                    Them girls, they just wanna take my money
                    They don't want me to give you nothing
                    They don't want you to have nothing
                    They don't wanna see me find your lovin'
                    They don't wanna see me
                    Smiling back when they pree

                    [Chorus: Drake]
                    Knowing I'd lie for you
                    Thinking I'd die for you
                    Jodeci 'Cry for You'
                    Do things when you want me to
                    Like controlla, controlla, yeah
                    Like controlla, controlla, yeah

                    [Break: Beenie Man]
                    Gyal a tear off mi garments
                    And a bawl fi come inna mi apartment (Woi!)
                    Di gyal dem want di length and strength
                    Action speak louder than argument well

                    [Verse 3: Drake]
                    But you can't just diss and come tell man sorry
                    You can't listen to me talk and go tell my story, nah
                    It don't work like that when you love somebody
                    My old flex is my new flex now and we're workin' on it, yeah
                    And that's why I need
                    All the energy that you bring to me
                    My last girl would tear me apart
                    But she'd never wanna split a ting with me

                    [Chorus: Drake]
                    But when it comes to you, you
                    I think I'd lie for you
                    I think I'd die for you
                    Do things when you want me to
                    Like controlla, controlla, yeah
                    Like controlla, controlla, yeah

                    [Bridge: Drake]
                    And I’m never on a waste ting shawty
                    I do it how you say you want it
                    Them girls, they just wanna take my money
                    They don't want me to give you nothing
                    They don't want you to have nothing
                    They don't wanna see me find your lovin'
                    They don't wanna see me
                    Smiling back when they pree (Jheeze!)

                    [Outro: Beenie Man]
                    Music a drop!
                    Gyal a whine up dem bumpa
                    Dis is di summa summa controlla
                    Drake from Canada, Beenie Man from Jamaica
                    Dah one yah a murda—Zagga!"
)

track8 = Track.create!(title: 'Merge',
                artist: 'Grizzly Bear', 
                album: 'Horn of Plenty',
                lyrics: 
                    "[Verse]
                    Stuck
                    On the fence with you
                    This I'm always prone to do
                    Forge something new
                    And leave it all behind with you
                    And leave it all behind with you
                    Back at the front of the lane
                    I see all those boys again
                    I shift through you

                    [Outro]
                    And leave it all behind, it's true
                    And leave it all behind, it's true"
)

track9 = Track.create!(title: 'Bang Bang (My Baby Shot Me Down)',
                artist: 'Nancy Sinatra', 
                album: 'How Does That Grab You?',
                lyrics: 
                    "[Verse 1]
                    I was five, and he was six
                    We rode on horses made of sticks
                    He wore black and I wore white
                    He would always win the fight

                    [Hook]
                    Bang bang, he shot me down
                    Bang bang, I hit the ground
                    Bang bang, that awful sound
                    Bang bang, my baby shot me down

                    [Verse 2]
                    Seasons came and changed the time
                    When I grew up I called him mine
                    He would always laugh and say
                    'Remember when we used to play?'

                    [Hook]
                    'Bang bang, I shot you down
                    Bang bang, you hit the ground
                    Bang bang, that awful sound
                    Bang bang, I used to shoot you down'

                    [Verse 3]
                    Music played, and people sang
                    Just for me the church bells rang
                    Now he's gone, I don't know why
                    And ‘til this day sometimes I cry
                    He didn't even say 'Goodbye'
                    He didn't take the time to lie

                    [Hook]
                    Bang bang, he shot me down
                    Bang bang, I hit the ground
                    Bang bang, that awful sound
                    Bang bang, my baby shot me down"
)


track10 = Track.create!(title: 'Technologic',
                artist: 'Daft Punk', 
                album: 'Human After All',
                lyrics: 
                    "[[Verse 1]
                    Buy it, use it, break it, fix it
                    Trash it, change it, mail – upgrade it
                    Charge it, point it, zoom it, press it
                    Snap it, work it, quick – erase it
                    Write it, cut it, paste it, save it
                    Load it, check it, quick – rewrite it
                    Plug it, play it, burn it, rip it
                    Drag and drop it, zip – unzip it
                    Lock it, fill it, call it, find it
                    View it, code it, jam – unlock it
                    Surf it, scroll it, pause it, click it
                    Cross it, crack it, switch – update it
                    Name it, read it, tune it, print it
                    Scan it, send it, fax – rename it
                    Touch it, bring it, pay it, watch it
                    Turn it, leave it, start – format it

                    [Chorus]
                    Technologic
                    Technologic
                    Technologic
                    Technologic

                    [Verse 2]
                    Buy it, use it, break it, fix it
                    Trash it, change it, mail – upgrade it
                    Charge it, point it, zoom it, press it
                    Snap it, work it, quick – erase it
                    Write it, cut it, paste it, save it
                    Load it, check it, quick – rewrite it
                    Plug it, play it, burn it, rip it
                    Drag and drop it, zip – unzip it
                    Lock it, fill it, call it, find it
                    View it, code it, jam – unlock it
                    Surf it, scroll it, pause it, click it
                    Cross it, crack it, switch – update it
                    Name it, read it, tune it, print it
                    Scan it, send it, fax – rename it
                    Touch it, bring it, pay it, watch it
                    Turn it, leave it, start – format it
                    Buy it, use it, break it, fix it
                    Trash it, change it, mail – upgrade it
                    Charge it, point it, zoom it, press it
                    Snap it, work it, quick – erase it
                    Write it, cut it, paste it, save it
                    Load it, check it, quick – rewrite it
                    Plug it, play it, burn it, rip it
                    Drag and drop it, zip – unzip it
                    Touch it, bring it, pay it, watch it
                    Turn it, leave it, start – format it
                    Touch it, scroll it, pause it, click it
                    Cross it, crack it, switch – update it
                    Surf it, scroll it, pause it, click it
                    Cross it, crack it, switch – update it
                    Name it, read it, tune it, print it
                    Scan it, send it, fax – rename it
                    Touch it, bring it, pay it, watch it
                    Turn it, leave it, start – format it
                    Buy it, use it, break it, fix it
                    Trash it, change it, mail – upgrade it
                    Charge it, point it, zoom it, press it
                    Snap it, work it, quick – erase it
                    Write it, cut it, paste it, save it
                    Load it, check it, quick – rewrite it
                    Plug it, play it, burn it, rip it
                    Drag and drop it, zip – unzip it
                    Surf it, scroll it, pause it, click it
                    Cross it, crack it, switch – update it
                    Name it, read it, tune it, print it
                    Scan it, send it, fax – rename it
                    Touch it, bring it, pay it, watch it
                    Turn it, leave it, start – format it
                    Buy it, use it, break it, fix it
                    Trash it, change it, mail – upgrade it
                    Charge it, point it, zoom it, press it
                    Snap it, work it, quick – erase it
                    Write it, cut it, paste it, save it
                    Load it, check it, quick – rewrite it
                    Plug it, play it, burn it, rip it
                    Drag and drop it, zip – unzip it
                    Surf it, scroll it, pause it, click it
                    Cross it, crack it, switch – update it
                    Name it, read it, tune it, print it
                    Scan it, send it, fax – rename it

                    [Chorus]
                    Technologic
                    Technologic
                    Technologic
                    Technologic"
)


track11 = Track.create!(title: 'Run-Time',
                artist: 'Imogen Heap', 
                album: 'Sparks',
                lyrics: 
                    "[[Verse 1]
                    Sparks might fly, in no time
                    It's a delayed reaction of the third kind
                    Woah, I'm so ready for this
                    Shrink-wrapped songs
                    I couldn't face the music
                    Cause dark matters bonded us way beyond our 'best by' date

                    [Chorus 1]
                    You know we've had it good, we've had it bad
                    So no hard feelings
                    We've done all we could and all we can
                    I'm done pretending
                    Let's quit while we're still friends

                    [Verse 2]
                    Making up stories, they grew to be too tall
                    My fortress to forget couldn't take any more
                    You nearly watched me ruin everything, everything
                    What's the number one rule of don't-do's?
                    Well, you knew it all too well
                    You were supposed to be looking out for me
                    Have you any idea how difficult it's been?

                    [Chorus 2]
                    You know we've had it good, we've had it bad
                    So no hard feelings
                    We've done all we could and all we can
                    Let's save ourselves a sorry ending

                    [Chorus 3]
                    You know we've had it good, we've had it bad
                    But this is as far as we can stretch
                    Let's stop pretending Stop pretending!
                    And quit while we're still friends

                    [Bridge]
                    Well, I was so young, misguided, maybe
                    But still this hangs over my every pen to paper
                    And this all started with a song
                    Started with a song, started with a song
                    Woah, let this be our last one

                    [Interlude]
                    Drop... Drop
                    Good, good
                    Bad, bad
                    Good good good good
                    And bad bad bad bad

                    [Chorus 4]
                    We've had it good, we've had it bad
                    This is as far as we can stretch
                    Stop pretending!
                    And quit while we're still friends

                    [Build-Up]
                    I wish you well
                    I wish you well
                    I wish you well, wish you well, wish you well

                    [Refrain]
                    I wish you well, I wish you well
                    I won't tell if you won't tell
                    I won't hold it against you if you bow out gracefully
                    Can we just not drag this out, please?

                    [Refrain]
                    I wish you well, I wish you well
                    I won't tell if you won't tell
                    I won't hold it against you if you bow out gracefully
                    Can we just not drag this out?

                    [Outro]
                    Aah, ooh
                    Aah, ooh
                    Aah"
)

track12 = Track.create!(title: 'Syntax Error',
                artist: '311', 
                album: 'Mosaic',
                lyrics: 
                    "I know I should have stopped it
                    Any other day I'd know better but
                    Now I'm laid out on the floor
                    I know I kinda dropped it
                    Should have written it down in a letter
                    But now there's one foot out the door

                    All the words in disarray
                    Lost in translation
                    Errors just replayed

                    I didn't know it was like that
                    Left field and way off from center
                    And now there's just one great divide
                    There's no doubt, wait, strike that
                    Off conversation is splintered
                    Oh well Oh hell at least I tried

                    All the thoughts I can't relay
                    Have no explanation
                    Prefix just displayed

                    Spell check
                    Streamline
                    Clarified
                    Cut copied pasted
                    And erased it
                    But I replaced it
                    Outline
                    Researched
                    Summarized
                    Paraphrased refrained
                    And then deleted
                    Now I'm defeated

                    Good intention's gone astray
                    Locked in frustration
                    Thought lines in decay"
)

track13 = Track.create!(title: 'Ruby Tuesday',
                artist: 'The Rolling Stones', 
                album: 'Between the Buttons',
                lyrics: 
                    "[Verse 1]
                    She would never say where she came from
                    Yesterday don't matter if it's gone
                    While the sun is bright
                    Or in the darkest night
                    No one knows
                    She comes and goes

                    [Chorus]
                    Goodbye Ruby Tuesday
                    Who could hang a name on you?
                    When you change with every new day
                    Still I'm going to miss you

                    [Verse 2]
                    Don't question why she needs to be so free
                    She'll tell you it's the only way to be
                    She just can't be chained
                    To a life where nothing's gained
                    And nothing's lost
                    At such a cost

                    [Chorus]
                    Goodbye Ruby Tuesday
                    Who could hang a name on you?
                    When you change with every new day
                    Still I'm going to miss you

                    [Verse 3]
                    'There's no time to lose,' I heard her say
                    'Catch your dreams before they slip away
                    Dying all the time
                    Lose your dreams and you
                    Will lose your mind
                    Ain't life unkind?'

                    [Chorus]
                    Goodbye Ruby Tuesday
                    Who could hang a name on you?
                    When you change with every new day
                    Still I'm going to miss you

                    Goodbye Ruby Tuesday
                    Who could hang a name on you?
                    When you change with every new day
                    Still I'm going to miss you"
)

track14 = Track.create!(title: 'Jenny from the Block',
                artist: 'Jennifer Lopez', 
                album: 'This is Me... Then',
                lyrics: 
                    "[Intro: Sample]
                    Children grow and women producing
                    Men go working, some go stealing
                    Everyone's got to make a living
                    BX, uh (South side Bronx)
                    (South side Bronx)

                    [Chorus]
                    Don't be fooled by the rocks that I got
                    I'm still, I'm still Jenny from the block
                    Used to have a little, now I have a lot
                    No matter where I go I know where I came from (From the Bronx)
                    Don't be fooled by the rocks that I got
                    I'm still, I'm still Jenny from the block
                    Used to have a little, now I have a lot
                    No matter where I go I know where I came from (South side Bronx, from the Bronx)

                    [Verse 1]
                    From In Living Color to movie scripts
                    To On the 6 to J. Lo to this
                    Headline clips
                    I stay grounded as the amounts roll in
                    I'm real I thought I told ya (I'm real)
                    I'm real even on Oprah (I'm real)
                    That's just me
                    Nothing phony, don't hate on me
                    What you get is what you see, oh (South side Bronx)

                    [Chorus]
                    Don't be fooled by the rocks that I got
                    I'm still, I'm still Jenny from the block
                    Used to have a little, now I have a lot
                    No matter where I go I know where I came from (From the Bronx)
                    Don't be fooled by the rocks that I got
                    I'm still, I'm still Jenny from the block
                    Used to have a little, now I have a lot
                    No matter where I go I know where I came from (South side Bronx, from the Bronx)

                    [Verse 2]
                    I'm down to earth like this
                    Rocking this business
                    I've grown up so much
                    I'm in control and loving it
                    Rumors got me laughing kid
                    I love my life and my public
                    Put God first and can't forget to stay real (Real)
                    To me it's like breathing, yeah (South side Bronx)

                    [Chorus]
                    Don't be fooled by the rocks that I got
                    I'm still, I'm still Jenny from the block
                    Used to have a little, now I have a lot
                    No matter where I go I know where I came from (From the Bronx)
                    Don't be fooled by the rocks that I got
                    I'm still, I'm still Jenny from the block
                    Used to have a little, now I have a lot
                    No matter where I go I know where I came from

                    [Bridge: Sample]
                    South Bronx, oh, the South side Bronx
                    F-F-F-Flip it
                    Boricua
                    Now that's what happened
                    South Bronx, the South side Bronx
                    Ah
                    F-F-F-Flip it
                    Now that's what happened
                    South Bronx, the South side Bronx
                    Boricua's in the house
                    F-F-F-Flip it
                    Now that's what happened
                    Hey
                    South Bronx, the South side Bronx
                    Everyone's got to make a living
                    Alright, now bring it back

                    [Chorus]
                    Don't be fooled by the rocks that I got
                    I'm still, I'm still Jenny from the block
                    Used to have a little, now I have a lot
                    No matter where I go I know where I came from (From the Bronx)
                    Don't be fooled by the rocks that I got
                    I'm still, I'm still Jenny from the block
                    Used to have a little, now I have a lot (South side Bronx)
                    No matter where I go I know where I came from (South side Bronx, from the Bronx)
                    Don't be fooled by the rocks that I got
                    I'm still, I'm still Jenny from the block
                    Used to have a little, now I have a lot (South side Bronx)
                    No matter where I go I know where I came from (South side Bronx, from the Bronx)
                    Dont be fooled by the rocks that I got
                    I'm still, I'm still Jenny from the block
                    Used to have a little, now I have a lot (South side Bronx)
                    No matter where I go I know where I came from (South side Bronx, from the Bronx)"
)

track15 = Track.create!(title: 'Ayo Technology',
                artist: '50 Cent featuring Justin Timberlake & Timbaland', 
                album: 'Curtis',
                lyrics: 
                    "[Intro: 50 Cent]
                    Somethin' special, unforgettable
                    50 Cent, Cent, Justin, 'tin
                    Timbaland, 'land, goddamn, damn
                    She, she, she want it, I want to give it to her
                    She know that it's right here for her
                    I wanna see her break it down
                    I'm ballin', throwing money around

                    [Verse 1: 50 Cent]
                    She a working girl, she work the pole
                    She break it down, she take it low
                    She fine as hell, she 'bout the dough
                    She doing her thing out on the flo'
                    Her money money, she make it make it
                    Look at the way she shake it shake it
                    Make you wanna touch it, make you wanna taste it
                    Have you lusting for it, going crazy, face it
                    Now don't stop, get it get it
                    The way she shake it make you wanna hit it
                    Think she double jointed from the way she split it
                    Got your head fucked up from the way she did it
                    She so much more than you used to
                    She know just how to move to seduce you
                    She gon' do the right thing and touch the right spot
                    And dance in your lap till you ready to pop

                    [Bridge: 50 Cent & Justin Timberlake]
                    She always ready, when you want it she want it
                    Like a nympho, the info, I'll show you where to meet her
                    On the late night, 'til daylight, the club jumping
                    If you want a good time, she gon' give you what you want
                    (Let me talk to you)

                    [Hook: Justin Timberlake]
                    Baby, you're so new age, you're like my new craze
                    Let's get together, maybe we can start a new phase
                    This smoke's got the club all hazy, spotlights don't do you justice, baby
                    Why don't you come over here?
                    You got me saying, 'Ayo!' I'm tired of using technology
                    Why don't you sit down on top of me?
                    Ayo! I'm tired of using technology
                    I need you right in front of me
                    Ooh, she wants it, uh, uh, she wants it
                    Ooh, she wants it, so I gotta give it to her
                    Ooh, she wants it, uh, uh, she wants it
                    Ooh, she wants it, so I gotta give it to her

                    [Post-Hook: Timbaland]
                    Your hips, your thighs, they got me hypnotized
                    Let me tell you
                    Your hips, your thighs, they got me hypnotized
                    Let me tell you
                    Your hips, your thighs, they got me hypnotized
                    Let me tell you
                    Your hips, your thighs, they got me hypnotized
                    Let me tell you, girl

                    [Verse 2: 50 Cent]
                    Got a thang for that thang she got
                    The way she make it tick, the way she make it pop
                    I make it rain for her so she don't stop
                    I ain't got to move, I can sit and watch
                    In the fantasy, it's plain to see, just how it be, her and me
                    Backstroking, sweat soaking, all into my satin sheets
                    When she ready to ride, I'm ready to roll
                    I'll be in this bitch 'til the club close
                    Watching her do her thing on all fours
                    Now that that there should be against the law
                    From side to side, left to right, break it down, down, down
                    Know I like when you're hype and you throw it all around
                    Different style, different mood, damn, I like the way you move
                    Girl, you got me thinking 'bout all the things I'll do to you
                    Let's get it poppin', shawty, we could switch positions
                    From the couch to the counters in my kitchen
                    (Let me talk to you)

                    [Hook: Justin Timberlake]
                    Baby, you're so new age, you're like my new craze
                    Let's get together, maybe we can start a new phase
                    This smoke's got the club all hazy, spotlights don't do you justice, baby
                    Why don't you come over here?
                    You got me saying, 'Ayo!' I'm tired of using technology
                    Why don't you sit down on top of me?
                    Ayo! I'm tired of using technology
                    I need you right in front of me
                    Ooh, she wants it, uh, uh, she wants it
                    Ooh, she wants it, so I gotta give it to her
                    Ooh, she wants it, uh, uh, she wants it
                    Ooh, she wants it, so I gotta give it to her

                    [Post-Hook: Timbaland]
                    Your hips, your thighs, they got me hypnotized
                    Let me tell you
                    Your hips, your thighs, they got me hypnotized
                    Let me tell you
                    Your hips, your thighs, they got me hypnotized
                    Let me tell you
                    Your hips, your thighs, they got me hypnotized
                    Let me tell you girl"
)

track16 = Track.create!(title: 'Upgrade U',
                artist: 'Beyoncé featuring JAY-Z', 
                album: 'B’Day',
                lyrics: 
                    "[Intro: JAY-Z & (Beyoncé)]
                    Hehehe! Yeah, B!
                    Talk yo' shit! Hehe (Partner, let me upgrade you)
                    How you gon' upgrade me?
                    What's higher than number one?
                    You know I used to beat that block
                    Now I be's the block (Partner, let me upgrade you)

                    [Verse 1: Beyoncé]
                    I hear you be the block, but I'm the lights that keep the streets on
                    Notice you the type that like to keep them on a leash though
                    I'm known to walk alone, but I'm alone for a reason
                    Sending me a drink ain't appeasing, believe me
                    Come harder, this won't be easy
                    Don't doubt yourself, trust me, you need me
                    This ain't a shoulder with a chip or a ego
                    But what you think they all mad at me for?

                    [Pre-Chorus: Beyoncé]
                    You need a real woman in your life (That's a good look)
                    Taking care of home and still fly (That's a good look)
                    I'mma help you build up your account
                    (That's a good look, better yet, a hood look, ladies that's a good look)
                    When you're in them big meetings for the mills (That's a good look)
                    It take me just to compliment the deals (That's a good look)
                    Anything you cop, I'll split the bill
                    (That's a good look, better yet, a hood look, ladies that's a good look)

                    [Chorus: Beyoncé]
                    Partner, let me upgrade you, Audemars Piguet you
                    Switch your neck ties to purple labels
                    Upgrade you, I can up, can I upgrade you?
                    Partner, let me upgrade you
                    Flip a new page, let me upgrade you
                    Introduce you to some new things, and upgrade you
                    I can up, can I up, let me upgrade you?
                    Partner, let me upgrade you

                    [Verse 2: Beyoncé]
                    I can do for you, what Martin did for the people
                    Ran by the men, but the women keep the tempo
                    It's very seldom that you're blessed to find your equals
                    Still play my part and let you take the lead role, believe me
                    I'll follow, this could be easy
                    I'll be the help, whenever you need me (You need me)
                    I see your hustle with my hustle, I can keep you
                    Focused on your focus, I can feed you

                    [Pre-Chorus: Beyoncé]
                    You need a real woman in your life (That's a good look)
                    Taking care of home and still fly (That's a good look)
                    I'ma help you build up your account
                    (That's a good look, better yet, a hood look, ladies, that's a good look)
                    When you're in them big meetings for the mills (That's a good look)
                    It take me just to compliment the deals (That's a good look)
                    Anything you cop, I'll split the bill
                    (That's a good look, better yet, a hood look, ladies, that's a good look)

                    [Chorus 2: (Beyoncé & JAY-Z)]
                    Partner, let me upgrade you, Audemars Piguet you
                    Switch your neck ties to purple labels
                    Upgrade you, I can (up), can I (up) grade you?
                    Partner, let me upgrade you
                    Flip a new page, let me upgrade you
                    Introduce you to some new things, and (Uh!) upgrade (HOV!) you
                    I can (up), (Uh!) can I (up), let me, (HOV!) upgrade you?
                    Partner, let me upgrade you,(Uh huh huh!)

                    [Verse 3: JAY-Z]
                    I be the d-boy who infiltrated all the corporate dudes
                    They call shots, I call audibles
                    Jacob the jeweler, baubles, Lorraine Schwartz oughta do
                    It's big balling, baby, when I'm courting you
                    I'm talking spy bags and fly pads
                    And rooms at the Bloomberg, and rumors
                    You on the verge of a new merge
                    'Cause that rock on ya finger's like a tumor
                    You can't fit ya hand in ya new purse
                    It's humorous to me, they watching and we just yachting
                    Island-hopping off the Amalfi coast
                    Mafioso, Hov, baby, you ever seen Saturn?
                    No, not the car, but everywhere we are
                    You're sure to see stars, this is high level
                    Not eye-level, my bezel courtesy of Audemars
                    I order yours tomorrow, now look at the time I saved you
                    Mama, let me upgrade you (hehe)

                    [Bridge: Beyoncé]
                    Just when you think we had it all
                    Big ends, condos, collecting cars
                    Picture your life elevating with me
                    Now you my project celebrity
                    I keep ya name hot in them streets
                    That little glimpse of light
                    Makes that diamond really shine
                    And you already is a star, but unless you're flawless
                    Then ya dynasty ain't complete without a chief, like me

                    [Chorus: Beyoncé]
                    [Partner, let me upgrade you, Audemars Piguet you
                    Switch your neck ties to purple labels
                    Upgrade you, I can (up), can I (up) grade you?
                    Partner, let me upgrade you]
                    [Flip a new page
                    Introduce you to some new things, and upgrade you]
                    [I can (up), can I (up), let me, upgrade you?
                    Partner, let me upgrade you]

                    [Outro: Beyoncé]
                    Audemars Piguet watch, dimples in ya necktie
                    Hermes briefcase, Cartier tie clips
                    Silk-lined blazers, diamond creamed facials
                    VVS cuff links, six-star pent suites
                    Partna, let me, upgrade ya, grade ya
                    Partna, partna, let me, upgrade ya, grade ya
                    Let me, let me, let me, upgrade ya, grade ya
                    Partna, partna, partna, let me upgrade ya (Huh!)"
)

track17 = Track.create!(title: 'Hot Rails to Hell',
                artist: 'Blue Öyster Cult', 
                album: 'Tyranny and Mutation',
                lyrics: 
                    "[Verse 1: Joe Bouchard]
                    Riding the underground
                    Swimming in sweat
                    A rumble above and below
                    Hey, cop, don't you know
                    The heat's on alright
                    The hot summer day didn't quit for the night

                    [Chorus: Joe Bouchard]
                    1277 express to heaven
                    Speeding along like dynamite
                    1277 express to heaven
                    Rumbles the steel like a dogfight

                    [Post-Chorus: Joe Bouchard]
                    You caught me in a spell
                    Trying to leave, but you know darn well
                    The heat from below can burn your eyes out

                    [Verse 2: Joe Bouchard]
                    Blackened out eyes
                    Scratched on the wall
                    Stoned outlooks from the crowd
                    The king will not know
                    On the wall, it was said
                    The flash of his cards was sprayed with red

                    [Chorus: Joe Bouchard]
                    1277 express to heaven
                    Speeding along like dynamite
                    1277 express to heaven
                    Rumbles the steel like a dogfight

                    [Post-Chorus: Joe Bouchard]
                    You caught me in a spell
                    Trying to leave but you know darn well
                    The heat from below can burn your eyes out

                    [Guitar Solo]

                    [Bridge: Joe Bouchard]
                    1277 express to...
                    1277 express to...

                    [Chorus: Joe Bouchard]
                    1277 express to heaven
                    Speeding along like dynamite
                    1277 express to heaven
                    Rumbles the steel like a dogfight

                    [Post-Chorus: Joe Bouchard]
                    You caught me in a spell
                    Trying to leave but you know darn well
                    The heat from below can burn, yeah, burn!
                    Your eyes out, your eyes out

                    [Outro: Joe Bouchard]
                    Your eyes out!
                    Out! Out! Out! Out!
                    Out! Out! Out! Out!"
)

track18 = Track.create!(title: 'Let’s Sort the Whole Thing Out',
                artist: 'Carly Rae Jepsen', 
                album: 'Dedicated Side B',
                lyrics: 
                    "[Verse 1]
                    What it feels like when I'm next to you
                    It's a soft touch that I read into
                    Was it just me, did you linger for too long?
                    But it's alright if it's on your mind
                    'Cause it's all I'm thinkin' all the time
                    There was one thing that I wanted all my life
                    For real

                    [Pre-Chorus]
                    Somebody wants you, somebody cares (For real)
                    Somebody wants you, somebody cares (Then he said)

                    [Chorus]
                    I love you, this is a new thing
                    One more drink, let's get to the bottom of it
                    I love you, let's sort the whole thing out (Then he said)
                    I love you, this is a new thing
                    One more drink, let's get to the bottom of it
                    I love you, let's sort the whole thing out
                    Let's sort the whole thing out

                    [Post-Chorus]
                    Let's sort the whole thing out

                    [Verse 2]
                    I was broken in a million ways
                    Then I met you and I saw your face
                    I was certain I could not want something more
                    Goin' crazy 'cause you're hard to read
                    But I know you want this bad as me
                    It's a good thing and I want you to be sure
                    For real

                    [Pre-Chorus]
                    Somebody wants you, somebody cares (For real)
                    Somebody wants you, somebody cares (Then he said)

                    [Chorus]
                    I love you, this is a new thing
                    One more drink, let's get to the bottom of it
                    I love you, let's sort the whole thing out (Then he said)
                    I love you, this is a new thing
                    One more drink, let's get to the bottom of it
                    I love you, let's sort the whole thing out
                    Let's sort the whole thing out

                    [Post-Chorus]
                    Let's sort the whole thing out

                    [Break]
                    I love you
                    I love you

                    [Bridge]
                    Never thought I'd hear you say
                    I've been hopin' every day
                    Never thought I'd hear you say
                    I've been hopin' every day (Then he said)

                    [Chorus]
                    I love you, this is a new thing
                    One more drink, let's get to the bottom of it
                    I love you, let's sort the whole thing out (Then he said)
                    I love you, this is a new thing
                    One more drink, let's get to the bottom of it
                    I love you, let's sort the whole thing out
                    Let's sort the whole thing out

                    [Outro]
                    Let's sort the whole thing out
                    I love you"
)

track19 = Track.create!(title: 'Buggin’ Out',
                artist: 'A Tribe Called Quest', 
                album: 'The Low End Theory',
                lyrics: 
                    "[Verse 1: Phife Dawg]
                    Yo, microphone check one, two, what is this?
                    The five foot assassin with the roughneck business
                    I float like gravity, never had a cavity
                    Got more rhymes than the Winans got family
                    No need to sweat Arsenio to gain some type of fame
                    No shame in my game cause I'll always be the same
                    Styles upon styles upon styles is what I have
                    You wanna diss the Phifer but you still don't know the half
                    I sport New Balance sneakers to avoid a narrow path
                    Mess around with this you catch a size eight up your ass
                    I never half step cause I'm not a half stepper
                    Drink a lot of soda so they call me Dr. Pepper
                    Refuse to compete with BS competition
                    Your name ain't Special Ed
                    So won't you seckle with the mission
                    I never walk the street thinking it's all about me
                    Even though deep in my heart, it really could be
                    I just try my best to like go all out
                    Some might even say yo shorty black you're buggin' out

                    [Verse 2: Q-Tip]
                    Zulu Nation, brothers last creation
                    Minds get flooded, ejaculation
                    Right on the two inch tape
                    The Abstract poet incognito, runs the cape
                    Not the best not the worst and occasionally I curse
                    To get my point across, so bust, the floss
                    As I go in between, the grit and the dirt
                    Listen to the mission listen Miss as I do work, umm
                    As I crack the, monotone
                    Children of the jazz so, get your own
                    Smokin R&B cause they try to do me
                    Or the best of the pack but they can't do rap
                    For it's Abstract, original
                    You can't get your own and that's, pitiful
                    I know I'd be the man if I cold yanked the plug
                    On R&B, but I can't and that's bugged

                    [Chorus]
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out

                    [Verse 3: Phife Dawg]
                    Yo when you bug out
                    You usually have a reason for the action
                    Sometimes you do it just for mere satisfaction
                    People be hounding, always surrounding
                    Pulsing, just like a migraine pounding
                    You don't really fret, you stay in your sense
                    Camouflage your feeling, of absolute tense
                    You soar off to another world, deep in your mind
                    But people seem to take that, as being unkind
                    'Oh yo he's acting stank,' really on a regal?
                    A man of the fame not a man of the people
                    Believe that if you wanna but I tell you this much
                    Riding on the train with no dough, sucks
                    Once again a case of your feet in my Nike's
                    If a crowd is in my realm I'm saying -- mic please
                    Hip-hop is living, can't yank the plug
                    If you do the result, will end up kind of bugged

                    [Verse 4: Q-Tip]
                    Yo, I am not an invalid although
                    I used to smoke the weed out
                    Ali Shaheed Muhammad used to say I had to be out
                    Scheming on the cookies with the crazy booming back buns
                    Pushing on them real hard just so we can have the big fun
                    When I left for road, see, I was Boulevard status
                    Battling a MC was when Tip was at his maddest
                    It was one MC after one MC
                    What the world could they be wanting see from little old me
                    Do I have the formula to save the world?
                    Or was it just because I used to
                    Swipe the women and all the girls
                    I'm the type of brother with the crazy extended hand, kid
                    Dissed by all my brothers I was all up what my man did
                    Supposed to be my man
                    But now I wonder cause you're feeble
                    I go out with the strongies and I separate the evils
                    It's your brain against my mind, for those about to boot out
                    All you nasty critters even though you see I bug out

                    [Chorus]
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out
                    Buggin' out, buggin' out, buggin' out, you're buggin' out"
)

track20 = Track.create!(title: 'Disarray',
                artist: 'Lifehouse', 
                album: 'Who We Are',
                lyrics: 
                    "[Verse 1]
                    I face my demons
                    Wrestling these angels to the ground
                    And all that I could find
                    Was a thin line between all the saints
                    And villains it was crossed
                    In my own mind

                    [Chorus]
                    Some day I'm gonna find it
                    Wish I knew what I was looking for
                    Inside the disarray (inside the disarray)
                    I woke up this morning
                    Don't know where I'm going
                    But it's alright
                    I wouldn't have it any other way

                    [Verse 2]
                    Struggling between the facts and fiction
                    I'm alone but I'm alive
                    Everyone around me is trying to make a statement
                    Then there's me
                    I'm just trying to survive

                    [Chorus]

                    [Bridge]
                    If this was any other day
                    I'd pretend to know where I stand
                    I just don't know
                    I just don't know
                    I just don't know

                    [Chorus][x2]"
)

track21 = Track.create!(title: 'Hello Operator',
                artist: 'The White Stripes', 
                album: 'De Stijl',
                lyrics: 
                    "[Verse 1]
                    Hello, operator
                    Can you give me number nine?
                    Can I see you later?
                    Will you give me back my dime?
                    Turn the oscillator
                    Twist it with a dollar bill
                    Mailman, bring the paper
                    Leave it on my window sill

                    [Verse 2]
                    Find a canary
                    A bird to bring my message home
                    Carry my obituary
                    My coffin doesn't have a phone
                    How you gonna get the money?
                    Send papers to an empty home?
                    How you gonna get the money?
                    Nobody to answer the phone"
)

track22 = Track.create!(title: 'Rocket Man',
                artist: 'Elton John', 
                album: 'Honky Château',
                lyrics: 
                    "[Verse 1]
                    She packed my bags last night, pre-flight
                    Zero hour: 9:00 a.m
                    And I'm gonna be high as a kite by then
                    I miss the Earth so much, I miss my wife
                    It's lonely out in space
                    On such a timeless flight

                    [Chorus]
                    And I think it's gonna be a long, long time
                    'Til touchdown brings me 'round again to find
                    I'm not the man they think I am at home
                    Oh no, no, no
                    I'm a rocket man
                    Rocket man, burning out his fuse up here alone
                    And I think it's gonna be a long, long time
                    'Til touchdown brings me 'round again to find
                    I'm not the man they think I am at home
                    Oh no, no, no
                    I'm a rocket man
                    Rocket man, burning out his fuse up here alone

                    [Verse 2]
                    Mars ain't the kind of place to raise your kids
                    In fact, it's cold as hell
                    And there's no one there to raise them if you did
                    And all this science I don't understand
                    It's just my job five days a week
                    A rocket man
                    A rocket man

                    [Chorus]
                    And I think it's gonna be a long, long time
                    'Til touchdown brings me 'round again to find
                    I'm not the man they think I am at home
                    Oh no, no, no
                    I'm a rocket man
                    Rocket man, burning out his fuse up here alone
                    And I think it's gonna be a long, long time
                    'Til touchdown brings me 'round again to find
                    I'm not the man they think I am at home
                    Oh no, no, no
                    I'm a rocket man
                    Rocket man, burning out his fuse up here alone

                    [Outro]
                    And I think it's gonna be a long, long time
                    And I think it's gonna be a long, long time
                    And I think it's gonna be a long, long time
                    And I think it's gonna be a long, long time
                    And I think it's gonna be a long, long time
                    And I think it's gonna be a long, long time
                    And I think it's gonna be a long, long time
                    And I think it's gonna be a long, long time
                    And I think it's gonna be a long, long time"
)

track23 = Track.create!(title: 'Hash Pipe',
                artist: 'Weezer', 
                album: 'Weezer (Green Album)',
                lyrics: 
                    "[Verse 1]
                    I can't help my feelings, I'll go out of my mind
                    These players come to get me cause they'd like my behind
                    I can't love my business if I can't get a trick
                    Down on Santa Monica where tricks are for kids

                    [Chorus]
                    Oh, come on and kick me
                    Oh, come on and kick me
                    (Woah) Come on and kick me
                    (Woah) You've got your problems
                    (Woah) I've got my eyes wide

                    [Verse 2]
                    I can't help my boogies, they get out of control
                    I know that you don't care but I want you to know
                    The knee-stocking flavor is a favorite treat
                    Of men that don't bother with the taste of a teat

                    [Chorus]
                    Oh, come on and kick me
                    Oh, come on and kick me
                    (Whoa) Come on and kick me
                    (Woah) You've got your problems
                    (Oh) I've got my eyes wide
                    (Oh) You've got your big G's
                    I've got my hash pipe
                    I've got my hash pipe

                    [Guitar Solo]

                    [Chorus]
                    Oh, come on and kick me
                    Oh, come on and kick me
                    (Oh) Come on and kick me
                    (Oh) You've got your problems
                    (Oh) I've got my eyes wide
                    (Oh) You've got your big G's
                    I've got my hash pipe
                    I got my hash pipe
                    I got my hash pipe
                    I got my hash pipe"
)

track24 = Track.create!(title: 'Loop De Loop',
                artist: 'Johnny Thunder', 
                album: 'Loop De Loop',
                lyrics: 
                    "LOOP DE LOOP
                    Johnny Thunder
                    Here we go loop de loop
                    Here we go loop de li
                    Here we go loop de loop
                    On a saturday night
                    We're having a party
                    Ev'rybody's havin' a great time
                    All the gang's here and a-dancin'
                    Yeah I'm loopin' with a baby of mine
                    Here we go loop de loop
                    Here we go loop de li
                    Here we go loop de loop
                    On a saturday night
                    Darling are you ready
                    To loop a loop loop with me
                    Start right there
                    Wait just a minute until I count to three
                    (one, two, three)
                    Here we go loop de loop
                    Here we go loop de li
                    Here we go loop de loop
                    On a saturday night"
)

track25 = Track.create!(title: 'Infinite',
                artist: 'Eminem', 
                album: 'Infinite',
                lyrics: 
                    "[Intro]
                    Aw, yeah (It's like this, like this)
                    It's Eminem, baby
                    Back up in that motherfuckin' ass
                    ('Til forever, 'til forever)
                    One time for your motherfuckin' mind (For MC's, MC's)
                    We represent the 313—you know what I’m sayin'?
                    Yo, they don’t know shit about this, for the '96

                    [Verse 1]
                    Ayo, my pen and paper cause a chain reaction
                    To get your brain relaxin', the zany actin' maniac in action
                    A brainiac in fact, son, you mainly lack attraction
                    You look insanely wack when just a fraction of my tracks run
                    My rhymin' skills got you climbin' hills
                    I travel through your mind and to your spine like siren drills
                    I'm slimin' grills of roaches, with spray that disinfects
                    And twistin' necks of rappers 'til their spinal column disconnects
                    Put this in decks and check the monologue
                    Turn your system up, twist 'em up
                    And indulge in the marijuana smog
                    This is the season for noise pollution contamination
                    Examination of more car-tunes than animation
                    My lamination of nar-er-ration, hits a snare and bass
                    On a track for duck rapper interrogation
                    When I declare invasion, there ain't no time to be starin' gazin'
                    I turn the stage into a barren wasteland; I'm Infinite

                    [Hook]
                    You heard of Hell, well, I was sent from it
                    I went to it, servin' a sentence
                    For murderin' instruments
                    Now I'm tryin' to repent from it
                    But when I hear the beat, I'm tempted
                    To make another attempt at it; I'm Infinite

                    [Verse 2]
                    Bust it, I let the beat commence
                    So I can beat the sense in your elite defense
                    I got some meat to mince
                    A crew to stomp, and then two feet to rinse
                    I greet the gents and ladies, I spoil loyal fans
                    I foil plans and leave fluids leakin' like oil pans
                    My coiled hands around this microphone are lethal
                    One thought in my cerebral
                    Is deeper than a jeep-full of people
                    MC's are feeble, I came to cause some pandemonium
                    Battle a band of phony MC's, and stand the lonely one
                    Imitator, intimidator, stimulator
                    Simulator of data, eliminator
                    There's never been a greater since the burial of Jesus
                    Fuck around and catch all the venereal diseases
                    My thesis'll smash a stereo to pieces
                    My a cappella releases classic masterpieces
                    Through telekinesis, it eases you mentally
                    Gently, sentimentally, instrumentally
                    With entity, dementedly meant to be Infinite

                    [Hook]
                    You heard of Hell, well, I was sent from it
                    I went to it, servin' a sentence
                    For murderin' instruments
                    Now I'm tryin' to repent from it
                    But when I hear the beat, I'm tempted
                    To make another attempt at it; I'm Infinite

                    [Verse 3]
                    Man, I got evidence, I'm never dense
                    And I've been clever ever since my residence was hesitant
                    To do some shit that represents the MO
                    So I'm assumin' all responsibility
                    ‘Cause there's a monster real in me
                    That always wants to kill emcees
                    Mic nestler, slammin' like a wrestler
                    Here to make a mess of a lyric-smugglin' embezzler
                    No one is specialer, my skill is intergalactical
                    I get cynical, act a fool
                    Then I send a crew back to school
                    I never packed a tool or acted cool, it wasn't practical
                    I'd rather let a tactical, tactful track tickle your fancy
                    In fact, I can't see, or can't imagine
                    A man who ain't a lover of beats or a fan of scratchin'
                    So this is for my family, the kid who had a cameo
                    On my last jam, plus the man who never had a plan B
                    Be all you can be, ‘cause once you make an instant hit
                    I'm tensed a bit, and tempted
                    When I see the sins my friends commit; I'm Infinite

                    [Hook]
                    You heard of Hell, well, I was sent from it
                    I went to it, servin' a sentence
                    For murderin' instruments
                    Now I'm tryin' to repent from it
                    But when I hear the beat, I'm tempted
                    To make another attempt at it; I'm Infinite
                    You heard of Hell, well, I was sent from it
                    I went to it, servin' a sentence
                    For murderin' instruments
                    Now I'm tryin' to repent from it
                    But when I hear the beat, I'm tempted
                    To make another attempt at it; I'm Infinite

                    [Outro]
                    '95, '96 ('96)
                    And on and on and on (and on and on)"
)

track26 = Track.create!(title: 'On the Bound',
                artist: 'Fiona Apple', 
                album: 'When the Pawn...',
                lyrics: 
                    "[Verse 1]
                    All my life is on me now
                    Hail the pages turning
                    And the future's on the bound
                    Hell don't know my fury

                    [Chorus]
                    You're all I need, you're all I need
                    You're all I need, you're all I need
                    You're all I need, you're all I need
                    You're all I need and maybe some faith would do me good

                    [Verse 2]
                    I don't know what I'm doing, don't know, should I change my mind?
                    I can't decide, there's too many variations to consider
                    No thing I do don't do no thing but bring me more to do
                    It's true, I do imbue my blue unto myself, I make it bitter

                    [Verse 3]
                    Baby, lay your head on my lap one more time
                    Tell me you belong to me
                    Baby, say that it's all gonna be alright
                    I believe that it isn't

                    [Chorus]
                    You're all I need, you're all I need
                    You're all I need, you're all I need
                    You're all I need, you're all I need
                    You're all I need and maybe some faith would do me good"
)

track27 = Track.create!(title: 'Switch',
                artist: 'Will Smith', 
                album: 'Lost and Found',
                lyrics: 
                    "[Intro]
                    Yo mic check, mic check, yeah here you go
                    Nah, he over here
                    Yeah, I heard he got that hot new thing
                    It's called 'Switch' (switch)
                    Let's get it going

                    [Hook]
                    (Heeeeeeeeeeeeey)
                    Turn it over and hit it
                    Turn around now switch
                    Turn it over and hit it

                    [Verse 1]
                    (Heeeeeeeeeeeeey)
                    Vibe to vibe a second, it's a club girl why you arrived naked
                    Hear that, how the veteran glide the record
                    But don't download, go out and buy the record
                    (Heeeeeeeeeeeeey)
                    Something sexy bout a
                    Girl on the floor, all her friends around her
                    I mean real clean, ain't gotta touch or nothing
                    It ain't like I like a chick on chick or something
                    I'm just a sucker for a hot track
                    Gimme a drink and a chick to tell 'Stop that'
                    Dance is a hop and a clap, flip it round
                    Now bring it on back, break it down
                    Now Switch!

                    [Hook]
                    (Heeeeeeeeeeeeey)
                    Turn it over and hit it
                    Turn around now switch
                    (Heeeeeeeeeeeeey)
                    Turn it over and hit it
                    Ooh la la la
                    (Heeeeeeeeeeeeey)
                    Switch
                    Turn it over and hit it
                    Turn around now switch
                    Turn it over and hit it
                    Ooh la la la

                    [Verse 2]
                    I gotta question, I need to ask somebody
                    Why is it that when y'all see me at the party
                    Y'all be looking like 'Ooo he's a movie star
                    He ain't supposed to be out on the floor with everybody'
                    But oh wait, whoa y'all forgetting
                    When I was, amateur spitting before the scripts were written
                    First one in, last one out the club
                    Bursting in, passing out in the club
                    Back at it, this cat is the wit and the charm
                    Taking you higher like a syringe hittin ya arm
                    Bringing the fire, making you Benz ring the alarm
                    Let me see you clap, spin baby come on
                    Switch!

                    [Hook]
                    (Heeeeeeeeeeeeey)
                    Turn it over and hit it
                    Turn around now switch
                    (Heeeeeeeeeeeeey)
                    Turn it over and hit it
                    Ooh la la la
                    Switch
                    (Heeeeeeeeeeeeey)
                    Turn it over and hit it
                    Turn around now switch
                    Turn it over and hit it
                    Ooh la la la

                    (Heeeeeeeeeeeeey, heeeeeeeeeeeeey)

                    [Verse 3]
                    Oh you just gonna stand there huh?
                    What you too cute to dance? Or you scared?
                    It ain't really that hard to do and
                    I ain't trying to be in love with you and
                    All I wanted was a moment or two to
                    See if you could do that Switch-a-roo and
                    Shut your mouth fool, get your crew and
                    The thick body and the rear one too and
                    I'll be right here waiting on you to
                    See if y'all can do that Switch-a-roo

                    (Heeeeeeeeeeeeey, heeeeeeeeeeeeey)

                    That's what I'm talking bout, do that thing mama
                    That's what I'm talking bout, do that thing mama
                    That's what I'm talking bout, do that thing mama
                    That's what I'm talking bout, Switch

                    [Hook]
                    (Heeeeeeeeeeeeey)
                    Turn it over and hit it
                    Turn around now switch
                    (Heeeeeeeeeeeeey)
                    Turn it over and hit it
                    Ohh la la la
                    Switch
                    (Heeeeeeeeeeeeey)
                    Turn it over and hit it
                    Turn around now switch
                    Turn it over and hit it
                    Ooh la la la
                    Switch
                    (Heeeeeeeeeeeeey)
                    Turn it over and hit it
                    Turn around now switch
                    (Heeeeeeeeeeeeey)
                    Turn it over and hit it
                    Ooh la la la
                    Switch
                    (Heeeeeeeeeeeeey)
                    Turn it over and hit it
                    Turn around now switch
                    Turn it over and hit it
                    Ooh la la la
                    Switch"
)

track28 = Track.create!(title: 'Basket Case',
                artist: 'Green Day', 
                album: 'Dookie',
                lyrics: 
                    "[Verse 1]
                    Do you have the time to listen to me whine
                    About nothing and everything all at once?
                    I am one of those melodramatic fools
                    Neurotic to the bone, no doubt about it

                    [Chorus]
                    Sometimes I give myself the creeps
                    Sometimes my mind plays tricks on me
                    It all keeps adding up, I think I'm cracking up
                    Am I just paranoid? Am I just stoned?

                    [Verse 2]
                    I went to a shrink to analyze my dreams
                    She says it's lack of sex that's bringing me down
                    I went to a whore, he said my life's a bore
                    So quit my whining 'cause it's bringing her down

                    [Chorus]
                    Sometimes I give myself the creeps
                    Sometimes my mind plays tricks on me
                    It all keeps adding up, I think I'm cracking up
                    Am I just paranoid? Huh yeah, yeah yeah

                    [Bridge]
                    Grasping to control, so I better hold on

                    [Chorus]
                    Sometimes I give myself the creeps
                    Sometimes my mind plays tricks on me
                    It all keeps adding up, I think I'm cracking up
                    Am I just paranoid? Am I just stoned?"
)

track29 = Track.create!(title: 'Go Flex',
                artist: 'Post Malone', 
                album: 'Stoney',
                lyrics: 
                    "[Verse 1]
                    Lighting stog after stog, I choke on the smoke
                    They tell me to quit, don't listen what I'm told
                    They help me forget that this world is so cold
                    I don't even know what I'm chasin' no more
                    Tell me what I want, just keep searchin' on
                    It's never enough, cup after cup
                    Blunt after blunt, I wouldn't give one if I could find a fuck
                    Ha, ha, ha, uh, in the cut and I put that on my momma
                    And my bitch called talkin' 'bout some drama
                    I swear there ain't no time for women on the come up
                    It's either pussy or the commas

                    [Chorus]
                    Man, I just wanna go flex
                    Gold on my teeth and on my neck
                    And I'm stone cold with the flex
                    With my squad and I'm smokin' up a check
                    Man, I just wanna go flex
                    Gold on my teeth and on my neck
                    And I'm stone cold with the flex
                    With my squad and I'm smokin' up a check

                    [Verse 2]
                    Uh, yeah, push the gas, get a motherfuckin' nose bleed
                    She ain't never met a youngin' do it like me
                    She got a man but she says she really like me
                    She doin' things to excite me
                    She sendin' all her friends snaps of my new tracks
                    'Cause all these hoes know what's about to come next
                    I hit my plug up, got the paper connect
                    I drop a couple bands I just wanna go

                    [Chorus]
                    Man, I just wanna go flex
                    Gold on my teeth and on my neck
                    And I'm stone cold with the flex
                    With my squad and I'm smokin' up a check
                    Man, I just wanna go flex
                    Gold on my teeth and on my neck
                    And I'm stone cold with the flex
                    With my squad and I'm smokin' up a check

                    [Bridge]
                    Knowing all of this, it just don't make a difference
                    I'm just talking shit to the ones that'll listen
                    I come with the heat man, I swear I'm never missing
                    And I'm still the same and I swear I'm never switching
                    Knowing all of this, it just don't make a difference
                    I'm just talking shit to the ones that'll listen
                    I come with the heat man, I swear I'm never missing
                    And I'm still the same and I swear I'm never switching

                    [Chorus]
                    Man, I just wanna go flex
                    Gold on my teeth and on my neck
                    And I'm stone cold with the flex
                    With my squad and I'm smokin' up a check
                    Man, I just wanna go flex
                    Gold on my teeth and on my neck
                    And I'm stone cold with the flex
                    With my squad and I'm smokin' up a check

                    [Outro]
                    Ooh, man, I just wanna go flex
                    Gold on my teeth and on my neck
                    And I'm stone cold with the flex, yeah
                    Ice cold with the flex
                    Haha, that shit hard"
)

