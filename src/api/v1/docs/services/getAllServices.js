module.exports = {
  get: {
    tags: ['Services'],
    description: 'Get all services',
    operationId: 'getAllServices',
    parameters: [],
    responses: {
      200: {
        description: 'All services obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/services',
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
