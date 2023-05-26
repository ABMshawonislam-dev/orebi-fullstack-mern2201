let Product = require("../models/productModel");

async function productControllers(req, res) {
  const {
    title,
    description,
    cost,
    image,
    stock,
    discount,
  } = req.body;

  if (!title) {
    return res.send({ error: "Title is required" });
  }

  if (!description) {
    return res.send({ error: "Description is required" });
  }

  if (!cost) {
    return res.send({ error: "Cost is required" });
  }

  if (!stock) {
    return res.send({ error: "Stock is required" });
  }

  if (!discount) {
    return res.send({ error: "Discount is required" });
  }

  // Additional conditions
  if (title.length > 12) {
    return res.send({ error: "Title should be less than or equal to 12 characters" });
  }

  const descriptionWords = description.split(" ");
  if (descriptionWords.length > 20) {
    return res.send({ error: "Description should be less than or equal to 20 words" });
  }

  // Set default value for status
  const status = "waiting";

  let productData = new Product({
    title,
    description,
    cost,
    image,
    stock,
    discount,
    status,
  });

  await productData.save();
  return res.json({ message: "Product successfully saved" });
}

async function updateStatus(req, res) {
    const { productID, statusType } = req.body;
  
    if (!productID) {
      return res.send({ error: "Product ID is required" });
    }
  
    if (!statusType) {
      return res.send({ error: "Status type is required" });
    }
  
    try {
      const product = await Product.findByIdAndUpdate(
        productID,
        { $set: { status: statusType } },
        { new: true }
      );
  
      if (!product) {
        return res.send({ error: "Product not found" });
      }
  
      return res.json({ message: "Product status updated successfully" });
    } catch (error) {
      return res.send({ error: "An error occurred while updating the product status" });
    }
  }
  

async function getAllProducts(req, res) {
    try {
      const products = await Product.find();
  
      return res.json(products);
    } catch (error) {
      return res.send({ error: "An error occurred while fetching the products" });
    }
  }
  

module.exports = {
    productControllers,
    updateStatus,
    getAllProducts,
  };