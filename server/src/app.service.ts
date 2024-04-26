import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '{"nome": "Antonio", "idade": 26, "profissao": "Desenvolvedor"}';
  }
}
