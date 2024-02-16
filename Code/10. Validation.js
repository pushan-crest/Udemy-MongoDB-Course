// Schema validation lets you create validation rules for your fields, such as allowed data types and value ranges.

// MongoDB uses a flexible schema model, which means that documents in a collection do not need to have the same fields or data types by default. Once you've established an application schema, you can use schema validation to ensure there are no unintended schema changes or improper data types.

// To specify validation rules when creating a new collection, use db.createCollection() with the validator option.

db.createCollection("students", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "name", "year", "major", "address" ],
          properties: {
             name: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             year: {
                bsonType: "int",
                minimum: 2017,
                maximum: 3017,
                description: "must be an integer in [ 2017, 3017 ] and is required"
             },
             major: {
                enum: [ "Math", "English", "Computer Science", "History", null ],
                description: "can only be one of the enum values and is required"
             },
             gpa: {
                bsonType: [ "double" ],
                description: "must be a double if the field exists"
             },
             address: {
                bsonType: "object",
                required: [ "city" ],
                properties: {
                   street: {
                      bsonType: "string",
                      description: "must be a string if the field exists"
                   },
                   city: {
                      bsonType: "string",
                      description: "must be a string and is required"
                   }
                }
             }
          }
       }
    }
 })

 // -----------------------------------------------------------


 db.students.insertOne({name:"Pushan", year: 2024, major: 'Computer Science', gpa: 9.5, address: {
     street: 'abc', city: 'pqr'}})


     {
      acknowledged: true,
      insertedId: ObjectId('65cae89b2b93524898e4e4a7')
    }


// -----------------------------------------------------------

/*

 db.students.insertOne({ name: "Pushan", year: 2024, major: 'Computer Science', gpa: 'abc', address: { street: 'abc', city: 'pqr' } })
Uncaught:
MongoServerError: Document failed validation
Additional information: {
  failingDocumentId: ObjectId('65cae8c42b93524898e4e4a8'),
  details: {
    operatorName: '$jsonSchema',
    schemaRulesNotSatisfied: [
      {
        operatorName: 'properties',
        propertiesNotSatisfied: [
          {
            propertyName: 'gpa',
            description: 'must be a double if the field exists',
            details: [
              {
                operatorName: 'bsonType',
                specifiedAs: { bsonType: [ 'double' ] },
                reason: 'type did not match',
                consideredValue: 'abc',
                consideredType: 'string'
              }
            ]
          }
        ]
      }
    ]
  }
}

*/