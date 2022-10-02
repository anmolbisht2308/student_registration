
const Student = require("../models/student");


const getAllStudents = async (req, res, next) => {
let students;
try {
    students=await Student.find()
} catch (error) {
    console.log(err);
}
if(!students){
    return res.status(404).json({
        Message:"No Student Found"
})
}
return res.status(200).json({students})
}



const getById = async (req, res, next) => {
    const id = req.params.id;
    let student;
    try {
      book = await Student.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!student) {
      return res.status(404).json({ message: "No Student found" });
    }
    return res.status(200).json({ student });
  };






const addStudent = async (req, res, next) => {
  const { name,class,section,fees_paid,rollnumber,attendance_percent } = req.body;
  let student;
  try {
    student = new Student({
      name,class,section,fees_paid,rollnumber,attendance_percent
    });
    await student.save();
  } catch (err) {
    console.log(err);
  }

  if (!student) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ student });
};


  const updateStudent = async (req, res, next) => {
    const id = req.params.id;
    const { name,class,Section,fees_paid,rollnumber,attendance_percent} = req.body;
    let student;
    try {
      student = await Student.findByIdAndUpdate(id, {
        name,
        class,Section,fees_paid,rollnumber,attendance_percent
      });
      student = await student.save();
    } catch (err) {
      console.log(err);
    }
    if (!student) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ student });
  };


  const deleteStudent = async (req, res, next) => {
    const id = req.params.id;
    let student;
    try {
      book = await Book.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!student) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
   









exports.getAllStudents = getAllStudents;
exports.getById = getById;
exports.addStudent = addStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;