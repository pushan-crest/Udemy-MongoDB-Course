// Comparison Query Operators

// $eq - equal to
// $gt - greater than
// $gte - greater than or equal to
// $in
// $lt - less then
// $lte - less then or equal to
// $ne - not equal to
// $nin - not in array

db.passengers.find({ age: { $gt: 30 } });

db.passengers.find({ age: { $lt: 60 } });

// matches any of the value
db.passengers.find({ age: { $in: [23, 34, 35, 36, 37] } });

db.passengers.find({ age: { $ne: 30 } });
