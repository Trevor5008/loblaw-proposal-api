exports.up = function(knex) {
   return knex.schema
   .createTable('users', function(table) {
     table.increments('id').primary();
     table.string('name');
     table.boolean('is_pc_optimum_member');
     table.string('preference_replacement_for_out_of_stock_item');
     table.string('preference_price');
     table.string('preference_generic');
     table.decimal('budget_for_meat_this_month', 10, 2);
     table.decimal('budget_for_dairy_this_month', 10, 2);
     table.decimal('budget_for_vegetables_this_month', 10, 2);
     table.decimal('budget_for_drinks_this_month', 10, 2);
     table.decimal('budget_for_snacks_this_month', 10, 2);
     table.boolean('prefer_vegan');
   })
   .createTable('transactions', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table
         .foreign('user_id')
         .references('id')
         .inTable('users');
      table.boolean('is_member');
      table.string('datetime');
      table.decimal('delivery_fee');
      table.boolean('is_pickup');
   })
   .createTable('items', (table) => {
      table.increments('id').primary();
      table.string('item_name');
      table.string('category');
      table.string('subcategory');
      table.boolean('is_vegan');
      table.boolean('is_organic');
      table.decimal('price');
      table.string('image1');
      table.string('image2');
      table.string('image3');
      table.string('description', 1000);
      table.string('URL');
   })
   .createTable('cart', (table) => {
      table.increments('id').primary();
      table.integer('transaction_id').unsigned();
      table.integer('item_id').unsigned();
      table
         .foreign('transaction_id')
         .references('id')
         .inTable('transactions');
      table
         .foreign('item_id')
         .references('id')
         .inTable('items');

      table.integer('quantity');
      table.decimal('discount_amount');
      table.decimal('tax');
   });
 };
 
 exports.down = function(knex) {
   return knex.schema
      .dropTable('cart')
      .dropTable('transactions')
      .dropTable('items')
      .dropTable('users');
 };
