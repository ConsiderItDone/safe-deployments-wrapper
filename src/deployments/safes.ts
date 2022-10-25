//import GnosisSafeL2130 from "./assets/v1.3.0/gnosis_safe_l2.json";
//import GnosisSafe130 from './assets/v1.3.0/gnosis_safe'
import GnosisSafe120 from "./assets/v1.2.0/gnosis_safe";
//import GnosisSafe111 from './assets/v1.1.1/gnosis_safe.json'
//import GnosisSafe100 from './assets/v1.0.0/gnosis_safe.json'
import { DeploymentFilter, SingletonDeployment } from "./types";
import { findDeployment } from "./utils";

// This is a sorted array (newest to oldest), exported for tests
export const _safeDeployments: SingletonDeployment[] = [
  //GnosisSafe130,
  GnosisSafe120,
  //GnosisSafe111,
  //GnosisSafe100,
];

export const getSafeSingletonDeployment = (
  filter: DeploymentFilter | null
): SingletonDeployment | null => {
  return findDeployment(_safeDeployments, filter);
};

// This is a sorted array (newest to oldest), exported for tests
export const _safeL2Deployments: SingletonDeployment[] = [
  //GnosisSafeL2130
];

export const getSafeL2SingletonDeployment = (
  filter: DeploymentFilter | null
): SingletonDeployment | null => {
  return findDeployment(_safeL2Deployments, filter);
};
