module.exports = {
  get: {
    tags: ['Services'],
    description: 'Get services by id',
    operationId: 'getServicesById',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schema/id',
        },
        required: true,
        description: 'An service id',
      },
    ],
    responses: {
      200: {
        description: 'Service obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/service',
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
