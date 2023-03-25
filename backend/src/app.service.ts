import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) { }

  healthCheck(): string {
    return `Khelo bharat - running on port ${this.config.get('checkLoading')}`;
  }
}
