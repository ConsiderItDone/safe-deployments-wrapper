import { Args_sampleMethod, SampleResult } from "./wrap";
import * as deployments from './deployments'

export function sampleMethod(args: Args_sampleMethod): SampleResult {
  return {
    result: args.arg,
  };
}
