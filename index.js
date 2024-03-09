const express = require('express')

const app = express()
const port = 3000

// To set the view engine as ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    /* This myoffer object will passed into the index.ejs
    In there, these data will sent into the card component as props */
    var myoffer = [
        {
            "id": 1,
            "title": "This is a offer demo of tshirts",
            "caption": "Buy it or the offer will be gone, so as soon as possible place the orders"
        },
        {
            "id": 2,
            "title": "This is a offer demo of jeans",
            "caption": "Buy it or the offer will be gone, so as soon as possible place the orders"
        },
        {
            "id": 3,
            "title": "This is a offer demo of hoodie",
            "caption": "Buy it or the offer will be gone, so as soon as possible place the orders"
        }
    ];

    /* To render any another files in some routes, we will write ==> 

    res.render('about');
    res.render('contact us');
*/
    res.render('index', { myoffer });
})

app.listen(port, () => {
    console.log(`EJS app listening on port ${port}`)
})