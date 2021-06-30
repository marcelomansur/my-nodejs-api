import { Request, Response } from "express";
import { ListComplimentsSenderService } from "../services/ListComplimentsSenderService";

class ListComplimentsSenderController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listComplimentsSenderService = new ListComplimentsSenderService();

    const compliments = await listComplimentsSenderService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListComplimentsSenderController };
