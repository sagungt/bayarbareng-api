module.exports = {
  put: {
    tags: ['Packages'],
    description: 'Update Package',
    operationId: 'updatePackage',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'Id of Package to be updated',
      },
    ],
    responses: {
      200: {
        description: 'Package updated successfully',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/updatePackage',
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
