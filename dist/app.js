"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongo_config_1 = require("./config/mongo.config");
const cinemaRoutes_1 = require("./routes/cinemaRoutes");
const filmRoutes_1 = require("./routes/filmRoutes");
const salleRoutes_1 = require("./routes/salleRoutes");
const seanceRoutes_1 = require("./routes/seanceRoutes");
const ticketRoutes_1 = require("./routes/ticketRoutes");
const app = express_1.default();
const port = 8080;
app.use(cors_1.default());
app.use(express_1.default.json());
//Lancement du serveur Node
app.listen(port, () => {
    console.log(`Serveur listening on port : ${port}`);
});
//Connexion à la base de donnée
mongo_config_1.setMongoConnection();
//Définition des routes
cinemaRoutes_1.setCinemaRouting(app);
filmRoutes_1.setFilmRouting(app);
seanceRoutes_1.setSeanceRouting(app);
salleRoutes_1.setSalleRouting(app);
ticketRoutes_1.setTicketRouting(app);
//# sourceMappingURL=app.js.map