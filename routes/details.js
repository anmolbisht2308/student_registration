const express = require("express");
const router = express.Router();

// const Book = require("../model/Book");
const studentsController = require("../controllers/student_controller");

router.get('/',studentsController.getAllStudents)
router.get("/:id", studentsController.getById);
router.post('/',studentsController.addStudent)
router.put("/:id", studentsController.updateStudent);
router.delete("/:id", studentsController.student);







module.exports=router