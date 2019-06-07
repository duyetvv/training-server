export const user = {
  username: {
    type: 'char(255)',
    required: 'not null',
    default: null,
    validations: {
      required: true,
    }
  },
  password: {
    type: 'char(255)',
    required: 'not null',
    default: null,
    validations: {
      required: true,
    }
  },
  email: {
    type: 'char(255)',
    required: 'not null',
    default: null,
    validations: {
      required: true,
      email: true,
    }
  },
  phone: {
    type: 'char(255)',
    required: 'not null',
    default: null,
    validations: {
      required: true,
      phone: true,
    }
  },
  address: {
    type: 'char(255)',
    required: 'not null',
    default: null,
    validations: {
      required: true,
    }
  },
  numberOrders: {
    type: 'int',
    required: 'null',
    default: null,
    validations: {
      required: true,
      number: true,
    }
  }
}