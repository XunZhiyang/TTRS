/**
 * 生成表单字段的计算属性
 * @param {string} formModel      - 组件表单 model 的名称
 * @param {array.<string>} fields - 表单所需要映射的字段
 */
function mappingFormFields (formModel, fields) {
  const computed = {};

  fields.forEach(field => {
    computed[field] = {
      get () { return this[formModel][field] },
      set (val) { this[formModel] = { ...this[formModel], [field]: val } },
    }
  });

  return { computed };
}

export default mappingFormFields;
