Explain, generally, what is meant by a NoSQL database.
----------------------------------------------------
NoSQL database is a non-relational type datebase which is 'usually' not communicated with via SQL queries. Example of an NoSQL database is the MongoDB which is an document-oriented database which uses a form of JSON(BSON) for storage.
Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
Pros:
- Easily scalable f.x. using clusters of cheap hardware
- Schemaless
- Simple to setup and use
- Can be faster than some SQL/Relational Databases
Cons:
- Data size is bigger than SQL/Relational Databases f.x. due to storing of fieldnames.
- Difficult to run business analysis on.
- New technology and therefore not yet standardized
- Not as good with transaction ACID support

Explain how databases like MongoDB and redis would be classified in the NoSQL world
----------------------------------------------------
MongoDB is classified as a document-oriented database which stores all the data locally in a document. 
Redis is a (in-memory) key-value database which is stored in memory and can be set to persist to local disk in forms of snapshots.

Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB
----------------------------------------------------
As MongoDB is able to store without a schema you can get alot of 'messy' data with no apparent structure, thereby making reading from the database tedious and complicated. To get some hands-on structure on your data you can use Mongoose which provides you with an easy to use schemabuilder thereby giving your data structure, kinda like we know it from ORM with Java.

Explain, using relevant examples, the strategy for querying MongoDB (all CRUD operations)
----------------------------------------------------
- See model/jokeFacade.js

Demonstrate, using a REST-API, how to perform all CRUD operations on a MongoDB
----------------------------------------------------
- See model/api.js

Explain the benefits from using Mongoose, and provide an example involving all CRUD operations
----------------------------------------------------
As stated earlier the NoSQL databases is schemaless, therefore their are no real restrictions or structure that your data has to comply with - to prevent to much chaos we can put the Mongoose library on top of the mongoDb to create such schema.
- See model/apiMongoose.js

Explain how redis "fits" into the NoSQL world, and provide an example of how to use it.
----------------------------------------------------

Explain, using a relevant example, how redis (or a similar) can increase scalability (drastic) for a server using server side sessions
----------------------------------------------------

Explain, using a relevant example, a full MEAN application including relevant test cases to test the REST-API (not on the production database)
----------------------------------------------------
- See above project. For test files for the CRUD see the test folder
