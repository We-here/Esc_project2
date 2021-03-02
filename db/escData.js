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


function getAllPosts(){
    return knex("Users").select("*");
}

function createPost(post){
    return knex("Posts").insert(post);
};

function deletePost(post_id){
    return knex("Posts").where("post_id", post_id).del();
};

function updateUser(post_id, post){
    return knex("Posts").where("post_id", post_id).update(post);
};




module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,

    createPost,
    getAllPosts,
    deletePost,
    updatePost

}