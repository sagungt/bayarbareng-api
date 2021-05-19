module.exports = {
  get: {
    tags: ['Customers'],
    description: 'Get all groups',
    operationId: 'getAllGroups',
    parameters: [],
    responses: {
      200: {
        description: 'Groups were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/groups',
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
