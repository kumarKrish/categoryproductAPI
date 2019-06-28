# categoryproductAPI

# To install node modules
npm install

# To run the project
node app

# To test the Delete category with respective Product association
mocha

# Try to use this data in "mongod" up and running, using mongo command
and insert data
{ "_id" : ObjectId("5d159f012607f968a1d95955"), "name" : "iphone", "price" : 10, "category" : { "id" : 123, "name" : "phones" } }
{ "_id" : ObjectId("5d159f1d2607f968a1d95956"), "name" : "good day", "price" : 10, "category" : { "id" : 121, "name" : "biscuits" } }
The above is product data

db.categories.insert({name:"biscuits",id:121})
the above is how you insert category data
