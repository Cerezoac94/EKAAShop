import { Discount } from "../../models/index.js";

class DiscountController {
    static async createDiscount(req,res){
        try {
            res.send("Discount created")
        } catch (err) {
            
        }
    }

    static async getAllDiscounts(req,res){
        try {
            res.send("Discount")
        } catch (err) {
            
        }
    }
}

export default DiscountController;