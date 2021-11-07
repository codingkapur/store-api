const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    featured: true,
  }).sort('-name');
  res.status(200).json({ products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  //Destructure the query with all the attirbutes in the schema
  const { featured, company, name, sort, select} = req.query;
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
  let result = Product.find(queryObject);
  //SORT
  if(sort){
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  }
  else {
    result = result.sort('createdAt');
  }
  //SELECT SPECIFIC FIELDS
  if(select){
    const selectedList = select.split(',').join(' ');
    result = result.select(selectedList)
  }
  const limit = Number(req.query.limit) || 1;
  const page = Number(req.query.page) || 10;
  const skip = (page -1) * limit;

  result = result.skip(skip).limit(limit);
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
  //Note: If an attribute passed in the query does not exist, mongoose will disregard it and return values according to the values that have been passed in.
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
