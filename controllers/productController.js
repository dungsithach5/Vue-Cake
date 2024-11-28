import product from '../models/products.js';
const productController = {

    getProductById: async (req, res) => {
        try {
            const users = await product.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).send('Error fetching users');
        }
    },


    createProduct: async (req, res) => {
        const body = req.body;
        try {
            const newCategory = await product.create(body);
            res.status(201).json(newCategory);
        } catch (error) {
            res.status(500).send('Error creating products');
        }
    },


    updateProduct: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedUser = await product.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).send('Error updating user');
        }
    },


    deleteProduct: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedUser = await product.findByIdAndDelete(id);
            res.status(200).json(deletedUser);
        } catch (error) {
            res.status(500).send('Error deleting user');
        }
    }
};

export default productController;
