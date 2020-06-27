import { PluginApi, SplitterinoPlugin } from 'splitterino';
import { PluginInstanceStore } from 'splitterino/src/models/services';

import { getStoreModule, MyState } from './store';

export class Plugin implements SplitterinoPlugin {
  private intervalRef?: NodeJS.Timeout;

  initialize(api: PluginApi) {
    // Cast it to an store-instance with my custom state
    const store = api.injector.get(STORE_SERVICE_TOKEN) as PluginInstanceStore<MyState>;
    store.registerModule(getStoreModule());

    // Count up every 10 seconds and print the module state
    this.intervalRef = setInterval(() => {
      (async () => {
        await store.commit('plugins/example/countUp');
        console.log(store.moduleState);
      })();
    }, 10_000);

    return Promise.resolve(true);
  }

  destroy() {
    if (this.intervalRef != null) {
      clearInterval(this.intervalRef);
    }

    return Promise.resolve(true);
  }
}
