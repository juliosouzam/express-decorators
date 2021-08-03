import { Request, Response } from 'express';
import { controller } from './decorators/controller';
import { get } from './decorators/routes';

@controller()
class LoginController {
  @get('/login')
  public getLogin(request: Request, response: Response) {
    return response.send(`
      <form method="post">
        <div>
          <label for="">Email</label>
          <input name="email">
        </div>
        <div>
          <label for="">Password</label>
          <input name="password">
        </div>
        <button type="submit">Submit</button>
      </form>
    `);
  }
}
