// express app
const express = require('express');
const app = express();
const port = 3000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/prisma', (req, res) => {
    prisma.user.findUnique({
        where: {
            id: "clwbtf896000083eg4lscduaz",
        },
    }).then((user) => {
        res.json(user);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
