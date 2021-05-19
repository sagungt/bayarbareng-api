module.exports = {
  get: {
    tags: ['Users'],
    description: 'Get all users',
    operationId: 'getAllUsers',
    parameters: [],
    responses: {
      200: {
        description: 'All users obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/users',
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
