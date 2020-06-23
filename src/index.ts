import { Injector } from 'lightweight-di';
import { Plugin as SplitterinoPlugin } from 'splitterino';

import { getStoreModule } from './store';

export class Plugin implements SplitterinoPlugin {
    async initialize(injector: Injector) {
        const store = injector.get(STORE_SERVICE_TOKEN);
        store.registerModule(getStoreModule());
        return true;
    }

    async destroy() {
        return true;
    }
}