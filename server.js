const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const express = require("express-handlebars");
const { SequelizeMethod } = require("sequelize/types/utils");
const hbs = exphbs.create({ helpers: require(".utils/helpers") });

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret',
    cookies: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(routes);
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});