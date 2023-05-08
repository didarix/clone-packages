import { EPeriodTime } from '../controls/range-time/range-time';

export interface FullTime {
  hour: number;
  minute: number;
  period: typeof EPeriodTime;
}
export interface IRangeTime {
  from: FullTime;
  to: FullTime;
}
