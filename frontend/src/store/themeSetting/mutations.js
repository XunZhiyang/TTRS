import types from './types'

export default {
  /**
   * 修改 theme
   * @param state
   * @param theme
   */
  [types.MUTATION.CHANGE_THEME](state, theme){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(state.theme);
    body.classList.add(theme);

    state.theme = theme;

  },
  /**
   * 修改 fontSize
   * @param state
   * @param fontSize
   */
  [types.MUTATION.CHANGE_FONT_SIZE](state, fontSize){
    const body = document.getElementsByTagName('body')[0];
    body.style.fontSize = `${fontSize}px`;

    state.fontSize = fontSize;
  },
  /**
   * 修改 fontFamily
   * @param state
   * @param fontFamily
   */
  [types.MUTATION.CHANGE_FONT_FAMILY](state, fontFamily){
    const body = document.getElementsByTagName('body')[0];
    body.style.fontFamily = fontFamily;

    state.fontFamily = fontFamily;
  }
}
