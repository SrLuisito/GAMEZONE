const userFunctions = require("../functions/User");
let db = require('../database/models');

const mainController = {
    front: (req, res) => {
        res.render("frontPage");
    },
    aboutUs: (req, res) => {
        res.render("aboutUs");
    },
    browser: async (req, res) => {
        const findUser = await userFunctions.findInDB(req, res);
        res.render("browser/browser", { user: findUser });
    },
    consultas: (req, res) => {
        res.render("consultas");
    }
}

module.exports = mainController;
