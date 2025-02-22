var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// Placeholder patient lists
var patients = ["John Doe - Fever", "Jane Smith - Surgery"];
var discharged = ["Mark Wilson - Recovered"];

// Route to add new patient
app.post("/addpatient", function(req, res) {
    var newPatient = req.body.newpatient;
    patients.push(newPatient);
    res.redirect("/");
});

// Route to discharge a patient
app.post("/discharge", function(req, res) {
    var dischargedPatient = req.body.check;
    if (typeof dischargedPatient === "string") {
        discharged.push(dischargedPatient);
        patients.splice(patients.indexOf(dischargedPatient), 1);
    } else if (typeof dischargedPatient === "object") {
        for (var i = 0; i < dischargedPatient.length; i++) {
            discharged.push(dischargedPatient[i]);
            patients.splice(patients.indexOf(dischargedPatient[i]), 1);
        }
    }
    res.redirect("/");
});

// Route to render patient list
app.get("/", function(req, res) {
    res.render("index", { patients: patients, discharged: discharged });
});

// Server setup
app.listen(8000, "0.0.0.0", function() {
    console.log("Hospital Management System running on http://0.0.0.0:8000");
});
