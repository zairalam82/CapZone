const cartService = require("../services/cartServices");

exports.addToCart = async (req, res) => {
    try {
        const user_id = req.user.user_id;
        const { product_id, quantity } = req.body;
        const result = await cartService.addToCart(
            user_id,
            product_id,
            quantity
        );

        res.status(result.statusCode).json({
            message: result.message
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Something went worng"
        })
    }
}


//Controller part for getFromCart

exports.getFromCart = async (req, res) => {
    try {
        const user_id = req.user.user_id;
        const result = await cartService.getFromCart(
            user_id
        );
        res.status(200).json({ message: "Cart data received successfull", 
        cart:result});
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });

    }

}



