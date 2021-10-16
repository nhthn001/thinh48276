const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const lopRoute = require('./lop.route');
const sinhvienRoute = require('./sinhvien.route');
const apparelRoute = require('./apparel.route');
const productRoute = require('./product.route');
const productcategoriesRoute = require('./productcategories.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/lops',
    route: lopRoute,
  },
  {
    path: '/sinhviens',
    route: sinhvienRoute,
  },
  {
    path: '/apparels',
    route: apparelRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/productscategoriess',
    route: productcategoriesRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
