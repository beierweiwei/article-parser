// utils -> isHTMLString

module.exports = (str = '') => {
  const reg = /<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i
  return reg.test(str)
}