var express = require("express");
const { body, validationResult } = require("express-validator");

const FormController = require("../Controllers/Form.Controller");
var router = express.Router();


const validateForm = [
  body("Name")
    .trim()
    .notEmpty()
    .withMessage("Name is required ")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),
  body("Name").isString().withMessage("Name must be a string"),

  body("Email").trim().isEmail().notEmpty().withMessage("Email is required"),
  body("Email").isEmail().withMessage("Email must have @ "),

  body("Phno")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .isInt()
    .withMessage("phone number must be numeric")
    .isLength({ min: 10, max: 12 })
    .withMessage("Phone number must be 10-15 digits"),

  body("Gender")
    .notEmpty()
    .withMessage("Gender is required")
    .isIn(["male", "female", "other"])
    .withMessage("invalid gender"),

  body("Department")
    .notEmpty()
    .withMessage("Department is required")
    .isLength({ max: 11 })
    .withMessage("Invalid department "),

  body("JoiningDate")
    .trim()
    .notEmpty()
    .withMessage("JoiningDate is required")
    .isISO8601({ strict: true })
    .withMessage("JoiningDate must be a valid date in YYYY-MM-DD format"),

  body("Status")
    .trim()
    .notEmpty()
    .withMessage("Status is required")
    .isIn(["active", "inactive"])
    .withMessage("Status must be either 'active' or 'inactive'"),

  body("Salary")
    .notEmpty()
    .withMessage("Salary is required")
    .isFloat({ gt: 0 })
    .withMessage("Salary must be a number greater than 0"),
  body("Address").trim().notEmpty().withMessage(),
    body("Emp_Id")
        .trim()
        .notEmpty()
        .withMessage("Emp_id is required")
        .isInt({ gt:0})
        .withMessage("Emp_id must be a positive integer")
    
    
];

const handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post("/", validateForm, handleValidation, FormController.createEmployeeForm);
router.get("/", FormController.getEmployeeForm);
router.get("/:id", FormController.getbyidEmployeeForm);
router.put("/:id", validateForm, handleValidation, FormController.putEmployeeForm);
router.delete("/:id", FormController.deleteEmployeeDetails);

module.exports = router;