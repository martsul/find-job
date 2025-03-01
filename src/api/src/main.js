const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();

const client = new MongoClient(
  "mongodb+srv://martsul:martsul@find-job.jkl8a.mongodb.net/?retryWrites=true&w=majority&appName=find-job"
);

app.get("/api/employments/:id", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  const employmentId = req.params.id;
  const employersDetails = client.db().collection("employersDetails");
  const currentEmployer = await employersDetails.findOne({
    _id: new ObjectId(employmentId),
  });

  res.send(currentEmployer);
});

app.get("/api/employments", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  const employments = client.db().collection("employment");
  const allEmployments = await employments.find().toArray();

  res.send(allEmployments);
});

const start = async () => {
  try {
    await client.connect();
    console.log("Mongo work");
    app.listen(3001, () => {
      console.log("Server is running");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
