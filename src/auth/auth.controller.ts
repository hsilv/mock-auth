import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully logged in.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
