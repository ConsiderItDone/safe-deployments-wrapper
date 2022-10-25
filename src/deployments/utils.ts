import { DeploymentFilter, SingletonDeployment } from "./types";
//import semverSatisfies from 'semver/functions/satisfies'

const DEFAULT_FILTER: DeploymentFilter = {
  released: true,
  version: null,
  network: null,
};

export const findDeployment = (
  deployments: SingletonDeployment[],
  criteria: DeploymentFilter | null = DEFAULT_FILTER
): SingletonDeployment | null => {
  let deploymentIndex = 0;
  for (let i = 0; i < deployments.length; i++) {
    const deployment = deployments[i];
    // if (criteria!.version !=null && !semverSatisfies(deployment.version, criteria!.version)) { continue }
    if (
      criteria!.released != false &&
      deployment.released != criteria!.released
    ) {
      continue;
    }
    if (
      criteria!.network != null &&
      !deployment.networkAddresses.get(criteria!.network!)
    ) {
      continue;
    }
    deploymentIndex = i;
    break;
  }

  if (deploymentIndex == -1) {
    return null;
  } else return deployments[deploymentIndex];
};
