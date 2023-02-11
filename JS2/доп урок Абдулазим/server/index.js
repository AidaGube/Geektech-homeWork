const express = require('express')
const app = express()
const PORT = 3001
const cors = require('cors');

const users = []

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5500'
}));
app.use('/images', express.static('../images'))

function getCard (name) {
    return `images/${name}/card.jpg`
}

function getBanner (name) {
    return `images/${name}/banner.jpg`
}

function getMinor (name) {
    let minor = []
    for(let i = 1; i <= 5; i++){
        minor.push(`images/${name}/minor/photo${i}.jpg`)
    }
    return minor
}

const animes = [
    {
        id: 1,
        name: "Наруто", 
        seasons: 2,
        series: 720,
        images: {
            card: getCard('naruto'),
            banner: getBanner('naruto'),
            minor: getMinor('naruto')
        },
        rating: 9.2,
        restriction: 16
    },
    {
        id: 2,
        name: "Магическая битва",
        seasons: 1, 
        series: 24,
        images: {
            card: getCard('jujutsu_kaisen'),
            banner: getBanner('jujutsu_kaisen'),
            minor: getMinor('jujutsu_kaisen')
        },
        rating: 9.4,
        restriction: 18
    },
    {
        id: 3,
        name: "Атака на титанов", 
        seasons: 4, 
        series: 87,
        images: {
            card: getCard('attack_on_titan'),
            banner: getBanner('attack_on_titan'),
            minor: getMinor('attack_on_titan')
        },
        rating: 9.5,
        restriction: 18
    },
    {
        id: 4,
        name: "Твоё имя",
        seasons: 1,
        series: 1,
        images: {
            card: getCard('your_name'),
            banner: getBanner('your_name'),
            minor: getMinor('your_name')
        },
        rating: 9.3,
        restriction: 16
    }, 
    {
        id:5,
        name: "Блич",
        seasons: 2, 
        series: 379,
        images: {
            card: getCard('bleach'),
            banner: getBanner('bleach'),
            minor: getMinor('bleach')
        },
        rating: 9.4,
        restriction: 16
    },
    {
        id:6,
        name: "Токийские мстители",
        seasons: 1, 
        series: 24,
        images: {
            card: getCard('tokyo_ravangers'),
            banner: getBanner('tokyo_ravangers'),
            minor: getMinor('tokyo_ravangers')
        },
        rating: 8.9,
        restriction: 16  
    },
    {
        id:7,
        name: "Человек-бензопила",
        seasons: 1, 
        series: 12,
        images: {
            card: getCard('chainsawman'),
            banner: getBanner('chainsawman'),
            minor: getMinor('chainsawman')
        },
        rating: 9.5,
        restriction: 18
    },
    {
        id:8,
        name: "Ван-Пис",
        seasons: 1,
        series: 1046,
        images: {
            card: getCard('one_piece'),
            banner: getBanner('one_piece'),
            minor: getMinor('one_piece')
        },
        rating: 9.5,
        restriction: 18
    },
]


app.get('/', (req, res) => {
    res.send("hello world")
})

app.post('/users', (req, res) => {
    users.push(req.body)
    req.body ? res.send() : res.sendStatus(400)
})

app.get('/animes', (req, res) => {
    res.send(animes )
})

app.get('/users', (req, res) => {
    res.send(users)
})

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()
