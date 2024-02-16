// Aggregation $lookup

/*
This aggregation stage performs a left outer join to a collection in the same database.

There are four required fields:

from: The collection to use for lookup in the same database
localField: The field in the primary collection that can be used as a unique identifier in the from collection.
foreignField: The field in the from collection that can be used as a unique identifier in the primary collection.
as: The name of the new field that will contain the matching documents from the from collection.
*/

db.passengers.aggregate([
  {
    $lookup: {
      from: "flightData",
      localField: "flightdata",
      foreignField: "_id",
      as: "flight",
    },
  },
])[
  ({
    _id: ObjectId("65c9f7f924946694a5098b39"),
    name: "Max Schwarzmueller",
    age: 29,
    status: { description: "on time", lastUpdted: "1 hour ago" },
    flightdata: ObjectId("65c9d79124946694a5098b34"),
    flight: [
      {
        _id: ObjectId("65c9d79124946694a5098b34"),
        departureAirport: "MUC",
        arrivalAirport: "SFO",
        aircraft: "Airbus A380",
        distance: 12000,
        intercontinental: true,
      },
    ],
  },
  {
    _id: ObjectId("65c9f7f924946694a5098b3a"),
    name: "Manu Lorenz",
    age: 30,
    status: { description: "on time", lastUpdted: "1 hour ago" },
    flightdata: ObjectId("65c9d79124946694a5098b34"),
    flight: [
      {
        _id: ObjectId("65c9d79124946694a5098b34"),
        departureAirport: "MUC",
        arrivalAirport: "SFO",
        aircraft: "Airbus A380",
        distance: 12000,
        intercontinental: true,
      },
    ],
  },
  {
    _id: ObjectId("65c9f7f924946694a5098b3b"),
    name: "Chris Hayton",
    age: 35,
    status: { description: "on time", lastUpdted: "1 hour ago" },
    flightdata: ObjectId("65c9d79124946694a5098b34"),
    flight: [
      {
        _id: ObjectId("65c9d79124946694a5098b34"),
        departureAirport: "MUC",
        arrivalAirport: "SFO",
        aircraft: "Airbus A380",
        distance: 12000,
        intercontinental: true,
      },
    ],
  },
  {
    _id: ObjectId("65c9f7f924946694a5098b3c"),
    name: "Sandeep Kumar",
    age: 28,
    status: { description: "on time", lastUpdted: "1 hour ago" },
    flightdata: ObjectId("65c9d79124946694a5098b34"),
    flight: [
      {
        _id: ObjectId("65c9d79124946694a5098b34"),
        departureAirport: "MUC",
        arrivalAirport: "SFO",
        aircraft: "Airbus A380",
        distance: 12000,
        intercontinental: true,
      },
    ],
  },
  {
    _id: ObjectId("65c9f7f924946694a5098b3d"),
    name: "Maria Jones",
    age: 30,
    status: { description: "on time", lastUpdted: "1 hour ago" },
    flightdata: ObjectId("65c9d79124946694a5098b34"),
    flight: [
      {
        _id: ObjectId("65c9d79124946694a5098b34"),
        departureAirport: "MUC",
        arrivalAirport: "SFO",
        aircraft: "Airbus A380",
        distance: 12000,
        intercontinental: true,
      },
    ],
  },
  {
    _id: ObjectId("65c9f7f924946694a5098b3e"),
    name: "Alexandra Maier",
    age: 27,
    status: { description: "on time", lastUpdted: "1 hour ago" },
    flightdata: ObjectId("65c9d79124946694a5098b34"),
    flight: [
      {
        _id: ObjectId("65c9d79124946694a5098b34"),
        departureAirport: "MUC",
        arrivalAirport: "SFO",
        aircraft: "Airbus A380",
        distance: 12000,
        intercontinental: true,
      },
    ],
  })
];
