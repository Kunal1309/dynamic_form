import React from "react";
import { useState, useEffect } from "react"; // React Hooks used
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"; // Delete Icon

const DynamicForm = () => {
  const [submitForm, setSubmitForm] = useState([]); // Array to store fetch submitted form Data from Database/Backend
  const [data, setData] = useState(); // Array to store data to Post to Backend/Database
  const [count, setCount] = useState(); // variable to control rendering for submitForm Data
  const [titleValue, setTitleValue] = useState(""); // variable to store input title value
  const [dropDownvalue, setDropDownValue] = useState(""); // Variable to store dropdown value
  const [enterTextHereValue, setEnterTextHereValue] = useState(""); // variable to store input enterTextValue value
  const [radioListValue, setRadioListValue] = useState(""); // variable to store radio value
  const [dateValue, setDateValue] = useState(""); // Variable to store date
  const [locationValue, setLocationValue] = useState("");// variable to store loaction
  const [checkBoxValue, setCheckBoxValue] = useState({
    japan: false,
    germany: false,
    india: false,
  }); // variable to store checkbox value

  const formData = [
    {
      comp: "TextInput",
      isRequired: true,
      valuePath: "main.title",
      props: {
        id: "main.title",
        label: "Title",
        sublabel: "title",
        placeholder: "title",
      },
    },
    {
      comp: "DropdownSingle",
      isRequired: false,
      valuePath: "main.dropdown",
      props: {
        id: "5spum7",
        label: "Dropdown",
        options: [
          {
            reactKey: "l2OnzF",
            value: "india",
            display: "india",
          },
          {
            reactKey: "VVpN7t",
            value: "japan",
            display: "japan",
          },
          {
            reactKey: "FLMPvq",
            value: "germany",
            display: "germany",
          },
        ],
      },
    },
    {
      comp: "TextInput",
      isRequired: true,
      valuePath: "main.enterTextHere",
      props: {
        id: "dutnvz",
        label: "Enter Text Here",
        placeholder: "enter text here",
      },
    },
    {
      comp: "CheckboxList",
      isRequired: false,
      valuePath: "main.checkbox",
      props: {
        id: "rle96m",
        label: "Checkbox",
        options: [
          {
            reactKey: "zUO0or",
            value: "japan",
            display: "Japan",
          },
          {
            reactKey: "yEwXcc",
            value: "germany",
            display: "Germany",
          },
          {
            reactKey: "0qJSKt",
            value: "india",
            display: "India",
          },
        ],
      },
    },
    {
      comp: "RadioList",
      isRequired: true,
      valuePath: "main.radioList",
      props: {
        id: "kh8dvv",
        label: "Radio list",
        sublabel: "Select a radio input",
        options: [
          {
            reactKey: "kCwnIj",
            value: "mango",
            display: "Mango",
          },
          {
            reactKey: "DnqlBr",
            value: "apple",
            display: "Apple",
          },
          {
            reactKey: "H7vPfc",
            value: "oranges",
            display: "Oranges",
          },
        ],
      },
    },
    {
      comp: "DatePicker",
      isRequired: true,
      valuePath: "main.datePicker",
      props: {
        id: "xd0ijp",
        label: "Date Picker",
        sublabel: "Select Date",
      },
    },
    {
      comp: "TextInput",
      isRequired: false,
      valuePath: "main.location",
      props: {
        id: "n9283z",
        label: "Location",
        sublabel: "Enter location",
        placeholder: "Enter location",
      },
    },
  ]; // Initial Form Data to render

  // Fetch submitted form data from database/backend
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

   // Function to create new form
  const handleFormSubmission = async () => {
    const newId = submitForm.length + 1;

    setData({
      main_id: newId,
      informationForm: [
        {
          comp: "TextInput",
          isRequired: true,
          valuePath: "main.title",
          props: {
            id: "main.title",
            label: "Title",
            sublabel: "title",
            placeholder: "title",
            value: titleValue,
          },
        },
        {
          comp: "DropdownSingle",
          isRequired: false,
          valuePath: "main.dropdown",
          props: {
            id: "5spum7",
            label: "Dropdown",
            options: [
              {
                reactKey: "l2OnzF",
                value: "india",
                display: "india",
              },
              {
                reactKey: "VVpN7t",
                value: "japan",
                display: "japan",
              },
              {
                reactKey: "FLMPvq",
                value: "germany",
                display: "germany",
              },
            ],
            value: dropDownvalue,
          },
        },
        {
          comp: "TextInput",
          isRequired: true,
          valuePath: "main.enterTextHere",
          props: {
            id: "dutnvz",
            label: "Enter Text Here",
            placeholder: "enter text here",
            value: enterTextHereValue,
          },
        },
        {
          comp: "CheckboxList",
          isRequired: false,
          valuePath: "main.checkbox",
          props: {
            id: "rle96m",
            label: "Checkbox",
            options: [
              {
                reactKey: "zUO0or",
                value: "japan",
                display: "Japan",
                checked: checkBoxValue.japan,
              },
              {
                reactKey: "yEwXcc",
                value: "germany",
                display: "Germany",
                checked: checkBoxValue.germany,
              },
              {
                reactKey: "0qJSKt",
                value: "india",
                display: "India",
                checked: checkBoxValue.india,
              },
            ],
          },
        },
        {
          comp: "RadioList",
          isRequired: true,
          valuePath: "main.radioList",
          props: {
            id: "kh8dvv",
            label: "Radio list",
            sublabel: "Select a radio input",
            options: [
              {
                reactKey: "kCwnIj",
                value: "mango",
                display: "Mango",
              },
              {
                reactKey: "DnqlBr",
                value: "apple",
                display: "Apple",
              },
              {
                reactKey: "H7vPfc",
                value: "oranges",
                display: "Oranges",
              },
            ],
            value: radioListValue,
          },
        },
        {
          comp: "DatePicker",
          isRequired: true,
          valuePath: "main.datePicker",
          props: {
            id: "xd0ijp",
            label: "Date Picker",
            sublabel: "Select Date",
            value: dateValue,
          },
        },
        {
          comp: "TextInput",
          isRequired: false,
          valuePath: "main.location",
          props: {
            id: "n9283z",
            label: "Location",
            sublabel: "Enter location",
            placeholder: "Enter location",
            value: locationValue,
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Now data has been updated
    };
  
    try {
      // Sending a POST request to add a new form
      const response = await fetch(`http://localhost:5000/api/form/`, requestOptions);
      const responseData = await response.json();
  
      if (response.error) {
        console.log(responseData.error);
      } else {
        alert({responseData});
        setCount(count+1);
      }
    } catch (error) {
      console.error("Error adding form:", error);
    }
  };


  // Function for variable to update value
  const handleTextChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleEnterTextChange = (e) => {
    setEnterTextHereValue(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocationValue(e.target.value);
  };

  const handleDropDownChange = (e) => {
    setDropDownValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setCheckBoxValue((prevState) => ({
      ...prevState,
      [value]: checked,
    }));
  };

  const handleRadioListChange = (e) => {
    setRadioListValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };


  //  Function for rendering Initial Blank Form
  const renderField = (field) => {
    const { comp, props, isRequired, valuePath } = field;

    if (comp === "TextInput" && valuePath === "main.title") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          <input
            type="text"
            id={props.id}
            placeholder={props.placeholder}
            required={isRequired}
            className="inputValue"
            value={titleValue}
            onChange={handleTextChange}
          />
        </div>
      );
    } else if (comp === "TextInput" && valuePath === "main.enterTextHere") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          <input
            type="text"
            id={props.id}
            placeholder={props.placeholder}
            required={isRequired}
            className="inputValue"
            value={enterTextHereValue}
            onChange={handleEnterTextChange}
          />
        </div>
      );
    } else if (comp === "TextInput" && valuePath === "main.location") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          <input
            type="text"
            id={props.id}
            placeholder={props.placeholder}
            required={isRequired}
            className="inputValue"
            value={locationValue}
            onChange={handleLocationChange}
          />
        </div>
      );
    } else if (comp === "DropdownSingle") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          <select
            id={props.id}
            required={isRequired}
            value={dropDownvalue}
            onChange={handleDropDownChange}
          >
            {props.options.map((option) => (
              <option
                key={option.reactKey}
                value={option.value}
                className="option"
              >
                {option.display}
              </option>
            ))}
          </select>
        </div>
      );
    } else if (comp === "CheckboxList") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          {props.options.map((option) => (
            <div key={option.reactKey}>
              <input
                type="checkbox"
                id={option.reactKey}
                value={option.value}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={option.reactKey} className="option">
                {option.display}
              </label>
            </div>
          ))}
        </div>
      );
    } else if (comp === "RadioList") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          {props.options.map((option) => (
            <div key={option.reactKey}>
              <input
                type="radio"
                id={option.reactKey}
                name={props.id}
                value={option.value}
                required={isRequired}
                onChange={handleRadioListChange}
              />
              <label htmlFor={option.reactKey} className="option">
                {option.display}
              </label>
            </div>
          ))}
        </div>
      );
    } else if (comp === "DatePicker") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          <input
            type="date"
            id={props.id}
            required={isRequired}
            className="inputValue"
            value={dateValue}
            onChange={handleDateChange}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  // Function for rendering Submitted Form
  const renderForm = (field) => {
    const { comp, props, isRequired, valuePath } = field;

    if (comp === "TextInput" && valuePath === "main.title") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          <input
            type="text"
            id={props.id}
            placeholder={props.placeholder}
            required={isRequired}
            className="inputValue"
            value={props.value}
          />
        </div>
      );
    } else if (comp === "TextInput" && valuePath === "main.enterTextHere") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          <input
            type="text"
            id={props.id}
            placeholder={props.placeholder}
            required={isRequired}
            className="inputValue"
            value={props.value}
          />
        </div>
      );
    } else if (comp === "TextInput" && valuePath === "main.location") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          <input
            type="text"
            id={props.id}
            placeholder={props.placeholder}
            required={isRequired}
            className="inputValue"
            value={props.value}
          />
        </div>
      );
    } else if (comp === "DropdownSingle") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          <select id={props.id} required={isRequired} value={props.value}>
            {props.options.map((option) => (
              <option
                key={option.reactKey}
                value={option.value}
                className="option"
              >
                {option.display}
              </option>
            ))}
          </select>
        </div>
      );
    } else if (comp === "CheckboxList") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          {props.options.map((option) => (
            <div key={option.reactKey}>
              <input
                type="checkbox"
                id={option.reactKey}
                value={option.value}
                onChange={handleCheckboxChange}
                checked={option.checked}
              />
              <label htmlFor={option.reactKey} className="option">
                {option.display}
              </label>
            </div>
          ))}
        </div>
      );
    } else if (comp === "RadioList") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          {props.options.map((option) => (
            <div key={option.reactKey}>
              <input
                type="radio"
                id={option.reactKey}
                name={props.id}
                value={option.value}
                required={isRequired}
                onChange={handleRadioListChange}
              />
              <label htmlFor={option.reactKey} className="option">
                {option.display}
              </label>
            </div>
          ))}
        </div>
      );
    } else if (comp === "DatePicker") {
      return (
        <div key={props.id}>
          <label className="label">{props.label}</label>
          <input
            type="date"
            id={props.id}
            required={isRequired}
            className="inputValue"
            value={props.value}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  // function to Delete Submitted Form
  const handleDeleteForm = async (id) => {
    await fetch(`http://localhost:5000/api/form/${id}`, {
      method: "DELETE",
    });
    setSubmitForm(submitForm.filter((form) => form.id !== id));
    setCount(count+1);
  };

  // rendering Dynamic Form
  return (
    <div className="dynamic_form">
      <form className="form">
        {formData.map((field) => {
          return renderField(field);
        })}
      </form>

      <button className="button" onClick={handleFormSubmission}>
        Add More
      </button>

      <h1>
        <u>Form</u> <u>Submissions</u>
      </h1>

      <div className="forms">
        {submitForm &&
          submitForm.map((Obj) => {
            return (
              <div className="submitted_form">
                {Obj &&
                  Obj.informationForm.map((field) => {
                    return renderForm(field);
                  })}
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
            );
          })}
      </div>
    </div>
  );
};

export default DynamicForm;
