// Require models and form associations

const db = require('./db');

// Require our models. Running each module registers the model into sequelize
// so any other part of the application can simply call sequelize.model('User')
// to get access to the User model.
require('./models');

// Syncing all the models at once. This promise is used by main.js.
const syncedDbPromise = db.sync();

syncedDbPromise.then(() => console.log('Sequelize models synced to PostgreSQL'));

module.exports = syncedDbPromise;