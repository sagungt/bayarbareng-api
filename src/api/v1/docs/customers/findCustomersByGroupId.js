module.exports = {
  get: {
    tags: ['Customers'],
    description: 'Get customers associated with group id',
    operationId: 'findCustomersByGroupId',
    parameters: [
      {
        name: 'groupId',
        in: 'path',
        schema: {
          $ref: '#/components/schema/groupId',
        },
        required: true,
        description: 'An group id',
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
