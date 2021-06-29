import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UserRepositories } from "../repositories/UserRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepositories);

    const user = await userRepository.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/password is incorrect!");
    }

    const passwordOK = await compare(password, user.password);

    if (!passwordOK) {
      throw new Error("Email/password is incorrect!");
    }

    const token = sign(
      {
        email: user.email,
      },
      "chavesecreta",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
