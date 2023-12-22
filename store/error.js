export const state = () => ({
  networkError: null,
});

export const mutations = {
  setNetworkError(state, error) {
    state.networkError = error;
  },
  clearNetworkError(state) {
    state.networkError = null;
  },
};
