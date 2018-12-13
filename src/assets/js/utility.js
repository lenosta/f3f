export function getArrayMax(arr) {
  let newArr = [];
  arr.forEach((v, i) => {
    newArr.push(parseInt(v))
  })
  if (Object.keys(newArr).length)
    return Math.max.apply(null, newArr)
  else
    return false
}

//判断浏览器
export function getBrowserType() {
    let userAgent = navigator.userAgent;
    if (userAgent.indexOf('Trident') > -1) {
        return 'IE';
    }
    else if (userAgent.indexOf('Presto') > -1) // opera内核
    {
        return 'opera';
    }
    else if (userAgent.indexOf('AppleWebKit') > -1) //苹果、谷歌内核)
    {
        return 'webKit';
    }
    return 'Other';
}
