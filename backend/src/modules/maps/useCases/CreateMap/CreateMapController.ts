import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { CreateMapUseCase } from './CreateMapUseCase';

class CreateMapController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const createMapUseCase = container.resolve(CreateMapUseCase);

    await createMapUseCase.execute({
      description,
      title,
    });

    return response.sendStatus(200);
  }
}

export { CreateMapController };
