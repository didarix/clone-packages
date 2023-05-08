import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { IYouxelEnvironment } from '../../interfaces/environment.interface';
import { CoreConfigService } from '../CoreConfig.service';

@Injectable({
  providedIn: 'root',
})
export class AesEncrDecrService {
  environemt: IYouxelEnvironment;

  CipherOption: any = {};

  get aesKey() {
    return this.environemt.aesConfig.key;
  }

  get encryptedKey() {
    return CryptoJS.enc.Utf8.parse(this.aesKey);
  }

  get iv() {
    return CryptoJS.enc.Utf8.parse(
      this.aesKey.substring(0, this.environemt.aesConfig.ivSubstring || 16)
    );
  }

  constructor(private coreConfigService: CoreConfigService) {
    this.environemt = this.coreConfigService.configuration.environment;
  }

  /**
   * @description `The encrypt method is use for encrypt the value.`
   * @param value {string} to be encrypted
   * @returns encrypted value
   */
  encrypt(value: string) {
    this.CipherOption.iv = this.iv;
    const message = CryptoJS.enc.Utf8.parse(value.toString());
    var encrypted = CryptoJS.AES.encrypt(
      message,
      this.encryptedKey,
      this.CipherOption
    );
    return encrypted.toString();
  }

  /**
   * @description `The decrypt method is use for decrypt the value.`
   * @param value {string} to be decrypted
   * @returns decrypted value
   */
  decrypt(value: any) {
    this.CipherOption.iv = this.iv;
    if (this.aesKey) {
      var decrypted = CryptoJS.AES.decrypt(
        value,
        this.encryptedKey,
        this.CipherOption
      );
      return decrypted.toString(CryptoJS.enc.Utf8);
    } else
      throw new Error('you should provide a key to use decryption feature');
  }
}
