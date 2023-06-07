import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {    
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
