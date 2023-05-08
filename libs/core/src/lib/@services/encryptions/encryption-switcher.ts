import { Injectable } from '@angular/core';
import { RSAHelper } from './RSAHelper.service';
import { AesEncrDecrService } from './aes-encr-decr.service';
import { IYouxelEnvironment } from '../../interfaces/environment.interface';
import { CoreConfigService } from '../CoreConfig.service';
import { EEncryptionType } from '../../enums';

@Injectable({
  providedIn: 'root',
})
export class EncryptionSwitcherService {
  environemt: IYouxelEnvironment;

  get encryptionType(): string {
    return this.environemt.encryptionType;
  }

  constructor(
    private rsaEncryptionService: RSAHelper,
    private aesEncryptionService: AesEncrDecrService,
    private coreConfigService: CoreConfigService
  ) {
    this.environemt = this.coreConfigService.configuration.environment;
  }

  encrypt(value: any) {
    const isRsa = this.encryptionType == EEncryptionType.RSA;
    const isAes = this.encryptionType == EEncryptionType.AES;

    if (isRsa) return this.rsaEncryptionService.encryptWithPublicKey(value);
    else if (isAes) return this.aesEncryptionService.encrypt(value);
    else return value;
  }
}
