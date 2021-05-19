module.exports = {
  get: {
    tags: ['Customers'],
    description: 'Get customers associated with detail id',
    operationId: 'findCustomersByDetailId',
    parameters: [
      {
        name: 'detailId',
        in: 'path',
        schema: {
          $ref: '#/components/schema/detailId',
        },
        required: true,
        description: 'An detail id',
      },
    ],
    responses: {
      200: {
        description: 'Customers were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/customer',
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
