const express = require('express')
const app = express()
app.set("view engine", "ejs")
app.use(express.static('./public'))
app.get('/', function (req, res) {

    res.render("index")
})
app.get('/error', function (req, res, next) {
    throw Error("Nahi malum bhai kya hua 🥲")
    // res.render("error")
})

app.get('/Des', function (req, res) {

    res.render("des")
})
app.get('/tours',function (req, res) {
    res.render("tours")
})
app.get('/servic', function (req, res) {

    res.render("service", { Api: "Bot ai" })
})
app.get('/contact', function (req, res) {

    res.render("contact")
})
// Catch-all route for unmatched routes
app.get('*', function (req, res) {
    res.redirect('/error');
});

app.use(
    function errorHandler(err, req, res, next) {
        if (res.headersSent) {
            return next(err)
        }
        res.status(500)
        res.render('error', { error: err })
    })
app.listen(3666)