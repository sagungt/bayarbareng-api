module.exports = {
  put: {
    tags: ['Users'],
    description: 'Update user',
    operationId: 'updateUser',
    parameters: [
      {
        name: 'userId',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/userId',
        },
        required: true,
        description: 'Id of user to be updated',
      },
    ],
    responses: {
      200: {
        description: 'User updated successfully',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/update',
            },
          },
        },
      },
      404: {
        description: 'User not found',
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
