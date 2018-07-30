export const getUsers = {
  method: 'get',
  endpoint: '/users',
  action: (req, res) => {
    res.send([
      {
        id: '1',
        name: 'Binky',
        age: 22,
      },
      {
        id: '2',
        name: 'Bingo',
        age: 50,
      },
      {
        id: '3',
        name: 'Snim',
        age: 102,
      },
    ])
  },
}
