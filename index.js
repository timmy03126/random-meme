let express = require('express')

let app = express()

app.use(express.json())

let memeDatabase = ['https://millennialmarketing.com/wp-content/uploads/2018/07/PetRock-254x300.jpeg', 'https://i1.sndcdn.com/avatars-000222191415-74frwn-t500x500.jpg', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png', 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?q=65&auto=format&w=2270&ar=2:1&fit=crop', 'https://ih1.redbubble.net/image.3800727516.4531/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', 'https://ih1.redbubble.net/image.5091871855.1227/st,small,507x507-pad,600x600,f8f8f8.u2.jpg']

app.use(express.static(`${__dirname}/public`))

app.get('/meme', (req, res) => {
    let randomIndex = Math.floor(Math.random() * memeDatabase.length + 1)

    res.status(200).send(memeDatabase[randomIndex])
})

app.listen(4000, () => {
    console.log('server up on port 4000')
})