module.exports = {
  delete: {
    tags: ['Services'],
    description: 'Deleting a service',
    operationId: 'deleteService',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'Deleting a service',
      },
    ],
    responses: {
      200: {
        description: 'Service deleted successfully',
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
