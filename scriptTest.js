const json = '{"text-muted":#1,"col-3 href":https://www.twitchmetrics.net/c/622498423-otplol_,"rounded src":https://static-cdn.jtvnw.net/jtv_user_pictures/787bd9dd-9367-45ed-a44d-d755427549b8-profile_image-300x300.png,"mr-2":otplol_,"text-muted 2":Partner,"link-natural":League of Legends,"link-natural href":https://www.twitchmetrics.net/g/21779-league-of-legends,"time_ago":Seen 15 minutes ago,"mb-2 2":5,494,969,"mr-3 2":}';
const obj = JSON.parse(json);

console.log(obj.text-muted);

console.log(obj.mr-2);