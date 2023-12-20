import cartSchema from '../models/cartModel.js';

export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity, price, name, category, image, brand, countInStock } = req.body;

    let userCart = await cartSchema.findOne({ user: userId });

    if (!userCart) {
      userCart = await cartSchema.create({ user: userId, cartItems: [] });
    }

    const existingItemIndex = userCart.cartItems.findIndex(item => item.product.toString() === productId);

    if (existingItemIndex !== -1) {
      userCart.cartItems[existingItemIndex].quantity += quantity;
    } else {
      userCart.cartItems.push({ product: productId, quantity, price, name, category, image, brand, countInStock });
    }
    await userCart.save();

    res.status(200).json(userCart);
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.params.userId;

   
    const userCart = await cartSchema.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    res.status(200).json(userCart);
  } catch (error) {
    console.error('Error getting cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;

   
    const userCart = await cartSchema.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

  
    userCart.cartItems = userCart.cartItems.filter(item => item.product.toString() !== productId);

   
    await userCart.save();

    res.status(200).json(userCart);
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
