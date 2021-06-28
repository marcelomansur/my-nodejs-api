import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";

interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagRepository = getCustomRepository(TagRepositories);

    if (!name) {
      throw new Error("Name incorrect");
    }

    const nameAlreadyExists = await tagRepository.findOne({
      name,
    });

    if (nameAlreadyExists) {
      throw new Error("Tag name already exists");
    }

    const tag = tagRepository.create({
      name,
    });

    await tagRepository.save(tag);

    return tag;
  }
}

export { CreateTagService };
