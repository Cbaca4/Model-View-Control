const { User } = require("../models");
const userData = [
    {
        username: "user1",
        email: "user@example.com",
        password: "password",
    },
    {
        username: "user2",
        email: "user@example.com",
        password: "password",
    },
    {
        username: "user3",
        email: "user@example.com",
        password: "password",
    },
    {
        username: "user4",
        email: "user@example.com",
        password: "password",
    },
    {
        username: "user5",
        email: "user@example.com",
        password: "password",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;