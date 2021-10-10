import { GetterTree, MutationTree, ActionTree } from 'vuex';
import {
  State, Getters, Mutations, Actions,
} from './types';
import { Good } from '@/specification/DTO/Good';

import goodsApi from '@/api/goods';
import { GoodGroup } from '@/specification/api/GoodGroup';
import { EmptyObject } from '@/typeUtils/emptyObject';

const goodsState: State = {
  goodsList: [],
};

const getters: GetterTree<State, EmptyObject> & Getters = {
  getGoods: (state) => state.goodsList,
};

const mutations: MutationTree<State> & Mutations = {
  setList(state: State, posts: Good[]) {
    state.goodsList = posts;
  },
};

const actions: ActionTree<State, EmptyObject> & Actions = {
  async fetchList({ commit }, group: GoodGroup): Promise<void> {
    const goods = await goodsApi.getGoods(group);

    commit('setList', goods);
  },
};

export default {
  namespaced: true,
  state: goodsState,
  getters,
  mutations,
  actions,
};
