const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

const users = [
    {
        id: 1,
        username: 'test'
    },
    {
        id: 0,
        username: 'asd'
    }
];

const passports = [
    {
        uid: 1,
        password: 'rwar',
    },
    {
        uid: 0,
        password: 'qwe',
    }
];

const heroes = [
    {userid: 0, name: 'jojo'},
    {userid: 1, name: 'sassi'},
    {userid: 0, name: 'alice'},
];

app.use('/src', express.static(path.join(__dirname, '../src')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    let id;
    let user = users.filter(user => user.username === req.body.user)[0]
    if (user) {
        id = user.id
    } else {
        res.json({
            authenticated: false,
            reason: 'user does not match password',
        });
    }
    let pw = req.body.password;
    let password = passports.filter(passport => passport.uid === id)[0]
    if (!password) {
        res.json({
            authenticated: false,
            reason: 'user does not match password',
        });
    }
    if (password.password === pw) {
        res.json({
            authenticated: true,
            user: user,
        });
    } else {
		res.json({
	        authenticated: false,
	        reason: 'user does not match password',
	    });
	}
});

app.get('/api/hero/:id', (req, res) => {
    res.json(heroes[req.params.id]);
});

app.get('/api/user/:id/heroes', (req, res) => {
    res.json(heroes.filter(hero => hero.userid === parseInt(req.params.id)));
});

app.get('/', (_req, res) => {
//     res.set({
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Credentials': true,
//     });
    res.json({blub: 'blub'});
    //res.sendFile(path.join(__dirname, '../pages/hero.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
