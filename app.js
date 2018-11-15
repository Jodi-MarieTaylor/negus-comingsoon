
var express  = require("express"),
    app  = express(),
    ejs = require('ejs'),

    http = require("http").Server(app);

app.use(express.json());
app.use("/css", express.static("./css"))
//app.use("/js", express.static("./js"))
app.use("/images", express.static("./images"))
//app.use("/js", express.static(__dirname + '/js'));
//console.log(express.static('./js'))


console.log("Server started");
app.get("/", function(req, res) {
 res.sendFile(__dirname + "/index.html")
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port ${port}'));