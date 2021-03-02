const knex = require("./knex");



function getAllUsers(){
    return knex("Users").select("*");
}

function createUser(user){
    return knex("Users").insert(user);
};

function deleteUser(id){
    return knex("Users").where("id", id).del();
};

function updateUser(id, user){
    return knex("Users").where("id", id).update(user);
};



module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser
}