import { Discount, Product } from "../../models/index.js";

class DiscountController {
  static async createDiscount(req, res) {
    try {
      const { code, startDate, endDate, discount, idProduct } = req.body;
      const results = await Discount.create({
        code,
        startDate,
        endDate,
        discount,
        idProduct,
      });
      if (!results) throw "The discount is not registered";
      res.status(201).send({
        success: true,
        message: "Discount registered successfully",
        results,
      });
    } catch (err) {
      res.status(400).send({
        succes: false,
        message: err,
      });
    }
  }

  static async getAllDiscounts(req, res) {
    try {
      const results = await Discount.findAll({
        include: {
          model: Product,
          attributes: ["name", "image"],
        },
      });
      if (results[0] === 0) throw "No discount registered";
      res.status(201).send({
        succes: true,
        message: "Discount",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  // static async getDiscountById(req, res) {
  //   // includes
  //   try {
  //     const results = await Discount.findOne({
  //       where: {
  //         id: req.params.id,
  //       },
  //       attributes: ["code", "startDate", "endDate", "discount"],
  //     });
  //     if (!results) throw "No discount found";
  //     res.status(200).send({
  //       success: true,
  //       message: "Discount found",
  //       results,
  //     });
  //   } catch (err) {
  //     res.status(404).send({
  //       success: false,
  //       message: err,
  //     });
  //   }
  // }

  static async updateDiscount(req, res) {
    try {
      const { code, startDate, endDate, discount, idProduct } = req.body;
      const { id } = req.params;
      const results = await Discount.update(
        { code, startDate, endDate, discount, idProduct },
        {
          where: {
            id: id,
          },
        }
      );
      if (results[0] === 0) throw "No discount was updated";
      res.status(201).send({
        success: true,
        message: "Discount update",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
  static async deleteDiscount(req, res) {
    try {
      const { id } = req.params;
      const results = await Discount.destroy({
        where: {
          id: id,
        },
      });
      if (results === 0) throw "No discount was deleted";
      res.status(201).send({
        success: true,
        message: "Discount deleted",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
}

export default DiscountController;
