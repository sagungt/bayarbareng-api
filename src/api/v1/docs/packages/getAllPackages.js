module.exports = {
  get: {
    tags: ['Packages'],
    description: 'Get all Packages',
    operationId: 'getAllPackages',
    parameters: [],
    responses: {
      200: {
        description: 'Packages were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/packages',
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
