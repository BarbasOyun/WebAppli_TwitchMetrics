const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})


camera.position.x = 150
camera.position.y = 75


const data = [
    {
      "text-muted": "#1",
      "col-3 href": "https://www.twitchmetrics.net/c/622498423-otplol_",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/787bd9dd-9367-45ed-a44d-d755427549b8-profile_image-300x300.png",
      "mr-2": "otplol_",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 15 minutes ago",
      "mb-2 2": "5494969",
      "mr-3 2": ""
    },
    {
      "text-muted": "#2",
      "col-3 href": "https://www.twitchmetrics.net/c/28575692-mistermv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/2895647a-2e57-45ac-a42c-0a837d42f9a1-profile_image-300x300.png",
      "mr-2": "mistermv",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 10 hours ago",
      "mb-2 2": "2753338",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#3",
      "col-3 href": "https://www.twitchmetrics.net/c/24147592-gotaga",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/69e324f6-fc7d-4131-89ed-227a955637cf-profile_image-300x300.png",
      "mr-2": "Gotaga",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "2643569",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#4",
      "col-3 href": "https://www.twitchmetrics.net/c/27115917-kamet0",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/9e12862d-a8d0-4df2-81aa-e2241022dc98-profile_image-300x300.jpg",
      "mr-2": "Kamet0",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "2585846",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#5",
      "col-3 href": "https://www.twitchmetrics.net/c/155601320-jltomy",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/aa2bc80a-e317-494a-a94d-7492889e4f66-profile_image-300x300.png",
      "mr-2": "JLTomy",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "2208387",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#6",
      "col-3 href": "https://www.twitchmetrics.net/c/50597026-ponce",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/125bbc49-45d1-432c-92b3-f5aef1e7ab21-profile_image-300x300.png",
      "mr-2": "Ponce",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen an hour ago",
      "mb-2 2": "2128561",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#7",
      "col-3 href": "https://www.twitchmetrics.net/c/147337432-lestream",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/c0f93540-556a-44a6-9c74-ea0fafea8115-profile_image-300x300.png",
      "mr-2": "lestream",
      "text-muted 2": "Partner",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 3 hours ago",
      "mb-2 2": "2068541",
      "mr-3 2": ""
    },
    {
      "text-muted": "#8",
      "col-3 href": "https://www.twitchmetrics.net/c/198506129-solaryfortnite",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/41bcfffb-29d4-433e-a13e-6fdf40bebc89-profile_image-300x300.png",
      "mr-2": "SolaryFortnite",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen an hour ago",
      "mb-2 2": "1941826",
      "mr-3 2": ""
    },
    {
      "text-muted": "#9",
      "col-3 href": "https://www.twitchmetrics.net/c/40063341-domingo",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b84b2c78-9e28-4f13-b2fe-bee20a4824d5-profile_image-300x300.png",
      "mr-2": "Domingo",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 10 hours ago",
      "mb-2 2": "1694046",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#10",
      "col-3 href": "https://www.twitchmetrics.net/c/174955366-solary",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/e904dabe-daf3-4e35-8943-cd1378fb2fcb-profile_image-300x300.png",
      "mr-2": "Solary",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 3 hours ago",
      "mb-2 2": "1596209",
      "mr-3 2": ""
    },
    {
      "text-muted": "#11",
      "col-3 href": "https://www.twitchmetrics.net/c/117168642-chowh1",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/1b41d9b0-f1d0-4467-9968-acd5baa00722-profile_image-300x300.png",
      "mr-2": "chowh1",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen an hour ago",
      "mb-2 2": "1415258",
      "mr-3 2": ""
    },
    {
      "text-muted": "#12",
      "col-3 href": "https://www.twitchmetrics.net/c/137347549-locklear",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/70d90ec14808c95f-profile_image-300x300.png",
      "mr-2": "Locklear",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "1286641",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#13",
      "col-3 href": "https://www.twitchmetrics.net/c/50795214-sardoche",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/2b1b9e13-5b9f-41ee-b375-54d3c6491bb2-profile_image-300x300.png",
      "mr-2": "Sardoche",
      "text-muted 2": "Partner",
      "link-natural": "Chess",
      "link-natural href": "https://www.twitchmetrics.net/g/743-chess",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "1215385",
      "mr-3 2": ""
    },
    {
      "text-muted": "#14",
      "col-3 href": "https://www.twitchmetrics.net/c/85800130-etoiles",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/4eecaab8-4de3-4bcc-b2b7-f3a03e8273a8-profile_image-300x300.png",
      "mr-2": "Etoiles",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "1134381",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#15",
      "col-3 href": "https://www.twitchmetrics.net/c/52130765-squeezie",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/df3e5800-b524-4c4e-87b0-8b3646d9185a-profile_image-300x300.png",
      "mr-2": "Squeezie",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 3 days ago",
      "mb-2 2": "1110083",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#16",
      "col-3 href": "https://www.twitchmetrics.net/c/416031592-solaryhs",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/6db903c8-5eea-4815-b36e-4acb0e6dbf90-profile_image-300x300.jpeg",
      "mr-2": "SolaryHS",
      "text-muted 2": "Partner",
      "link-natural": "Hearthstone",
      "link-natural href": "https://www.twitchmetrics.net/g/138585-hearthstone",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "1052600",
      "mr-3 2": ""
    },
    {
      "text-muted": "#17",
      "col-3 href": "https://www.twitchmetrics.net/c/43102846-shaunz",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/9f47e0a1-3791-439f-bc16-fb5da132c375-profile_image-300x300.png",
      "mr-2": "Shaunz",
      "text-muted 2": "Partner",
      "link-natural": "Teamfight Tactics",
      "link-natural href": "https://www.twitchmetrics.net/g/513143-teamfight-tactics",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "932459",
      "mr-3 2": ""
    },
    {
      "text-muted": "#18",
      "col-3 href": "https://www.twitchmetrics.net/c/135468063-antoinedaniellive",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/2d33bd5f-fed5-48e1-ba32-f8f161a7fc0e-profile_image-300x300.png",
      "mr-2": "AntoineDanielLive",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "892121",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#19",
      "col-3 href": "https://www.twitchmetrics.net/c/75701802-kinstaar",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/fbbde0a1-b7d1-4583-8a7c-3263d38241ae-profile_image-300x300.png",
      "mr-2": "kinstaar",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 4 days ago",
      "mb-2 2": "870256",
      "mr-3 2": ""
    },
    {
      "text-muted": "#20",
      "col-3 href": "https://www.twitchmetrics.net/c/52349411-skyrroztv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/849d425c-ad56-4376-a782-bb864b205831-profile_image-300x300.png",
      "mr-2": "SkyrrozTV",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 3 days ago",
      "mb-2 2": "838724",
      "mr-3 2": ""
    },
    {
      "text-muted": "#21",
      "col-3 href": "https://www.twitchmetrics.net/c/88301612-xari",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/86214da3-1461-44d1-a2e9-43501af29538-profile_image-300x300.jpeg",
      "mr-2": "Xari",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 10 hours ago",
      "mb-2 2": "825177",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#22",
      "col-3 href": "https://www.twitchmetrics.net/c/49632767-blitzstream",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/41fc9873-88c6-4ec4-84ee-d206bcbd9e0a-profile_image-300x300.jpg",
      "mr-2": "BlitzStream",
      "text-muted 2": "Partner",
      "link-natural": "Chess",
      "link-natural href": "https://www.twitchmetrics.net/g/743-chess",
      "time_ago": "Seen 13 hours ago",
      "mb-2 2": "823305",
      "mr-3 2": ""
    },
    {
      "text-muted": "#23",
      "col-3 href": "https://www.twitchmetrics.net/c/81432617-mushway",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/d694cd30-a478-459b-be0e-ae2e433832e4-profile_image-300x300.png",
      "mr-2": "Mushway",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "775651",
      "mr-3 2": ""
    },
    {
      "text-muted": "#24",
      "col-3 href": "https://www.twitchmetrics.net/c/63675549-kaydop",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/21d8988f-87b4-4a6b-a63a-f87d30624031-profile_image-300x300.png",
      "mr-2": "Kaydop",
      "text-muted 2": "Partner",
      "link-natural": "Rocket League",
      "link-natural href": "https://www.twitchmetrics.net/g/30921-rocket-league",
      "time_ago": "Seen 5 days ago",
      "mb-2 2": "728415",
      "mr-3 2": ""
    },
    {
      "text-muted": "#25",
      "col-3 href": "https://www.twitchmetrics.net/c/574802385-jolavanille",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/fb026cc2-b317-41de-a855-d8d253883eb5-profile_image-300x300.png",
      "mr-2": "Jolavanille",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "722880",
      "mr-3 2": ""
    },
    {
      "text-muted": "#26",
      "col-3 href": "https://www.twitchmetrics.net/c/77452537-alderiate",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/bed29151-4319-4e3f-9f30-031d9dde1458-profile_image-300x300.png",
      "mr-2": "Alderiate",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen a day ago",
      "mb-2 2": "689160",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#27",
      "col-3 href": "https://www.twitchmetrics.net/c/94435040-alphacast",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/alphacast-profile_image-56175953cb7d4aa3-300x300.jpeg",
      "mr-2": "AlphaCast",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "658629",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#28",
      "col-3 href": "https://www.twitchmetrics.net/c/505902512-samueletienne",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/6a421038-d455-41ed-9705-b32909ca182a-profile_image-300x300.png",
      "mr-2": "samueletienne",
      "text-muted 2": "Partner",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "645425",
      "mr-3 2": ""
    },
    {
      "text-muted": "#29",
      "col-3 href": "https://www.twitchmetrics.net/c/41719107-zerator",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/599b546a-c27f-4684-93ff-5eeecd01fb2b-profile_image-300x300.png",
      "mr-2": "ZeratoR",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 11 hours ago",
      "mb-2 2": "605029",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#30",
      "col-3 href": "https://www.twitchmetrics.net/c/31289086-wankilstudio",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/wankilstudio-profile_image-d4aec5a11445ef41-300x300.jpeg",
      "mr-2": "WankilStudio",
      "text-muted 2": "Partner",
      "link-natural": "Valheim",
      "link-natural href": "https://www.twitchmetrics.net/g/508455-valheim",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "595490",
      "mr-3 2": ""
    },
    {
      "text-muted": "#31",
      "col-3 href": "https://www.twitchmetrics.net/c/52616898-imsofresh",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/d695f81c-b642-41d4-b56e-35bb331090fd-profile_image-300x300.png",
      "mr-2": "ImSoFresh",
      "text-muted 2": "Partner",
      "link-natural": "Teamfight Tactics",
      "link-natural href": "https://www.twitchmetrics.net/g/513143-teamfight-tactics",
      "time_ago": "Seen 13 hours ago",
      "mb-2 2": "591771",
      "mr-3 2": ""
    },
    {
      "text-muted": "#32",
      "col-3 href": "https://www.twitchmetrics.net/c/71852806-ogamingsc2",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/c874a498-6fc9-4004-b543-a2feafa8862b-profile_image-300x300.png",
      "mr-2": "OgamingSC2",
      "text-muted 2": "Partner",
      "link-natural": "StarCraft II",
      "link-natural href": "https://www.twitchmetrics.net/g/490422-starcraft-ii",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "580709",
      "mr-3 2": ""
    },
    {
      "text-muted": "#33",
      "col-3 href": "https://www.twitchmetrics.net/c/35828637-low4n",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/27f7d31a-193e-4ba8-b2a3-b8e9e1ac3894-profile_image-300x300.png",
      "mr-2": "Low4n",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 9 hours ago",
      "mb-2 2": "580204",
      "mr-3 2": ""
    },
    {
      "text-muted": "#34",
      "col-3 href": "https://www.twitchmetrics.net/c/96562014-lebouseuh",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/9a6e58e5-2da6-47e4-a4ce-eb91a0d1572d-profile_image-300x300.png",
      "mr-2": "LeBouseuh",
      "text-muted 2": "Partner",
      "link-natural": "Minecraft",
      "link-natural href": "https://www.twitchmetrics.net/g/27471-minecraft",
      "time_ago": "Seen 5 days ago",
      "mb-2 2": "550371",
      "mr-3 2": ""
    },
    {
      "text-muted": "#35",
      "col-3 href": "https://www.twitchmetrics.net/c/101234264-crocodyle_lol",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/32b35514-3cac-4acd-a68a-1c14ef7cdb3c-profile_image-300x300.png",
      "mr-2": "Crocodyle_lol",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 6 days ago",
      "mb-2 2": "512670",
      "mr-3 2": ""
    },
    {
      "text-muted": "#36",
      "col-3 href": "https://www.twitchmetrics.net/c/407837457-rebeudeter",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b0942318-9297-444b-94dc-cf3f34cd2f7b-profile_image-300x300.png",
      "mr-2": "RebeuDeter",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 7 days ago",
      "mb-2 2": "503064",
      "mr-3 2": ""
    },
    {
      "text-muted": "#37",
      "col-3 href": "https://www.twitchmetrics.net/c/121652526-littlebigwhale",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/63ff2bed-9e88-483f-bd4e-cc61d4b43e9c-profile_image-300x300.png",
      "mr-2": "LittleBigWhale",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "493724",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#38",
      "col-3 href": "https://www.twitchmetrics.net/c/173066877-jlbichouu",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/82d228e6-215e-4c6b-bac9-1b4a0df65b3b-profile_image-300x300.png",
      "mr-2": "JLBichouu",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "487373",
      "mr-3 2": ""
    },
    {
      "text-muted": "#39",
      "col-3 href": "https://www.twitchmetrics.net/c/72480716-tonton",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/6a1a3031-3fc3-4c00-ba80-0a0d9dbca180-profile_image-300x300.png",
      "mr-2": "Tonton",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "483818",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#40",
      "col-3 href": "https://www.twitchmetrics.net/c/63985840-minos",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/a0bcdefa-e2dd-4f54-9d15-c7208e3deafa-profile_image-300x300.png",
      "mr-2": "Minos",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 7 hours ago",
      "mb-2 2": "482454",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#41",
      "col-3 href": "https://www.twitchmetrics.net/c/151874024-rhobalas_lol",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/ab7be94b-dd10-43ad-9a81-ef1b021fd2e1-profile_image-300x300.png",
      "mr-2": "rhobalas_lol",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 10 hours ago",
      "mb-2 2": "480714",
      "mr-3 2": ""
    },
    {
      "text-muted": "#42",
      "col-3 href": "https://www.twitchmetrics.net/c/139504995-sackzitv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/2080935f-a62b-487b-b195-db6973684b3d-profile_image-300x300.png",
      "mr-2": "SackziTV",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen an hour ago",
      "mb-2 2": "456869",
      "mr-3 2": ""
    },
    {
      "text-muted": "#43",
      "col-3 href": "https://www.twitchmetrics.net/c/136925660-bidule",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/e42382ca-91c1-49d1-b791-333a01d317ad-profile_image-300x300.png",
      "mr-2": "Bidule",
      "text-muted 2": "",
      "link-natural": "Slots",
      "link-natural href": "https://www.twitchmetrics.net/g/498566-slots",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "448456",
      "mr-3 2": ""
    },
    {
      "text-muted": "#44",
      "col-3 href": "https://www.twitchmetrics.net/c/190708734-altair",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/130f0ae0-d46a-4cdc-906e-2468a04d080d-profile_image-300x300.png",
      "mr-2": "Altair",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 18 hours ago",
      "mb-2 2": "426118",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#45",
      "col-3 href": "https://www.twitchmetrics.net/c/219431490-jlamaru",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/0e106aa4-4382-4e2c-bb47-bab9ce7da583-profile_image-300x300.png",
      "mr-2": "JLAmaru",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "411624",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#46",
      "col-3 href": "https://www.twitchmetrics.net/c/407388596-aminematue",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/13e55cbe-a1b0-4f4c-b69b-2748274b9e48-profile_image-300x300.png",
      "mr-2": "aminematue",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "390936",
      "mr-3 2": ""
    },
    {
      "text-muted": "#47",
      "col-3 href": "https://www.twitchmetrics.net/c/68078157-joueur_du_grenier",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/68296fe2-cee7-42dd-b241-6535084df12a-profile_image-300x300.png",
      "mr-2": "Joueur_du_Grenier",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "384995",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#48",
      "col-3 href": "https://www.twitchmetrics.net/c/139027213-rocketbaguette",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/6019724d-4158-4cc9-bd03-75d67960be48-profile_image-300x300.png",
      "mr-2": "RocketBaguette",
      "text-muted 2": "Partner",
      "link-natural": "Rocket League",
      "link-natural href": "https://www.twitchmetrics.net/g/30921-rocket-league",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "370821",
      "mr-3 2": ""
    },
    {
      "text-muted": "#49",
      "col-3 href": "https://www.twitchmetrics.net/c/114119743-jeeltv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/3845db6c-1ea5-47de-906a-e41b60fa31db-profile_image-300x300.png",
      "mr-2": "JeelTV",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "367848",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#50",
      "col-3 href": "https://www.twitchmetrics.net/c/110119637-nikof",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/da2ec9f6-ac2b-4c43-8004-83db579db008-profile_image-300x300.png",
      "mr-2": "Nikof",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "353238",
      "mr-3 2": ""
    },
    {
      "text-muted": "#51",
      "col-3 href": "https://www.twitchmetrics.net/c/30709418-mickalow",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/8b183655-aca2-4bb2-b97f-52a92ed8559a-profile_image-300x300.png",
      "mr-2": "Mickalow",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 43 minutes ago",
      "mb-2 2": "340164",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#52",
      "col-3 href": "https://www.twitchmetrics.net/c/131215608-maghla",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/a5a8e52c-ed5d-459b-a8c7-302ad154d7cf-profile_image-300x300.png",
      "mr-2": "Maghla",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 20 hours ago",
      "mb-2 2": "331615",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#53",
      "col-3 href": "https://www.twitchmetrics.net/c/26144032-thekairi78",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/0b6ab0f2-d555-4fc6-93ee-0ab623a39425-profile_image-300x300.png",
      "mr-2": "TheKAIRI78",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "328596",
      "mr-3 2": ""
    },
    {
      "text-muted": "#54",
      "col-3 href": "https://www.twitchmetrics.net/c/30396958-camak",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/23bd2357-1b7c-426b-8a6c-084339bbbe78-profile_image-300x300.png",
      "mr-2": "CaMaK",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 13 hours ago",
      "mb-2 2": "325585",
      "mr-3 2": ""
    },
    {
      "text-muted": "#55",
      "col-3 href": "https://www.twitchmetrics.net/c/41487980-pauleta_youtubeur",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/9e84b707-13a7-47f1-b768-446fc16ad0e2-profile_image-300x300.png",
      "mr-2": "Pauleta_Youtubeur",
      "text-muted 2": "Partner",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "321078",
      "mr-3 2": ""
    },
    {
      "text-muted": "#56",
      "col-3 href": "https://www.twitchmetrics.net/c/119413137-teuf",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/3ebda7f8-ab67-4197-841a-9b8d58595c1d-profile_image-300x300.png",
      "mr-2": "Teuf",
      "text-muted 2": "Partner",
      "link-natural": "Slots",
      "link-natural href": "https://www.twitchmetrics.net/g/498566-slots",
      "time_ago": "Seen 18 hours ago",
      "mb-2 2": "317774",
      "mr-3 2": ""
    },
    {
      "text-muted": "#57",
      "col-3 href": "https://www.twitchmetrics.net/c/95155668-neversayyestwitch",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/7545a81a-9a86-41a5-bb2e-9aa74ff59185-profile_image-300x300.png",
      "mr-2": "NeverSayYesTwitch",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "317011",
      "mr-3 2": ""
    },
    {
      "text-muted": "#58",
      "col-3 href": "https://www.twitchmetrics.net/c/71852533-ogaminglol",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/8dbce7bb-bb6e-4a3b-8121-ff262b717c81-profile_image-300x300.png",
      "mr-2": "OgamingLoL",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 43 minutes ago",
      "mb-2 2": "314515",
      "mr-3 2": ""
    },
    {
      "text-muted": "#59",
      "col-3 href": "https://www.twitchmetrics.net/c/31813025-brucegrannec",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/539d3165-2773-48fd-8bec-e74aab502e77-profile_image-300x300.png",
      "mr-2": "BruceGrannec",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 19 hours ago",
      "mb-2 2": "312427",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#60",
      "col-3 href": "https://www.twitchmetrics.net/c/38350595-drfeelgood",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/ece30d3a-5e81-48e2-b3f7-3b3a303c4e70-profile_image-300x300.png",
      "mr-2": "DrFeelgood",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 10 hours ago",
      "mb-2 2": "310234",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#61",
      "col-3 href": "https://www.twitchmetrics.net/c/42141251-mastersnakou",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/059dcbbc-bda1-452e-8560-eacaf6eb6291-profile_image-300x300.png",
      "mr-2": "MasterSnakou",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "309068",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#62",
      "col-3 href": "https://www.twitchmetrics.net/c/28585164-mynthos",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/c5be9ad8-95e9-4937-b4b7-e4dd460a6c36-profile_image-300x300.png",
      "mr-2": "Mynthos",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 43 minutes ago",
      "mb-2 2": "278211",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#63",
      "col-3 href": "https://www.twitchmetrics.net/c/62154099-anas_off",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b0cb9c3b-4047-4fa0-97d1-2eab87203751-profile_image-300x300.png",
      "mr-2": "Anas_Off",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 13 hours ago",
      "mb-2 2": "274054",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#64",
      "col-3 href": "https://www.twitchmetrics.net/c/36318615-theguill84",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/4e97c3fa121d46d3-profile_image-300x300.png",
      "mr-2": "TheGuill84",
      "text-muted 2": "Partner",
      "link-natural": "Minecraft",
      "link-natural href": "https://www.twitchmetrics.net/g/27471-minecraft",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "270295",
      "mr-3 2": ""
    },
    {
      "text-muted": "#65",
      "col-3 href": "https://www.twitchmetrics.net/c/32053915-rivenzi",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/9ec51dd5-7289-4f41-b8eb-6cbf6f16f01a-profile_image-300x300.png",
      "mr-2": "Rivenzi",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 10 hours ago",
      "mb-2 2": "253961",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#66",
      "col-3 href": "https://www.twitchmetrics.net/c/141222256-toneeuw",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/7e1bbb99-4ef5-4355-83e7-ec7b81ee1f6c-profile_image-300x300.png",
      "mr-2": "ToneEUW",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 13 hours ago",
      "mb-2 2": "250776",
      "mr-3 2": ""
    },
    {
      "text-muted": "#67",
      "col-3 href": "https://www.twitchmetrics.net/c/109306231-sixquatre",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/70efe218-c021-4a2f-a995-ac044851c124-profile_image-300x300.png",
      "mr-2": "Sixquatre",
      "text-muted 2": "Partner",
      "link-natural": "Tom Clancy's Rainbow Six Siege",
      "link-natural href": "https://www.twitchmetrics.net/g/460630-tom-clancy-s-rainbow-six-siege",
      "time_ago": "Seen 19 hours ago",
      "mb-2 2": "239480",
      "mr-3 2": ""
    },
    {
      "text-muted": "#68",
      "col-3 href": "https://www.twitchmetrics.net/c/26567552-jirayalecochon",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/d842070e-6d5c-4f97-b55c-097b9e627f4a-profile_image-300x300.png",
      "mr-2": "Jirayalecochon",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 10 hours ago",
      "mb-2 2": "238368",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#69",
      "col-3 href": "https://www.twitchmetrics.net/c/115695918-rocky_",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/01223b3b-993f-4cbb-bbb1-39577891b7ce-profile_image-300x300.png",
      "mr-2": "RocKy_",
      "text-muted 2": "Partner",
      "link-natural": "FIFA 21",
      "link-natural href": "https://www.twitchmetrics.net/g/518204-fifa-21",
      "time_ago": "Seen 3 days ago",
      "mb-2 2": "236233",
      "mr-3 2": ""
    },
    {
      "text-muted": "#70",
      "col-3 href": "https://www.twitchmetrics.net/c/62989856-shisheyu_mayamoto",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/shisheyu_mayamoto-profile_image-554e7261e0f5adcf-300x300.png",
      "mr-2": "Shisheyu_Mayamoto",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 13 hours ago",
      "mb-2 2": "233879",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#71",
      "col-3 href": "https://www.twitchmetrics.net/c/68594999-ultia",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/456f0cda-6fc8-4acb-979b-78d2aff90ea0-profile_image-300x300.png",
      "mr-2": "Ultia",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "230620",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#72",
      "col-3 href": "https://www.twitchmetrics.net/c/89873316-terracid",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/terracid-profile_image-d0b3a49fe9db5777-300x300.jpeg",
      "mr-2": "Terracid",
      "text-muted 2": "Partner",
      "link-natural": "Valheim",
      "link-natural href": "https://www.twitchmetrics.net/g/508455-valheim",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "228678",
      "mr-3 2": ""
    },
    {
      "text-muted": "#73",
      "col-3 href": "https://www.twitchmetrics.net/c/60408047-voltariux",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/25c713f4-4f91-4116-b64f-d54007ba067b-profile_image-300x300.jpg",
      "mr-2": "Voltariux",
      "text-muted 2": "Partner",
      "link-natural": "Teamfight Tactics",
      "link-natural href": "https://www.twitchmetrics.net/g/513143-teamfight-tactics",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "228449",
      "mr-3 2": ""
    },
    {
      "text-muted": "#74",
      "col-3 href": "https://www.twitchmetrics.net/c/21080562-mrbboy45",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b47c1dc9-27cb-4ef8-8f48-26eb6bdd1d46-profile_image-300x300.png",
      "mr-2": "MrBboy45",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 13 hours ago",
      "mb-2 2": "228273",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#75",
      "col-3 href": "https://www.twitchmetrics.net/c/90250629-jlfakemonster",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/bb400a75-59eb-4eed-8c2a-d458bbde92be-profile_image-300x300.png",
      "mr-2": "JLFakemonster",
      "text-muted 2": "Partner",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 11 hours ago",
      "mb-2 2": "224004",
      "mr-3 2": ""
    },
    {
      "text-muted": "#76",
      "col-3 href": "https://www.twitchmetrics.net/c/73522739-phyzikk",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/ded12211-00f6-4ed6-92e9-1f3b5556d6dd-profile_image-300x300.png",
      "mr-2": "Phyzikk",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 17 hours ago",
      "mb-2 2": "222636",
      "mr-3 2": ""
    },
    {
      "text-muted": "#77",
      "col-3 href": "https://www.twitchmetrics.net/c/51123995-proze",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/be13d6bc-7bad-41f3-8a43-62d8c7612b7e-profile_image-300x300.png",
      "mr-2": "Proze",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 16 hours ago",
      "mb-2 2": "218877",
      "mr-3 2": ""
    },
    {
      "text-muted": "#78",
      "col-3 href": "https://www.twitchmetrics.net/c/40760591-gobgg",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/2935acd6-494d-4a15-b340-adbe368c1aca-profile_image-300x300.png",
      "mr-2": "GoBGG",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 23 minutes ago",
      "mb-2 2": "218791",
      "mr-3 2": ""
    },
    {
      "text-muted": "#79",
      "col-3 href": "https://www.twitchmetrics.net/c/44806759-lapi",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/lapi-profile_image-fc8ba908c33ad4ba-300x300.png",
      "mr-2": "Lapi",
      "text-muted 2": "Partner",
      "link-natural": "World of Warcraft",
      "link-natural href": "https://www.twitchmetrics.net/g/18122-world-of-warcraft",
      "time_ago": "Seen 10 hours ago",
      "mb-2 2": "216719",
      "mr-3 2": ""
    },
    {
      "text-muted": "#80",
      "col-3 href": "https://www.twitchmetrics.net/c/25454398-doigby",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/aab40019-b5b9-4805-ba79-c9db1d5acd46-profile_image-300x300.png",
      "mr-2": "Doigby",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 5 days ago",
      "mb-2 2": "215971",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#81",
      "col-3 href": "https://www.twitchmetrics.net/c/275272993-zwave69",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/aca27da2-4235-4c67-afd2-a57b4ea56fd0-profile_image-300x300.png",
      "mr-2": "Zwave69",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen a day ago",
      "mb-2 2": "215753",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#82",
      "col-3 href": "https://www.twitchmetrics.net/c/104477229-colas_bim",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/749e163a-3bf4-4a7f-818c-5e4fa7dba5dc-profile_image-300x300.png",
      "mr-2": "Colas_Bim",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "215166",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#83",
      "col-3 href": "https://www.twitchmetrics.net/c/114497555-jbzzed",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/jbzzed-profile_image-3b2a4588b08af4b0-300x300.jpeg",
      "mr-2": "jbzzed",
      "text-muted 2": "Partner",
      "link-natural": "VALORANT",
      "link-natural href": "https://www.twitchmetrics.net/g/516575-valorant",
      "time_ago": "Seen 19 hours ago",
      "mb-2 2": "214154",
      "mr-3 2": ""
    },
    {
      "text-muted": "#84",
      "col-3 href": "https://www.twitchmetrics.net/c/70983894-oonolive",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/f61460eb-1028-43b6-bc1b-0e9c8af478c0-profile_image-300x300.png",
      "mr-2": "Oonolive",
      "text-muted 2": "Partner",
      "link-natural": "World of Warcraft",
      "link-natural href": "https://www.twitchmetrics.net/g/18122-world-of-warcraft",
      "time_ago": "Seen 16 hours ago",
      "mb-2 2": "213556",
      "mr-3 2": ""
    },
    {
      "text-muted": "#85",
      "col-3 href": "https://www.twitchmetrics.net/c/113080650-dahmien7",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/44ca9f61-637b-493a-a5e7-5b0c0524f22d-profile_image-300x300.png",
      "mr-2": "dahmien7",
      "text-muted 2": "Partner",
      "link-natural": "Rust",
      "link-natural href": "https://www.twitchmetrics.net/g/263490-rust",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "211305",
      "mr-3 2": ""
    },
    {
      "text-muted": "#86",
      "col-3 href": "https://www.twitchmetrics.net/c/129289579-krl_stream",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/5185882e-2f02-4a3b-86ad-fc98b0c3a324-profile_image-300x300.png",
      "mr-2": "KRL_STREAM",
      "text-muted 2": "Partner",
      "link-natural": "Counter-Strike: Global Offensive",
      "link-natural href": "https://www.twitchmetrics.net/g/32399-counter-strike-global-offensive",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "208694",
      "mr-3 2": ""
    },
    {
      "text-muted": "#87",
      "col-3 href": "https://www.twitchmetrics.net/c/77148737-mabzouel",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/4aae5bad-40a2-447f-8dec-cac2d46bbe79-profile_image-300x300.png",
      "mr-2": "Mabzouel",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "207637",
      "mr-3 2": ""
    },
    {
      "text-muted": "#88",
      "col-3 href": "https://www.twitchmetrics.net/c/106647842-loopooyt",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/da1e691a-05c3-4e2c-8d83-17b80c93dd73-profile_image-300x300.png",
      "mr-2": "loopooyt",
      "text-muted 2": "",
      "link-natural": "Slots",
      "link-natural href": "https://www.twitchmetrics.net/g/498566-slots",
      "time_ago": "Seen 20 hours ago",
      "mb-2 2": "206039",
      "mr-3 2": ""
    },
    {
      "text-muted": "#89",
      "col-3 href": "https://www.twitchmetrics.net/c/88524154-xewer",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/e4602b54-4d44-4886-83b8-2f27645d734e-profile_image-300x300.png",
      "mr-2": "XEWER",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "203444",
      "mr-3 2": ""
    },
    {
      "text-muted": "#90",
      "col-3 href": "https://www.twitchmetrics.net/c/267603990-nateos",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/01d66fcc-b129-43ef-9e0f-feb8e53dc471-profile_image-300x300.png",
      "mr-2": "Nateos",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "203293",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#91",
      "col-3 href": "https://www.twitchmetrics.net/c/70915697-robert87000",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/cf234d80-0118-467f-b90b-9b869de2755c-profile_image-300x300.png",
      "mr-2": "robert87000",
      "text-muted 2": "Partner",
      "link-natural": "FIFA 21",
      "link-natural href": "https://www.twitchmetrics.net/g/518204-fifa-21",
      "time_ago": "Seen 23 minutes ago",
      "mb-2 2": "196157",
      "mr-3 2": ""
    },
    {
      "text-muted": "#92",
      "col-3 href": "https://www.twitchmetrics.net/c/29188740-fantabobshow",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/0613f6f7-1751-42ff-80fe-df48abad0c52-profile_image-300x300.jpg",
      "mr-2": "FantaBobShow",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "191125",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#93",
      "col-3 href": "https://www.twitchmetrics.net/c/35788650-esl_csgo_fr",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/8d5258f8-d18c-4adf-bac8-633138cee776-profile_image-300x300.jpeg",
      "mr-2": "ESL_CSGO_FR",
      "text-muted 2": "Partner",
      "link-natural": "Counter-Strike: Global Offensive",
      "link-natural href": "https://www.twitchmetrics.net/g/32399-counter-strike-global-offensive",
      "time_ago": "Seen 18 hours ago",
      "mb-2 2": "190114",
      "mr-3 2": ""
    },
    {
      "text-muted": "#94",
      "col-3 href": "https://www.twitchmetrics.net/c/32183344-kennystream",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/bb0a82e2-c809-43a9-b56e-01c683cfa26d-profile_image-300x300.jpeg",
      "mr-2": "KennyStream",
      "text-muted 2": "Partner",
      "link-natural": "Foxhole",
      "link-natural href": "https://www.twitchmetrics.net/g/493388-foxhole",
      "time_ago": "Seen 19 hours ago",
      "mb-2 2": "189653",
      "mr-3 2": ""
    },
    {
      "text-muted": "#95",
      "col-3 href": "https://www.twitchmetrics.net/c/161006524-marexlol",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/9cbe18ed-3211-4566-816b-903db5c509fb-profile_image-300x300.png",
      "mr-2": "MarexLoL",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 18 hours ago",
      "mb-2 2": "188738",
      "mr-3 2": ""
    },
    {
      "text-muted": "#96",
      "col-3 href": "https://www.twitchmetrics.net/c/38009333-sixentv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/ae70b2f5-f6aa-4c32-957e-e0334728fc24-profile_image-300x300.png",
      "mr-2": "SixenTv",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen a day ago",
      "mb-2 2": "180166",
      "mr-3 2": ""
    },
    {
      "text-muted": "#97",
      "col-3 href": "https://www.twitchmetrics.net/c/117323707-fuury_off",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b3d2075e-c0f2-4195-b3b6-490900e903b2-profile_image-300x300.jpeg",
      "mr-2": "FuuRy_Off",
      "text-muted 2": "Partner",
      "link-natural": "Rocket League",
      "link-natural href": "https://www.twitchmetrics.net/g/30921-rocket-league",
      "time_ago": "Seen 43 minutes ago",
      "mb-2 2": "180035",
      "mr-3 2": ""
    },
    {
      "text-muted": "#98",
      "col-3 href": "https://www.twitchmetrics.net/c/85473107-winamax",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/98d34adb-6ae8-4b9f-af5c-bb81d86be9ea-profile_image-300x300.png",
      "mr-2": "Winamax",
      "text-muted 2": "",
      "link-natural": "Poker",
      "link-natural href": "https://www.twitchmetrics.net/g/488190-poker",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "175675",
      "mr-3 2": ""
    },
    {
      "text-muted": "#99",
      "col-3 href": "https://www.twitchmetrics.net/c/149220653-gom4rt",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/e5acf7ba-169c-451f-9112-3d2d7ff6b2dc-profile_image-300x300.png",
      "mr-2": "Gom4rt",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 13 hours ago",
      "mb-2 2": "171768",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#100",
      "col-3 href": "https://www.twitchmetrics.net/c/43043577-heyartv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/a684a5f3683b193f-profile_image-300x300.jpeg",
      "mr-2": "HeyarTV",
      "text-muted 2": "Partner",
      "link-natural": "Makers & Crafting",
      "link-natural href": "https://www.twitchmetrics.net/g/509673-makers-crafting",
      "time_ago": "Seen 43 minutes ago",
      "mb-2 2": "163741",
      "mr-3 2": ""
    },
    {
      "text-muted": "#101",
      "col-3 href": "https://www.twitchmetrics.net/c/83727379-ipromx",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/d933b0c4-f8f6-4c77-a19a-1311e960faa1-profile_image-300x300.jpeg",
      "mr-2": "iProMx",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 6 days ago",
      "mb-2 2": "161804",
      "mr-3 2": ""
    },
    {
      "text-muted": "#102",
      "col-3 href": "https://www.twitchmetrics.net/c/150352604-kswinniie",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/0bb84ffd-0a71-4410-a07c-a797da6d431a-profile_image-300x300.png",
      "mr-2": "KSWINNIIE",
      "text-muted 2": "Partner",
      "link-natural": "Apex Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/511224-apex-legends",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "160914",
      "mr-3 2": ""
    },
    {
      "text-muted": "#103",
      "col-3 href": "https://www.twitchmetrics.net/c/70298660-skyyart",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/skyyart-profile_image-38098fb8a7c728a6-300x300.jpeg",
      "mr-2": "Skyyart",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "155613",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#104",
      "col-3 href": "https://www.twitchmetrics.net/c/46715307-hanssama",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/a273fb0d-31de-4771-8839-5d6f69595eca-profile_image-300x300.png",
      "mr-2": "Hanssama",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 8 days ago",
      "mb-2 2": "154631",
      "mr-3 2": ""
    },
    {
      "text-muted": "#105",
      "col-3 href": "https://www.twitchmetrics.net/c/30224721-akaruu",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/350b46d1-59d1-49d0-bda0-2146a207f074-profile_image-300x300.png",
      "mr-2": "Akaruu",
      "text-muted 2": "Partner",
      "link-natural": "Counter-Strike: Global Offensive",
      "link-natural href": "https://www.twitchmetrics.net/g/32399-counter-strike-global-offensive",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "154366",
      "mr-3 2": ""
    },
    {
      "text-muted": "#106",
      "col-3 href": "https://www.twitchmetrics.net/c/18887776-moman",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/395f85c5-042b-458e-8c7d-43057b6a60ac-profile_image-300x300.png",
      "mr-2": "MoMaN",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 10 hours ago",
      "mb-2 2": "152606",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#107",
      "col-3 href": "https://www.twitchmetrics.net/c/75373669-gius",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b6bdd5ad-c523-4610-9292-a78389434a4f-profile_image-300x300.png",
      "mr-2": "Gius",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 4 days ago",
      "mb-2 2": "151605",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#108",
      "col-3 href": "https://www.twitchmetrics.net/c/403474131-walid",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/98f58d9b-a3dd-4b07-83c4-f839c9e32eb8-profile_image-300x300.png",
      "mr-2": "Walid",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 11 hours ago",
      "mb-2 2": "150464",
      "mr-3 2": ""
    },
    {
      "text-muted": "#109",
      "col-3 href": "https://www.twitchmetrics.net/c/74391737-yomax",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/6cbcbaee-b5ff-4bcb-84a9-ca736fdd68fa-profile_image-300x300.png",
      "mr-2": "YoMax",
      "text-muted 2": "Partner",
      "link-natural": "FIFA 21",
      "link-natural href": "https://www.twitchmetrics.net/g/518204-fifa-21",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "148120",
      "mr-3 2": ""
    },
    {
      "text-muted": "#110",
      "col-3 href": "https://www.twitchmetrics.net/c/27621732-akytio",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/eeb41690-189a-40fe-a1b2-ebccf3795c21-profile_image-300x300.png",
      "mr-2": "Akytio",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 9 hours ago",
      "mb-2 2": "147754",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#111",
      "col-3 href": "https://www.twitchmetrics.net/c/644597699-winamaxsport",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/56af0d5c-331b-460c-9b60-b86f0a7ca577-profile_image-300x300.png",
      "mr-2": "WinamaxSport",
      "text-muted 2": "",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "145628",
      "mr-3 2": ""
    },
    {
      "text-muted": "#112",
      "col-3 href": "https://www.twitchmetrics.net/c/110926030-gamingo",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/8495182f-9554-41de-8013-307a25fdfdf6-profile_image-300x300.png",
      "mr-2": "Gamingo",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "143871",
      "mr-3 2": ""
    },
    {
      "text-muted": "#113",
      "col-3 href": "https://www.twitchmetrics.net/c/149682636-yann",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/50ebbd29-73f4-42f4-b4a8-f91480025187-profile_image-300x300.png",
      "mr-2": "Yann",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "143334",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#114",
      "col-3 href": "https://www.twitchmetrics.net/c/91122178-cyqop",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/cf0e90b4-6263-46a9-8673-31cd3409473e-profile_image-300x300.jpg",
      "mr-2": "Cyqop",
      "text-muted 2": "Partner",
      "link-natural": "Apex Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/511224-apex-legends",
      "time_ago": "Seen 3 days ago",
      "mb-2 2": "143158",
      "mr-3 2": ""
    },
    {
      "text-muted": "#115",
      "col-3 href": "https://www.twitchmetrics.net/c/123020035-corobizar",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/18fbeef6-6fdc-4361-a136-ce548621d7c0-profile_image-300x300.png",
      "mr-2": "Corobizar",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "141889",
      "mr-3 2": ""
    },
    {
      "text-muted": "#116",
      "col-3 href": "https://www.twitchmetrics.net/c/194431028-mathox",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/326db46f-8039-4c1e-ab00-c56fb7841fbc-profile_image-300x300.png",
      "mr-2": "MathoX",
      "text-muted 2": "Partner",
      "link-natural": "Minecraft",
      "link-natural href": "https://www.twitchmetrics.net/g/27471-minecraft",
      "time_ago": "Seen 16 hours ago",
      "mb-2 2": "141714",
      "mr-3 2": ""
    },
    {
      "text-muted": "#117",
      "col-3 href": "https://www.twitchmetrics.net/c/142506321-armateam",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/e38c722d-e0d0-414c-9a5c-d8a2c4943d2d-profile_image-300x300.jpg",
      "mr-2": "armateam",
      "text-muted 2": "Partner",
      "link-natural": "Teamfight Tactics",
      "link-natural href": "https://www.twitchmetrics.net/g/513143-teamfight-tactics",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "141512",
      "mr-3 2": ""
    },
    {
      "text-muted": "#118",
      "col-3 href": "https://www.twitchmetrics.net/c/94714426-norby",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/0322aafa-1536-4167-a4e4-3af8720814ef-profile_image-300x300.png",
      "mr-2": "Norby",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "141107",
      "mr-3 2": ""
    },
    {
      "text-muted": "#119",
      "col-3 href": "https://www.twitchmetrics.net/c/183233336-rokkeks",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/11bf327b-4054-4a8b-b30f-ae4ed258e4cb-profile_image-300x300.png",
      "mr-2": "RokKeks",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 18 hours ago",
      "mb-2 2": "140019",
      "mr-3 2": ""
    },
    {
      "text-muted": "#120",
      "col-3 href": "https://www.twitchmetrics.net/c/75261421-pirastack",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/4a32d459-604c-451c-ba14-933da582ac25-profile_image-300x300.png",
      "mr-2": "PirAStack",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "135084",
      "mr-3 2": ""
    },
    {
      "text-muted": "#121",
      "col-3 href": "https://www.twitchmetrics.net/c/235693408-superhenrytran",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/1c8c2ef7-8f73-4ece-b683-26b22932c62d-profile_image-300x300.png",
      "mr-2": "SuperHenryTran",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 5 days ago",
      "mb-2 2": "134843",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#122",
      "col-3 href": "https://www.twitchmetrics.net/c/152088629-kitty_r6",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/66248cd5-160a-432a-998e-3a55975b568a-profile_image-300x300.png",
      "mr-2": "Kitty_r6",
      "text-muted 2": "Partner",
      "link-natural": "Tom Clancy's Rainbow Six Siege",
      "link-natural href": "https://www.twitchmetrics.net/g/460630-tom-clancy-s-rainbow-six-siege",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "133669",
      "mr-3 2": ""
    },
    {
      "text-muted": "#123",
      "col-3 href": "https://www.twitchmetrics.net/c/148043031-teeqzy_",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/c052d503-8145-4264-b574-aedbbe7cd454-profile_image-300x300.jpg",
      "mr-2": "Teeqzy_",
      "text-muted 2": "Partner",
      "link-natural": "Slots",
      "link-natural href": "https://www.twitchmetrics.net/g/498566-slots",
      "time_ago": "Seen 3 days ago",
      "mb-2 2": "132692",
      "mr-3 2": ""
    },
    {
      "text-muted": "#124",
      "col-3 href": "https://www.twitchmetrics.net/c/101214680-furl3x",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/ea4ac4dd-8959-4567-9ec3-c8732dfc2c8c-profile_image-300x300.png",
      "mr-2": "FURL3X",
      "text-muted 2": "Partner",
      "link-natural": "Escape From Tarkov",
      "link-natural href": "https://www.twitchmetrics.net/g/491931-escape-from-tarkov",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "129557",
      "mr-3 2": ""
    },
    {
      "text-muted": "#125",
      "col-3 href": "https://www.twitchmetrics.net/c/31124525-oraxe",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/72fece33-c448-4174-93c6-3f4cc0525280-profile_image-300x300.png",
      "mr-2": "oraxe",
      "text-muted 2": "Partner",
      "link-natural": "Apex Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/511224-apex-legends",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "126731",
      "mr-3 2": ""
    },
    {
      "text-muted": "#126",
      "col-3 href": "https://www.twitchmetrics.net/c/105438356-lecheps",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/aaa68ca8-33dd-45e3-a3bb-2fb9e7568f32-profile_image-300x300.png",
      "mr-2": "LeCheps",
      "text-muted 2": "Partner",
      "link-natural": "Rocket League",
      "link-natural href": "https://www.twitchmetrics.net/g/30921-rocket-league",
      "time_ago": "Seen 3 hours ago",
      "mb-2 2": "125507",
      "mr-3 2": ""
    },
    {
      "text-muted": "#127",
      "col-3 href": "https://www.twitchmetrics.net/c/429600778-m4fgaming",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/fa9cc896-b371-4594-939a-1e983d0cf04b-profile_image-300x300.png",
      "mr-2": "m4fgaming",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen a day ago",
      "mb-2 2": "122341",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#128",
      "col-3 href": "https://www.twitchmetrics.net/c/24306397-at0mium",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/8f6f7cb5-237d-46fe-a576-3d06bd87bdaf-profile_image-300x300.png",
      "mr-2": "At0mium",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "121724",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#129",
      "col-3 href": "https://www.twitchmetrics.net/c/71619324-sir_thomas_",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b46f466c-0e2f-44d5-848b-2c5547fa3bab-profile_image-300x300.png",
      "mr-2": "Sir_Thomas_",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 21 hours ago",
      "mb-2 2": "117307",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#130",
      "col-3 href": "https://www.twitchmetrics.net/c/35685209-bibixhd",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/bibixhd-profile_image-31c8571809b8033b-300x300.jpeg",
      "mr-2": "BibixHD",
      "text-muted 2": "Partner",
      "link-natural": "DayZ",
      "link-natural href": "https://www.twitchmetrics.net/g/65632-dayz",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "115821",
      "mr-3 2": ""
    },
    {
      "text-muted": "#131",
      "col-3 href": "https://www.twitchmetrics.net/c/86121036-andilextv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/e2ac94d4-7f90-46c8-b264-36b52e86570f-profile_image-300x300.png",
      "mr-2": "Andilextv",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "115085",
      "mr-3 2": ""
    },
    {
      "text-muted": "#132",
      "col-3 href": "https://www.twitchmetrics.net/c/83522380-yoh_viral",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/a60a2d0e-34c8-4d1e-a61c-4673ec6ec735-profile_image-300x300.png",
      "mr-2": "YoH_ViraL",
      "text-muted 2": "",
      "link-natural": "Poker",
      "link-natural href": "https://www.twitchmetrics.net/g/488190-poker",
      "time_ago": "Seen 15 days ago",
      "mb-2 2": "114985",
      "mr-3 2": ""
    },
    {
      "text-muted": "#133",
      "col-3 href": "https://www.twitchmetrics.net/c/81446331-traytonlol",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/f814ca12-ac2e-4c2b-aa4c-7d509c3fff7a-profile_image-300x300.png",
      "mr-2": "TraYtoNlol",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 17 hours ago",
      "mb-2 2": "111727",
      "mr-3 2": ""
    },
    {
      "text-muted": "#134",
      "col-3 href": "https://www.twitchmetrics.net/c/188300205-coqto",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/11407f80-0ad1-48ae-bc48-8f04cf5b1ca6-profile_image-300x300.png",
      "mr-2": "COQTO",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "111556",
      "mr-3 2": ""
    },
    {
      "text-muted": "#135",
      "col-3 href": "https://www.twitchmetrics.net/c/50910019-taourrr1030",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/06396991-c255-4da4-b6d6-2f6f39773801-profile_image-300x300.png",
      "mr-2": "Taourrr1030",
      "text-muted 2": "Partner",
      "link-natural": "Slots",
      "link-natural href": "https://www.twitchmetrics.net/g/498566-slots",
      "time_ago": "Seen 10 hours ago",
      "mb-2 2": "107998",
      "mr-3 2": ""
    },
    {
      "text-muted": "#136",
      "col-3 href": "https://www.twitchmetrics.net/c/26184492-lege",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/d4b04db1-264e-4d20-9647-ff7c0111769e-profile_image-300x300.png",
      "mr-2": "Lege",
      "text-muted 2": "Partner",
      "link-natural": "Sid Meier's Civilization VI",
      "link-natural href": "https://www.twitchmetrics.net/g/492553-sid-meier-s-civilization-vi",
      "time_ago": "Seen 16 hours ago",
      "mb-2 2": "107128",
      "mr-3 2": ""
    },
    {
      "text-muted": "#137",
      "col-3 href": "https://www.twitchmetrics.net/c/139887547-targamas1",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/823077d78b6fa5d7-profile_image-300x300.jpeg",
      "mr-2": "Targamas1",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "106119",
      "mr-3 2": ""
    },
    {
      "text-muted": "#138",
      "col-3 href": "https://www.twitchmetrics.net/c/491994170-c_jane",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/5dfc16a9-d743-4e3c-ac56-877dad49cb98-profile_image-300x300.png",
      "mr-2": "C_Jane",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 11 hours ago",
      "mb-2 2": "105863",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#139",
      "col-3 href": "https://www.twitchmetrics.net/c/80981775-thomacky",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/39af81e6-324a-42b5-9343-de7de8ab4c79-profile_image-300x300.png",
      "mr-2": "Thomacky",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "105860",
      "mr-3 2": ""
    },
    {
      "text-muted": "#140",
      "col-3 href": "https://www.twitchmetrics.net/c/90661740-pyrootv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/25a5e4fa-7dc9-4f52-8910-0cd3a4c1468b-profile_image-300x300.png",
      "mr-2": "PyrooTv",
      "text-muted 2": "Partner",
      "link-natural": "Rust",
      "link-natural href": "https://www.twitchmetrics.net/g/263490-rust",
      "time_ago": "Seen 10 hours ago",
      "mb-2 2": "104519",
      "mr-3 2": ""
    },
    {
      "text-muted": "#141",
      "col-3 href": "https://www.twitchmetrics.net/c/268297838-kiguniin",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/0d89e861-7e59-4484-bde5-94ece6601cdf-profile_image-300x300.png",
      "mr-2": "KiGuNiiN",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 16 hours ago",
      "mb-2 2": "104083",
      "mr-3 2": ""
    },
    {
      "text-muted": "#142",
      "col-3 href": "https://www.twitchmetrics.net/c/117546026-chesscomfr",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/4274fbf6-c307-40f5-adf8-7871d4635666-profile_image-300x300.png",
      "mr-2": "chesscomfr",
      "text-muted 2": "Partner",
      "link-natural": "Chess",
      "link-natural href": "https://www.twitchmetrics.net/g/743-chess",
      "time_ago": "Seen 23 days ago",
      "mb-2 2": "102093",
      "mr-3 2": ""
    },
    {
      "text-muted": "#143",
      "col-3 href": "https://www.twitchmetrics.net/c/544340296-kaatsup",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/3a7f2021-8091-4808-81c9-5cf49a259343-profile_image-300x300.png",
      "mr-2": "Kaatsup",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 16 hours ago",
      "mb-2 2": "100685",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#144",
      "col-3 href": "https://www.twitchmetrics.net/c/89890241-boblegob",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/boblegob-profile_image-69f0cb78b6508916-300x300.jpeg",
      "mr-2": "BOBLEGOB",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen a day ago",
      "mb-2 2": "99561",
      "mr-3 2": ""
    },
    {
      "text-muted": "#145",
      "col-3 href": "https://www.twitchmetrics.net/c/442463943-trustcorptv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/30fb5ffa-f18c-44a2-aceb-d4b466c424a1-profile_image-300x300.png",
      "mr-2": "TrustCorpTV",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "96924",
      "mr-3 2": ""
    },
    {
      "text-muted": "#146",
      "col-3 href": "https://www.twitchmetrics.net/c/168116110-1pvcs",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/02b33c56-2021-4de5-aa71-283d74f91013-profile_image-300x300.png",
      "mr-2": "1PVCS",
      "text-muted 2": "Partner",
      "link-natural": "Counter-Strike: Global Offensive",
      "link-natural href": "https://www.twitchmetrics.net/g/32399-counter-strike-global-offensive",
      "time_ago": "Seen 7 days ago",
      "mb-2 2": "96838",
      "mr-3 2": ""
    },
    {
      "text-muted": "#147",
      "col-3 href": "https://www.twitchmetrics.net/c/70366045-kawaboumgaop",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/91302f5e-34c4-474c-8946-6007bda6c2f9-profile_image-300x300.png",
      "mr-2": "Kawaboumgaop",
      "text-muted 2": "Partner",
      "link-natural": "Slots",
      "link-natural href": "https://www.twitchmetrics.net/g/498566-slots",
      "time_ago": "Seen a day ago",
      "mb-2 2": "96823",
      "mr-3 2": ""
    },
    {
      "text-muted": "#148",
      "col-3 href": "https://www.twitchmetrics.net/c/39495991-anth0xc0lab0y",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/anth0xc0lab0y-profile_image-d1494255aab0876b-300x300.png",
      "mr-2": "Anth0xC0lab0y",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 8 hours ago",
      "mb-2 2": "96463",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#149",
      "col-3 href": "https://www.twitchmetrics.net/c/165503120-mino7x_",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/c2330d3e-7520-4ca8-9414-09c26cdb4e40-profile_image-300x300.png",
      "mr-2": "mino7x_",
      "text-muted 2": "Partner",
      "link-natural": "FIFA 21",
      "link-natural href": "https://www.twitchmetrics.net/g/518204-fifa-21",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "96360",
      "mr-3 2": ""
    },
    {
      "text-muted": "#150",
      "col-3 href": "https://www.twitchmetrics.net/c/55434616-krayn_live",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/krayn_live-profile_image-8aa743e2e415dcf7-300x300.jpeg",
      "mr-2": "Krayn_Live",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 13 hours ago",
      "mb-2 2": "96249",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#151",
      "col-3 href": "https://www.twitchmetrics.net/c/40740351-danycaligula",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/598396bd-9aff-40c4-9d4c-f41890b16539-profile_image-300x300.png",
      "mr-2": "DanyCaligula",
      "text-muted 2": "Partner",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "96004",
      "mr-3 2": ""
    },
    {
      "text-muted": "#152",
      "col-3 href": "https://www.twitchmetrics.net/c/107414209-aiola",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/516b6938-481a-481d-9c12-978423e17654-profile_image-300x300.png",
      "mr-2": "Aiola",
      "text-muted 2": "Partner",
      "link-natural": "Genshin Impact",
      "link-natural href": "https://www.twitchmetrics.net/g/513181-genshin-impact",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "94009",
      "mr-3 2": ""
    },
    {
      "text-muted": "#153",
      "col-3 href": "https://www.twitchmetrics.net/c/87184624-zacknani",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/zacknani-profile_image-0a035822cf4cd19b-300x300.png",
      "mr-2": "zacknani",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "93859",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#154",
      "col-3 href": "https://www.twitchmetrics.net/c/117011503-jeanmassietaccropolis",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/02a5f4bc-07b9-44d2-8dd0-584d2ef74a9b-profile_image-300x300.png",
      "mr-2": "JeanMassietAccropolis",
      "text-muted 2": "Partner",
      "link-natural": "Talk Shows & Podcasts",
      "link-natural href": "https://www.twitchmetrics.net/g/417752-talk-shows-podcasts",
      "time_ago": "Seen 19 hours ago",
      "mb-2 2": "93058",
      "mr-3 2": ""
    },
    {
      "text-muted": "#155",
      "col-3 href": "https://www.twitchmetrics.net/c/440140011-twincytv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/4b7f0d8d-8c9f-4f01-8fbf-ead07ea72584-profile_image-300x300.png",
      "mr-2": "TwincyTV",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 11 hours ago",
      "mb-2 2": "92703",
      "mr-3 2": ""
    },
    {
      "text-muted": "#156",
      "col-3 href": "https://www.twitchmetrics.net/c/50561208-un33d",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/f8f1a6ea-cdf3-459e-ab97-143f2c28b725-profile_image-300x300.png",
      "mr-2": "Un33D",
      "text-muted 2": "Partner",
      "link-natural": "Teamfight Tactics",
      "link-natural href": "https://www.twitchmetrics.net/g/513143-teamfight-tactics",
      "time_ago": "Seen 16 hours ago",
      "mb-2 2": "92161",
      "mr-3 2": ""
    },
    {
      "text-muted": "#157",
      "col-3 href": "https://www.twitchmetrics.net/c/29753247-aypierre",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/d7da33fb-790f-41d7-ad81-5d0bfe4029d8-profile_image-300x300.jpg",
      "mr-2": "aypierre",
      "text-muted 2": "Partner",
      "link-natural": "Minecraft",
      "link-natural href": "https://www.twitchmetrics.net/g/27471-minecraft",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "91871",
      "mr-3 2": ""
    },
    {
      "text-muted": "#158",
      "col-3 href": "https://www.twitchmetrics.net/c/44960888-liberto",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/09a5332c-11f7-4636-ab6c-16102b24812d-profile_image-300x300.png",
      "mr-2": "Liberto",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "91718",
      "mr-3 2": ""
    },
    {
      "text-muted": "#159",
      "col-3 href": "https://www.twitchmetrics.net/c/4102418-benzaie",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/dedc5522-3a7a-4b70-883b-d83b0a345dbe-profile_image-300x300.png",
      "mr-2": "BenZaie",
      "text-muted 2": "Partner",
      "link-natural": "Valheim",
      "link-natural href": "https://www.twitchmetrics.net/g/508455-valheim",
      "time_ago": "Seen 4 days ago",
      "mb-2 2": "90154",
      "mr-3 2": ""
    },
    {
      "text-muted": "#160",
      "col-3 href": "https://www.twitchmetrics.net/c/62658190-cruelladk",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b78d0e24-f144-498e-80fa-b930e13cb3a0-profile_image-300x300.png",
      "mr-2": "Cruelladk",
      "text-muted 2": "Partner",
      "link-natural": "World of Warcraft",
      "link-natural href": "https://www.twitchmetrics.net/g/18122-world-of-warcraft",
      "time_ago": "Seen 43 minutes ago",
      "mb-2 2": "89969",
      "mr-3 2": ""
    },
    {
      "text-muted": "#161",
      "col-3 href": "https://www.twitchmetrics.net/c/97610047-brokybrawkstv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/0bb7c133-1a7b-4699-8012-de46bd393c09-profile_image-300x300.png",
      "mr-2": "brokybrawkstv",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "89767",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#162",
      "col-3 href": "https://www.twitchmetrics.net/c/148389721-juliabayonetta_",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/e56611c2-1730-4db6-bc53-0fc4d60b4c45-profile_image-300x300.png",
      "mr-2": "JuliaBayonetta_",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen a day ago",
      "mb-2 2": "89529",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#163",
      "col-3 href": "https://www.twitchmetrics.net/c/38978803-marco",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/marco-profile_image-90b1c16d157a3bcb-300x300.jpeg",
      "mr-2": "Marco",
      "text-muted 2": "Partner",
      "link-natural": "The Legend of Zelda: Twilight Princess",
      "link-natural href": "https://www.twitchmetrics.net/g/17828-the-legend-of-zelda-twilight-princess",
      "time_ago": "Seen 9 hours ago",
      "mb-2 2": "87934",
      "mr-3 2": ""
    },
    {
      "text-muted": "#164",
      "col-3 href": "https://www.twitchmetrics.net/c/87805484-wisethug",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/a698952e-5792-4c78-81fe-1e48a2fb8f7d-profile_image-300x300.png",
      "mr-2": "Wisethug",
      "text-muted 2": "Partner",
      "link-natural": "Apex Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/511224-apex-legends",
      "time_ago": "Seen 18 hours ago",
      "mb-2 2": "86270",
      "mr-3 2": ""
    },
    {
      "text-muted": "#165",
      "col-3 href": "https://www.twitchmetrics.net/c/42120234-mywtheking",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/fd865b68-fd86-4c75-8065-fd09c1c7d0b2-profile_image-300x300.png",
      "mr-2": "MywTheKing",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 13 hours ago",
      "mb-2 2": "84715",
      "mr-3 2": ""
    },
    {
      "text-muted": "#166",
      "col-3 href": "https://www.twitchmetrics.net/c/124147323-kc_adam",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b4a22a54-04b8-43ec-820c-ba30b490fa7d-profile_image-300x300.png",
      "mr-2": "KC_Adam",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "84178",
      "mr-3 2": ""
    },
    {
      "text-muted": "#167",
      "col-3 href": "https://www.twitchmetrics.net/c/78705692-fairypeak",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/e7f16475-7459-457a-aefc-01f1e3074dc2-profile_image-300x300.png",
      "mr-2": "FairyPeak",
      "text-muted 2": "Partner",
      "link-natural": "Rocket League",
      "link-natural href": "https://www.twitchmetrics.net/g/30921-rocket-league",
      "time_ago": "Seen 5 days ago",
      "mb-2 2": "84115",
      "mr-3 2": ""
    },
    {
      "text-muted": "#168",
      "col-3 href": "https://www.twitchmetrics.net/c/153794984-vitality",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/56d0388f-918d-4a68-8654-3eb472f919c0-profile_image-300x300.png",
      "mr-2": "Vitality",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen an hour ago",
      "mb-2 2": "81190",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#169",
      "col-3 href": "https://www.twitchmetrics.net/c/79727968-thefishougo",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/031e3cc8-b70f-4b32-8716-f0d787c355fc-profile_image-300x300.png",
      "mr-2": "ThefishouGO",
      "text-muted 2": "Partner",
      "link-natural": "Hearthstone",
      "link-natural href": "https://www.twitchmetrics.net/g/138585-hearthstone",
      "time_ago": "Seen a day ago",
      "mb-2 2": "80747",
      "mr-3 2": ""
    },
    {
      "text-muted": "#170",
      "col-3 href": "https://www.twitchmetrics.net/c/56097532-amslowtw",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/2a728264-718c-499a-84d6-cfea97df88ac-profile_image-300x300.png",
      "mr-2": "AmslowTW",
      "text-muted 2": "Partner",
      "link-natural": "FIFA 21",
      "link-natural href": "https://www.twitchmetrics.net/g/518204-fifa-21",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "80472",
      "mr-3 2": ""
    },
    {
      "text-muted": "#171",
      "col-3 href": "https://www.twitchmetrics.net/c/26849594-gautoz",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/9802a678-f9e5-46fd-a896-1cb66ba589ac-profile_image-300x300.png",
      "mr-2": "Gautoz",
      "text-muted 2": "Partner",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 3 hours ago",
      "mb-2 2": "80259",
      "mr-3 2": ""
    },
    {
      "text-muted": "#172",
      "col-3 href": "https://www.twitchmetrics.net/c/43643204-ogn_empires",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/70f18fe0-7e04-4db1-a20d-ce52d58ba75e-profile_image-300x300.png",
      "mr-2": "OGN_EMPIRES",
      "text-muted 2": "Partner",
      "link-natural": "Age of Empires II",
      "link-natural href": "https://www.twitchmetrics.net/g/13389-age-of-empires-ii",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "80135",
      "mr-3 2": ""
    },
    {
      "text-muted": "#173",
      "col-3 href": "https://www.twitchmetrics.net/c/125809135-zoltan",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b013f34c-d654-4991-8cfc-835631bf153c-profile_image-300x300.png",
      "mr-2": "Zoltan",
      "text-muted 2": "Partner",
      "link-natural": "World of Warcraft",
      "link-natural href": "https://www.twitchmetrics.net/g/18122-world-of-warcraft",
      "time_ago": "Seen 43 minutes ago",
      "mb-2 2": "78954",
      "mr-3 2": ""
    },
    {
      "text-muted": "#174",
      "col-3 href": "https://www.twitchmetrics.net/c/69592711-areliann",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/61472a4c-84b1-4c26-bf77-36e55098f340-profile_image-300x300.png",
      "mr-2": "Areliann",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "77657",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#175",
      "col-3 href": "https://www.twitchmetrics.net/c/90328706-ravennrust",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/f5ef38e4-07f6-420e-b6aa-9a5851784dae-profile_image-300x300.png",
      "mr-2": "ravennrust",
      "text-muted 2": "Partner",
      "link-natural": "Rust",
      "link-natural href": "https://www.twitchmetrics.net/g/263490-rust",
      "time_ago": "Seen 17 hours ago",
      "mb-2 2": "77200",
      "mr-3 2": ""
    },
    {
      "text-muted": "#176",
      "col-3 href": "https://www.twitchmetrics.net/c/89204267-slipixxx",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/0c760881-0472-47fe-89dd-4770b75d5fc7-profile_image-300x300.png",
      "mr-2": "Slipixxx",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "77173",
      "mr-3 2": ""
    },
    {
      "text-muted": "#177",
      "col-3 href": "https://www.twitchmetrics.net/c/77383534-berdydaft",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/391f4c19-d273-4712-a385-17d074e2d351-profile_image-300x300.png",
      "mr-2": "Berdydaft",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "76773",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#178",
      "col-3 href": "https://www.twitchmetrics.net/c/170547313-adztv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/ef1579ec-778e-48d1-9410-9f33e952e671-profile_image-300x300.png",
      "mr-2": "AdzTV",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 3 hours ago",
      "mb-2 2": "76646",
      "mr-3 2": ""
    },
    {
      "text-muted": "#179",
      "col-3 href": "https://www.twitchmetrics.net/c/97742230-desastre_show",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/9aa2f0d8-1477-42f6-a2a4-d533072caba0-profile_image-300x300.png",
      "mr-2": "Desastre_Show",
      "text-muted 2": "Partner",
      "link-natural": "The Elder Scrolls Online",
      "link-natural href": "https://www.twitchmetrics.net/g/65654-the-elder-scrolls-online",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "75996",
      "mr-3 2": ""
    },
    {
      "text-muted": "#180",
      "col-3 href": "https://www.twitchmetrics.net/c/97189013-rasmelthor",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/1dee5831-e38c-4a4d-9af5-c04df4c1398d-profile_image-300x300.png",
      "mr-2": "Rasmelthor",
      "text-muted 2": "Partner",
      "link-natural": "Rocket League",
      "link-natural href": "https://www.twitchmetrics.net/g/30921-rocket-league",
      "time_ago": "Seen 18 hours ago",
      "mb-2 2": "75770",
      "mr-3 2": ""
    },
    {
      "text-muted": "#181",
      "col-3 href": "https://www.twitchmetrics.net/c/83599274-nono_lol",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/11bbbde2-f081-4ab2-bc51-2be3fffdb73d-profile_image-300x300.png",
      "mr-2": "Nono_LoL",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen a day ago",
      "mb-2 2": "75108",
      "mr-3 2": ""
    },
    {
      "text-muted": "#182",
      "col-3 href": "https://www.twitchmetrics.net/c/53495266-theryu7z",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/bd0b2d4d-24cf-4e83-ac96-326678f7bb0a-profile_image-300x300.png",
      "mr-2": "theRyu7z",
      "text-muted 2": "Partner",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "75073",
      "mr-3 2": ""
    },
    {
      "text-muted": "#183",
      "col-3 href": "https://www.twitchmetrics.net/c/478715115-psg",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/f5456a7b-2c4d-43c5-94ad-54df3e0f35c8-profile_image-300x300.png",
      "mr-2": "PSG",
      "text-muted 2": "Partner",
      "link-natural": "Sports",
      "link-natural href": "https://www.twitchmetrics.net/g/518203-sports",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "74592",
      "mr-3 2": ""
    },
    {
      "text-muted": "#184",
      "col-3 href": "https://www.twitchmetrics.net/c/151767660-askyyy",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/4e789d5b-ae1a-45b9-a674-f4b15659d371-profile_image-300x300.png",
      "mr-2": "Askyyy",
      "text-muted 2": "Partner",
      "link-natural": "Apex Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/511224-apex-legends",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "74208",
      "mr-3 2": ""
    },
    {
      "text-muted": "#185",
      "col-3 href": "https://www.twitchmetrics.net/c/172085668-skydeun",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b7ba1432-4617-45f7-a320-fbf154ba1f9e-profile_image-300x300.png",
      "mr-2": "Skydeun",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 17 hours ago",
      "mb-2 2": "72400",
      "mr-3 2": ""
    },
    {
      "text-muted": "#186",
      "col-3 href": "https://www.twitchmetrics.net/c/495010090-laiizenfn",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/d56f100f-991c-429d-93ab-bf96fc6a1cfc-profile_image-300x300.png",
      "mr-2": "LaiizenFN",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "72366",
      "mr-3 2": ""
    },
    {
      "text-muted": "#187",
      "col-3 href": "https://www.twitchmetrics.net/c/40383341-trinity",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/cfbb72a6-c6a0-4808-8736-794c5f759d01-profile_image-300x300.png",
      "mr-2": "Trinity",
      "text-muted 2": "Partner",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 43 minutes ago",
      "mb-2 2": "71644",
      "mr-3 2": ""
    },
    {
      "text-muted": "#188",
      "col-3 href": "https://www.twitchmetrics.net/c/86729677-flapiix",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/3d2ee802-256b-4e93-8005-97dcb6deb3d3-profile_image-300x300.png",
      "mr-2": "FLaPiiX",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Black Ops Cold War",
      "link-natural href": "https://www.twitchmetrics.net/g/512709-call-of-duty-black-ops-cold-war",
      "time_ago": "Seen 3 hours ago",
      "mb-2 2": "71207",
      "mr-3 2": ""
    },
    {
      "text-muted": "#189",
      "col-3 href": "https://www.twitchmetrics.net/c/198013846-yassencore",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/f70dd85d-da0d-49ae-bc11-6f453f6b7a97-profile_image-300x300.jpeg",
      "mr-2": "YassEncore",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 16 hours ago",
      "mb-2 2": "71161",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#190",
      "col-3 href": "https://www.twitchmetrics.net/c/183819202-eskc",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/9e11df06-166b-460f-ad12-2815520499a4-profile_image-300x300.png",
      "mr-2": "ESKc",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "70950",
      "mr-3 2": ""
    },
    {
      "text-muted": "#191",
      "col-3 href": "https://www.twitchmetrics.net/c/84935206-froggedtv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/7f207769538c49d2-profile_image-300x300.jpeg",
      "mr-2": "FroggedTV",
      "text-muted 2": "Partner",
      "link-natural": "Dota 2",
      "link-natural href": "https://www.twitchmetrics.net/g/29595-dota-2",
      "time_ago": "Seen 43 minutes ago",
      "mb-2 2": "70287",
      "mr-3 2": ""
    },
    {
      "text-muted": "#192",
      "col-3 href": "https://www.twitchmetrics.net/c/213560064-danymurraytrader",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/946350b3-4f4e-4fa7-8661-b46748eb0826-profile_image-300x300.png",
      "mr-2": "DanyMurrayTrader",
      "text-muted 2": "",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 43 minutes ago",
      "mb-2 2": "68164",
      "mr-3 2": ""
    },
    {
      "text-muted": "#193",
      "col-3 href": "https://www.twitchmetrics.net/c/102766788-mr_youns_tv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/c6ea315e-afb4-4698-b40c-45abc39c2aba-profile_image-300x300.png",
      "mr-2": "Mr_Youns_TV",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 5 hours ago",
      "mb-2 2": "67732",
      "mr-3 2": ""
    },
    {
      "text-muted": "#194",
      "col-3 href": "https://www.twitchmetrics.net/c/89283616-mrquarate",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/98152275-b375-4e07-a391-fca0e7b6b28c-profile_image-300x300.png",
      "mr-2": "MrQuarate",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 11 hours ago",
      "mb-2 2": "67549",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#195",
      "col-3 href": "https://www.twitchmetrics.net/c/125323544-xo_trixy",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/e83fc22c-7a42-4101-af2c-48dac3a38826-profile_image-300x300.png",
      "mr-2": "xo_trixy",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "67287",
      "mr-3 2": ""
    },
    {
      "text-muted": "#196",
      "col-3 href": "https://www.twitchmetrics.net/c/137450442-telo",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/33575954-19bc-4125-8c45-1d4cabf6184a-profile_image-300x300.png",
      "mr-2": "TeLo",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 43 minutes ago",
      "mb-2 2": "66672",
      "mr-3 2": ""
    },
    {
      "text-muted": "#197",
      "col-3 href": "https://www.twitchmetrics.net/c/23370689-eversax",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/f412ac91-72ae-4742-897f-0704a68dbdfb-profile_image-300x300.png",
      "mr-2": "Eversax",
      "text-muted 2": "Partner",
      "link-natural": "Rocket League",
      "link-natural href": "https://www.twitchmetrics.net/g/30921-rocket-league",
      "time_ago": "Seen 10 hours ago",
      "mb-2 2": "65984",
      "mr-3 2": ""
    },
    {
      "text-muted": "#198",
      "col-3 href": "https://www.twitchmetrics.net/c/124403155-juliettearz",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/e67b32ef-cec0-482d-8e18-58cdbec89bb9-profile_image-300x300.png",
      "mr-2": "JulietteArz",
      "text-muted 2": "Partner",
      "link-natural": "Apex Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/511224-apex-legends",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "65700",
      "mr-3 2": ""
    },
    {
      "text-muted": "#199",
      "col-3 href": "https://www.twitchmetrics.net/c/113894557-mclaugh",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/mclaugh-profile_image-d45de478aedbaffa-300x300.jpeg",
      "mr-2": "McLaugh",
      "text-muted 2": "Partner",
      "link-natural": "Escape From Tarkov",
      "link-natural href": "https://www.twitchmetrics.net/g/491931-escape-from-tarkov",
      "time_ago": "Seen 3 days ago",
      "mb-2 2": "65244",
      "mr-3 2": ""
    },
    {
      "text-muted": "#200",
      "col-3 href": "https://www.twitchmetrics.net/c/539703465-nobuspartan",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/86310556-6eeb-43d8-9191-756aec5d2d6c-profile_image-300x300.png",
      "mr-2": "NobuSpartan",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 6 hours ago",
      "mb-2 2": "65026",
      "mr-3 2": ""
    },
    {
      "text-muted": "#201",
      "col-3 href": "https://www.twitchmetrics.net/c/96022899-jussetain",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/89988295-7abc-45a5-864d-0e5d9651d146-profile_image-300x300.png",
      "mr-2": "Jussetain",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "64690",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#202",
      "col-3 href": "https://www.twitchmetrics.net/c/40729999-damdamlive",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/c5db4a62-9d05-4184-84b4-f64e3e391441-profile_image-300x300.png",
      "mr-2": "DamDamLive",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 18 hours ago",
      "mb-2 2": "63411",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#203",
      "col-3 href": "https://www.twitchmetrics.net/c/49629081-huzounet",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/c7761b09-f312-4c91-95ae-bcde8f8f4693-profile_image-300x300.png",
      "mr-2": "Huzounet",
      "text-muted 2": "Partner",
      "link-natural": "Dofus",
      "link-natural href": "https://www.twitchmetrics.net/g/20596-dofus",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "63259",
      "mr-3 2": ""
    },
    {
      "text-muted": "#204",
      "col-3 href": "https://www.twitchmetrics.net/c/124496686-kreeks",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/5da551c2-2e4c-4487-ae3a-3e4ec0afb123-profile_image-300x300.png",
      "mr-2": "Kreeks",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 11 hours ago",
      "mb-2 2": "63152",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#205",
      "col-3 href": "https://www.twitchmetrics.net/c/27528066-ogamingtv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/19c1c638-216d-4b3b-9355-2e7328456956-profile_image-300x300.png",
      "mr-2": "OGamingTV",
      "text-muted 2": "Partner",
      "link-natural": "Apex Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/511224-apex-legends",
      "time_ago": "Seen 13 days ago",
      "mb-2 2": "63152",
      "mr-3 2": ""
    },
    {
      "text-muted": "#206",
      "col-3 href": "https://www.twitchmetrics.net/c/68406941-mahyars",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/mahyars-profile_image-fb23bb6e131fc096-300x300.png",
      "mr-2": "MahyarS",
      "text-muted 2": "Partner",
      "link-natural": "Dead by Daylight",
      "link-natural href": "https://www.twitchmetrics.net/g/491487-dead-by-daylight",
      "time_ago": "Seen 13 hours ago",
      "mb-2 2": "63125",
      "mr-3 2": ""
    },
    {
      "text-muted": "#207",
      "col-3 href": "https://www.twitchmetrics.net/c/52803405-hugodelire",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/1b413b4b871670b9-profile_image-300x300.png",
      "mr-2": "HugoDelire",
      "text-muted 2": "Partner",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "62040",
      "mr-3 2": ""
    },
    {
      "text-muted": "#208",
      "col-3 href": "https://www.twitchmetrics.net/c/38822100-titavion",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/bba2eb66-6d9b-4524-8369-8b70f71237cd-profile_image-300x300.png",
      "mr-2": "TiTavion",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 16 hours ago",
      "mb-2 2": "61985",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#209",
      "col-3 href": "https://www.twitchmetrics.net/c/85034121-malek_csgo",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/52d5caad135110d8-profile_image-300x300.jpeg",
      "mr-2": "maleK_CSGO",
      "text-muted 2": "Partner",
      "link-natural": "Counter-Strike: Global Offensive",
      "link-natural href": "https://www.twitchmetrics.net/g/32399-counter-strike-global-offensive",
      "time_ago": "Seen 17 hours ago",
      "mb-2 2": "61746",
      "mr-3 2": ""
    },
    {
      "text-muted": "#210",
      "col-3 href": "https://www.twitchmetrics.net/c/402800890-mces",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/e234036a-7587-4d2a-aeb0-4f825658d335-profile_image-300x300.png",
      "mr-2": "MCES",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "61544",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#211",
      "col-3 href": "https://www.twitchmetrics.net/c/89047775-lutti",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/becf78c1-fb5b-40ac-b485-4db0e7daaa01-profile_image-300x300.png",
      "mr-2": "Lutti",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "61347",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#212",
      "col-3 href": "https://www.twitchmetrics.net/c/53226469-farodgames",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/feab2151-fb18-48e8-9804-cefb64bd6c24-profile_image-300x300.png",
      "mr-2": "FarodGames",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 13 hours ago",
      "mb-2 2": "59853",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#213",
      "col-3 href": "https://www.twitchmetrics.net/c/64965465-bazy_",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/edae4b5d-cc45-4c97-97d8-2e1b1aa2dfb9-profile_image-300x300.png",
      "mr-2": "bazy_",
      "text-muted 2": "Partner",
      "link-natural": "VALORANT",
      "link-natural href": "https://www.twitchmetrics.net/g/516575-valorant",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "59370",
      "mr-3 2": ""
    },
    {
      "text-muted": "#214",
      "col-3 href": "https://www.twitchmetrics.net/c/24253306-packam",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/4c9d5382-c43f-4704-80f5-a2f347cac389-profile_image-300x300.png",
      "mr-2": "Packam",
      "text-muted 2": "Partner",
      "link-natural": "Rust",
      "link-natural href": "https://www.twitchmetrics.net/g/263490-rust",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "58876",
      "mr-3 2": ""
    },
    {
      "text-muted": "#215",
      "col-3 href": "https://www.twitchmetrics.net/c/30773592-djboucherie",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/djboucherie-profile_image-9a33001bfd9322ec-300x300.png",
      "mr-2": "DJboucherie",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "58864",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#216",
      "col-3 href": "https://www.twitchmetrics.net/c/172531433-oslo",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/2e0b93e6-f1f5-400b-85f0-4a0e38c3f674-profile_image-300x300.png",
      "mr-2": "Oslo",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen a day ago",
      "mb-2 2": "58224",
      "mr-3 2": ""
    },
    {
      "text-muted": "#217",
      "col-3 href": "https://www.twitchmetrics.net/c/129163519-fitzadri",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/7492ff50-4182-4020-a809-d0d3363c4274-profile_image-300x300.png",
      "mr-2": "FitzAdri",
      "text-muted 2": "Partner",
      "link-natural": "Dragon Ball Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/504921-dragon-ball-legends",
      "time_ago": "Seen 20 hours ago",
      "mb-2 2": "58099",
      "mr-3 2": ""
    },
    {
      "text-muted": "#218",
      "col-3 href": "https://www.twitchmetrics.net/c/171183040-d7rl",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/c794340d-322e-41b4-86d7-61a8f15d6686-profile_image-300x300.png",
      "mr-2": "D7RL",
      "text-muted 2": "Partner",
      "link-natural": "Rocket League",
      "link-natural href": "https://www.twitchmetrics.net/g/30921-rocket-league",
      "time_ago": "Seen 3 days ago",
      "mb-2 2": "56768",
      "mr-3 2": ""
    },
    {
      "text-muted": "#219",
      "col-3 href": "https://www.twitchmetrics.net/c/46561632-peyjeym",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/ec6252e1-1c4a-458b-b564-3bfd1a3545a1-profile_image-300x300.png",
      "mr-2": "peyjeym",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "56633",
      "mr-3 2": ""
    },
    {
      "text-muted": "#220",
      "col-3 href": "https://www.twitchmetrics.net/c/193800457-nicfn",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b91043cb-f0f3-4e50-b5eb-4f70516ea93d-profile_image-300x300.png",
      "mr-2": "NicFN",
      "text-muted 2": "Partner",
      "link-natural": "Fortnite",
      "link-natural href": "https://www.twitchmetrics.net/g/33214-fortnite",
      "time_ago": "Seen 12 hours ago",
      "mb-2 2": "55958",
      "mr-3 2": ""
    },
    {
      "text-muted": "#221",
      "col-3 href": "https://www.twitchmetrics.net/c/175560856-hctuan",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/06e04bbb-a513-4e2c-a5ca-d5c0a97f7cde-profile_image-300x300.png",
      "mr-2": "Hctuan",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "55917",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#222",
      "col-3 href": "https://www.twitchmetrics.net/c/90097443-guep",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/7a00366c-04d3-492e-a15e-37d7d455c626-profile_image-300x300.png",
      "mr-2": "Guep",
      "text-muted 2": "Partner",
      "link-natural": "Minecraft",
      "link-natural href": "https://www.twitchmetrics.net/g/27471-minecraft",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "55484",
      "mr-3 2": ""
    },
    {
      "text-muted": "#223",
      "col-3 href": "https://www.twitchmetrics.net/c/89284114-alexclick",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/c9ab63d5f7e93091-profile_image-300x300.png",
      "mr-2": "Alexclick",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "55415",
      "mr-3 2": ""
    },
    {
      "text-muted": "#224",
      "col-3 href": "https://www.twitchmetrics.net/c/84886230-scoksc2",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/7e602df2f2647b96-profile_image-300x300.png",
      "mr-2": "ScokSC2",
      "text-muted 2": "Partner",
      "link-natural": "Escape From Tarkov",
      "link-natural href": "https://www.twitchmetrics.net/g/491931-escape-from-tarkov",
      "time_ago": "Seen a day ago",
      "mb-2 2": "55344",
      "mr-3 2": ""
    },
    {
      "text-muted": "#225",
      "col-3 href": "https://www.twitchmetrics.net/c/125260461-17blazx",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/f7791e1c-f6c4-4387-b8c8-b14ca1a30cb0-profile_image-300x300.png",
      "mr-2": "17BLAZX",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "55290",
      "mr-3 2": ""
    },
    {
      "text-muted": "#226",
      "col-3 href": "https://www.twitchmetrics.net/c/112523183-mahdiba",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/a1ebb89e-2781-499b-a29f-55a6e45531d0-profile_image-300x300.png",
      "mr-2": "MahdiBa",
      "text-muted 2": "Partner",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 3 days ago",
      "mb-2 2": "55147",
      "mr-3 2": ""
    },
    {
      "text-muted": "#227",
      "col-3 href": "https://www.twitchmetrics.net/c/150315224-trashtalkfr",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/a6ddf1a8ba992285-profile_image-300x300.jpeg",
      "mr-2": "TrashTalkFr",
      "text-muted 2": "",
      "link-natural": "Sports",
      "link-natural href": "https://www.twitchmetrics.net/g/518203-sports",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "55034",
      "mr-3 2": ""
    },
    {
      "text-muted": "#228",
      "col-3 href": "https://www.twitchmetrics.net/c/40693942-dye_live",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/9de87c7a-0257-49c6-a54e-d12d3bd9c5f2-profile_image-300x300.png",
      "mr-2": "Dye_Live",
      "text-muted 2": "Partner",
      "link-natural": "League of Legends",
      "link-natural href": "https://www.twitchmetrics.net/g/21779-league-of-legends",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "54956",
      "mr-3 2": ""
    },
    {
      "text-muted": "#229",
      "col-3 href": "https://www.twitchmetrics.net/c/473183066-tobiaswhell",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/664c16c4-735c-4cf0-b5e9-3ca99c5ff7af-profile_image-300x300.png",
      "mr-2": "TobiasWhell",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "54827",
      "mr-3 2": ""
    },
    {
      "text-muted": "#230",
      "col-3 href": "https://www.twitchmetrics.net/c/160009153-gastronogeek",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/2543625a-1954-419a-bda4-2183b87f177d-profile_image-300x300.png",
      "mr-2": "Gastronogeek",
      "text-muted 2": "Partner",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "54660",
      "mr-3 2": ""
    },
    {
      "text-muted": "#231",
      "col-3 href": "https://www.twitchmetrics.net/c/26362724-kusa",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/84f4695f-667c-4c33-aefc-0e24020c0e86-profile_image-300x300.png",
      "mr-2": "Kusa",
      "text-muted 2": "Partner",
      "link-natural": "World of Warcraft",
      "link-natural href": "https://www.twitchmetrics.net/g/18122-world-of-warcraft",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "54135",
      "mr-3 2": ""
    },
    {
      "text-muted": "#232",
      "col-3 href": "https://www.twitchmetrics.net/c/192231926-canardpc",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/c15cc94e-1800-4d61-932f-eccfb2a2fce4-profile_image-300x300.png",
      "mr-2": "CanardPC",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 3 hours ago",
      "mb-2 2": "53702",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#233",
      "col-3 href": "https://www.twitchmetrics.net/c/614185713-horiatwitch",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/d184e4b5-a79a-45bc-af49-aa43044f6b77-profile_image-300x300.png",
      "mr-2": "HoriaTwitch",
      "text-muted 2": "",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 6 days ago",
      "mb-2 2": "53621",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#234",
      "col-3 href": "https://www.twitchmetrics.net/c/100744948-bagherajones",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/5f161f8d-ef6a-4276-b6ba-4639df412aab-profile_image-300x300.png",
      "mr-2": "BagheraJones",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "53578",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#235",
      "col-3 href": "https://www.twitchmetrics.net/c/53571235-remx",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/4cf13da9-62a9-438d-bbb6-91119fc88edf-profile_image-300x300.png",
      "mr-2": "Remx",
      "text-muted 2": "Partner",
      "link-natural": "Grand Theft Auto V",
      "link-natural href": "https://www.twitchmetrics.net/g/32982-grand-theft-auto-v",
      "time_ago": "Seen 11 hours ago",
      "mb-2 2": "53450",
      "mr-3 2": ""
    },
    {
      "text-muted": "#236",
      "col-3 href": "https://www.twitchmetrics.net/c/522680774-arnaud_tsamere_xrt",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/6640e0e3-2e02-40ec-b1b0-e92a63bdadd4-profile_image-300x300.png",
      "mr-2": "arnaud_tsamere_xrt",
      "text-muted 2": "Partner",
      "link-natural": "F1 2020",
      "link-natural href": "https://www.twitchmetrics.net/g/517174-f1-2020",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "53023",
      "mr-3 2": ""
    },
    {
      "text-muted": "#237",
      "col-3 href": "https://www.twitchmetrics.net/c/47179419-chachatoy",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/56d652d7-ca09-412b-bac0-78410b5a0a29-profile_image-300x300.jpg",
      "mr-2": "Chachatoy",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "52986",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#238",
      "col-3 href": "https://www.twitchmetrics.net/c/241808969-avamind",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/5073399f-a330-4392-8dc9-0a7e86433b86-profile_image-300x300.png",
      "mr-2": "AVAMind",
      "text-muted 2": "Partner",
      "link-natural": "Just Chatting",
      "link-natural href": "https://www.twitchmetrics.net/g/509658-just-chatting",
      "time_ago": "Seen 2 hours ago",
      "mb-2 2": "52621",
      "mr-3 2": ""
    },
    {
      "text-muted": "#239",
      "col-3 href": "https://www.twitchmetrics.net/c/490839209-cauettv",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/7ab17645-bb3c-4a3a-8f52-94932efcb684-profile_image-300x300.png",
      "mr-2": "CauetTV",
      "text-muted 2": "",
      "link-natural": "Talk Shows & Podcasts",
      "link-natural href": "https://www.twitchmetrics.net/g/417752-talk-shows-podcasts",
      "time_ago": "Seen 19 hours ago",
      "mb-2 2": "52213",
      "mr-3 2": ""
    },
    {
      "text-muted": "#240",
      "col-3 href": "https://www.twitchmetrics.net/c/432857248-krolay",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/693a8d35-6f7d-4ae8-a2f3-190c243b61a4-profile_image-300x300.png",
      "mr-2": "krolay",
      "text-muted 2": "Partner",
      "link-natural": "Rust",
      "link-natural href": "https://www.twitchmetrics.net/g/263490-rust",
      "time_ago": "Seen a day ago",
      "mb-2 2": "51820",
      "mr-3 2": ""
    },
    {
      "text-muted": "#241",
      "col-3 href": "https://www.twitchmetrics.net/c/499120395-rominacheve",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/4dd52895-4085-40ef-a2c2-b689b83c73e6-profile_image-300x300.png",
      "mr-2": "rominacheve",
      "text-muted 2": "Partner",
      "link-natural": "Rocket League",
      "link-natural href": "https://www.twitchmetrics.net/g/30921-rocket-league",
      "time_ago": "Seen 5 hours ago",
      "mb-2 2": "51781",
      "mr-3 2": ""
    },
    {
      "text-muted": "#242",
      "col-3 href": "https://www.twitchmetrics.net/c/443644710-alucare_v2",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/a5b3ad5a-f127-4fb7-9d13-2bd820d7f9e0-profile_image-300x300.png",
      "mr-2": "alucare_v2",
      "text-muted 2": "",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 14 hours ago",
      "mb-2 2": "50736",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#243",
      "col-3 href": "https://www.twitchmetrics.net/c/74351174-bestmarmotte",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/b2273040-1bd6-483c-b256-07b9150fd286-profile_image-300x300.png",
      "mr-2": "Bestmarmotte",
      "text-muted 2": "Partner",
      "link-natural": "Total War: Warhammer II",
      "link-natural href": "https://www.twitchmetrics.net/g/497434-total-war-warhammer-ii",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "50735",
      "mr-3 2": ""
    },
    {
      "text-muted": "#244",
      "col-3 href": "https://www.twitchmetrics.net/c/486205216-idreau_",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/37c8bd79-4501-4522-a3d5-c758ac964b33-profile_image-300x300.png",
      "mr-2": "idreau_",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 4 days ago",
      "mb-2 2": "50672",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#245",
      "col-3 href": "https://www.twitchmetrics.net/c/64546560-riskin",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/2bf9cce3-87e7-4cc4-af54-e511294202a9-profile_image-300x300.png",
      "mr-2": "Riskin",
      "text-muted 2": "Partner",
      "link-natural": "Call of Duty: Warzone",
      "link-natural href": "https://www.twitchmetrics.net/g/512710-call-of-duty-warzone",
      "time_ago": "Seen 15 hours ago",
      "mb-2 2": "50462",
      "mr-3 2": ""
    },
    {
      "text-muted": "#246",
      "col-3 href": "https://www.twitchmetrics.net/c/82493955-malganyr",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/2582b4ee-81b7-43a7-ab09-9c825db6fe1d-profile_image-300x300.png",
      "mr-2": "Malganyr",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "49847",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#247",
      "col-3 href": "https://www.twitchmetrics.net/c/88959886-fekah_",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/1bbb9b89-b291-453c-858f-ed0a5a67b955-profile_image-300x300.png",
      "mr-2": "Fekah_",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen 9 days ago",
      "mb-2 2": "49345",
      "mr-3 2": "Variety"
    },
    {
      "text-muted": "#248",
      "col-3 href": "https://www.twitchmetrics.net/c/35632770-luuxia",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/9a7272c1-4c68-4707-bb99-d7fa0df34061-profile_image-300x300.png",
      "mr-2": "LuuxiA",
      "text-muted 2": "Partner",
      "link-natural": "World of Warcraft",
      "link-natural href": "https://www.twitchmetrics.net/g/18122-world-of-warcraft",
      "time_ago": "Seen 2 days ago",
      "mb-2 2": "49316",
      "mr-3 2": ""
    },
    {
      "text-muted": "#249",
      "col-3 href": "https://www.twitchmetrics.net/c/59321039-kaisson",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/99d4918c-6053-499b-a3bc-0faef0b4d3ec-profile_image-300x300.png",
      "mr-2": "Kaisson",
      "text-muted 2": "Partner",
      "link-natural": "Rust",
      "link-natural href": "https://www.twitchmetrics.net/g/263490-rust",
      "time_ago": "Seen 19 hours ago",
      "mb-2 2": "48728",
      "mr-3 2": ""
    },
    {
      "text-muted": "#250",
      "col-3 href": "https://www.twitchmetrics.net/c/42541814-deujna",
      "rounded src": "https://static-cdn.jtvnw.net/jtv_user_pictures/cb5cf8dc-e859-4d3f-9a1f-cdc28650ccbf-profile_image-300x300.jpg",
      "mr-2": "Deujna",
      "text-muted 2": "Partner",
      "link-natural": "",
      "link-natural href": "",
      "time_ago": "Seen a day ago",
      "mb-2 2": "48698",
      "mr-3 2": "Variety"
    }
  ]


renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

var raycaster, mouse = { x : 0, y : 0 };

/*var geometry_01 = new THREE.BoxGeometry( 50, 50, 50)
var material = new THREE.MeshStandardMaterial( { color: 0xff0051 })
var cube_01 = new THREE.Mesh ( geometry_01, material )
scene.add( cube_01 )
cube_01.position.x = 20;
cube_01.position.y = 0;
cube_01.position.z = -50;*/

var font_01 = new THREE.FontLoader();
font_01.load("https://github.com/chalupagrande/threejs-text-example/blob/f07f25c31f074f0fdbb71d83124bab1b74930280/mk3_regular.js", function (res){
    font = res;

    text_01 = new THREE.TextGeometry( "text",  {
        font: font,
        size: size,
        height: height,
    });

    scene.add(text_01);
});


const spheres = [CreateSphere(3, 0xffff00, -5)];
/*spheres.forEach((sphere, ndx) => {
    scene.add( sphere );
});*/

camera.position.z = 5

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
scene.add( ambientLight )

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

renderer.render( scene, camera )

function CreateSphere(radius, color, x)
{
    for(var i = 0; i < data.length; i++)
  {
      console.log(data[i]["mb-2 2"])
      var radiusSphere = data[i]["mb-2 2"]/1000000;
      console.log(radiusSphere)
    var geometrySphere_01 = new THREE.SphereGeometry( radiusSphere, 32, 32 );
    var materialSphere = new THREE.MeshStandardMaterial( {color} );
    var sphere_01 = new THREE.Mesh( geometrySphere_01, materialSphere );
    //sphere_01.position.set(Math.random() * 100,Math.random() * 100 ,-100)

    sphere_01.position.x = Math.random() * 300;
    sphere_01.position.y = Math.random() * 150;
    sphere_01.position.z = -100;
    scene.add(sphere_01)
    

  }
}

init();

function init () {
    raycaster = new THREE.Raycaster();
}

function animate() {
    requestAnimationFrame( animate )

    /*cube_01.rotation.x += 0.001;
    cube_01.rotation.y += 0.001;*/

    /*spheres.forEach((sphere, ndx) => {
        sphere.position.x += 0.1 * ndx;
    });*/

    renderer.render( scene, camera )
}
animate()

document.addEventListener( 'mousedown', onDocumentMouseDown, false );

function onDocumentMouseDown( event ) {

    event.preventDefault();

     //1. sets the mouse position with a coordinate system where the center
    //   of the screen is the origin
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    //2. set the picking ray from the camera position and mouse coordinates
    raycaster.setFromCamera( mouse, camera );    

    //3. compute intersections
    var intersects = raycaster.intersectObjects( scene.children );

    for ( var i = 0; i < intersects.length; i++ ) {
        console.log( intersects[ i ] ); 
        /*
            An intersection has the following properties :
                - object : intersected object (THREE.Mesh)
                - distance : distance from camera to intersection (number)
                - face : intersected face (THREE.Face3)
                - faceIndex : intersected face index (number)
                - point : intersection point (THREE.Vector3)
                - uv : intersection point in the object's UV coordinates (THREE.Vector2)
        */
    }
}





