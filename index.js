const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

const allCategories = require('./data/Categories.json');
const allCourse = require('./data/allCourse.json');
const allBlog = require('./data/Blogs.json')

app.get('/categories',(req,res)=>{
   res.send(allCategories)
})

app.get("/blogs", (req, res) => {
  res.send(allBlog);
});

app.get("/blogs/:id", (req, res) => {
  id = req.params.id;
  const singleBlog = allBlog.find(blog=>blog.id===id);
  res.send(singleBlog);
});

app.get("/allCourse", (req, res) => {
  res.send(allCourse);
});

app.get("/courses/:id", (req, res) => {
  id = req.params.id;

  if(id === "08"){
   res.send(allCourse);
  }
  else{
   const courseList = allCourse.filter((course) => course.category === id);
   res.send(courseList);
  }
  
});

app.get('/course-details/:id',(req,res)=>{
   id = req.params.id;
   const course = allCourse.find(c=>c.id === id)
   res.send(course)
})

app.get("/", (req, res) => {
  res.send("Server side is running");
});

app.listen(port, () => {
  console.log(`Server side is running on port  ${port}`);
});
