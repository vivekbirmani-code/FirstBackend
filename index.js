require('dotenv').config()
const express = require('express');
const app = express();

const port = 4000;  // This line will automatically go to .env file after running the code

const githubData = {
  "login": "vivekbirmani-code",
  "id": 178010169,
  "node_id": "U_kgDOCpw4OQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/178010169?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vivekbirmani-code",
  "html_url": "https://github.com/vivekbirmani-code",
  "followers_url": "https://api.github.com/users/vivekbirmani-code/followers",
  "following_url": "https://api.github.com/users/vivekbirmani-code/following{/other_user}",
  "gists_url": "https://api.github.com/users/vivekbirmani-code/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vivekbirmani-code/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vivekbirmani-code/subscriptions",
  "organizations_url": "https://api.github.com/users/vivekbirmani-code/orgs",
  "repos_url": "https://api.github.com/users/vivekbirmani-code/repos",
  "events_url": "https://api.github.com/users/vivekbirmani-code/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vivekbirmani-code/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vivek Birmani",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 2,
  "following": 1,
  "created_at": "2024-08-10T09:10:23Z",
  "updated_at": "2025-06-24T09:03:15Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('hiteshdotcom');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login at chai aur code</h1>');
});

app.get('/youtube', (req, res) => {
  res.send("<h2>Chai aur Code</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

