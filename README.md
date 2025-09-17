# cart-service
**cart-service** manages user shopping carts.  ## Endpoints - `GET /health` — service status - `POST /cart/add` — add product to cart (sample) - `POST /cart/remove` — remove product from cart (sample) - `GET /cart/:userId` — get user's cart (sample)  ## Tracing This service reports telemetry to the tracing-service using the URL in the `endpoints` 
