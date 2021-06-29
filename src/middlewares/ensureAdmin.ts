import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // const admin = true;

  const { user_id } = request;

  const userRepository = getCustomRepository(UserRepositories);

  const user = await userRepository.findOne(user_id);

  if (user && user.admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized. Only admin user can create tags.",
  });
}

export default ensureAdmin;
