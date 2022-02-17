/* eslint-disable */
function toRegexPA(obj) {
  let result = []
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      result.push(`"${key}":((\[.*?\]))`)
    } else {
      result.push(`"${key}":(("(?<${key}>[^"]*)")|null|\d)`)
    }
  })

  result = result.map((r) => (r || '').replaceAll(`"`, `""`))

  return '"\\{' + result.join(',') + '"'
}

const result = toRegexPA({
  CompanyCode: null,
  CompanyId: null,
  CompanyName: null,
  SignatureCode: 'S1',
  SignatureName: 'Chữ ký thứ 1',
  SignerSignatureCode: '430C7366',
  SignerSignatureId: 'flasher-S1',
})

document.body.innerText = result
