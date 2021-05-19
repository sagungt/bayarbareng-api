module.exports = {
  post: {
    tags: ['Customers'],
    description: 'Create new customer',
    operationId: 'addCustomer',
    parameters: [],
    requestBody: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            $ref: '#/components/schemas/customerInput',
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Customer created successfully',
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
