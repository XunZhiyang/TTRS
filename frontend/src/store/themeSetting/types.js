import {
  generatorMutations,
  generatorTypesWithNamespace
} from '@/utils/VuexHelper';


const types = {
  MUTATION: generatorMutations([
    'CHANGE_THEME',
    'CHANGE_FONT_SIZE',
    'CHANGE_FONT_FAMILY'
  ]),
};

// 生成带命名空间的types
const namespace   = 'ThemeSetting';
const globalTypes = generatorTypesWithNamespace(namespace, types);

export default types;
export {
  namespace,
  globalTypes,
  types
}
