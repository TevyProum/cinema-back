import express from 'express';
import cors from 'cors';
import { setMongoConnection } from './config/mongo.config';
import { setCinemaRouting } from './routes/cinemaRoutes';
import { setFilmRouting } from './routes/filmRoutes';
import { setSalleRouting } from './routes/salleRoutes';
import { setSeanceRouting } from './routes/seanceRoutes';
import { setTicketRouting } from './routes/ticketRoutes';

const app = express();
const port = 8080;
app.use(cors())
app.use(express.json());

//Lancement du serveur Node
app.listen(port, () => {
    console.log(`Serveur listening on port : ${port}`);
})

//Connexion à la base de donnée
setMongoConnection();

//Définition des routes
setCinemaRouting(app);
setFilmRouting(app);
setSeanceRouting(app);
setSalleRouting(app);
setTicketRouting(app);
