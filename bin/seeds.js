const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

const celebrities = require('../data/celebrities.data');

require('../configs/db.config');

mongoose.connection.close();
