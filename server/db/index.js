const db = require('./db');

/*
Require models so they're registered into sequelize so
any other part of the application can simply call
sequelize.model('User') to get access to the User model.
*/
require('./models');

// Sync all the models at once.
const syncedDbPromise = db.sync();

syncedDbPromise.then(() => console.log('Sequelize models synced to PostgreSQL'));

module.exports = syncedDbPromise;
