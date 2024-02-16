// Projection is used to print only selected field from the collection

// print only name - here id is printed by default
db.passengers.find({}, { name: 1 });
/*
[
  ({
    _id: ObjectId("65c9f7f924946694a5098b39"),
    name: "Max Schwarzmueller",
  },
  { _id: ObjectId("65c9f7f924946694a5098b3a"), name: "Manu Lorenz" },
  { _id: ObjectId("65c9f7f924946694a5098b3b"), name: "Chris Hayton" },
  { _id: ObjectId("65c9f7f924946694a5098b3c"), name: "Sandeep Kumar" },
  { _id: ObjectId("65c9f7f924946694a5098b3d"), name: "Maria Jones" },
  {
    _id: ObjectId("65c9f7f924946694a5098b3e"),
    name: "Alexandra Maier",
  },
  { _id: ObjectId("65c9f7f924946694a5098b3f"), name: "Dr. Phil Evans" },
  { _id: ObjectId("65c9f7f924946694a5098b40"), name: "Sandra Brugge" },
  { _id: ObjectId("65c9f7f924946694a5098b41"), name: "Elisabeth Mayr" },
  { _id: ObjectId("65c9f7f924946694a5098b42"), name: "Frank Cube" },
  { _id: ObjectId("65c9f7f924946694a5098b43"), name: "Karandeep Alun" },
  {
    _id: ObjectId("65c9f7f924946694a5098b44"),
    name: "Michaela Drayer",
  },
  {
    _id: ObjectId("65c9f7f924946694a5098b45"),
    name: "Bernd Hoftstadt",
  },
  { _id: ObjectId("65c9f7f924946694a5098b46"), name: "Scott Tolib" },
  { _id: ObjectId("65c9f7f924946694a5098b47"), name: "Freddy Melver" },
  { _id: ObjectId("65c9f7f924946694a5098b48"), name: "Alexis Bohed" },
  { _id: ObjectId("65c9f7f924946694a5098b49"), name: "Melanie Palace" },
  { _id: ObjectId("65c9f7f924946694a5098b4a"), name: "Armin Glutch" },
  { _id: ObjectId("65c9f7f924946694a5098b4b"), name: "Klaus Arber" },
  {
    _id: ObjectId("65c9f7f924946694a5098b4c"),
    name: "Albert Twostone",
  })
];
*/

// to hide the id
db.passengers.find({}, { name: 1, _id: 0 });
/*
[
  { name: 'Max Schwarzmueller' },
  { name: 'Manu Lorenz' },
  { name: 'Chris Hayton' },
  { name: 'Sandeep Kumar' },
  { name: 'Maria Jones' },
  { name: 'Alexandra Maier' },
  { name: 'Dr. Phil Evans' },
  { name: 'Sandra Brugge' },
  { name: 'Elisabeth Mayr' },
  { name: 'Frank Cube' },
  { name: 'Karandeep Alun' },
  { name: 'Michaela Drayer' },
  { name: 'Bernd Hoftstadt' },
  { name: 'Scott Tolib' },
  { name: 'Freddy Melver' },
  { name: 'Alexis Bohed' },
  { name: 'Melanie Palace' },
  { name: 'Armin Glutch' },
  { name: 'Klaus Arber' },
  { name: 'Albert Twostone' }
]
*/
