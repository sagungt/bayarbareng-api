module.exports = {
  delete: {
    tags: ['Packages'],
    description: 'Deleting a Package',
    operationId: 'deletePackage',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'Deleting a Package',
      },
    ],
    responses: {
      200: {
        description: 'Package deleted successfully',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/update',
            },
          },
        },
      },
      404: {
        description: 'Package not found',
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
