const { text } = require("express");
const express = require("express");
const app = express.Router();

let testimonials = [
  {
    name: "Bongani Nomangola",
    id: 1,
    image:
      "https://i.postimg.cc/8PQT7WqX/Bongani3.jpg",
    text: "Sive is a dedicated and hard-working individual who always gives her best in everything she does.",
    relationship: "Collegue",
  },
  {
    name: "Craig Braaf",
    id: 2,
    image:
      "https://i.postimg.cc/Tw6KjSsF/Craig.jpg",
    text: "Sive is a very bright,funny and hardworking individual.She also knows how to adapt to different groups of people leaving smiles on their faces.",
    relationship: "Collegue",
  },
  {
    name: "Haniah Jordan",
    id: 3,
    image:
      "https://i.postimg.cc/vBhZrmfx/Haniah.jpg",
    text: "Sive extremely dedicated to her work and always makes sure to put best her work forward, especially with her determined  mindset.",
    relationship: "Collegue",
  },
  {
    name: "Alex Sexwale",
    id: 4,
    image:
      "https://i.postimg.cc/CLFjpZmX/alex.jpg",
    text: "Sive is hard working and an inspiration to her colleagues.She is able work under under pressure and is able to cooperate well.",
    relationship: "Lecturer",
  },
  {
    name: "Enosh Elliot",
    id: 5,
    image:
      "https://i.postimg.cc/j5k89HrH/Enosh.jpg",
    text: "Sive is loving and able to use a working evironment as a learning place where she develops her skills day by day.",
    relationship: "Collegue",
  },
  {
    name: "Zharne Desember",
    id: 6,
    image:
      "https://i.postimg.cc/4xpZvdT4/Zharne.jpg",
    text: "Sive is dedicated to producing quality work and she is great to work with.She is a great listener and a good public speaker.",
    relationship: "Collegue",
  },
];
app.get("/", (req, res) => {
  res.send(testimonials);
});
app.get("/:id", (req, res) => {
  const testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
  if (!testimonial) res.status(404).send({ msg: "Testimonial not found" });
  res.send(testimonial);
});
// get one project
app.get('/:id',(req,res)=>{
  const testimonial = testimonials.find((testimonial)=>testimonial.id ==req.params.id);
  if (!testimonial) res.status(404).send({msg:'Testimonial not found'});
  res.send(testimonial);
})
// create a project
app.post("/", (req, res) => {
  let {name,id,image,text,relationship}=req.body;
  if (!name||!id||!image||!relationship||!text)
  res.status(400).send({msg:"Not all information sent"});
  let newTestimonial={
    id:testimonials.length+1,
    name,
    image,
    relationship,
    text,
  };

  testimonials.push(newTestimonial);
  res.send(newTestimonial);

});
// update
app.put("/:id", (req, res) => {
  let testimonial =  projects.find((project)=>project.id==req.params.id);
   if (!testimonial) res.status(404).send({msg:'projects not found'});
  let (name,id,image,relationship,text)=req.body;
  if (name) testimonial.name= name;
  if (id) testimonial.id=id;
  if (image) testimonial.image=image;
  if (relationship) testimonial.relationship=relationship;
  if (text) testimonial.text=text
});
// delete a project (remove from array)
app.delete("/:id", (req, res) => {
  testimonials=testimonials.filter((testimonial)=>testimonial.id != req.params.id);
  fixArrayId(testimonials);
  res.send({msg:"Item Removed"});
});

module.exports = app;
