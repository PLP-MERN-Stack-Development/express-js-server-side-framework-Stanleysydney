Overview

This project is a JavaScript server built using Node.js and Express. It provides a RESTful API for managing product data. The API allows users to perform CRUD operations such as creating, reading, updating, and deleting products. The server also supports search, filtering, and pagination. Middleware functions are used to handle logging, authentication, validation, and error management to ensure the system runs efficiently and securely.

Instructions on How to Run the Server

To run the server, ensure that Node.js and npm are installed on your system. After setting up the environment, place the .env file in the root directory of the project. This file stores environment variables such as the server port and API key.

The .env file should include entries like the server port (for example, PORT=3000) and an API key (for example, API_KEY). These values are used for server configuration and authentication. The .env file should never be committed to version control, as it may contain sensitive information.

Once the environment variables are set, install the project dependencies using npm and then start the server. When the server runs successfully, it will listen on the specified port, such as http://localhost:3000. The base URL for all API endpoints will be http://localhost:3000/products.

Documentation of API Endpoints
GET /api/products

This endpoint retrieves all available products. It supports optional query parameters for filtering by category, searching by product name, and applying pagination. For example, adding ?category=Smartphone&page=1&limit=2 filters the results and limits the number of items per page.

The response contains the product list along with metadata such as the current page, total number of products, and total pages available.

GET /api/products/:id

This endpoint retrieves details of a single product based on its unique identifier. If the product is found, the API returns detailed information such as name, description, price, category, and stock availability. If the product does not exist, the server responds with a 404 error and a message indicating that the product was not found.

POST /api/products

This endpoint allows the creation of a new product. It requires an API key, which must be sent in the request header for authentication. The request body should include product details such as name, description, price, category, and stock status. If any required field is missing or invalid, the server will return a validation error.

When successful, the API returns the newly created product data, including its assigned ID.

PUT /api/products/:id

This endpoint updates an existing product. Like the POST route, it requires an API key for authentication. The request should specify the product ID and include any fields that need to be updated. The server returns the updated product data if the operation is successful. If the specified ID does not match any product, the server will return an error indicating that the product was not found.

DELETE /api/products/:id

This endpoint deletes a product by its unique ID. Authentication via API key is required. If the product exists, it will be removed, and the server will return a success message or a 204 No Content status. If the product cannot be found, an error message will be returned.

GET /api/products/stats

This endpoint provides summary statistics of the products stored in the system. For example, it may return the number of products in each category. This feature is useful for analytics or inventory management.

Examples of Requests and Responses
Example 1: Retrieving All Products

A request to retrieve products might look like fetching products under a certain category with pagination enabled. For instance, a request for products in the “Smartphone” category with two results per page will return a list of smartphones and related pagination data.

The response will include a status field, the number of results, and an array of product objects containing product details such as ID, name, description, price, and stock status.

Example 2: Creating a New Product

When a user sends a POST request with an API key and a valid product object, the response will include the new product with all its details, confirming that it was successfully added to the database.

If the request is missing required fields or contains invalid data types, the server responds with a validation error message explaining the issue.

Example 3: Updating an Existing Product

When updating a product, a PUT request containing the product ID and updated fields (such as price or availability) will result in a response showing the updated product data. If the product does not exist, the server will respond with a “Product not found” message.

Example 4: Deleting a Product

A DELETE request that includes a valid API key and a product ID will remove the corresponding product. If the operation is successful, the response will indicate that the resource has been deleted. If the ID does not match any existing product, an error message will inform the user.

Example 5: Error Handling

If a user tries to access an invalid endpoint or performs an unauthorized action without an API key, the server will respond with appropriate status codes, such as 401 for unauthorized access or 404 for not found. The response will include a descriptive message that helps identify the cause of the issue.

Additional Notes

All POST, PUT, and DELETE requests require an API key, which must match the value stored in the .env file. This ensures that only authorized users can modify the data.

The API uses middleware to manage requests efficiently. For instance, there is a logger middleware that records every incoming request, an authentication middleware that checks API keys, a validation middleware that ensures product data is correctly structured, and a global error handler that captures and reports errors in a standardized format.