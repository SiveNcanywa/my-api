const express = require("express");
const app = express.Router();

let projects = [
  {
    title: "Javascript Calculator",
    id: 1,
    image:
      "https://i.postimg.cc/cLhVjCkW/Screenshot-from-2022-02-02-10-33-52.png",
    repo: "https://github.com/SiveNcanywa/calculator.git",
    netlify: "https://sleepy-borg-bcf171.netlify.app",
  },
  {
    title: "Pokemon Fetch Api",
    id: 2,
    image:
      "https://i.postimg.cc/HkQ3VN1k/Screenshot-from-2022-02-02-10-13-38.png",
    repo: "https://github.com/SiveNcanywa/fetch-data.git",
    netlify: "https://jolly-dijkstra-6c67a8.netlify.app",
  },
  {
    title: "Fake Store Fetch Api",
    id: 3,
    image:
      "https://i.postimg.cc/fRFXWT1n/Screenshot-from-2022-02-02-10-03-33.png",
    repo: "https://codepen.io/sivencanywa/pen/ExwLdJB",
    netlify: "",
  },
  {
    title: "E-commerce Website",
    id: 4,
    image:
      "https://i.postimg.cc/DwZyz9Xq/Screenshot-from-2022-02-02-10-10-38.png",
    repo: "https://github.com/SiveNcanywa/monday.git",
    netlify: "https://flamboyant-ptolemy-27a6f5.netlify.app",
  },
  {
    title: "Kanye West Quotes",
    id: 5,
    image:
      "https://i.postimg.cc/j29jyvN8/Screenshot-from-2022-02-02-10-36-01.png",
    repo: "https://codepen.io/sivencanywa/pen/VwMxGPB?editors=0110",
    netlify: "",
  },
  {
    title: "Online Store POS",
    id: 6,
    image:
      "https://i.postimg.cc/GpHBZwp7/Screenshot-from-2022-02-02-09-56-45.png",
    repo: "https://github.com/SiveNcanywa/POS-Project.git",
    netlify: "https://sivepos.netlify.app",
  },
];
app.get("/", (req, res) => {
  res.send(projects);
});
app.get("/:id", (req, res) => {
  const project = projects.find((project) => project.id == req.params.id);
  if (!project) res.status(404).send({ msg: "Project not found" });
  res.send(project);
});
// get one project
app.get('/:id',(req,res)=>{
  const project = projects.find((project)=>project.id ==req.params.id);
  if (!project) res.status(404).send({msg:'Project not found'});
  res.send(project);
})
// create a project
app.post("/", (req, res) => {
  let {title,id,image,repo,netlify}=req.body;
  if (!title||!id||!image||!repo||!netlify)
  res.status(400).send({msg:"Not all information sent"});
  let newProject={
    id:projects.length+1,
    title,
    image,
    repo,
    netlify,
  };

  projects.push(newProject);
  res.send(newProject);

});
// update
app.put("/:id", (req, res) => {
  let project =  projects.find((project)=>project.id==req.params.id);
   if (!project) res.status(404).send({msg:'projects not found'});
  let (title,id,image,repo,netlify)=req.body;
  if (title) project.title= title;
  if (id) project.id=id;
  if (image) project.image=image;
  if (repo) project.repo=repo;
  if (netlify) project.netlify=netlify;
});
// delete a project (remove from array)
app.delete("/:id", (req, res) => {
  projects=projects.filter((project)=>project.id != req.params.id);
  fixArrayId(projects);
  res.send({msg:"Item Removed"});
});

module.exports = app;
