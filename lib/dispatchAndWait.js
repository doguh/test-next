/**
 * dispatch an action and returns a Promise that will resolve once `isDone` returns true
 * @param {object} store redux store
 * @param {object} action redux action
 * @param {function(object):boolean} isDone callback used to check the state and tell if we're done yet
 * @returns {Promise<void>}
 */
export default function dispatchAndWait(store, action, isDone) {
  return new Promise(resolve => {
    const uns = store.subscribe(() => {
      if (isDone(store.getState())) {
        uns();
        resolve();
      }
    });
    store.dispatch(action);
  });
}
