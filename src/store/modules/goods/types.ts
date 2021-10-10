import { ActionContext } from 'vuex';
import { Good } from '@/specification/DTO/Good';
import { GoodGroup } from '@/specification/api/GoodGroup';
import { EmptyObject } from '@/typeUtils/emptyObject';

export interface State {
  goodsList: Good[]
}

export interface Getters {
  getGoods(state: State): Good[]
}

export interface Mutations {
  setList(state: State, goods: Good[]): void
}

interface AugmentedActionContext extends Omit<ActionContext<State, EmptyObject>, 'commit'> {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
}

export interface Actions {
  fetchList(
    { commit }: AugmentedActionContext,
    group: GoodGroup
  ): Promise<void>
}
