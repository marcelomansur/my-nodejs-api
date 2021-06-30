import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class UpdateUserService {
  async execute({ id, name, email, admin = false, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepositories);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      id,
      name,
      email,
      password: passwordHash,
      admin,
    });

    await userRepository.save(user);

    return user;
  }
}

export { UpdateUserService };
