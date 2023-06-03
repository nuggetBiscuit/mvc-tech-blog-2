const { User } = require('../models');

const userData = [
    {
        username: "tech_wizard",
        twitter: "tech_wizard",
        github: "tech_wizard",
        email: "tech_wizard@gmail.com",
        password: "Tech@123"
        },
        {
        username: "coding_genius",
        twitter: "coding_genius",
        github: "coding_genius",
        email: "coding_genius@gmail.com",
        password: "CodeMaster@456"
        },
        {
        username: "innovator_21",
        twitter: "innovator_21",
        github: "innovator_21",
        email: "innovator_21@gmail.com",
        password: "Innovation@789"
        },
        {
        username: "cyber_ninja",
        twitter: "cyber_ninja",
        github: "cyber_ninja",
        email: "cyber_ninja@gmail.com",
        password: "NinjaWarrior@123"
        },
        {
        username: "tech_guru",
        twitter: "tech_guru",
        github: "tech_guru",
        email: "tech_guru@gmail.com",
        password: "Guru@2023"
        },
        
        {
        username: "code_maverick",
        twitter: "code_maverick",
        github: "code_maverick",
        email: "code_maverick@gmail.com",
        password: "Maverick@2023"
        }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;