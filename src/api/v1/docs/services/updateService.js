module.exports = {
  put: {
    tags: ['Services'],
    description: 'Update service',
    operationId: 'updateService',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'Id of service to be updated',
      },
    ],
    responses: {
      200: {
        description: 'Service updated successfully',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/update',
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
