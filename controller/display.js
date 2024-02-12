import student from "../models/student.js";
import Country from "../models/countries.js";
import { countryList } from "../data/countryData.js"


export const displayCountries = async (req, res) => {
  let countriesVisited;
  let countriesNotVisited;
  let students;
  try {
    
    countriesVisited = await country.find({ visited: true }).sort({
      name: 1,
    });

    students = await student.find();

    countriesNotVisited = await Country.find({ visited: false }).sort({
      name: 1,
    });
    res.render("pages/index.ejs", {
        countriesVisited: countriesVisited,
        countriesNotVisited: countriesNotVisited,
        students: students
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};