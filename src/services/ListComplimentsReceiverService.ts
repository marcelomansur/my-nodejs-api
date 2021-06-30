import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";

class ListComplimentsReceiverService {
  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(ComplimentRepositories);

    const compliments = complimentRepository.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["fk_user_sender", "fk_user_receiver", "fk_tag"],
    });

    return compliments;
  }
}

export { ListComplimentsReceiverService };
