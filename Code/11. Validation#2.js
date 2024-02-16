/*
Validation occurs during updates and inserts. When you add validation to a collection, existing documents do not undergo validation checks until modification.

To perform validation checks on existing documents, use the validate command or the db.collection.validate() shell helper.
*/

db.contacts.insert([
  {
    _id: 1,
    name: "Anne",
    phone: "+1 555 123 456",
    city: "London",
    status: "Complete",
  },
  { _id: 2, name: "Ivan", city: "Vancouver" },
]);

// --------------------------------------------------------

db.runCommand({
  collMod: "contacts",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["phone", "name"],
      properties: {
        phone: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
      },
    },
  },
  validationLevel: "moderate",
});

// --------------------------------------------------------

/*
The contacts collection now has a validator with the moderate validationLevel:

If you attempted to update the document with _id: 1, MongoDB would apply the new validation rules since the existing document matches the criteria.

In contrast, MongoDB will not apply validation rules to updates to the document with _id: 2 as it does not meet the validation rules.
*/
