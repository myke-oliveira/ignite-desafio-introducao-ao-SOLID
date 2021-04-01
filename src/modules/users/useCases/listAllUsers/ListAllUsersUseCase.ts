import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAcessing = this.usersRepository.findById(user_id);

    if (!userAcessing) {
      throw new Error("User not found");
    }

    if (!userAcessing.admin) {
      throw new Error("Not Allowed");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
