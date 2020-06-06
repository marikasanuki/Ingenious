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
# track4 = Track.create!(title: 'Programs',
#                 artist: 'Mac Miller', 
#                 album: 'Programs',
#                 lyrics: 
#                     "[Intro]
#                     Yep, yep, yep, yuh, yep, yep

#                     [Verse 1]
#                     I don't got a reason to lie, they gave me the key to the sky
#                     But I'd rather open my eyes, 'cause that's what'll keep me alive
#                     Somethin' that's easin' my mind (Mind), please do not fuck up my day (No)
#                     Everybody wanna headline, I don't got nothin' to say
#                     'Cept I'm comin' back with the freshness
#                     You know I love makin' a entrance
#                     Now now, don't get defensive, time is a matter of seconds
#                     One, two, yeah
#                     Off to see the wizard, lead the picture
#                     Me and liquor, evil mixture, demons glitter
#                     Clean the whiskers, he be Mr. Fisherman
#                     Back on my shit again, doin' my own dance
#                     Feel the rhythm that's no hands, I tell ya vision like programs
#                     Busy livin' on triple digits, young old man
#                     Y'all dead wrong, I'm upper with the echelon
#                     So butter when the bread long
#                     I'm goin' strong 'til my head gone, 'til my head gone
#                     Yeah, floatin' back up on the scene, I'm sayin' hello (Hello!)
#                     Do my thing, I'm pullin' strings like Tom Morello
#                     I keep it movin', you be doin' way too much
#                     I ain't tellin' time, just tell you when it's up (Yep)

#                     [Chorus]
#                     Yeah, I'm only keepin' good company
#                     I am not talkin' to you if you don't have love for me
#                     Yeah, one for you and one for me (Yeah, yeah)
#                     I am not talkin' to you if you don't have love for me (Love for me)

#                     [Verse 2]
#                     Yeah, I mean wow, do not touch that dial, I've waited a while
#                     Been around, just like word of mouth, you gon' hear me out, and I-
#                     And I, and I, and I put that on my house
#                     I'm always goin' overboard, I better swim before I drown (Drown)
#                     I'm like rubber with the bounce, hundred be the count
#                     Drummin' loud as thunder with the sounds, yeah
#                     (Bang, bang, bang, bang)
#                     I was younger, fuck around, every summer wild
#                     Always had it jumpin' at the house
#                     Yeah, clappin' for y'all (Y'all), I'm into havin' it all (All)
#                     Feelin' like Shaq with the call (Call)
#                     Stature is tall (Tall), rollin' around with the homies
#                     A battery pack on my dawgs (Yeah)
#                     Fuck with my thoughts (Yeah), havin' enough ain't a lot (Lot)
#                     Puttin' a check in the box, straight to the top (Top), it don't matter
#                     Never mind the pattern when you takin' your shot, woo!
#                     Yeah, enough with the bullshit, enough with the bullshit
#                     Enough with the extras, fuck all my money
#                     I swear I been through it (Swear I been through it)
#                     Fuck all the losin' (Yeah), that's just an illusion
#                     Gotta keep them comin' back for more to keep it movin' (Yeah, yeah)"
# )

# track5 = Track.create!(title: 'Programs',
#                 artist: 'Mac Miller', 
#                 album: 'Programs',
#                 lyrics: 
#                     "[Intro]
#                     Yep, yep, yep, yuh, yep, yep

#                     [Verse 1]
#                     I don't got a reason to lie, they gave me the key to the sky
#                     But I'd rather open my eyes, 'cause that's what'll keep me alive
#                     Somethin' that's easin' my mind (Mind), please do not fuck up my day (No)
#                     Everybody wanna headline, I don't got nothin' to say
#                     'Cept I'm comin' back with the freshness
#                     You know I love makin' a entrance
#                     Now now, don't get defensive, time is a matter of seconds
#                     One, two, yeah
#                     Off to see the wizard, lead the picture
#                     Me and liquor, evil mixture, demons glitter
#                     Clean the whiskers, he be Mr. Fisherman
#                     Back on my shit again, doin' my own dance
#                     Feel the rhythm that's no hands, I tell ya vision like programs
#                     Busy livin' on triple digits, young old man
#                     Y'all dead wrong, I'm upper with the echelon
#                     So butter when the bread long
#                     I'm goin' strong 'til my head gone, 'til my head gone
#                     Yeah, floatin' back up on the scene, I'm sayin' hello (Hello!)
#                     Do my thing, I'm pullin' strings like Tom Morello
#                     I keep it movin', you be doin' way too much
#                     I ain't tellin' time, just tell you when it's up (Yep)

#                     [Chorus]
#                     Yeah, I'm only keepin' good company
#                     I am not talkin' to you if you don't have love for me
#                     Yeah, one for you and one for me (Yeah, yeah)
#                     I am not talkin' to you if you don't have love for me (Love for me)

#                     [Verse 2]
#                     Yeah, I mean wow, do not touch that dial, I've waited a while
#                     Been around, just like word of mouth, you gon' hear me out, and I-
#                     And I, and I, and I put that on my house
#                     I'm always goin' overboard, I better swim before I drown (Drown)
#                     I'm like rubber with the bounce, hundred be the count
#                     Drummin' loud as thunder with the sounds, yeah
#                     (Bang, bang, bang, bang)
#                     I was younger, fuck around, every summer wild
#                     Always had it jumpin' at the house
#                     Yeah, clappin' for y'all (Y'all), I'm into havin' it all (All)
#                     Feelin' like Shaq with the call (Call)
#                     Stature is tall (Tall), rollin' around with the homies
#                     A battery pack on my dawgs (Yeah)
#                     Fuck with my thoughts (Yeah), havin' enough ain't a lot (Lot)
#                     Puttin' a check in the box, straight to the top (Top), it don't matter
#                     Never mind the pattern when you takin' your shot, woo!
#                     Yeah, enough with the bullshit, enough with the bullshit
#                     Enough with the extras, fuck all my money
#                     I swear I been through it (Swear I been through it)
#                     Fuck all the losin' (Yeah), that's just an illusion
#                     Gotta keep them comin' back for more to keep it movin' (Yeah, yeah)"
# )
# track6 = Track.create!(title: 'Programs',
#                 artist: 'Mac Miller', 
#                 album: 'Programs',
#                 lyrics: 
#                     "[Intro]
#                     Yep, yep, yep, yuh, yep, yep

#                     [Verse 1]
#                     I don't got a reason to lie, they gave me the key to the sky
#                     But I'd rather open my eyes, 'cause that's what'll keep me alive
#                     Somethin' that's easin' my mind (Mind), please do not fuck up my day (No)
#                     Everybody wanna headline, I don't got nothin' to say
#                     'Cept I'm comin' back with the freshness
#                     You know I love makin' a entrance
#                     Now now, don't get defensive, time is a matter of seconds
#                     One, two, yeah
#                     Off to see the wizard, lead the picture
#                     Me and liquor, evil mixture, demons glitter
#                     Clean the whiskers, he be Mr. Fisherman
#                     Back on my shit again, doin' my own dance
#                     Feel the rhythm that's no hands, I tell ya vision like programs
#                     Busy livin' on triple digits, young old man
#                     Y'all dead wrong, I'm upper with the echelon
#                     So butter when the bread long
#                     I'm goin' strong 'til my head gone, 'til my head gone
#                     Yeah, floatin' back up on the scene, I'm sayin' hello (Hello!)
#                     Do my thing, I'm pullin' strings like Tom Morello
#                     I keep it movin', you be doin' way too much
#                     I ain't tellin' time, just tell you when it's up (Yep)

#                     [Chorus]
#                     Yeah, I'm only keepin' good company
#                     I am not talkin' to you if you don't have love for me
#                     Yeah, one for you and one for me (Yeah, yeah)
#                     I am not talkin' to you if you don't have love for me (Love for me)

#                     [Verse 2]
#                     Yeah, I mean wow, do not touch that dial, I've waited a while
#                     Been around, just like word of mouth, you gon' hear me out, and I-
#                     And I, and I, and I put that on my house
#                     I'm always goin' overboard, I better swim before I drown (Drown)
#                     I'm like rubber with the bounce, hundred be the count
#                     Drummin' loud as thunder with the sounds, yeah
#                     (Bang, bang, bang, bang)
#                     I was younger, fuck around, every summer wild
#                     Always had it jumpin' at the house
#                     Yeah, clappin' for y'all (Y'all), I'm into havin' it all (All)
#                     Feelin' like Shaq with the call (Call)
#                     Stature is tall (Tall), rollin' around with the homies
#                     A battery pack on my dawgs (Yeah)
#                     Fuck with my thoughts (Yeah), havin' enough ain't a lot (Lot)
#                     Puttin' a check in the box, straight to the top (Top), it don't matter
#                     Never mind the pattern when you takin' your shot, woo!
#                     Yeah, enough with the bullshit, enough with the bullshit
#                     Enough with the extras, fuck all my money
#                     I swear I been through it (Swear I been through it)
#                     Fuck all the losin' (Yeah), that's just an illusion
#                     Gotta keep them comin' back for more to keep it movin' (Yeah, yeah)"
# )

# track7 = Track.create!(title: 'Programs',
#                 artist: 'Mac Miller', 
#                 album: 'Programs',
#                 lyrics: 
#                     "[Intro]
#                     Yep, yep, yep, yuh, yep, yep

#                     [Verse 1]
#                     I don't got a reason to lie, they gave me the key to the sky
#                     But I'd rather open my eyes, 'cause that's what'll keep me alive
#                     Somethin' that's easin' my mind (Mind), please do not fuck up my day (No)
#                     Everybody wanna headline, I don't got nothin' to say
#                     'Cept I'm comin' back with the freshness
#                     You know I love makin' a entrance
#                     Now now, don't get defensive, time is a matter of seconds
#                     One, two, yeah
#                     Off to see the wizard, lead the picture
#                     Me and liquor, evil mixture, demons glitter
#                     Clean the whiskers, he be Mr. Fisherman
#                     Back on my shit again, doin' my own dance
#                     Feel the rhythm that's no hands, I tell ya vision like programs
#                     Busy livin' on triple digits, young old man
#                     Y'all dead wrong, I'm upper with the echelon
#                     So butter when the bread long
#                     I'm goin' strong 'til my head gone, 'til my head gone
#                     Yeah, floatin' back up on the scene, I'm sayin' hello (Hello!)
#                     Do my thing, I'm pullin' strings like Tom Morello
#                     I keep it movin', you be doin' way too much
#                     I ain't tellin' time, just tell you when it's up (Yep)

#                     [Chorus]
#                     Yeah, I'm only keepin' good company
#                     I am not talkin' to you if you don't have love for me
#                     Yeah, one for you and one for me (Yeah, yeah)
#                     I am not talkin' to you if you don't have love for me (Love for me)

#                     [Verse 2]
#                     Yeah, I mean wow, do not touch that dial, I've waited a while
#                     Been around, just like word of mouth, you gon' hear me out, and I-
#                     And I, and I, and I put that on my house
#                     I'm always goin' overboard, I better swim before I drown (Drown)
#                     I'm like rubber with the bounce, hundred be the count
#                     Drummin' loud as thunder with the sounds, yeah
#                     (Bang, bang, bang, bang)
#                     I was younger, fuck around, every summer wild
#                     Always had it jumpin' at the house
#                     Yeah, clappin' for y'all (Y'all), I'm into havin' it all (All)
#                     Feelin' like Shaq with the call (Call)
#                     Stature is tall (Tall), rollin' around with the homies
#                     A battery pack on my dawgs (Yeah)
#                     Fuck with my thoughts (Yeah), havin' enough ain't a lot (Lot)
#                     Puttin' a check in the box, straight to the top (Top), it don't matter
#                     Never mind the pattern when you takin' your shot, woo!
#                     Yeah, enough with the bullshit, enough with the bullshit
#                     Enough with the extras, fuck all my money
#                     I swear I been through it (Swear I been through it)
#                     Fuck all the losin' (Yeah), that's just an illusion
#                     Gotta keep them comin' back for more to keep it movin' (Yeah, yeah)"
# )

# track8 = Track.create!(title: 'Programs',
#                 artist: 'Mac Miller', 
#                 album: 'Programs',
#                 lyrics: 
#                     "[Intro]
#                     Yep, yep, yep, yuh, yep, yep

#                     [Verse 1]
#                     I don't got a reason to lie, they gave me the key to the sky
#                     But I'd rather open my eyes, 'cause that's what'll keep me alive
#                     Somethin' that's easin' my mind (Mind), please do not fuck up my day (No)
#                     Everybody wanna headline, I don't got nothin' to say
#                     'Cept I'm comin' back with the freshness
#                     You know I love makin' a entrance
#                     Now now, don't get defensive, time is a matter of seconds
#                     One, two, yeah
#                     Off to see the wizard, lead the picture
#                     Me and liquor, evil mixture, demons glitter
#                     Clean the whiskers, he be Mr. Fisherman
#                     Back on my shit again, doin' my own dance
#                     Feel the rhythm that's no hands, I tell ya vision like programs
#                     Busy livin' on triple digits, young old man
#                     Y'all dead wrong, I'm upper with the echelon
#                     So butter when the bread long
#                     I'm goin' strong 'til my head gone, 'til my head gone
#                     Yeah, floatin' back up on the scene, I'm sayin' hello (Hello!)
#                     Do my thing, I'm pullin' strings like Tom Morello
#                     I keep it movin', you be doin' way too much
#                     I ain't tellin' time, just tell you when it's up (Yep)

#                     [Chorus]
#                     Yeah, I'm only keepin' good company
#                     I am not talkin' to you if you don't have love for me
#                     Yeah, one for you and one for me (Yeah, yeah)
#                     I am not talkin' to you if you don't have love for me (Love for me)

#                     [Verse 2]
#                     Yeah, I mean wow, do not touch that dial, I've waited a while
#                     Been around, just like word of mouth, you gon' hear me out, and I-
#                     And I, and I, and I put that on my house
#                     I'm always goin' overboard, I better swim before I drown (Drown)
#                     I'm like rubber with the bounce, hundred be the count
#                     Drummin' loud as thunder with the sounds, yeah
#                     (Bang, bang, bang, bang)
#                     I was younger, fuck around, every summer wild
#                     Always had it jumpin' at the house
#                     Yeah, clappin' for y'all (Y'all), I'm into havin' it all (All)
#                     Feelin' like Shaq with the call (Call)
#                     Stature is tall (Tall), rollin' around with the homies
#                     A battery pack on my dawgs (Yeah)
#                     Fuck with my thoughts (Yeah), havin' enough ain't a lot (Lot)
#                     Puttin' a check in the box, straight to the top (Top), it don't matter
#                     Never mind the pattern when you takin' your shot, woo!
#                     Yeah, enough with the bullshit, enough with the bullshit
#                     Enough with the extras, fuck all my money
#                     I swear I been through it (Swear I been through it)
#                     Fuck all the losin' (Yeah), that's just an illusion
#                     Gotta keep them comin' back for more to keep it movin' (Yeah, yeah)"
# )

# track9 = Track.create!(title: 'Programs',
#                 artist: 'Mac Miller', 
#                 album: 'Programs',
#                 lyrics: 
#                     "[Intro]
#                     Yep, yep, yep, yuh, yep, yep

#                     [Verse 1]
#                     I don't got a reason to lie, they gave me the key to the sky
#                     But I'd rather open my eyes, 'cause that's what'll keep me alive
#                     Somethin' that's easin' my mind (Mind), please do not fuck up my day (No)
#                     Everybody wanna headline, I don't got nothin' to say
#                     'Cept I'm comin' back with the freshness
#                     You know I love makin' a entrance
#                     Now now, don't get defensive, time is a matter of seconds
#                     One, two, yeah
#                     Off to see the wizard, lead the picture
#                     Me and liquor, evil mixture, demons glitter
#                     Clean the whiskers, he be Mr. Fisherman
#                     Back on my shit again, doin' my own dance
#                     Feel the rhythm that's no hands, I tell ya vision like programs
#                     Busy livin' on triple digits, young old man
#                     Y'all dead wrong, I'm upper with the echelon
#                     So butter when the bread long
#                     I'm goin' strong 'til my head gone, 'til my head gone
#                     Yeah, floatin' back up on the scene, I'm sayin' hello (Hello!)
#                     Do my thing, I'm pullin' strings like Tom Morello
#                     I keep it movin', you be doin' way too much
#                     I ain't tellin' time, just tell you when it's up (Yep)

#                     [Chorus]
#                     Yeah, I'm only keepin' good company
#                     I am not talkin' to you if you don't have love for me
#                     Yeah, one for you and one for me (Yeah, yeah)
#                     I am not talkin' to you if you don't have love for me (Love for me)

#                     [Verse 2]
#                     Yeah, I mean wow, do not touch that dial, I've waited a while
#                     Been around, just like word of mouth, you gon' hear me out, and I-
#                     And I, and I, and I put that on my house
#                     I'm always goin' overboard, I better swim before I drown (Drown)
#                     I'm like rubber with the bounce, hundred be the count
#                     Drummin' loud as thunder with the sounds, yeah
#                     (Bang, bang, bang, bang)
#                     I was younger, fuck around, every summer wild
#                     Always had it jumpin' at the house
#                     Yeah, clappin' for y'all (Y'all), I'm into havin' it all (All)
#                     Feelin' like Shaq with the call (Call)
#                     Stature is tall (Tall), rollin' around with the homies
#                     A battery pack on my dawgs (Yeah)
#                     Fuck with my thoughts (Yeah), havin' enough ain't a lot (Lot)
#                     Puttin' a check in the box, straight to the top (Top), it don't matter
#                     Never mind the pattern when you takin' your shot, woo!
#                     Yeah, enough with the bullshit, enough with the bullshit
#                     Enough with the extras, fuck all my money
#                     I swear I been through it (Swear I been through it)
#                     Fuck all the losin' (Yeah), that's just an illusion
#                     Gotta keep them comin' back for more to keep it movin' (Yeah, yeah)"
# )