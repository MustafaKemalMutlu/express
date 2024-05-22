const service = require("../service/index");
const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");

exports.createProduct = async (req, res) => {
  try {
    const product = await service.productService.createProduct(req);
    res
      .json({
        ...baseResponse,
        message: "ürün oluşturuldu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "ürün oluşturulamadı",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const product = await service.productService.getAllProduct(req);
    res
      .json({
        ...baseResponse,
        message: "ürün listelendi",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "ürünler listelenemedi",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductByName = async (req, res) => {
  try {
    const product = await service.productService.getProductByName(req);
    res
      .json({
        ...baseResponse,
        message: "ürün listelendi",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "ürünler listelenemedi ",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await service.productService.getProductById(req);
    res
      .json({
        ...baseResponse,
        message: "ürün listelendi",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "ürünler listelenemedi ",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductByCategory = async (req, res) => {
  try {
    const product = await service.productService.getProductByCategory(req);
    res
      .json({
        ...baseResponse,
        message: "ürün listelendi",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "ürünler listelenemedi ",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductByStock = async (req, res) => {
  try {
    const product = await service.productService.getProductByStock(req);
    res
      .json({
        ...baseResponse,
        message: "ürün listelendi ",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "ürünler listelenemedi ",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductByPrice = async (req, res) => {
  try {
    const product = await service.productService.getProductByPrice(req);
    res
      .json({
        ...baseResponse,
        message: "ürün listelendi ",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "ürünler listelenemedi ",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const product = await service.productService.updateProduct(req);
    res
      .json({
        ...baseResponse,
        message: "ürün güncellendi ",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "ürünler güncellenemedi ",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
