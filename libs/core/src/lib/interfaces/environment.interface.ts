import { EDycryptionType, EEncryptionType } from '../enums';

export class IYouxelEnvironment {
  public baseUrl?: string;
  public rsaPublicKey?: string;
  public aesPublicKey?: string;
  public decryptionStringType?: EDycryptionType;
  public encryptionType?: EEncryptionType;
  public aesConfig?: IAesConfig;
}

export interface IAesConfig {
  key: string;
  ivSubstring?: number;
}
