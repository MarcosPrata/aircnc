const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');
const SessionControler = require('./controllers/SessionController');
const SpotControler = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get("/sessions",  SessionControler.index);
routes.post("/sessions",  SessionControler.store);

routes.get("/spots",  SpotControler.index);
routes.post("/spots",  upload.single('thumbnail'), SpotControler.store);

routes.get("/dashboard",  DashboardController.index);

routes.post("/spots/:spot_id/bookings",  BookingController.store);

module.exports = routes;