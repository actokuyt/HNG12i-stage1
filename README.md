# Number Classification API

This API classifies a given number and returns interesting mathematical properties along with a fun fact.

## API Endpoint

- **URL:** `https://tg-hng12i-stage1.onrender.com/api/classify-number?number=371`
- **Method:** `GET`
- **Example Success Response:**
  ```json
  {
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is a narcissistic number."
  }
  ```
- **Example Error Response:** assumming request is `https://tg-hng12i-stage1.onrender.com/api/classify-number?number=alphabet`

  ```
  {
      "number": "alphabet",
      "error": true,
      "message": "Only positive integers are allowed."
  }
  ```

  **Note:** this API does not accept negative numbers, floats or decimals.

## Deployment

The API is deployed on render. You can access it at: https://tg-hng12i-stage1.onrender.com/api/classify-number?number=371

## Technologies Used

- TypeScript

- Express.js

- Axios
