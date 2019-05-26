export const user = {
  username: {
    type: 'char(255)',
    required: 'not null',
    default: null,
  },
  password: {
    type: 'char(255)',
    required: 'not null',
    default: null,
  },
  email: {
    type: 'char(255)',
    required: 'not null',
    default: null,
  },
  phone: {
    type: 'char(255)',
    required: 'not null',
    default: null,
  },
  address: {
    type: 'char(255)',
    required: 'not null',
    default: null,
  },
  numberOrders: {
    type: 'int',
    required: 'null',
    default: null,
  }
}