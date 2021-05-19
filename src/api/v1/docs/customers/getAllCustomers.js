module.exports = {
  get: {
    tags: ['Customers'],
    description: 'Get all Customers',
    operationId: 'getAllCustomers',
    parameters: [],
    responses: {
      200: {
        description: 'Customers were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/customers',
            },
          },
        },
      },
      500: {
        description: 'Server error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/error',
            },
          },
        },
      },
    },
  },
};
