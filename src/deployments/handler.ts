//import DefaultCallbackHandler130 from './assets/v1.1.1/default_callback_handler.json'
//import CompatibilityFallbackHandler from './assets/v1.3.0/compatibility_fallback_handler.json'
import { DeploymentFilter, SingletonDeployment } from "./types";
import { findDeployment } from "./utils";

// This is a sorted array (by preference)
const defaultCallbackHandlerDeployments: SingletonDeployment[] = [
  //DefaultCallbackHandler130,
];

export const getDefaultCallbackHandlerDeployment = (
  filter: DeploymentFilter | null
): SingletonDeployment | null => {
  return findDeployment( defaultCallbackHandlerDeployments, filter);
};

// This is a sorted array (by preference)
const compatFallbackHandlerDeployments: SingletonDeployment[] = [
  //CompatibilityFallbackHandler
];

export const getCompatibilityFallbackHandlerDeployment = (
  filter: DeploymentFilter | null
): SingletonDeployment | null => {
  return findDeployment(compatFallbackHandlerDeployments,filter);
};

// This is a sorted array (by preference)
const fallbackHandlerDeployments: SingletonDeployment[] = [
  //CompatibilityFallbackHandler, DefaultCallbackHandler130
];

export const getFallbackHandlerDeployment = (
  filter: DeploymentFilter | null
): SingletonDeployment | null => {
  return findDeployment( fallbackHandlerDeployments, filter);
};
