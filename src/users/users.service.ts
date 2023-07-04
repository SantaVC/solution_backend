import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import { CreateUserDto } from '../dto/post-control.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    create(createUserDto: CreateUserDto) {
        return this.userModel.create({ ...createUserDto });
    }

    findAll() {
        return this.userModel.findAll();
    }

    remove(id: string) {
        return this.userModel.destroy({ where: { id } });
    }
}
