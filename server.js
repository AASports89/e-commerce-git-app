//DEPENDENCIES//
    const express = require('express');
    const routes = require('./routes');

//SEQUELIZE CONNECTION//
    const sequelize = require('./config/connection');

    const app = express();
    const PORT = process.env.PORT || 3001;
//MIDDLEWARE//
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use(routes);

//SYNCE SEQUELIZE MODELS --> DATABASE CONNECTION//
    sequelize.sync({ force: false }).then(() => {
        app.listen(PORT, () =>
        console.log(`App listening on port ${PORT}! 🌎`));
    });