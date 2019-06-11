export default {
  /*获取全部url参数,并转换成json对象*/
  getUrlAllParams(url) {
    var url = url ? url : window.location.href;
    var _pa = url.substring(url.indexOf('?') + 1),
      _arrS = _pa.split('&'),
      _rs = {};
    for (var i = 0, _len = _arrS.length; i < _len; i++) {
      var pos = _arrS[i].indexOf('=');
      if (pos == -1) {
        continue;
      }
      var name = _arrS[i].substring(0, pos),
        value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
      _rs[name] = value;
    }
    return _rs;
  },
  /**
   * 光标所在位置插入字符，并设置光标位置
   *
   * @param {dom} 输入框
   * @param {val} 插入的值
   * @param {posLen} 光标位置处在 插入的值的哪个位置
   */
  setCursorPosition(dom, val, posLen) {
    var cursorPosition = 0;
    if (dom.selectionStart) {
      cursorPosition = dom.selectionStart;
    }
    this.insertAtCursor(dom, val);
    dom.focus();
    console.log(posLen)
    dom.setSelectionRange(dom.value.length, cursorPosition + (posLen || val.length));
  },
  /*光标所在位置插入字符*/
  insertAtCursor(dom, val) {
    if (document.selection) {
      dom.focus();
      var sel = document.selection.createRange();
      sel.text = val;
      sel.select();
    } else if (dom.selectionStart || dom.selectionStart == '0') {
      let startPos = dom.selectionStart;
      let endPos = dom.selectionEnd;
      let restoreTop = dom.scrollTop;
      dom.value = dom.value.substring(0, startPos) + val + dom.value.substring(endPos, dom.value.length);
      if (restoreTop > 0) {
        dom.scrollTop = restoreTop;
      }
      dom.focus();
      dom.selectionStart = startPos + val.length;
      dom.selectionEnd = startPos + val.length;
    } else {
      dom.value += val;
      dom.focus();
    }
  }
}
