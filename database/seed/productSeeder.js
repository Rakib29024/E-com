const faker = require('faker');
const MongoClient = require("mongodb").MongoClient;

const Product=require('../../models/product');

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "ecom";

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if(!err){
        const db = client.db(dbName);
        const productsCollection = db.collection("products");
    
        qty=10;
        products=[];
        try {
            for(let i=0;i<qty;i++){
                products.push(
                    new Product({
                        category_id:faker.random.uuid(5),
                        sub_category_id:faker.random.uuid(5),

                        title:faker.commerce.productName(),
                        slug:faker.lorem.slug(),
                        description:faker.commerce.productDescription(),
                        price:faker.commerce.price(),
                        qty:faker.random.number(200),
                        color:faker.commerce.color(),
                        size:'m',
                        width:faker.random.number(20),
                        height:faker.random.number(20),
                        depth:faker.random.number(20),
                        weight:faker.random.number(20),
                        user_type:'man',
                        item_type:'new',
                        youtube:faker.internet.url(),
                        status:'Active'
                    })
                );
            }
            try {
                productsCollection.insertMany(products);
                console.log(products);
            } catch (error) {
                console.log('DB insert error due to:'+error)
            }
        } catch (error) {
            console.log(error);
        }
    }
    else{
        console.log(err);
    }

    client.close();

});


