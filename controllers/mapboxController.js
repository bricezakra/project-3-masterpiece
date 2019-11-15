const axios = require("axios");

// Defining methods for the booksController
module.exports = {
    findKey: function(req, res) {
        const token = process.env.TOKEN_ACCESS_API
        axios.get("/,", { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                console.log(res.data);

            }).catch((error) => {
                console.log(error)
            });
    }
};