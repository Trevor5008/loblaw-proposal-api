const knex = require("knex")(require("../knexfile.js"));

exports.getUsersCart = (req, res) => {
  knex("transactions")
  .where({ "transactions.user_id": req.params.id  })
  .join("users", "users.id", "transactions.user_id")
  .join( "cart", "cart.transaction_id", "transactions.id" )
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
// exports.getUser = (req, res) => {
//     knex("users")
//         .where({ id: req.params.id })
//         .select('*')
//         .then((data) => {
//             return res.json(data);
//         })
// };

// exports.userTransactions = (req, res) => {
//   knex("transactions")
//     .where({ user_id: req.params.id })
//     .select("transactions.id", "users.name")
//     .join("users", "users.id", "transactions.user_id")
//     .then((data) => {
//       // console.log(typeof data[0].budget_for_meat_this_month)

//       return res.json(data);
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.status(404).send("Page not found");
//     });
// };
