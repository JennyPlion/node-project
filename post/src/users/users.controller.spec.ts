import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let userController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, UsersRepository],
    }).compile();

    userController = app.get<UsersController>(UsersController);
    usersService = app.get<UsersService>(UsersService);
  });

  describe('getUsers', () => {
    it('should return an array of users', async () => {
      const result = [
        {
          userId: 'ea6f7192-a190-488b-8a5e-f6dac93b7592',
          email: 'phuongtracy27@gmail.com',
          age: 24,
          favoriteFoods: ['pizza'],
        },
        {
          userId: '27f09a3a-3dae-4b48-ba06-97df1b003ef5',
          email: 'phuongplion@gmail.com',
          age: 23,
          favoriteFoods: [],
        },
      ];
      jest
        .spyOn(usersService, 'getUsers')
        .mockImplementation(
          () => new Promise((resolve, reject) => resolve(result)),
        );
      expect(await userController.getUsers()).toBe(result);
    });
  });
});
