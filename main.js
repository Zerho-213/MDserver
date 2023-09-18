
const express = require('express');
const ejs = require('ejs');
const { marked } = require('marked');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3005;

app.set('view engine', 'ejs');

app.use(express.static('public'));


const pages = glob.sync('pages/**/*.md');

pages.forEach((page) => {
  const route = page.replace('pages/', '').replace('.md', '');
  app.get(`/${route}`, (req, res) => {
    const fileContent = fs.readFileSync(page, 'utf-8');
    const htmlContent = marked(fileContent);
    const nav = pages.map(menu => menu.replace('pages/', '').replace('.md', ''))
    let content = { htmlContent, nav }
    console.log(content)
    res.render('page', { content: content });
  });
});

pages.forEach(() => {
  app.get(`/`, (req, res) => {
    const nav = pages.map(menu => menu.replace('pages/', '').replace('.md', ''))
    let content = { nav }
    console.log(content)
    res.render('home', { content: content });
  });
});




app.get(`/tests`, (req, res) => {
  res.render('tests', {});
});

// Handle 404 - Keep this as a last route
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
