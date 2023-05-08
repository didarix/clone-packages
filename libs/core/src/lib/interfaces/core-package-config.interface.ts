import { IYouxelEnvironment } from './environment.interface';

export interface ICorePackageInterface {
  environment: IYouxelEnvironment;
  userTokenKey?: string;
  userLanguageKey?: string;
}
