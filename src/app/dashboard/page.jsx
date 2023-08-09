'use client'
import React, { useState } from "react";
import axios from "axios";
import SkillForm from "@/components/SkillForm";

const ProjectForm = () => {
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", gtzcv0a1);
    axios
      .post(`https://api.cloudinary.com/v1_1/dzxu3irpg/image/upload`, formData)
      .then((res) => setImage(res.data.secure_url))
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const demoUrl = e.target.demoURL.value;
    const githubUrl = e.target.githubUrl.value;
    const tags = e.target.tags.value.split(",");
    const imageUrl = image;
    console.log(name, description, demoUrl, githubUrl, imageUrl);
    const project = {
      name,
      description,
      demoUrl,
      githubUrl,
      tags,
      imageUrl,
    };
    if (name === "" || description === "" || demoUrl === "" || githubUrl === "" || imageUrl === "") {
      alert("Please fill all the fields");
      return;
    }
    axios
      .post("https://portafolio-lilac-six.vercel.app/projects", JSON.stringify(project))
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Proyecto Nuevo:</h3>
      <form className="flex flex-col gap-3 bg-slate-900 text-white" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input className="border bg-neutral-950" type="text" name="name"/>
        <label htmlFor="description">Description</label>
        <input className="border bg-neutral-950" type="text" name="description" />
        <label htmlFor="demoURL">Demo Url</label>
        <input className="border bg-neutral-950" type="text" name="demoURL" />
        <label htmlFor="githubURL">Github Url</label>
        <input className="border bg-neutral-950" type="text" name="githubUrl" />
        <label htmlFor="tags">Tags</label>
        <input className="border bg-neutral-950" type="text" name="tags" />
        <label htmlFor="imageUrl">Image</label>
        <input className="border bg-neutral-950" type="file" name="file" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <SkillForm />
    </div>
  );
};

export default ProjectForm;




