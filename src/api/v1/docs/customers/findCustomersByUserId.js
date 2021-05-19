module.exports = {
  get: {
    tags: ['Customers'],
    description: 'Get customers associated with user id',
    operationId: 'findCustomersByUserId',
    parameters: [
      {
        name: 'userId',
        in: 'path',
        schema: {
          $ref: '#/components/schema/userId',
        },
        required: true,
        description: 'An user id',
      },
    ],
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
