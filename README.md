# Dynamic Form React Component

This project implements a dynamic form in React where users can submit, view, and edit form entries. The form supports various input types such as text, dropdowns, checkboxes, radio buttons, and date pickers.

## Features

- **Dynamic Form Generation:** Generate forms dynamically based on a predefined schema.
- **Form Submission:** Submit new forms to the backend and retrieve submitted forms from the backend.
- **Edit Form Entries:** Edit previously submitted forms.
- **Delete Form Entries:** Delete previously submitted forms.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/dynamic-form.git
   cd dynamic-form
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

## Usage

The main component is `DynamicForm`, which renders a form based on a predefined schema and handles form submissions, deletions, and rendering of submitted forms.

### File Structure

```
src/
  ├── components/
  │   └── DynamicForm.js
  │   └── DynamicForm.stories.js
  ├── App.js
  ├── index.js
  └── App.css
 └── Index.css
```

### Component Breakdown

- **DynamicForm.js:** The main component that handles form rendering, submission, and deletion.

### DynamicForm Component

```jsx
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DynamicForm = () => {
  const [submitForm, setSubmitForm] = useState([]);
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [titleValue, setTitleValue] = useState("");
  const [dropDownvalue, setDropDownValue] = useState("");
  const [enterTextHereValue, setEnterTextHereValue] = useState("");
  const [radioListValue, setRadioListValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [checkBoxValue, setCheckBoxValue] = useState({
    japan: false,
    germany: false,
    india: false,
  });

  const formData = [
    // Define the form schema here
  ];

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`http://localhost:5000/api/form/`);
      const res = await result.json();
      if (res.error) {
        console.log(res.error);
      }
      setSubmitForm(res);
    }
    fetchData();
  }, [count]);

  const handleFormSubmission = async () => {
    // Handle form submission
  };

  const handleTextChange = (e) => setTitleValue(e.target.value);
  const handleEnterTextChange = (e) => setEnterTextHereValue(e.target.value);
  const handleLocationChange = (e) => setLocationValue(e.target.value);
  const handleDropDownChange = (e) => setDropDownValue(e.target.value);
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setCheckBoxValue((prevState) => ({
      ...prevState,
      [value]: checked,
    }));
  };
  const handleRadioListChange = (e) => setRadioListValue(e.target.value);
  const handleDateChange = (e) => setDateValue(e.target.value);

  const renderField = (field) => {
    // Render form fields
  };

  const renderForm = (field) => {
    // Render submitted form fields
  };

  const handleDeleteForm = async (id) => {
    await fetch(`http://localhost:5000/api/form/${id}`, {
      method: "DELETE",
    });
    setSubmitForm(submitForm.filter((form) => form.id !== id));
    setCount(count + 1);
  };

  return (
    <div className="dynamic_form">
      <form className="form">
        {formData.map((field) => renderField(field))}
      </form>
      <button className="button" onClick={handleFormSubmission}>
        Add More
      </button>
      <h1>
        <u>Form</u> <u>Submissions</u>
      </h1>
      <div className="forms">
        {submitForm.map((Obj) => (
          <div className="submitted_form">
            {Obj.informationForm.map((field) => renderForm(field))}
            <FontAwesomeIcon
              icon={faTrash}
              style={{
                color: "red",
                position: "absolute",
                bottom: "3%",
                right: "3%",
              }}
              onClick={() => handleDeleteForm(Obj._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicForm;
```

## Backend Integration

Ensure you have a backend server running on `http://localhost:5000` with the appropriate endpoints for form submission and retrieval.

## Styles

Custom CSS styles are used to style the form elements. Update the styles in `DynamicForm.css` as needed.
