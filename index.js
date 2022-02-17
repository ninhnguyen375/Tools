/* eslint-disable */
function toRegexPA(obj) {
  let result = []
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      result.push(`"${key}":(?<${key}>\\[.*?\\])`)
    } else if (obj[key] && !isNaN(obj[key])) {
      result.push(`"${key}":(?<${key}>\\d)`)
    } else {
      result.push(`"${key}":"(?<${key}>[^"]*)"`)
    }
  })

  result = result.map((r) => (r || '').replaceAll(`"`, `""`))

  return '"\\{' + result.join(',') + '"'
}
var a = {
  Email: 'nguyenvana@yahoo.com',
  FullName: 'Nguyễn Văn A',
  Mobile: '',
  SignerId: 'c4f63cee-5023-438e-ae92-f06887fecacd',
  SignerSignatures: [],
}
