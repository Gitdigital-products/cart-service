export function registerRoutes(app) {
  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "cart-service" });
  });

  // Cart-specific endpoints
  app.post("/cart/add", (req, res) => {
    const { userId, productId, quantity } = req.body;
    res.json({ message: `Added ${quantity} of product ${productId} to user ${userId}'s cart` });
  });

  app.post("/cart/remove", (req, res) => {
    const { userId, productId } = req.body;
    res.json({ message: `Removed product ${productId} from user ${userId}'s cart` });
  });

  app.get("/cart/:userId", (req, res) => {
    const { userId } = req.params;
    res.json({ userId, items: [{ productId: 1, quantity: 2 }, { productId: 2, quantity: 1 }] });
  });
}
