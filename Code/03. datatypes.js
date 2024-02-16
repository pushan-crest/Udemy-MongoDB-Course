// datatypes
// Number - Integer, NumberLong, NumberDecimal
// Text - max size 16 MB
// Boolean
// ObjectId
// ISO Date - new Date()
// Timestamp - new Timestamp()
// embeded Documnent
// Array

db.companies.insertOne({
  name: "Apple",
  isStartUp: false,
  employees: 4500,
  funding: 13348329478985649756,
  details: { ceo: "Steve" },
  tags: [{ title: "super" }, { title: "giants" }],
  foundingDate: new Date(),
  insertedAt: new Timestamp(),
});
