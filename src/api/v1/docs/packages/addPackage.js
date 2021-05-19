module.exports = {
  post: {
    tags: ['Packages'],
    description: 'Create new package',
    operationId: 'addPackage',
    parameters: [],
    requestBody: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            $ref: '#/components/schemas/packageInput',
          },
        },
      },
    },
    responses: {
      201: {
        description: 'package created successfully',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/updatePackage',
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
