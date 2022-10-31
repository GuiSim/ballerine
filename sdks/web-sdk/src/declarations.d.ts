// Should use Posthog's types here instead
import { AnyRecord } from './types';
import { DevMocks } from './lib/contexts/app-state';

interface IPosthog {
  capture(event: string, payload?: AnyRecord): void;
}

declare global {
  var __APP_VERSION__: string;

  interface Window {
    isProd: boolean;
    __blrn_context: {
      mockReasonCode: DevMocks['reasonCode'];
      mockResultTime: DevMocks['resultTime'];
      mockCode: DevMocks['code'];
      mockIdvResult: DevMocks['idvResult'];
    };
    posthog: IPosthog;
  }
}

export {};