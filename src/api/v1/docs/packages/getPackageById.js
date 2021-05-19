module.exports = {
  get: {
    tags: ['Packages'],
    description: 'Get Packages by id',
    operationId: 'getPackagesById',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schema/id',
        },
        required: true,
        description: 'An package id',
      },
    ],
    responses: {
      200: {
        description: 'package obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/package',
            },
          },
        },
      },
      404: {
        description: 'Service not found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/error',
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
