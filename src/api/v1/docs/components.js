module.exports = {
  components: {
    schemas: {
      id: {
        type: 'integer',
        description: 'An id of a package/service',
        example: 1,
      },
      userId: {
        type: 'string',
        description: 'An id of a user',
        example: '00000000-0000-0000-0000-000000000000',
      },
      detailId: {
        type: 'string',
        description: 'An id of a detail',
        example: '00000000-0000-0000-0000-000000000000',
      },
      groupId: {
        type: 'string',
        description: 'An id of a group',
        example: '00000000-0000-0000-0000-000000000000',
      },
      status: {
        type: 'string',
        description: 'Status of response',
        example: 'success',
      },
      groups: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response status',
            example: 'success',
          },
          groups: {
            type: 'array',
            items: {
              types: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'An id of a group',
                  example: '00000000-0000-0000-0000-000000000000',
                },
                members: {
                  type: 'integer',
                  description: 'Amount of members in 1 group',
                  example: 'success',
                },
              },
            },
          },
        },
      },
      customers: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response status',
            example: 'success',
          },
          customers: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                userId: {
                  type: 'string',
                  description: 'An id of a user',
                  example: '00000000-0000-0000-0000-000000000000',
                },
                detailId: {
                  type: 'string',
                  description: 'An id of a detail',
                  example: '00000000-0000-0000-0000-000000000000',
                },
                groupId: {
                  type: 'string',
                  description: 'An id of a group',
                  example: '00000000-0000-0000-0000-000000000000',
                },
                CustomerUser: {
                  type: 'object',
                  description: 'An associated customer with user',
                  properties: {
                    firstName: {
                      type: 'string',
                      description: 'First name of a user',
                      example: 'John',
                    },
                    lastName: {
                      type: 'string',
                      description: 'Last name of a user',
                      example: 'John',
                    },
                    email: {
                      type: 'string',
                      description: 'Email of a user',
                      example: 'john.doe@example.com',
                    },
                    phone: {
                      type: 'string',
                      description: 'Phone number of a user',
                      example: '+628123456789',
                    },
                  },
                },
                CustomerGroup: {
                  type: 'object',
                  description: 'An associated customer with group',
                  properties: {
                    members: {
                      type: 'integer',
                      description: 'Amount of a member in a group',
                      example: 5,
                    },
                  },
                },
                customerDetail: {
                  type: 'object',
                  description: 'An associated customer with group',
                  properties: {
                    currentCharge: {
                      type: 'integer',
                      description: 'Current charge of this period',
                      example: 50000,
                    },
                    dueDate: {
                      type: 'date',
                      description: 'Due date of payment this period',
                      example: 50000,
                    },
                    isActive: {
                      type: 'boolean',
                      description: 'State of package activity',
                      example: true,
                    },
                  },
                  PackageDetail: {
                    type: 'object',
                    description: 'An associated detail with package',
                    properties: {
                      planName: {
                        type: 'string',
                        description: 'Name of a plan',
                        example: 'Spotify Premium 1 Month',
                      },
                      price: {
                        type: 'integer',
                        description: 'Price of a plan',
                        example: 54000,
                      },
                      Plan: {
                        type: 'object',
                        description: 'An associated package with provider',
                        properties: {
                          serviceName: {
                            type: 'string',
                            description: 'Name of a provider',
                            example: 'Spotify',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      customer: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response status',
            example: 'success',
          },
          customer: {
            type: 'object',
            properties: {
              userId: {
                type: 'string',
                description: 'An id of a user',
                example: '00000000-0000-0000-0000-000000000000',
              },
              detailId: {
                type: 'string',
                description: 'An id of a detail',
                example: '00000000-0000-0000-0000-000000000000',
              },
              groupId: {
                type: 'string',
                description: 'An id of a group',
                example: '00000000-0000-0000-0000-000000000000',
              },
              CustomerUser: {
                type: 'object',
                description: 'An associated customer with user',
                properties: {
                  firstName: {
                    type: 'string',
                    description: 'First name of a user',
                    example: 'John',
                  },
                  lastName: {
                    type: 'string',
                    description: 'Last name of a user',
                    example: 'John',
                  },
                  email: {
                    type: 'string',
                    description: 'Email of a user',
                    example: 'john.doe@example.com',
                  },
                  phone: {
                    type: 'string',
                    description: 'Phone number of a user',
                    example: '+628123456789',
                  },
                },
              },
              CustomerGroup: {
                type: 'object',
                description: 'An associated customer with group',
                properties: {
                  members: {
                    type: 'integer',
                    description: 'Amount of a member in a group',
                    example: 5,
                  },
                },
              },
              customerDetail: {
                type: 'object',
                description: 'An associated customer with group',
                properties: {
                  currentCharge: {
                    type: 'integer',
                    description: 'Current charge of this period',
                    example: 50000,
                  },
                  dueDate: {
                    type: 'date',
                    description: 'Due date of payment this period',
                    example: 50000,
                  },
                  isActive: {
                    type: 'boolean',
                    description: 'State of package activity',
                    example: true,
                  },
                },
                PackageDetail: {
                  type: 'object',
                  description: 'An associated detail with package',
                  properties: {
                    planName: {
                      type: 'string',
                      description: 'Name of a plan',
                      example: 'Spotify Premium 1 Month',
                    },
                    price: {
                      type: 'integer',
                      description: 'Price of a plan',
                      example: 54000,
                    },
                    Plan: {
                      type: 'object',
                      description: 'An associated package with provider',
                      properties: {
                        serviceName: {
                          type: 'string',
                          description: 'Name of a provider',
                          example: 'Spotify',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      customerInput: {
        type: 'object',
        properties: {
          price: {
            type: 'integer',
            description: 'Price of current plan',
            example: 56000,
          },
          packageId: {
            type: 'string',
            description: 'An id of package',
            example: '00000000-0000-0000-0000-000000000000',
          },
          userId: {
            type: 'string',
            description: 'An id of user',
            example: '00000000-0000-0000-0000-000000000000',
          },
        },
      },
      error: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response status',
            example: 'failed',
          },
          message: {
            type: 'string',
            description: 'Message detail',
            example: 'Cannot create user',
          },
        },
      },
      users: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response status',
            example: 'success',
          },
          users: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                firstName: {
                  type: 'string',
                  description: 'First name of a user',
                  example: 'John',
                },
                lastName: {
                  type: 'string',
                  description: 'Last name of a user',
                  example: 'John',
                },
                email: {
                  type: 'string',
                  description: 'Email of a user',
                  example: 'john.doe@example.com',
                },
                phone: {
                  type: 'string',
                  description: 'Phone number of a user',
                  example: '+628123456789',
                },
              },
            },
          },
        },
      },
      update: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response status',
            example: 'success',
          },
          message: {
            type: 'string',
            description: 'Message detail',
            example: 'Updated/deleted',
          },
        },
      },
      user: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response status',
            example: 'success',
          },
          user: {
            type: 'object',
            properties: {
              firstName: {
                type: 'string',
                description: 'First name of a user',
                example: 'John',
              },
              lastName: {
                type: 'string',
                description: 'Last name of a user',
                example: 'John',
              },
              email: {
                type: 'string',
                description: 'Email of a user',
                example: 'john.doe@example.com',
              },
              phone: {
                type: 'string',
                description: 'Phone number of a user',
                example: '+628123456789',
              },
              isVerified: {
                type: 'boolean',
                description: 'Account is verified',
                example: 'true',
              },
              facebook: {
                type: 'boolean',
                description: 'Account is logged in with facebook',
                example: 'false',
              },
              twitter: {
                type: 'boolean',
                description: 'Account is logged in with twitter',
                example: 'true',
              },
            },
          },
        },
      },
      services: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response status',
            example: 'success',
          },
          services: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer',
                  description: 'An id of a service',
                  example: 2,
                },
                serviceName: {
                  type: 'string',
                  description: 'Name of provider',
                  example: 'Spotify',
                },
              },
            },
          },
        },
      },
      service: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response status',
            example: 'success',
          },
          services: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                description: 'An id of a service',
                example: 2,
              },
              serviceName: {
                type: 'string',
                description: 'Name of provider',
                example: 'Spotify',
              },
            },
          },
        },
      },
      serviceInput: {
        type: 'object',
        properties: {
          serviceName: {
            type: 'string',
            description: 'Name of provider',
            example: 'YouTube',
          },
        },
      },
      reviews: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response status',
            example: 'success',
          },
          reviews: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer',
                  description: 'And id of a review',
                  example: 2,
                },
                name: {
                  type: 'string',
                  description: 'Name of reviewers',
                  example: 2,
                },
                email: {
                  type: 'string',
                  description: 'Censored email of reviewers',
                  example: 'joh...oe@gmail.com',
                },
                review: {
                  type: 'string',
                  description: 'Review content',
                  example: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempora voluptatem eos dolore aliquid',
                },
              },
            },
          },
        },
      },
      packages: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response Status',
            example: 'success',
          },
          packages: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer',
                  description: 'An id of a plan',
                  example: 2,
                },
                planName: {
                  type: 'string',
                  description: 'Name of provider of a plan',
                  example: 2,
                },
                price: {
                  type: 'integer',
                  description: 'Price of a plan',
                  example: 2,
                },
                provider: {
                  type: 'integer',
                  description: 'Associated plan to provider',
                  example: 2,
                },
              },
            },
          },
        },
      },
      package: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response Status',
            example: 'success',
          },
          packages: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                description: 'An id of a plan',
                example: 2,
              },
              planName: {
                type: 'string',
                description: 'Name of provider of a plan',
                example: 2,
              },
              price: {
                type: 'integer',
                description: 'Price of a plan',
                example: 2,
              },
              provider: {
                type: 'integer',
                description: 'Associated plan to provider',
                example: 2,
              },
            },
          },
        },
      },
      updatePackage: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Response Status',
            example: 'success',
          },
          message: {
            type: 'string',
            description: 'message Status',
            example: 'updated',
          },
          packages: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                description: 'An id of a plan',
                example: 2,
              },
              planName: {
                type: 'string',
                description: 'Name of provider of a plan',
                example: 2,
              },
              price: {
                type: 'integer',
                description: 'Price of a plan',
                example: 2,
              },
              provider: {
                type: 'integer',
                description: 'Associated plan to provider',
                example: 2,
              },
            },
          },
        },
      },
      packageInput: {
        type: 'object',
        properties: {
          planName: {
            type: 'string',
            description: 'Name of a plan',
            example: 'YouTube Premium 1 Year',
          },
          price: {
            type: 'integer',
            description: 'Price of a plan',
            example: 600000,
          },
          serviceId: {
            type: 'integer',
            description: 'Service id',
            example: 2,
          },
        },
      },
    },
  },
};
