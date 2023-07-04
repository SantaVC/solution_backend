import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
    imports: [SequelizeModule.forFeature([User])],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}
