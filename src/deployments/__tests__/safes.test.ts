//import GnosisSafeL2130 from '../assets/v1.3.0/gnosis_safe_l2.json';
//import GnosisSafe130 from '../assets/v1.3.0/gnosis_safe';
import GnosisSafe120 from '../assets/v1.2.0/gnosis_safe';
//import GnosisSafe111 from '../assets/v1.1.1/gnosis_safe.json';
//import GnosisSafe100 from '../assets/v1.0.0/gnosis_safe.json';
import {
  getSafeSingletonDeployment,
  getSafeL2SingletonDeployment,
} from '../safes';

describe('safes.ts', () => {
  describe('getSafeSingletonDeployment', () => {
    it('should find the latest deployment first', () => {
      const result = getSafeSingletonDeployment(null);
      expect(result).toBe(GnosisSafe120);
      //expect(result).toBe(GnosisSafe130);
      [GnosisSafe120, 
        //GnosisSafe111, GnosisSafe100
      ].forEach((version) => {
        expect(result).not.toBe(version);
      });
    });
  });
  describe('getSafeL2SingletonDeployment', () => {
    it('should find the latest deployment first', () => {
      //const result = getSafeL2SingletonDeployment();
      //expect(result).toBe(GnosisSafeL2130);
    });
  });
});
