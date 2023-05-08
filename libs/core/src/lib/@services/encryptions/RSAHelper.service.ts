import { Injectable } from '@angular/core';
import * as Forge from 'node-forge';
import { IYouxelEnvironment } from '../../interfaces/environment.interface';
import { CoreConfigService } from '../CoreConfig.service';

@Injectable({
  providedIn: 'root',
})
export class RSAHelper {
  environemt: IYouxelEnvironment;

  get rsaKey(): string {
    return this.environemt.rsaPublicKey;
  }
  constructor(private coreConfigService: CoreConfigService) {
    this.environemt = this.coreConfigService.configuration.environment;
  }

  encryptWithPublicKey(valueToEncrypt: string): string {
    const rsa = Forge.pki.publicKeyFromPem(this.rsaKey);
    return window.btoa(rsa.encrypt(valueToEncrypt.toString()));
  }
}
