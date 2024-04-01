const sequize = require('../config/sequelize');
const User = require('../models/User');
const userData = require('./data/userData.json');

const seedDatabase = async () => {
    await sequize.sync({ force: true });
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
}

seedDatabase();