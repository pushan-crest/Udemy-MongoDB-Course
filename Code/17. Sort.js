db.persons
  .aggregate([
    { $match: { gender: "female" } },
    {
      $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } },
    },
    { $sort: { totalPersons: -1 } },
  ])
  .pretty();

db.data.aggregate([
  { $group: { _id: { gender_val: "$gender" }, total: { $sum: 1 } } },
]);
