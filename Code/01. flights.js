// show dbs

// use flight

db.flightData.insertOne([
  {
    "departureAirport": "ABC",
    "arrivalAirport": "POO",
    "aircraft": "Airbus A310",
    "distance": 190,
    "intercontinental": false
  },


db.flightData.insertMany([
  {
    "departureAirport": "MUC",
    "arrivalAirport": "SFO",
    "aircraft": "Airbus A380",
    "distance": 12000,
    "intercontinental": true
  },
  {
    "departureAirport": "LHR",
    "arrivalAirport": "TXL",
    "aircraft": "Airbus A320",
    "distance": 950,
    "intercontinental": false
  }
])


// prints till the cursor of the document
// means it will only print  a part of the document 
db.flightData.find()

// prints the formated output
db.flightData.find().pretty()

// finds the aircraft with name Airbus A320
db.flightData.find({aircraft : "Airbus A320"})

// returns the firstr entry
db.flightData.findOne()

// returns the first matching entry
db.flightData.findOne({aircraft : "Airbus A320"})

// updating One entry
db.flightData.updateOne({"arrivalAirport": "SFO"}, $set : {"distance": 190})


// replacing current object with the supplied object
db.flightData.update({"arrivalAirport": "SFO"}, {"distance": 190})

// replacing current object with the supplied object
db.flightData.replaceOne({"arrivalAirport": "SFO"}, {
  "departureAirport": "LHR",
  "arrivalAirport": "TXL",
  "aircraft": "Airbus A320",
  "distance": 950,
  "intercontinental": false
})



