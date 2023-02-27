import { Payment } from "../../models/index.js";

class PaymentController {
  static async createPayment(req, res) {
    try {
      const results = await Payment.create(req.body);
      if (!results) throw "The payment is not registered";
      res.status(201).send({
        success: true,
        message: "Payment registered successfully",
        results,
      });
    } catch (err) {
      res.status(400).send({
        succes: false,
        message: err,
      });
    }
  }

  static async getAllPayment(req, res) {
    try {
      const results = await Payment.findAll(req.body);
      if (results[0] === 0) throw "No payment registered";
      res.status(201).send({
        succes: true,
        message: "Payments",
        results,
      });
    } catch (err) {
      res.status(404).send({
        succes: false,
        message: err,
      });
    }
  }

  static async getPaymentById(req, res) {
    try {
      const results = await Payment.findOne({
        where: {
          id: req.params.id,
        },
        attributes: ["paymentMethod", "transactionDate", "transactionStatus"],
      });
      if (!results) throw "No payment found";
      res.status(200).send({
        success: true,
        message: "Payment found",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  static async updatePayment(req, res) {
    try {
      const results = await Payment.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (results[0] === 0) throw "No payment was updated";
      res.status(201).send({
        success: true,
        message: "Payment update",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
  static async deletedPayment(req, res) {
    try {
      const results = await Payment.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (results === 0) throw "No payment was deleted";
      res.status(201).send({
        success: true,
        message: "payment deleted",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
}

export default PaymentController;
