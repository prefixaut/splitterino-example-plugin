import { Module } from 'splitterino';

export interface MyState {
    foo: string;
    counter: number;
}

export function getStoreModule() {
    const module: Module<MyState> = {
        initialize() {
            return {
                foo: 'bar',
                counter: 0,
            };
        },
        handlers: {
            changeFoo(state: MyState, data: string) {
                return { foo: data };
            },
            countUp(state: MyState) {
                return { counter: state.counter + 1 };
            },
            countDown(state: MyState) {
                return { counter: state.counter - 1 };
            },
        }
    };

    return module;
}