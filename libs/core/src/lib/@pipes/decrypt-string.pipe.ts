import { Pipe, PipeTransform } from '@angular/core';
// import { environmentConfig } from 'src/environments/environment-config'
import { AesEncrDecrService, CoreConfigService } from '../@services';
import { EEncryptionType } from '../enums';
@Pipe({
  name: 'decryptString',
})
export class DecryptStringPipe implements PipeTransform {
  cofigData: any;

  constructor(
    private aesEncrDecrService: AesEncrDecrService,
    private coreConfigService: CoreConfigService
  ) {
    this.cofigData = this.coreConfigService.configuration;
  }

  transform(value: string): string {
    const AesdecryptionType =
      this.cofigData.environment.decryptionStringType === EEncryptionType.AES;

    const AesDecryption = () => {
      let decryptedText = this.aesEncrDecrService.decrypt(value);
      return decryptedText;
    };

    if (value)
      if (AesdecryptionType) return AesDecryption();
      else return value;
    else return null;
  }
}
