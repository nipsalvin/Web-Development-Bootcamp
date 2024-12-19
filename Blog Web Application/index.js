import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { 
        title: "Home", 
        header: "Home Page",
        content: `Welcome to the homepage! <br> <br>
        
                  Lorem ipsum odor amet, consectetuer adipiscing elit. 
                  Eleifend malesuada ad, conubia non et nisi leo viverra. Aliquet iaculis dolor; facilisi tempor nisi 
                  morbi nascetur. Fames ut montes urna vestibulum ornare; maximus dapibus libero. Dictumst inceptos 
                  cursus diam a ornare. Diam id donec congue, bibendum habitant mattis. Laoreet malesuada pharetra 
                  penatibus sit leo id.`
    });
});

app.get("/post_1", (req, res) => {
    res.render("index.ejs", { 
        title: "Post 1", 
        header: "Post 1",
        content: `This is the content of Post 1. <br> <br>
        
                  Tempor ridiculus primis sociosqu ut conubia libero. Et pretium velit tincidunt quis efficitur volutpat tempus. Eget
                  bibendum iaculis non interdum nec. Scelerisque dignissim duis euismod, urna hendrerit placerat sagittis odio pharetra?
                  Sodales commodo adipiscing proin himenaeos habitant curae. Tincidunt ex velit facilisi penatibus dapibus; conubia
                  mollis. Senectus praesent tincidunt primis quisque pellentesque ante suscipit magnis. Ultricies primis per id integer;
                  condimentum potenti nec aenean. Arcu lectus taciti efficitur fames venenatis.`
    });
});

app.get("/post_2", (req, res) => {
    res.render("index.ejs", {
        title: "Post 2", 
        header: "Post 2",
        content: `This is the content of Post 2. <br> <br>

                  Parturient magnis phasellus risus metus nisi duis. Duis placerat dictum semper potenti vivamus libero facilisis lacinia
                  mauris. Eros urna parturient inceptos; class ipsum amet. Condimentum condimentum volutpat lobortis per sed dignissim
                  ullamcorper. Taciti ante augue mattis consequat, volutpat lobortis. Maximus ex mattis vel conubia cubilia? Ante tempus
                  at morbi imperdiet faucibus viverra aptent condimentum montes. Quis pellentesque magna parturient auctor; habitant lorem
                  pretium. Conubia integer venenatis efficitur; torquent phasellus elementum amet. Penatibus ornare augue dis mus
                  ridiculus vivamus mollis ultricies. 
                `
    });
});

app.get("/post_3", (req, res) => {
    res.render("index.ejs",{
        title: "Post 3",
        header: "Post 3",
        content: `This is the content of Post 3. <br> <br>

                  Egestas mauris rutrum eget facilisi blandit lacus. Integer massa feugiat dolor; nam fermentum mus aliquet augue posuere.
                  Curae taciti sit aliquam ut neque. Sem potenti elementum facilisis lorem lobortis ornare interdum cras. Sem diam sed
                  aliquam, quisque torquent euismod. Porta at proin aptent quam ex rhoncus laoreet turpis. Ligula dapibus fermentum eget
                  elementum varius orci augue ad montes. Conubia magna ridiculus urna, facilisi vel convallis laoreet leo. Accumsan curae
                  cursus adipiscing ullamcorper eleifend vehicula adipiscing. Aaenean tempor primis eu duis tristique dapibus, velit
                  consequat.`
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})