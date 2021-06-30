import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

import { classToPlain } from "class-transformer";

class DeleteUserService {
  async execute(user_id: string) {
    const userRepository = getCustomRepository(UserRepositories);

    if (!user_id) {
      throw new Error("Invalid user!");
    }

    const user = await userRepository.findOne(user_id);
    if (!user) {
      throw new Error("User not found!");
    }

    const deletedUser = await userRepository.remove(user);

    return classToPlain(deletedUser);
  }
}

export { DeleteUserService };
