const colors = [
  { class: '3498DB', hex: '#3498DB' },
  { class: 'fab822', hex: '#fab822' },
  { class: 'fb397a', hex: '#fb397a' },
  { class: '5d78ff', hex: '#5d78ff' },
  { class: 'f0b800', hex: '#f0b800' },
  { class: '1fbb87', hex: '#1fbb87' },
  { class: 'ea2c59', hex: '#ea2c59' },
  { class: '0088ff', hex: '#0088ff' },
  { class: 'e06100', hex: '#e06100' },
  { class: '00b771', hex: '#00b771' },
  { class: 'bbbbe3', hex: '#bbbbe3' },
  { class: 'e02b20', hex: '#e02b20' },
  { class: '74a7a9', hex: '#74a7a9' },
  { class: 'ec9051', hex: '#ec9051' },
  { class: '0193d8', hex: '#0193d8' },
  { class: '78be41', hex: '#78be41' },
  { class: 'b83430', hex: '#b83430' },
  { class: '418e88', hex: '#418e88' },
  { class: '659ee3', hex: '#659ee3' }
]

const sortByQuantity = (data) => {
  return data.sort((a, b) => {
    if (a.quantidade > b.quantidade) {
      return -1
    }
    if (a.quantidade < b.quantidade) {
      return 1
    }
    return 0
  })
}

const filterByDate = (data, item) => {
  return data.filter(i => {
    // eslint-disable-next-line eqeqeq
    if (item.data == i.data) {
      return i
    }
  })
}

const orderByDate = (data) => {
  return data.sort(function (a, b) {
    a = new Date(a.data)
    b = new Date(b.data)
    return a > b ? 1 : a < b ? -1 : 0
  })
}

export {
  colors,
  sortByQuantity,
  filterByDate,
  orderByDate
}
