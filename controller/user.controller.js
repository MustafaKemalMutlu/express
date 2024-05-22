const { StatusCodes } = require("http-status-codes");
const service = require("../service/index.js");
const User = require("../model/user.model");
const baseResponse = require("../dto/baseResponse.dto");
const utils = require("../utils");
exports.register = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidaiton(req);
    if (isInvalid) {
      res.status(StatusCodes.BAD_REQUEST).json(...baseResponse, ...isInvalid);
    }
    const user = await service.userService.register(req);
    res
      .json({
        ...baseResponse,
        message: "kullanıcı oluşturuldu",
        data: user,
        timestamp: new Date(),
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "kayıt oluşturulamadı",
        success: false,
        error: true,
        errorMessage: error.message,
        timestamp: new Date(),
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await service.userService.login(req);
    res
      .json({
        ...baseResponse,
        message: "giriş yapıldı",
        data: user,
        timestamp: new Date(),
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "giriş yapılamadı",
        success: false,
        error: true,
        errorMessage: error.message,
        timestamp: new Date(),
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const user = await service.userService.resetPassword(req);
    res
      .json({
        ...baseResponse,
        message: "şifre değiştirildi",
        data: updateUser,
        timestamp: new Date(),
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "giriş yapılamadı",
        success: false,
        error: true,
        errorMessage: error.message,
        timestamp: new Date(),
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await service.userService.getAllUsers(req);
    res
      .json({
        ...baseResponse,
        message: "kullanıcılar bulundu",
        data: users,
        timestamp: new Date(),
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "kullanıcılar bulunamadı",
        success: false,
        error: true,
        errorMessage: error.message,
        timestamp: new Date(),
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await service.userService.getUserById(req);
    res
      .json({
        ...baseResponse,
        message: "ID'ye kullancıcı getirildi",
        data: user,
        timestamp: new Date(),
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "kullanıcı bulunamadı",
        success: false,
        error: true,
        errorMessage: error.message,
        timestamp: new Date(),
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
exports.getUserByName = async (req, res) => {
  try {
    const user = await service.userService.getUserByName(req);
    res
      .json({
        ...baseResponse,
        message: "İsme göre kullanıcı listelendi",
        data: user,
        timestamp: new Date(),
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "kullanıcı bulunamadı",
        success: false,
        error: true,
        errorMessage: error.message,
        timestamp: new Date(),
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getUserBySalary = async (req, res) => {
  try {
    const user = await service.userService.getUserBySalary(req);
    res
      .json({
        ...baseResponse,
        message: "maaşa göre kullanıcılar listelendi",
        data: user,
        timestamp: new Date(),
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "kullanıcılar bulunamadı",
        success: false,
        error: true,
        errorMessage: error.message,
        timestamp: new Date(),
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await service.userService.updateUser(req);
    res
      .json({
        ...baseResponse,
        message: "kullanıcı güncellendi",
        data: updatedUser,
        timestamp: new Date(),
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "kullanıcı güncellenemedi",
        success: false,
        error: true,
        errorMessage: error.message,
        timestamp: new Date(),
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
