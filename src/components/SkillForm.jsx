import React, { useState } from "react";
import axios from "axios";

const SkillForm = () => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET);

    axios
      .post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, formData)
      .then((res) => setImage(res.data.secure_url))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const imageUrl = image;

    console.log(name, imageUrl);

    const skill = {
      name,
      imageUrl,
    };

    if (name === "" || imageUrl === "") {
      alert("Please fill all the fields");
      return;
    }

    axios
      .post(process.env.NEXT_PUBLIC_API_SKILLS_URL, JSON.stringify(skill))
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>New Skill:</h3>
      <form className="flex flex-col gap-3 bg-slate-900 text-white" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input className="border bg-neutral-950" type="text" name="name" />
        <label htmlFor="imageUrl">Image</label>
        <input className="border bg-neutral-950" type="file" name="file" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SkillForm;
