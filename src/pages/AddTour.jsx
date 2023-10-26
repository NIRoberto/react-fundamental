import React, { useState } from "react";

const AddTour = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    start_date: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = () => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(input.title, input.description, image);

    const formData = new FormData();

    formData.append("title", input.title);
    formData.append("description", input.description);
    formData.append("image", image);

    console.log(formData.get("image"));
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="title"
            name="title"
            value={input.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddTour;
