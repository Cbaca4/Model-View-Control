const { Post } = require("../models");
const postData = [
    { 
        title: "First blog post",
        content: "This is the content of the first blog post",
        user_id: 1, 
    },
    { 
        title: "Second blog post",
        content: "This is the content of the second blog post",
        user_id: 2, 
    },
    { 
        title: "Third blog post",
        content: "This is the content of the third blog post",
        user_id: 3, 
    },
    { 
        title: "Fourth blog post",
        content: "This is the content of the fourth blog post",
        user_id: 4, 
    },
    { 
        title: "Fith blog post",
        content: "This is the content of the fith blog post",
        user_id: 5, 
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;