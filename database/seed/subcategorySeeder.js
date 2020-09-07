const faker = require('faker');
const MongoClient = require("mongodb").MongoClient;

const SubCategory=require('../../models/subcategory');

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "ecom";

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if(!err){
        const db = client.db(dbName);
        const subcategoriesCollection = db.collection("subcategories");
    
        qty=10;
        subcategories=[];
        try {
            for(let i=0;i<qty;i++){
                subcategories.push(
                    new SubCategory({
                        category_id:faker.random.uuid(),
                        title:faker.name.title(),
                        slug:faker.lorem.slug(),
                        logo:faker.image.imageUrl(),
                        status:'Active'
                    })
                );
            }
            try {
                subcategoriesCollection.insertMany(subcategories);
                console.log(subcategories);
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


