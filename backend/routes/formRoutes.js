import express from "express";
import MainModel from "../model/formModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Check if all required fields are provided in the request body
    const formData = req.body;

    // Save the new Form to the database
    const form = await MainModel.create(formData);

    return res.status(400).send(form); // Send response with the newly created form
  } catch (error) {
    res.status(500).send(error.message); // Send error response if there's an error
  }
});

router.get("/", async (req, res) => {
  try {
    const forms = await MainModel.find({}); // Fetch all forms from the database
    return res.status(200).json(forms); // Send response with the list of forms
  } catch (error) {
    res.status(500).send(error.message); // Send error response if there's an error
  }
});

router.patch("/:id", async (req, res) => {
  try {
    // Check if all required fields are provided in the request body
    if (
        !req.body.main_id ||
        !req.body.comp ||
        !req.body.isRequired ||
        !req.body.valuePath ||
        !req.body.props.id ||
        !req.body.props.label ||
        !req.body.props.sublabel ||
        !req.body.props.placeholder ||
        !req.body.props.value 
    ) {
      return res.status(400).send({
        message: `${req.body} Send all required field `,
      });
    }

    const { id } = req.params; // Extract form ID from request params

    // Update the book with the provided ID in the database
    const form = await MainModel.findByIdAndUpdate(id, {
        main_id: req.body.main_id,
        comp: req.body.comp,
        isRequired: req.body.isRequired,
        valuePath: req.body.valuePath,
        props: {
          id: req.body.props.id,
          label: req.body.props.label,
          sublabel: req.body.props.sublabel,
          placeholder: req.body.props.placeholder,
          value: req.body.props.value 
        }
    });

    form.save(); // Save the updated form

    return res.status(200).json(form); // Send response with the updated form data
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message); // Send error response if there's an error
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract form ID from request params
    const result = await MainModel.findByIdAndDelete(id); // Find and delete the book by ID in the database
    if (!result) {
      return res.status(404).json({ message: "Form Not Found" });
    }
    return res.status(200).json({ message: "Form Deleted Successfully" }); // Send success message if book is deleted
  } catch (error) {
    return res.status(500).send({ message: error.message }); // Send error response if there's an error
  }
});

export default router;
