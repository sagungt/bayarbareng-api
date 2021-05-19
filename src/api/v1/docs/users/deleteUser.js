module.exports = {
  delete: {
    tags: ['Users'],
    description: 'Deleting a user',
    operationId: 'deleteUser',
    parameters: [
      {
        name: 'userId',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/userId',
        },
        required: true,
        description: 'Deleting a user',
      },
    ],
    responses: {
      200: {
        description: 'User deleted successfully',
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
