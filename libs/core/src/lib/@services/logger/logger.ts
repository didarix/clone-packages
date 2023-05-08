// import { environment } from "libs/core/src/environments/environment";
// import { environment } from "libs/core/src/environments";
import { LoggerObject } from "./logger-object";
import { LogLevel } from "./logger.enum";

// ---------------------------------------------------------------------

const logLevel: LogLevel = LogLevel.All;
const logWithDate: boolean = true;


/**
   * this method for check if level valid
   * @param level the level of log ( All - Info - Warning - Error - Debug - Fatal )
   * @returns (Boolean)
  **/
const shouldLog = (level: LogLevel): boolean => {

  if (level < 0 || level > 6)
    return false;

  let returnValue: boolean = false;

  //level >= this.level
  if ((level >= logLevel && level <= LogLevel.Fatal))
    returnValue = true;

  return returnValue;
} // End shouldLog


/**
   *
   * @param Message A message that will be log
   * @param level the level of log ( All - Info - Warning - Error - Debug - Fatal )
   * @param logWithDate (boolean) for set date in log or not
   * @param extraInfo for any other messages in the same log
   * @returns (Boolean) Just False if there is no message , level Or invalid level
   * @returns (Object) of values for logger
  **/
const logEntry = (message: string, level: LogLevel, logWithDate: boolean, extraInfo?: any[]): object | false => {

  const entryDate: Date = new Date();
  let returnVal: LoggerObject = {
    Date: '',
    Type: '',
    Message: '',
    extraInfo: new Array()
  }

  if (!message || !shouldLog(level))
    return false;

  if (logWithDate)
    returnVal.Date = `${entryDate.getFullYear()}-${entryDate.getMonth()}-${entryDate.getDate()}  ${entryDate.getHours()}:${entryDate.getMinutes()}:${entryDate.getSeconds()}`;

  returnVal.Type = LogLevel[level];
  returnVal.Message = message;

  if (extraInfo && extraInfo.length)
    returnVal.extraInfo = extraInfo;

  return returnVal;
} // End buildLogString


/**
  * this method for check if App Run on production enviroment or Development enviroment
  * @returns (Boolean) Depende App is production or not
  **/
const isProductionLogger = (): boolean => {

  let logProduction: boolean = false;

  // if (environment.production)
  // logProduction = true;

  return logProduction;
}

/**
   * This method for present logg Or send to webApi
   * @param message A message that will be log
   * @param level the level of log ( All - Info - Warning - Error - Debug - Fatal )
   * @param params for any other messages in the same log
   * @returns (Boolean ) False just if no message , level or invalid level
  **/
const writeToLog = (message: string, level: LogLevel, params: any[]): void | boolean => {

  if (!message || !shouldLog(level)) {

    return false;
  } else {

    const entry = logEntry(message, level, logWithDate, params);

    if (isProductionLogger()) {
      // Do some thing foe log API
    } else {
      console.log(entry);
    }
  } // End check can log

} // End writeToLog


/**
 * This Method for Log message with type All
 * @param msg that for message will be log
 * @param optionalParams For any other message
 * @returns (False) Just if there is no message avilibale
**/
const log = (msg: any, ...optionalParams: any[]): void | boolean => {

  if (!msg)
    return false;

  writeToLog(msg, LogLevel.All, optionalParams);
} // End Log

/**
   * This Method for Log message with type Debug
   * @param msg that for message will be log
   * @param optionalParams For any other message
   * @returns (False) Just if there is no message avilibale
  **/
const debug = (msg: string, ...optionalParams: any[]): void | boolean => {

  if (!msg)
    return false;

  writeToLog(msg, LogLevel.Debug, optionalParams);
} // End debug


/**
 * This Method for Log message with type Info
 * @param msg that for message will be log
 * @param optionalParams For any other message
 * @returns (False) Just if there is no message avilibale
**/
const info = (msg: string, ...optionalParams: any[]): void | boolean => {

  if (!msg)
    return false;

  writeToLog(msg, LogLevel.Info, optionalParams);
} // End info


/**
 * This Method for Log message with type Warning
 * @param msg that for message will be log
 * @param optionalParams For any other message
 * @returns (False) Just if there is no message avilibale
**/
const warning = (msg: string, ...optionalParams: any[]): void | boolean => {

  if (!msg)
    return false;

  writeToLog(msg, LogLevel.Warning, optionalParams);
} // End warning


/**
 * This Method for Log message with type Error
 * @param msg that for message will be log
 * @param optionalParams For any other message
 * @returns (False) Just if there is no message avilibale
**/
const error = (msg: string, ...optionalParams: any[]): void | boolean => {

  if (!msg)
    return false;

  writeToLog(msg, LogLevel.Error, optionalParams);
} // End error

/**
 * This Method for Log message with type Fatal
 * @param msg that for message will be log
 * @param optionalParams For any other message
 * @returns (False) Just if there is no message avilibale
**/
const fatal = (msg: string, ...optionalParams: any[]): void | boolean => {

  if (!msg)
    return false;

  writeToLog(msg, LogLevel.Fatal, optionalParams);
} // End fatal

/**
   * This Method for clear all logs form console.log Or form web APi
  **/
const clear = (): void => {

  if (isProductionLogger()) {
    // Do some thing for API Clear
  } else {
    console.clear();
  }
}


export const logger = {
  log, clear, debug, info, warning, error, fatal
}
