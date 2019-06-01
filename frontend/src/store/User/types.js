import {
  generatorActions,
  generatorMutations,
  generatorGetters,
  generatorTypesWithNamespace
} from '@/utils/VuexHelper';

const types = {
  ACTION: generatorActions([
    'LOGIN',
    'LOGOUT',
    'SIGN_UP',
    'SUBSCRIBE_MEMBER'
  ]),
  MUTATION: generatorMutations([
    'STORE_LOGIN_STATE',
    'STORE_NEW_USER',
  ]),
  GETTER: generatorGetters([
    'IS_SIGN_UP_USER',
    'PASSWORD_CHECK'
  ]),
};

const namespace = 'User';
const globalTypes = generatorTypesWithNamespace(namespace, types);

export default types;
export {
  namespace,
  globalTypes,
  types
}
