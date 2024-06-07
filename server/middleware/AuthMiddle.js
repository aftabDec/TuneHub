// // Middleware to check token and admin status
// const auth = (req, res, next) => {
//   const token = req.header('x-auth-token');
//   if (!token) {
//     return res.status(401).send('No token, authorization denied');
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); 
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).send('Token is not valid');
//   }
// };

// const adminAuth = (req, res, next) => {
//   if (!req.user.isAdmin) {
//     return res.status(403).send('Access denied');
//   }
//   next();
// };
// module.export = auth