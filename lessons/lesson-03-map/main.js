const words = ['hello', 'world']

const wordsInfo = words.map((word, index) => {
  return {
    orderNumber: index + 1,
    lettersCount: word.length,
  }
})

console.log(wordsInfo.length)
console.log(wordsInfo)
