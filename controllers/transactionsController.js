const knex = require("knex")(require("../knexfile.js"));

exports.index = (req, res) => {
  knex("transactions")
    .select("*")
    .then((data) => {
      // console.log(typeof data[0].budget_for_meat_this_month)

      return res.json(data);
    })
    .catch((err) => {
      console.error(err);
      return res.status(404).send("Page not found");
    });
};

// exports.addUser = (req, res) => {
//     knex('users')
//         .insert()
// }

