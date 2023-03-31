let usersData = [
   {
      id: 1,
      name: 'Alex',
      is_pc_optimum_member: true,
      preference_replacement_for_out_of_stock_item: 'cheapest',
      preference_price: 'cheapest',
      preference_generic: 'always',
      budget_for_meat_this_month: 400.00,
      budget_for_dairy_this_month: 100.00,
      budget_for_vegetables_this_month: 150.00,
      budget_for_drinks_this_month: 200.00,
      budget_for_snacks_this_month: 100.00,
      prefer_vegan: false
   },
   {
      id: 2,
      name: 'Mike',
      is_pc_optimum_member: true,
      preference_replacement_for_out_of_stock_item: 'best match',
      preference_price: 'cheapest',
      preference_generic: 'whenever cheapest',
      budget_for_meat_this_month: 100.00,
      budget_for_dairy_this_month: 150.00,
      budget_for_vegetables_this_month: 180.00,
      budget_for_drinks_this_month: 150.00,
      budget_for_snacks_this_month: 200.00,
      prefer_vegan: false
   },
   {
      id: 3,
      name: 'Sally',
      is_pc_optimum_member: false,
      preference_replacement_for_out_of_stock_item: 'ask me',
      preference_price: 'best value',
      preference_generic: 'never',
      budget_for_meat_this_month: 200.00,
      budget_for_dairy_this_month: 20.00,
      budget_for_vegetables_this_month: 250.00,
      budget_for_drinks_this_month: 300.00,
      budget_for_snacks_this_month: 150.00,
      prefer_vegan: false
   },
   {
      id: 4,
      name: 'John',
      is_pc_optimum_member: true,
      preference_replacement_for_out_of_stock_item: 'remove from order',
      preference_price: 'cheapest',
      preference_generic: 'always',
      budget_for_meat_this_month: 500.00,
      budget_for_dairy_this_month: 80.00,
      budget_for_vegetables_this_month: 400.00,
      budget_for_drinks_this_month: 80.00,
      budget_for_snacks_this_month: 50.00,
      prefer_vegan: false
   }
 ];

 const transactionData = [
   {
      id: 1,
      user_id: 1,
      datetime: '2/3/23',
      delivery_fee: 3.99,
      is_pickup: false
   },
   {
      id: 2,
      user_id: 1,
      datetime: '3/4/23',
      delivery_fee: 0.00,
      is_pickup: true
   },
   {
      id: 3,
      user_id: 2,
      datetime: '1/15/23',
      delivery_fee: 3.99,
      is_pickup: false
   },
   {
      id: 4,
      user_id: 2,
      datetime: '2/1/23',
      delivery_fee: 3.99,
      is_pickup: false
   },
   {
      id: 5,
      user_id: 3,
      datetime: '12/6/22',
      delivery_fee: 3.99,
      is_pickup: false
   },
   {
      id: 6,
      user_id: 3,
      datetime: '12/25/22',
      delivery_fee: 3.99,
      is_pickup: false
   },
   {
      id: 7,
      user_id: 3,
      datetime: '1/14/23',
      delivery_fee: 3.99,
      is_pickup: false
   },
   {
      id: 8,
      user_id: 3,
      datetime: '3/4/23',
      delivery_fee: 0.00,
      is_pickup: true
   },
   {
      id: 9,
      user_id: 4,
      datetime: '8/24/22',
      delivery_fee: 0.00,
      is_pickup: true
   },
   {
      id: 10,
      user_id: 4,
      datetime: '9/12/22',
      delivery_fee: 3.99,
      is_pickup: false
   }
 ];

 const cartData = [
   {
      id: 1,
      transaction_id: 1,
      item_id: 1,
      quantity: 3,
      discount_amount: 1.00,
      tax: 0.5
   },
   {
      id: 2,
      transaction_id: 1,
      item_id: 2,
      quantity: 1,
      discount_amount: 0.5,
      tax: 0.8
   },
   {
      id: 3,
      transaction_id: 2,
      item_id: 3,
      quantity: 1,
      discount_amount: 1.00,
      tax: 0.5
   },
   {
      id: 4,
      transaction_id: 2,
      item_id: 4,
      quantity: 1,
      discount_amount: 1.00,
      tax: 0.5
   },
   {
      id: 5,
      transaction_id: 2,
      item_id: 5,
      quantity: 2,
      discount_amount: 0.5,
      tax: 0.5
   },
   {
      id: 6,
      transaction_id: 3,
      item_id: 6,
      quantity: 1,
      discount_amount: 0.00,
      tax: 0.5
   },
   {
      id: 7,
      transaction_id: 3,
      item_id: 7,
      quantity: 1,
      discount_amount: 0.00,
      tax: 0.5
   },
   {
      id: 8,
      transaction_id: 3,
      item_id: 8,
      quantity: 1,
      discount_amount: 0.00,
      tax: 0.5
   },
   {
      id: 9,
      transaction_id: 3,
      item_id: 9,
      quantity: 3,
      discount_amount: 0.5,
      tax: 0.5
   },
   {
      id: 10,
      transaction_id: 4,
      item_id: 10,
      quantity: 1,
      discount_amount: 0.00,
      tax: 0.8
   },
   {
      id: 11,
      transaction_id: 4,
      item_id: 11,
      quantity: 2,
      discount_amount: 0.00,
      tax: 0.5
   },
   {
      id: 12,
      transaction_id: 5,
      item_id: 3,
      quantity: 1,
      discount_amount: 0.00,
      tax: 0.5
   },
   {
      id: 13,
      transaction_id: 5,
      item_id: 2,
      quantity: 1,
      discount_amount: 0.00,
      tax: 0.5
   },
   {
      id: 14,
      transaction_id: 6,
      item_id: 7,
      quantity: 1,
      discount_amount: 0.00,
      tax: 0.5
   },
   {
      id: 15,
      transaction_id: 6,
      item_id: 1,
      quantity: 1,
      discount_amount: 0.00,
      tax: 0.5
   },
   {
      id: 16,
      transaction_id: 7,
      item_id: 10,
      quantity: 1,
      discount_amount: 0.00,
      tax: 0.5
   },
   {
      id: 17,
      transaction_id: 8,
      item_id: 4,
      quantity: 1,
      discount_amount: 0.00,
      tax: 0.5
   },
   {
      id: 18,
      transaction_id: 8,
      item_id: 2,
      quantity: 2,
      discount_amount: 0.00,
      tax: 0.5
   },
   {
      id: 19,
      transaction_id: 9,
      item_id: 7,
      quantity: 1,
      discount_amount: 0.00,
      tax: 0.5
   },
   {
      id: 20,
      transaction_id: 10,
      item_id: 3,
      quantity: 1,
      discount_amount: 0.00,
      tax: 0.5
   }
 ];

 const itemData = [
   {
      id: 1,
      item_name: 'Sirloin Tip Oven Roast',
      category: 'Meat',
      subcategory: 'Beef',
      is_vegan: false,
      is_organic: true,
      price: 23.79,
      image1: 'https://assets.shop.loblaws.ca/products/20812306/b2/en/front/20812306_front_a06_@2.png',
      image2: '',
      image3: '',
      description: 'Cut from Canada AA or higher.',
      URL: 'https://www.loblaws.ca/sirloin-tip-oven-roast/p/20812306_KG'
   },
   {
      id: 2,
      item_name: 'Salted Butter',
      category: 'Dairy',
      subcategory: 'Butter',
      is_vegan: false,
      is_organic: false,
      price: 8.49,
      image1: 'https://assets.shop.loblaws.ca/products/20559408/b2/en/front/20559408_front_a06_@2.png',
      image2: 'https://assets.shop.loblaws.ca/products/20559408/b2/en/angle/20559408_angle_a06_@2.png',
      image3: 'https://assets.shop.loblaws.ca/products/20559408/b2/en/side/20559408_side_a06_@2.png',
      description: 'Butter is a dairy product made with cream that has been churned. Typically unsalted butter is used for baking while salted butter is used for cooking, and both taste great smeared over fresh bread.',
      URL: 'https://www.loblaws.ca/salted-butter/p/20559408_EA?icta=recommended-carousel'
   },
   {
      id: 3,
      item_name: 'Coca-Cola Zero Sugar',
      category: 'Drinks',
      subcategory: 'Soft drinks',
      is_vegan: false,
      is_organic: false,
      price: 7.49,
      image1: 'https://assets.shop.loblaws.ca/products/20318694001/b2/EN/front/20318694001_front_a06_@2.png',
      image2: 'https://assets.shop.loblaws.ca/products/20318694001/b2/en/angle/20318694001_angle_a06_@2.png',
      image3: 'https://assets.shop.loblaws.ca/products/20318694001/b2/en/beauty/20318694001_beauty_a06_@2.png',
      description: 'Great Coca-Cola Taste with Zero Sugar and Zero Calories. Enjoy with meals, on the go, or to share. Serve ice cold for maximum refreshment. Bring home the authentic, delicious & refreshing taste of Coca-Cola Zero Sugar For crisp, cold taste, enjoy chilled Zero Sugar and Zero Calories Great Coke Taste. Zero Sugar. Convenient pack of 12 so you have plenty to enjoy Perfect size to be enjoyed with meals or snacking',
      URL: 'https://www.loblaws.ca/sirloin-tip-oven-roast/p/20812306_KG'
   },
   {
      id: 4,
      item_name: 'ACTIVIA Yogurt With Probiotics, Vanilla Flavour',
      category: 'Dairy',
      subcategory: 'Yogurt',
      is_vegan: false,
      is_organic: false,
      price: 3.99,
      image1: 'https://assets.shop.loblaws.ca/products/20325132003/b2/en/front/20325132003_front_a06_@2.png',
      image2: 'https://assets.shop.loblaws.ca/products/20325132003/b2/en/angle/20325132003_angle_a06_@2.png',
      image3: 'https://assets.shop.loblaws.ca/products/20325132003/b2/en/side/20325132003_side_a06_@2.png',
      description: 'Softness and comfort is what comes to mind when we think of vanilla. With more than 1 billion B.L. Regularis in each small container, Activia Classic Vanilla is the perfect snack for your taste buds, and also contributes to your gut flora health.* With more than 1 billion CFU Bifidobacterium lactis per serving, a probiotic that contributes to healthy gut flora. Yogurt with Probiotics Contributes to your gut flora health Delicious and creamy, it\'s the perfect snack any time of day Treat yourself today with Canada\'s best-selling yogurt Good source of calcium Made with 100% Canadian milk"',
      URL: 'https://www.loblaws.ca/yogurt-with-probiotics-vanilla-flavour/p/20325132003_EA'
   },
   {
      id: 5,
      item_name: 'Strawberries 2LB',
      category: 'Vegetables',
      subcategory: 'Fruits',
      is_vegan: true,
      is_organic: true,
      price: 10.99,
      image1: 'https://assets.shop.loblaws.ca/products/20069661001/b2/en/front/20069661001_front_a06_@2.png',
      image2: '',
      image3: '',
      description: 'Strawberries vary in colour, shape, and size but their flavour is distinctively sweet. They are topped with a hull of green leaves and are speckled with seeds on the surface. Enjoy yours in classic desserts like strawberry shortcake and strawberry-rhubarb pie, or add them to your next spinach salad with some crumbled goat cheese.',
      URL: 'https://www.loblaws.ca/strawberries-2lb/p/20069661001_EA'
   },
   {
      id: 6,
      item_name: 'Beef Stir-Fry Strips',
      category: 'Meat',
      subcategory: 'Beef',
      is_vegan: false,
      is_organic: true,
      price: 8.36,
      image1: 'https://assets.shop.loblaws.ca/products/20820739/b2/en/front/20820739_front_a06_@2.png',
      image2: '',
      image3: '',
      description: 'Cut from Canada AA or higher.',
      URL: 'https://www.loblaws.ca/beef-stir-fry-strips/p/20820739_KG'
   },
   {
      id: 7,
      item_name: 'Avocados Bag',
      category: 'Vegetables',
      subcategory: 'Fruits',
      is_vegan: true,
      is_organic: true,
      price: 6.99,
      image1: 'https://assets.shop.loblaws.ca/products/20142232001/b2/en/front/20142232001_front_a06_@2.png',
      image2: '',
      image3: '',
      description: 'Each bag has 5 avacados. Avocados have a pebbly skin that turns from dark green to near black when ripe. Cut lengthwise, twist to separate the halves, and scoop out the creamy, pale green flesh for guacamole (lemon juice will keep the flesh from discolouring) and smoothies, or add sliced avocado to salad or a BLT sandwich.',
      URL: 'https://www.loblaws.ca/avocados-bag/p/20142232001_EA'
   },
   {
      id: 8,
      item_name: 'Green Seedless Grapes',
      category: 'Vegtables',
      subcategory: 'Fruits',
      is_vegan: true,
      is_organic: true,
      price: 11.22,
      image1: 'https://assets.shop.loblaws.ca/products/20425775001/b2/en/front/20425775001_front_a06_@2.png',
      image2: '',
      image3: '',
      description: 'Green grapes range in colour from pale green to amber yellow and are considered white grape varieties. Fresh grapes have a silver-white bloom covering them and should be plump with firmly attached green stems. Use green grapes to garnish your cheese tray or simply enjoy them on their own as a snack.',
      URL: 'https://www.loblaws.ca/green-seedless-grapes/p/20425775001_KG'
   },
   {
      id: 9,
      item_name: 'Tomato Beefsteak Red',
      category: 'Vegtables',
      subcategory: 'Fruits',
      is_vegan: true,
      is_organic: true,
      price: 2.06,
      image1: 'https://assets.shop.loblaws.ca/products/20812306/b2/en/front/20812306_front_a06_@2.png',
      image2: '',
      image3: '',
      description: 'Greenhouse tomatoes are firm and plump with a red skin when ripe. They are perfect sliced and used as a topping on burgers and sandwiches like the classic BLT. Or scoop out the pulp and seeds to make baked stuffed tomatoes.',
      URL: 'https://www.loblaws.ca/tomato-beefsteak-red/p/20426141001_KG'
   },
   {
      id: 10,
      item_name: 'Broccoli',
      category: 'Vegetables',
      subcategory: 'Fruits',
      is_vegan: true,
      is_organic: true,
      price: 3.99,
      image1: 'https://assets.shop.loblaws.ca/products/20145621001/b2/en/front/20145621001_front_a06_@2.png',
      image2: '',
      image3: '',
      description: 'Broccoli is a cruciferous vegetable that comes in a tight cluster of florets on top of firm, edible stalks. It is deep green in colour, sometimes with a tinge of purple. Add raw broccoli florets to your next vegetable platter or pair with cheddar cheese for a quiche.',
      URL: 'https://www.loblaws.ca/broccoli/p/20145621001_EA'
   },
   {
      id: 11,
      item_name: 'Asparagus',
      category: 'Vegtables',
      subcategory: 'Fruits',
      is_vegan: true,
      is_organic: true,
      price: 6.49,
      image1: 'https://assets.shop.loblaws.ca/products/20174581001/b2/en/front/20174581001_front_a06_@2.png',
      image2: '',
      image3: '',
      description: 'Asparagus stalks range in colour from green to purple, with dark green or purplish tips. Thickness is not a reliable indicator of tenderness, and asparagus is best enjoyed the day of purchase.',
      URL: 'https://www.loblaws.ca/asparagus/p/20174581001_KG'
   }
 ];

 exports.seed = async function(knex) {
   // Deletes ALL existing entries
   await knex('users').del();
   await knex('users').insert(usersData);
   await knex('transactions').del();
   await knex('transactions').insert(transactionData);
   await knex('items').del();
   await knex('items').insert(itemData);
   await knex('cart').del();
   await knex('cart').insert(cartData);
 };