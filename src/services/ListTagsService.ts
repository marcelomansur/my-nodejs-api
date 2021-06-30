import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagRepository = getCustomRepository(TagRepositories);

    const tags = await tagRepository.find();

    return classToPlain(tags);
  }
}

export { ListTagsService };
