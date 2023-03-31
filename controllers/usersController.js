const knex = require('knex') (require('../knexfile.js'));


exports.index = (req, res) => {
    knex('users')
        .select('*')
        .then((data) => {
            // console.log(typeof data[0].budget_for_meat_this_month)

            return res.json(data);
        })
        .catch((err) => {
            console.error(err);
            return res.status(404).send('Page not found');
        })

};
// exports.getUser = (req, res) => {
//     knex("users")
//         .where({ id: req.params.id })
//         .select('*')
//         .then((data) => {
//             return res.json(data);
//         })      
// };




exports.userTransactions = (req, res) => {
  knex("transactions")
    .where({ user_id: req.params.id })
    .select(
        "transactions.id",
        "users.name"
        )
    .join("users", "users.id", "transactions.user_id")
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

