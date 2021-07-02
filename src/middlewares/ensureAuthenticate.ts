import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json("Token is not defined!");
  }

  const [, token] = authHeader.split(" ");
  const secret = process.env.PORT || "dummysecret";

  try {
    const { sub } = verify(token, secret) as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}

export default ensureAuthenticated;
