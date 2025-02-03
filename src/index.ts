import express, { RequestHandler } from "express";
import cors from "cors";
import {
  isPrime,
  isPerfect,
  getProperties,
  getDigitSum,
} from "./utils/operations.ts";
import { getFunFact } from "./utils/external-calls.ts";

interface NumberQuery {
  number?: string;
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const classifyNumber: RequestHandler<{}, {}, {}, NumberQuery> = async (
  req,
  res
) => {
  const { number } = req.query;
  const num = Number(number);

  if (isNaN(num) || !Number.isInteger(num)) {
    res.status(400).json({
      number: number,
      error: true,
      message: "Only integers are allowed.",
    });
    return;
  }

  const is_prime = isPrime(num);
  const is_perfect = isPerfect(num);
  const properties = getProperties(num);
  const digit_sum = getDigitSum(num);
  const fun_fact = await getFunFact(num);

  res.status(200).json({
    number: num,
    is_prime,
    is_perfect,
    properties,
    digit_sum,
    fun_fact,
  });
};

app.get("/api/classify-number", classifyNumber);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
