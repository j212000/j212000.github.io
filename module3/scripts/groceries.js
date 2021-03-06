
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Vegetable: Potatoes - $0.99",
		vegetarian: true,
		glutenFree: true,
		vegAndGlutenFree: true,
		organic: true,
		price: 0.99
	},
	{
		name: "Vegetable: Brocoli - $1.99",
		vegetarian: true,
		glutenFree: true,
		vegAndGlutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Bakery: Bread - $2.35",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Vegetable: Corn - $2.35",
		vegetarian: true,
		glutenFree: true,
		vegAndGlutenFree: true,
		organic: true,
		price: 2.35
	},
	{
		name: "Bakery: Tortilla - $2.50",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.50
	},
	{
		name: "Other: Egg - $3.18",
		vegetarian: true,
		glutenFree: true,
		vegAndGlutenFree: true,
		organic:true,
		price: 3.18
	},
	{
		name: "Meat: Ham - $3.25",
		vegetarian: false,
		glutenFree: false,
		organic:true,
		price: 3.25
	},
	{
		name: "Meat: Salmon - $10.00",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "Diary: Milk - $12.00",
		vegetarian: true,
		glutenFree: true,
		vegAndGlutenFree: true,
		organic:false,
		price: 12.00
	},

	{
		name: "Other: Beer - $15.00",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		price: 15.00
	},



];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if((restriction == "Vegetarian and GlutenFree") &&(prods[i].vegAndGlutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
