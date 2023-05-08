# 1- _Project Name_
# YouxelPackagesMonorepo
# use the already **published** packages steps 
  <ol>
  <li>
  add .npmrc file to your project with these content

    registry.npmjs.org/  
    @youxel:registry=https://youxelteam.pkgs.visualstudio.com/_packaging/Youxel/npm/registry/  
    always-auth=true </li>
  <li>
  npm i -g vsts-npm-auth
 </li>
  <li>
vsts-npm-auth -config .npmrc
  </li>
<li>
npm install 
</li>
  </ol>
#### - Please Remmeber to remove node_modules & package.lock before start these steps  

#### - if an error of compatability faced you on the fourth step add --legacy-peer-deps after npm i 

## if you want to publish the packages locally before using it --  
# 2 -Publish libraries - using verdaccio and pm2  
Step 1: Install Verdaccio​ </br>  
# npm install -g verdaccio​ </br>  
Step 2: Install pm2, will require to start Verdaccio service​ </br>
# npm install pm2 –g​ </br>
Step 3: Run Verdaccio in background using pm2​</br>
>> pm2 start /verdaccio bin file path​</br>
In my case on windows machine: ​</br>
pm2 start C:/Users/Zeinab/AppData/Roaming/npm/node_modules/verdaccio/bin/verdaccio </br>
Step 4: Set the verdaccio registry as a source. By default original NPM registry set.​ </br>
# npm set registry <http://localhost:4873/>​  </br>
Step 5: Registering a user in verdaccio registry​  </br>
# npm adduser --registry <http://localhost:4873>​  </br>
It will ask for username, password and valid email id to be entered.  </br>
 Make a note of this details that will use to login in verdaccio registry to publish our library.​  </br>

Step 6: Go to angular workspace "my-workspace"​  </br>
Step 7: Login into verdaccio registry. Enter the same username, password and email id set in Step 5.​
>> npm login​

Step 8: Go to /my-workspace/dist/custom-lib​ </br>

       >> cd my-workspace​ </br>
       >> cd dist​ </br>
       >> cd custom-lib​ </br>

Step 9: Finally publish our library  on verdaccio registry​ </br>
# npm publish --registry <http://localhost:4873/>​ </br>

Now browse <http://localhost:4873> and you will see new our library package there.​ </br>

Need more explantion?
Check our presentation

<https://onedrive.live.com/edit.aspx?resid=CB4E3DDF3F0EED96!279&ithint=file%2cpptx>
# _2- How to use this libraries

# install @youxel/core library

- [step No1] -
- you must pass environemnt from your application
_environment is exported as [IYouxelEnvironment] interface from the core package

_ example of using it :

- u can create your own environment interface but **extends** it from [IYouxelEnvironemnt]   

  export class IEnvironemnt extends IYouxelEnvironment {  
  public production!: boolean;  
  public version!: any;  
  public type!: any;  
  public authType!: string;  
  public returnedURL?: any;  
  public serverReturnedUrl?: any;  
  public rsaLoginDesign!: string;  
}  

to send data like this:
/_if you wanna to use encryption and derecyption from package - their interface also has been exported_/  
import { EDycryptionType, EEncryptionType } from '@youxel/core';  
import { EEnvType } from 'src/environments/enums/EEnvType.enum';  
import { IEnvironemnt } from './models/environment.interface';  

export const environment: IEnvironemnt = {  
  production: false,  
  version: undefined,  
  type: EEnvType.uat,  
  baseUrl: '',  
  rsaPublicKey: `-----BEGIN PUBLIC KEY-----  
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhBCA6xYNxhWdKbKPRxJ6  
  jcpXxp5rqotBQV5U6P5rdwSPKxtAPdYu1cN2uPxQJKp/2UPyBYYk76wA/CrviFMN  
  TGVtWu9x3PWnAq4UTMY0TkuuoFyr47gxAR1OEL7jH2K969iv86i6RC2PeQfty978  
  Ul4bttdsn2OSj0ih19g/92zqtd7G77MuyVToWxCl4pPc0Ms8HWDQ9RNhwsLzte4p  
  Du6x3s6jPe5/s0RhS3KOJAyhCdzzrhAy/4cvSuUi0pWtXhm/xa8oi5B5Gr1InRgI  
  9oOptwC0b+eF7J3calSZm/TDpMEIRTldyFNMnfr86JwqUPmnYAc8TJ225s5RKeXB  
  qQIDAQAB  
  -----END PUBLIC KEY-----`,  
  aesPublicKey: 'E546C8DF278CD5931069B522E695D4F2',  

  // "'windows' => to login with windows auth which used at 'dev environemnt'",  
  // "'rsa' => to login with RSA auth Type which used at 'uat-stage-test-prod environemnts'",  
  // authType-comment": "'windows': dev | rsa: uat-stage-test-prod",  
  authType: 'rsa',  

  //"'rsa' => rsa encryption",  
  //"'aes' => AES encryption",  
  // encryptionType-comment": "aes: '' | rsa: 'Mobily'",  
  encryptionType: EEncryptionType.RSA,  

  //"'noDecryption' => rsa encryption",  
  //"'aes' => AES encryption",  
  // encryptionType-comment": "noDecryption: '' | aes: 'Mobily'",  
  decryptionStringType: EDycryptionType.AES,  

  //"'default' => Current used design",  
  //"'one' => 'future'",  
  // rsaLoginDesign-comment": "default: 'Mobily-current' | one: 'future'",  
  rsaLoginDesign: 'default',  

  returnedURL: 'portalv2/',  

  serverReturnedUrl: 'http://sdew039/',  

  // to use encryptin from the package you need to path the key and substring number used it iv which exported as **IAesConfig** from core package
  aesConfig: {
    key: 'E546C8DF278CD5931069B522E695D4F2',
    ivSubstring: 6
  },
};

- [step No2] -  

- if your token key isn't 'secret' please pass it  

_example for this const userTokenKey = 'token';  
## and use the both of them like so: [YouxelCoreModule.forRoot({ environment, userTokenKey })]  
## To install @youxel/form  

- you didn't need to pass any think  
- u can use it via the selector below  

[<app-youxel-form></app-youxel-form>]  

## To install @youxel/table  

- you need to pass the keys you wanna it to be translated throw the interface with the name [ITranslatedItemsFromEndUser]  
and it's already exported from [@youxel/table]  

- [example for this] -  

  >  tableTranslatedItems: ITranslatedItemsFromEndUser = {  
  >  actionColHeader: 'Actions',  
  >  modelHeaderText: 'Delete Confirmation',  
  >  modelButtonsText: {  
  >    cancel: 'Cancel',  
  >    delete: 'Delete',  
  >  },  
  >  paginationTranslationTxt: {  
  >    showing: 'Showing',  
  >    off: 'Off',  
  >  },  
  >  filterKey: {  
  >    resetAll: 'Reset All',  
  >    results: 'Results',  
  >  },  
  >  modelDeleteActionName: 'Delete',  
  >  confirmationDeleteMsg: 'Delete Confirmation',  
  > };  

# NOTE: The form package is depedns on the core package, and table package is depedns on the both of them
