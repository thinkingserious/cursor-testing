# API Documentation

## API Usage Examples with cURL

Here are some examples of how to interact with the API using cURL:

### Users

1. Fetch all users:
   ```
   curl http://localhost:3001/api/users
   ```

2. Fetch a specific user (replace 1 with the actual user ID):
   ```
   curl http://localhost:3001/api/users/1
   ```

3. Create a new user:
   ```
   curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com"}' http://localhost:3001/api/users
   ```

4. Update a user (replace 1 with the actual user ID):
   ```
   curl -X PUT -H "Content-Type: application/json" -d '{"name":"Jane Doe"}' http://localhost:3001/api/users/1
   ```

5. Delete a user (replace 1 with the actual user ID):
   ```
   curl -X DELETE http://localhost:3001/api/users/1
   ```

### Products

1. Fetch all products:
   ```
   curl http://localhost:3001/api/products
   ```

2. Fetch a specific product (replace 1 with the actual product ID):
   ```
   curl http://localhost:3001/api/products/1
   ```

3. Create a new product:
   ```
   curl -X POST -H "Content-Type: application/json" -d '{"name":"Widget","price":9.99}' http://localhost:3001/api/products
   ```

4. Update a product (replace 1 with the actual product ID):
   ```
   curl -X PUT -H "Content-Type: application/json" -d '{"price":19.99}' http://localhost:3001/api/products/1
   ```

5. Delete a product (replace 1 with the actual product ID):
   ```
   curl -X DELETE http://localhost:3001/api/products/1
   ```

### Orders

1. Fetch all orders:
   ```
   curl http://localhost:3001/api/orders
   ```

2. Fetch a specific order (replace 1 with the actual order ID):
   ```
   curl http://localhost:3001/api/orders/1
   ```

3. Create a new order:
   ```
   curl -X POST -H "Content-Type: application/json" -d '{"userId":1,"products":[{"id":1,"quantity":2}]}' http://localhost:3001/api/orders
   ```

4. Update an order (replace 1 with the actual order ID):
   ```
   curl -X PUT -H "Content-Type: application/json" -d '{"status":"shipped"}' http://localhost:3001/api/orders/1
   ```

5. Delete an order (replace 1 with the actual order ID):
   ```
   curl -X DELETE http://localhost:3001/api/orders/1
   ```

Note: These examples assume your server is running on localhost at port 3001. Adjust the URL if your server is running on a different host or port.