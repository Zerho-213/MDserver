const getMenuData = require('../helpers/menuData'); // importez votre fonction pour récupérer les données du menu

function menuMiddleware(req, res, next) {
  const pages = glob.sync('pages/**/*.md');
  const nav = pages.map(menu => menu.replace('pages/', '').replace('.md', ''));
  res.locals.nav = nav;
  next();
}

module.exports = menuMiddleware;