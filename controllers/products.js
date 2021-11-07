const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    featured: true,
  });
  res.status(200).json({ products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  //Destructure the query with all the attirbutes in the schema
  const { featured, company, name } = req.query;
  //Create an object that will store all the attributes
  const queryObject = {};
  //If those attributes are passed in the query, they will be true and we will create that property in the queryObject.
  if (featured) {
    queryObject.featured = (featured === "true" ? true : false);
  }
  if(company){
    queryObject.company = company;
  }
  if(name){
    queryObject.name = {$regex: name, $options:  "i"};
  }
  //We will then pass the query object into our find method and the find method will return values accordingly.
  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
  //Note: If an attribute passed in the query does not exist, mongoose will disregard it and return values according to the values that have been passed in.
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
