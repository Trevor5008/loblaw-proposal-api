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

exports.getUserInformation = (req, res) => {
   knex("users")
      .where({ "users.id": req.params.id})  
      .join("transactions", "transactions.user_id", "users.id")
      .join("cart", "cart.transaction_id", "transactions.id")
      .join("items", "items.id", "cart.item_id")
      .select(
         "cart.id as cartId",
         "users.name as userName",
         "transaction_id as transactionId",
         "quantity as numItems",
         "transactions.datetime as date",
         "budget_for_meat_this_month as mealBudget",
         "budget_for_dairy_this_month as dairyBudget",
         "budget_for_vegetables_this_month as veggieBudget",
         "budget_for_drinks_this_month as drinkBudget",
         "budget_for_snacks_this_month as snackBudget",
         "prefer_vegan as isVegan",
         "items.price as itemPrice"
      )
      .then(data => {
         res.json(data);
      }) 
      .catch(err => {
         res.status(400).json(`Error retrieving user data: ${err}`);
      });
};




// exports.userTransactions = (req, res) => {
//   knex("transactions")
//     .where({ user_id: req.params.id })
//     .select(
//         "transactions.id",
//         "users.name"
//         )
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


// exports.addUser = (req, res) => {
//     knex('users')
//         .insert()
// }

