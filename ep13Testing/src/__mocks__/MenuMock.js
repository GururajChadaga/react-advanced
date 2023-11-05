export const MenuMock = {
  statusCode: 0,
  data: {
    statusMessage: 'done successfully',
    cards: [
      {
        card: {
          card: {
            '@type':
              'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
            info: {
              id: '281469',
              name: 'Lavonne',
              city: 'Bangalore',
              slugs: {
                restaurant: 'lavonne-central-bangalore-central-bangalore',
                city: 'bangalore',
              },
              uniqueId: 'e51e6528-4859-48c8-8fed-e84c17dc2d76',
              cloudinaryImageId: 'emlehbuwgsmryxhwzhvq',
              locality: 'St. Marks Road',
              areaName: 'St. Marks Road',
              costForTwo: '75000',
              costForTwoMessage: '₹750 for two',
              cuisines: ['Bakery', 'Desserts'],
              avgRating: 4.6,
              feeDetails: {
                restaurantId: '281469',
                fees: [
                  {
                    name: 'distance',
                    fee: 3900,
                  },
                  {
                    name: 'time',
                  },
                  {
                    name: 'special',
                  },
                ],
                totalFee: 3900,
                icon: 'v1648635511/Delivery_fee_new_cjxumu',
                message: '0.6 kms | ₹39 Delivery fee will apply',
              },
              parentId: '10530',
              avgRatingString: '4.6',
              totalRatingsString: '1K+ ratings',
              sla: {
                restaurantId: '281469',
                deliveryTime: 20,
                minDeliveryTime: 20,
                maxDeliveryTime: 20,
                lastMileTravel: 0.6,
                serviceability: 'SERVICEABLE',
                stressFactor: 1,
                rainMode: 'RAIN_MODE_NONE',
                longDistance: 'LONG_DISTANCE_NOT_LONG_DISTANCE',
                zoneId: 68,
                slaString: '20 MINS',
                lastMileTravelString: '0.6 km',
                iconType: 'ICON_TYPE_EMPTY',
              },
              availability: {
                nextCloseTime: '2023-11-05 22:40:00',
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                shortDescriptionList: [
                  {
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                  {
                    discountType: 'Flat',
                    operationType: 'RESTAURANT',
                  },
                ],
                descriptionList: [
                  {
                    meta: '20% off upto ₹200 | Above ₹600',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                  {
                    meta: 'Flat ₹75 off | Above ₹600',
                    discountType: 'Flat',
                    operationType: 'RESTAURANT',
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: 'lavonne-central-bangalore-central-bangalore',
              multiOutlet: true,
              isOpen: true,
              labels: [
                {
                  title: 'Timings',
                  message: 'null',
                },
                {
                  title: 'Address',
                  message:
                    'Samrah Plaza, 4/2, Ground Floor St. Mark, s Road, Bengaluru, Karnataka 560001',
                },
                {
                  title: 'Cuisines',
                  message: 'Bakery,Desserts',
                },
              ],
              logo: 'v1642740559/G%20header%20logos/Lavonne.png',
              totalRatings: 1000,
              aggregatedDiscountInfoV2: {
                shortDescriptionList: [
                  {
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                  {
                    discountType: 'Flat',
                    operationType: 'RESTAURANT',
                  },
                ],
                descriptionList: [
                  {
                    meta: '20% off upto ₹200 | Above ₹600',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                  {
                    meta: 'Flat ₹75 off | Above ₹600',
                    discountType: 'Flat',
                    operationType: 'RESTAURANT',
                  },
                ],
              },
              type: 'F',
              headerBanner: {
                url: 'swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/281469',
              },
              expectationNotifiers: [
                {
                  text: '0.6 kms | ₹39 Delivery fee will apply',
                  icon: {
                    imageId: 'v1648635511/Delivery_fee_new_cjxumu',
                  },
                  popup: {
                    cta: {},
                  },
                  type: 'DISTANCE_FEE_NON_FOOD_LM',
                  enrichedText: '<b>0.6 kms</b> | ₹39 Delivery fee will apply',
                  halfCardPopup: {
                    halfCardPopupHeader: {},
                  },
                },
              ],
              generalPurposeInfoListV2: [
                {
                  cta: {
                    info: {
                      recordings: {},
                    },
                    linkCta: {},
                  },
                },
              ],
              ratingSlab: 'RATING_SLAB_5',
              restaurantCategory: 'RESTAURANT_CATEGORY_GOURMET',
              backgroundImage:
                'v1641894907/gourmet%20menu%20header/Lavonne.png',
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              hasBestsellerItems: true,
              hasGuiltfreeItems: true,
              brandHeaderText: 'Home of iconic European delicacies...',
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: '12.9694291,77.60031526',
            },
            analytics: {},
          },
          relevance: {
            type: 'RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD',
            sectionId: 'POP_UP_CROUTON_MENU',
          },
        },
      },
      {
        card: {
          card: {
            '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget',
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
              scrollBar: {},
            },
            id: 'offerCollectionWidget_UX4',
            gridElements: {
              infoWithStyle: {
                '@type':
                  'type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle',
                offers: [
                  {
                    info: {
                      header: '20% OFF UPTO ₹200',
                      offerTagColor: '#E46D47',
                      logoBottom:
                        'rng/md/ads/production/5c4848f8c208408b048c18f6be604f14',
                      offerIds: ['8d472e5d-6519-4b0d-94a2-12ef722856af'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'NO CODE REQUIRED',
                      description: 'ABOVE ₹600',
                      offerType: 'offers',
                      restId: '281469',
                      offerLogo:
                        'rng/md/ads/production/5c4848f8c208408b048c18f6be604f14',
                      descriptionTextColor: '#7302060C',
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD',
                    },
                  },
                  {
                    info: {
                      header: 'FLAT ₹75 OFF',
                      offerTagColor: '#E46D47',
                      logoBottom:
                        'rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12',
                      offerIds: ['d1421eb2-25a1-449f-9b07-9c16494d06de'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'NO CODE REQUIRED',
                      description: 'ABOVE ₹600',
                      offerType: 'offers',
                      restId: '281469',
                      offerLogo:
                        'rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12',
                      descriptionTextColor: '#7302060C',
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD',
                    },
                  },
                  {
                    info: {
                      header: 'FLAT ₹75 OFF',
                      offerTagColor: '#E46D47',
                      logoBottom:
                        'rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12',
                      offerIds: ['ae66d213-f402-44c5-82aa-80b701816226'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'NO CODE REQUIRED',
                      description: 'ABOVE ₹600',
                      offerType: 'offers',
                      restId: '281469',
                      offerLogo:
                        'rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12',
                      descriptionTextColor: '#7302060C',
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD',
                    },
                  },
                  {
                    info: {
                      header: '15% OFF UPTO ₹300',
                      offerTagColor: '#E46D47',
                      logoBottom:
                        'rng/md/ads/production/15fb1cfe885005447dc8375e7970600f',
                      offerIds: ['550c1f2e-9964-49d3-9bba-49997fe73e44'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE CITIFOODIE',
                      description: 'ABOVE ₹1200',
                      offerType: 'offers',
                      restId: '281469',
                      offerLogo:
                        'rng/md/ads/production/15fb1cfe885005447dc8375e7970600f',
                      descriptionTextColor: '#7302060C',
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD',
                    },
                  },
                  {
                    info: {
                      header: 'FLAT ₹150 OFF',
                      offerTagColor: '#E46D47',
                      logoBottom:
                        'rng/md/ads/production/59ef5e58052532ad85a185bf516eccce',
                      offerIds: ['ba70b6b0-d77f-47ba-a660-f40cbdf54fac'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE AMEX150',
                      description: 'ABOVE ₹600',
                      offerType: 'offers',
                      restId: '281469',
                      offerLogo:
                        'rng/md/ads/production/59ef5e58052532ad85a185bf516eccce',
                      descriptionTextColor: '#7302060C',
                    },
                    cta: {
                      type: 'OFFER_HALF_CARD',
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge',
                      badges: {},
                      vegOnlyDetails: {
                        imageId: 'AutoVegOnly_qkjowj',
                        title: 'Showing only vegetarian options.',
                        description:
                          'Tap on the VEG ONLY button to turn off the setting',
                      },
                      topRatedFilter: {},
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Diwali Product',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '127225231',
                              name: 'Festive Bonbon Box 8 Pcs',
                              category: 'Diwali Product',
                              description:
                                'A variety of bonbons with unique flavour pairings, ranging from caramel with almond, pistachio with saffron, caramel with rose and milk chocolate with mango. ',
                              imageId: '913677a8aea0c86a415b6f3b99962e59',
                              inStock: 1,
                              isVeg: 1,
                              price: 90000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '127225232',
                              name: 'Overload Nut Cakes 5 Pcs',
                              category: 'Diwali Product',
                              description:
                                'Five scrumptious cakes loaded with different nutty toppings, each covered in a special coating to complement its flavours. ',
                              imageId: '1ad8380fe50d75c5de30680ebae93f9f',
                              inStock: 1,
                              price: 130000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '127225233',
                              name: 'Marshmallow Bombs 6 Pcs',
                              category: 'Diwali Product',
                              description:
                                'Exciting marshmallow domes with a surprise fruit or caramel filling and a crunchy biscuit base, all encased in a delicate chocolate coating. ',
                              imageId: 'b6c29396856271c56adde724cc015810',
                              inStock: 1,
                              price: 120000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '127225234',
                              name: 'Mixed Nut Caramel Mou Bark 330g',
                              category: 'Diwali Product',
                              description:
                                'A chunky bark of dark and milk chocolate, loaded with salted caramel mou and caramelized nuts, ready to be shattered with a hammer into deliciously indulgent pieces. ',
                              imageId: 'a1070738f11fe66496b455a2b4cb5668',
                              inStock: 1,
                              isVeg: 1,
                              price: 120000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '127225235',
                              name: 'Hazelnut Mysore Pak 900g',
                              category: 'Diwali Product',
                              description:
                                'A beloved indian classic with a twist of pastry magic. This hazelnut praline mysore pak is layered with a hazelnut milk chocolate gianduja crunch. ',
                              imageId: 'a0a2a3ec5a5ac364fd0bee5bf8de8cb6',
                              inStock: 1,
                              isVeg: 1,
                              price: 150000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '127225236',
                              name: 'Almond Hazelnut Crunch Bar 120g',
                              category: 'Diwali Product',
                              description:
                                'A glorious chocolate bar filled with almond praline and homemade hazelnut crunch, giving you a burst of nostalgic textures. ',
                              imageId: '2de74e675bde3fd8be916d8c55dc1746',
                              inStock: 1,
                              isVeg: 1,
                              price: 50000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '127552252',
                              name: 'Diwali Hamper',
                              category: 'Diwali Product',
                              description:
                                "Featuring an array of delectable treats, including hazelnut mysore pak, bonbons, marshmallows, nut cakes, and more, it's the ultimate gift to convey love and good wishes to your beloved ones this festive season. ",
                              imageId: '01a0f9d094d7258bef5b596a979b1bf0',
                              inStock: 1,
                              isVeg: 1,
                              price: 600000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Bakery',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461515',
                              name: 'Butter Croissant',
                              category: 'Bakery',
                              description:
                                'Buttery flaky viennoiserie baked to golden crisp perfection. ',
                              imageId: 'ibopjotvtdd9urynmpio',
                              inStock: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '92 ratings',
                                  ratingCountV2: '92',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461518',
                              name: 'Pain Au Chocolat',
                              category: 'Bakery',
                              description:
                                'Fresh baked croissant inserted with dark couverture chocolate batons. ',
                              imageId: 'ugrj9pseotjva2jtgrne',
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '67 ratings',
                                  ratingCountV2: '67',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '68788149',
                              name: 'Almond Croissant',
                              category: 'Bakery',
                              description:
                                'Rich and buttery croissant filled with a sweet frangipan and topped with toasted almond flakes. ',
                              imageId: 'megyy5cmso4ufk3b7dsn',
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '232 ratings',
                                  ratingCountV2: '232',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461512',
                              name: 'Caramelised Milk Chocolate Croissant',
                              category: 'Bakery',
                              description:
                                'Freshly baked croissant with luscious dulce filling and dipped into gourmand milk chocolate and almonds. ',
                              imageId: 'a4598aaad629918959ee32061ff10116',
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '110 ratings',
                                  ratingCountV2: '110',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461502',
                              name: 'Golden Milk & Lemon Coconut Beignets',
                              category: 'Bakery',
                              description:
                                'Soft and delectable golden milk berliner stuffed with lemon coconut chantilly',
                              imageId: '8c2eadf6bab7b629cde71234beb916d9',
                              inStock: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '58 ratings',
                                  ratingCountV2: '58',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461478',
                              name: 'Coffee & Milk Berliner',
                              category: 'Bakery',
                              description:
                                'Berliner stuffed with coffee milk chocolate cream and glazed with dark chocolate gourmand. ',
                              imageId: '4150ecc8c3903384cbd66ea8c567b186',
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '88 ratings',
                                  ratingCountV2: '88',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461539',
                              name: 'Banana Tea Cake',
                              category: 'Bakery',
                              description:
                                'Soft and moist tea cake made with the magical combination of bananas and walnuts. ',
                              imageId: 'k5vubzkka0jzb5lo7kxc',
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '20 ratings',
                                  ratingCountV2: '20',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461504',
                              name: 'Tellicherry Pepper Chicken Puff',
                              category: 'Bakery',
                              description:
                                'Freshly baked puff pastry with curried chicken mince filling and topped off with curry leaf powder. ',
                              imageId: 'wwe0vvnehlzt2ae3drmf',
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '42 ratings',
                                  ratingCountV2: '42',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461507',
                              name: 'Barbecue Feta Danish',
                              category: 'Bakery',
                              description:
                                'Layered croissant dough filled with barbeque tomatoes and caramelised onion and topped with fresh feta. ',
                              imageId: 'wwi36zncydqtmm5dmmqf',
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '15 ratings',
                                  ratingCountV2: '15',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '88529219',
                              name: 'Chicken Balchao Frankfurter Danish',
                              category: 'Bakery',
                              description:
                                'Baked croissant dough, topped with tangy balchao paste, grilled chicken frankfurter and garnished with fried onions and leek. ',
                              imageId: 'pb1j9xpxcb3zaf2u8at7',
                              inStock: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '43 ratings',
                                  ratingCountV2: '43',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461490',
                              name: 'Jalapeno & Cheddar Fondue Berliner',
                              category: 'Bakery',
                              description:
                                'Delectable berliner stuffed with melted cheddar cheese fondue and pickled jalapenos, topped off with fried onions',
                              imageId: 'i5dtn8dpfi8f8act7qrz',
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '24 ratings',
                                  ratingCountV2: '24',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461517',
                              name: 'Kerala Onion, Ham & Cheddar Croissant',
                              category: 'Bakery',
                              description:
                                'Croissant stuffed with ham & cheese and topped off with crispy kerala onion and cheese. ',
                              imageId: 'c729b42c7a876265cfbb6d8be94f573e',
                              inStock: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '55 ratings',
                                  ratingCountV2: '55',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461506',
                              name: 'Creamy Chicken Calzone',
                              category: 'Bakery',
                              description:
                                'Oven baked fold pizza stuffed with a creamy chicken, garnished with italian seasoning and crispy chicken floss. ',
                              imageId: 'jg7vtwqztlbwq51ivdwj',
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '26 ratings',
                                  ratingCountV2: '26',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '123734804',
                              name: 'Multigrain Guava Perad Croissant',
                              category: 'Bakery',
                              description:
                                'Multigrain croissant cube filled with guava, cream cheese and topped with guava perad. ',
                              imageId: '6f3568648ebf4b6a0fe7fe1351c03747',
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '123734805',
                              name: 'Coconut & Pineapple Danish',
                              category: 'Bakery',
                              description:
                                'Danish filled with coconut cream and pineapple marmalade and topped of with fresh pineapple. ',
                              imageId: 'd31b2d19ff4ec8df08aa4f4b5792361d',
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '123734806',
                              name: 'Nutella Tress',
                              category: 'Bakery',
                              description:
                                'Freshly baked cruffin filled with nutella ganache and subtle flavours of clove. ',
                              imageId: 'a2f1274a1b3c9cee4e80213f772afeba',
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '123734807',
                              name: 'Pain Suisse',
                              category: 'Bakery',
                              description:
                                'A swiss delicacy of laminated dough filled with custard, crumble, and glazed with nannari syrup. ',
                              imageId: '41ac3176ccee46c51506d1200c5e356a',
                              inStock: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '123734810',
                              name: 'Porky Puff',
                              category: 'Bakery',
                              description:
                                'Puff pastry stuffed with slow cooked 5 spice pork. ',
                              imageId: 'a41abfcc3a9ed3c0527fd2c7fc547dc2',
                              inStock: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '123734811',
                              name: 'Troissant',
                              category: 'Bakery',
                              description:
                                'A uniquely laminated, crispy triple-croissant glazed with spiced syrup. ',
                              imageId: '2cc414651daf6ddc47105c039ba6fefa',
                              inStock: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Breads',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461545',
                              name: 'Sourdough Bread Turmeric Walnut And Flax Seeds',
                              category: 'Breads',
                              description:
                                'Slow fermented and artisanal crafted, crusty bread with flavours of turmeric, walnuts and flaxseed. ',
                              imageId: 'e4m5qqo212jhmwxhcz3f',
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isGuiltfree: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '15 ratings',
                                  ratingCountV2: '15',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461521',
                              name: 'Baguette',
                              category: 'Breads',
                              description:
                                'Freshly baked french bread that is soft and porous on the inside while hard and crusty on the outside. ',
                              imageId: 'mhxrmbl8u1iayeko1cac',
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.9',
                                  ratingCount: '20 ratings',
                                  ratingCountV2: '20',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461473',
                              name: 'Multigrain Sandwich Jr',
                              category: 'Breads',
                              description:
                                'Made with the goodness of whole wheat and a whole lot of multigrain, it is still rich, buttery and flaky. ',
                              imageId: 'kjv7an8rzlyypmce0lpv',
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isGuiltfree: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.9',
                                  ratingCount: '17 ratings',
                                  ratingCountV2: '17',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '88526279',
                              name: 'Babka',
                              category: 'Breads',
                              description:
                                'A rich sweet braided bread, with flavours of almond and chocolate paste',
                              imageId: '7f79ecdd13980992066ecc1b381df168',
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '31 ratings',
                                  ratingCountV2: '31',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461468',
                              name: 'Milk Bread Jr',
                              category: 'Breads',
                              description:
                                'Freshly baked and uncut loaf perfect for your everyday sandwich. ',
                              imageId: '997c5ce1c83e256a2f235ec02beeeb9f',
                              inStock: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '14 ratings',
                                  ratingCountV2: '14',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461525',
                              name: 'Milk Bread',
                              category: 'Breads',
                              description:
                                'Freshly baked and uncut loaf perfect for your everyday sandwich. ',
                              imageId: 'cieovvwlz03uvtodhfc1',
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory',
                      title: 'Pastry',
                      categories: [
                        {
                          title: 'Pastry Products',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '76953788',
                                  name: 'Tiramisu (280gms)',
                                  category: 'Pastry',
                                  description:
                                    'Most elegant italian dessert, blending in the bold flavours of espresso, rich cocoa and gorgeous mascarpone all layered between the lightest savoiardi sponge. ',
                                  imageId: 'o1cpvdvgt7tjeavcjv5z',
                                  inStock: 1,
                                  price: 70000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {
                                    text: 'Bestseller',
                                    textColor: '#ffffff',
                                    topBackgroundColor: '#d53d4c',
                                    bottomBackgroundColor: '#b02331',
                                  },
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.7',
                                      ratingCount: '65 ratings',
                                      ratingCountV2: '65',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461505',
                                  name: 'Brownie',
                                  category: 'Pastry',
                                  description:
                                    'Dense and fudgy chocolate brownie squares, topped with a sprinkle of sea salt to balance off the rich flavours. ',
                                  imageId: 'ig4sr6ex8cggol1owk4x',
                                  inStock: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {
                                    text: 'Bestseller',
                                    textColor: '#ffffff',
                                    topBackgroundColor: '#d53d4c',
                                    bottomBackgroundColor: '#b02331',
                                  },
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.9',
                                      ratingCount: '26 ratings',
                                      ratingCountV2: '26',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461590',
                                  name: 'Chocolate Cup Cake (4 Pcs)',
                                  category: 'Pastry',
                                  description:
                                    'Rich and delicate chocolate cupcake, swirled with lip smacking chocolate ganache and topped off with shaved chocolate',
                                  imageId: 'roljohrjzvxslm8666an',
                                  inStock: 1,
                                  price: 50000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.9',
                                      ratingCount: '21 ratings',
                                      ratingCountV2: '21',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461602',
                                  name: '7 Seven Chocolate Mousse Cake (270gms)',
                                  category: 'Pastry',
                                  description:
                                    'Rich and velvety chocolate mousse cake with chocolate crumble and dark chocolate ganache',
                                  imageId: 'uj3txl16293oniliqboc',
                                  inStock: 1,
                                  price: 50000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.7',
                                      ratingCount: '40 ratings',
                                      ratingCountV2: '40',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461557',
                                  name: 'Signature Chocolate Cake',
                                  category: 'Pastry',
                                  description:
                                    'Lavonne?s classic signature chocolate cake with layers of chocolate sponge and chocolate cream enclosed in a decadent chocolate mousse',
                                  imageId: '72a6e93720856c07698c019b3fe04b5b',
                                  inStock: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.8',
                                      ratingCount: '38 ratings',
                                      ratingCountV2: '38',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '100110100',
                                  name: 'Carrot Cake',
                                  category: 'Pastry',
                                  description:
                                    'Carrot cake baked with a crunchy buttery crumble topped with hazelnut praline and caramelised white chocolate cheese cremeux and orange gel',
                                  imageId: '9e676b124d7f771385ee6f340c973dfb',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.3',
                                      ratingCount: '23 ratings',
                                      ratingCountV2: '23',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '100110106',
                                  name: 'Classic Pineapple',
                                  category: 'Pastry',
                                  description:
                                    'Vanilla cake with pineapple confit , coconut mousse topped with lime vanilla namelaka',
                                  inStock: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.7',
                                      ratingCount: '7 ratings',
                                      ratingCountV2: '7',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734792',
                                  name: 'Raspberry Lamington',
                                  category: 'Pastry',
                                  description:
                                    'Light lemon spongecake soaked in raspberry syrup,with desiccated coconut namelaka and a raspberry confit. ',
                                  imageId: '2d5a55c417f3966eb976b15307b44b4a',
                                  inStock: 1,
                                  price: 33000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '5.0',
                                      ratingCount: '3 ratings',
                                      ratingCountV2: '3',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734793',
                                  name: 'Inspiration Opera',
                                  category: 'Pastry',
                                  description:
                                    'Coffee-soaked jocnode sponge,coffee buttercream,dark chocolate ganache and mousse,topped with mascarpone namelaka. ',
                                  imageId: '42f95fc22ce2001ac3779077fd753e48',
                                  inStock: 1,
                                  price: 33000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734794',
                                  name: 'Strawberry Rice Pudding',
                                  category: 'Pastry',
                                  description:
                                    'Rice coconut pudding with strawberry compote & mascarpone lime mousse in a ruby chocolate coating with strawberry gel. ',
                                  imageId: '20b2f37dc324894081e3cdb6dba042e7',
                                  inStock: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734795',
                                  name: 'Chocolate Caramel Profiterole',
                                  category: 'Pastry',
                                  description:
                                    'Caramel-filled profitrole,vanilla namelaka,soft caramel ganache,hazelnut chocolate streusel cake and dark chocolate coating. ',
                                  imageId: '08df51a6f6fe0ab21d6d135d94d58e3d',
                                  inStock: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.6',
                                      ratingCount: '5 ratings',
                                      ratingCountV2: '5',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734796',
                                  name: 'Fruit & Nut',
                                  category: 'Pastry',
                                  description:
                                    'Nutty chocolate cake with mixed berry compote and chocolate mousse,dipped in crunchy gourmand glaze. ',
                                  imageId: 'e47e937d189c7e5320e0596eec3ed6d2',
                                  inStock: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '3.1',
                                      ratingCount: '4 ratings',
                                      ratingCountV2: '4',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734797',
                                  name: 'Blueberry & Lemon Mascarpone Tarte',
                                  category: 'Pastry',
                                  description:
                                    'Lemon blueberry sponge with mascarpone mousse, blueberry confit, lime namelaka and blueberries. ',
                                  imageId: 'a8221e45e5f3ece242d1a1ed5429c567',
                                  inStock: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734798',
                                  name: 'Vegan Pecan Chocolate Brownie',
                                  category: 'Pastry',
                                  description:
                                    '70% dark chocolate brownie, topped with chocolate whipped ganache, pacan cream and pecan praline. ',
                                  imageId: '0f8b858a4ed57243aeafd51e9d6963fd',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734799',
                                  name: 'Pistachio & Saffron Apricot Cheesecake',
                                  category: 'Pastry',
                                  description:
                                    'Brie set cheesecake with pistachio cremeux, topped with pistachio whipped ganache and apricot confit. ',
                                  imageId: 'ffd77f719adadd5bfea40fc5e6816083',
                                  inStock: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '1.6',
                                      ratingCount: '3 ratings',
                                      ratingCountV2: '3',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734800',
                                  name: 'Hazelnut Caramel Basque',
                                  category: 'Pastry',
                                  description:
                                    'Basque cheesecake topped with creamy soft caramel chantilly and hazelnut praline, studded with caramelized hazelnut. ',
                                  imageId: 'f5112ddb3066408a84a4db41de0940d9',
                                  inStock: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734801',
                                  name: 'Chocolate Muffin',
                                  category: 'Pastry',
                                  description:
                                    'Moist and indulgent, a loaded double chocolate chip muffin. ',
                                  imageId: '77158a3cae28f077fe503f538f186b32',
                                  inStock: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734802',
                                  name: 'Blueberry & Lime Coconut Muffin',
                                  category: 'Pastry',
                                  description:
                                    'Lemon coconut muffin filled with a blueberry compote. ',
                                  imageId: '2e8d184f4180026038df3360afcd1c13',
                                  inStock: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734803',
                                  name: 'Dulce Tres Leches',
                                  category: 'Pastry',
                                  description:
                                    'Milk cake soaked in dulce de leche, with salted caramel, hazelnut praline and a light caramel chantilly. ',
                                  imageId: '68fd11c445327efc6aeeaf62211c542d',
                                  inStock: 1,
                                  price: 80000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Bowl',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461569',
                              name: 'Granola Powerbowl',
                              category: 'Bowl',
                              description:
                                'Granola with yoghurt, fresh cut fruit and a drizzle of honey',
                              imageId: 'ryzunwj2wvpfartopqfx',
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '75 ratings',
                                  ratingCountV2: '75',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '69394640',
                              name: 'Seasonal Smoothie Bowl',
                              category: 'Bowl',
                              description:
                                'Rich fruit smoothie dish topped with cut fruits, granola and honey',
                              imageId: 'ddzt1kyxe2dm0yqdozrb',
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '83 ratings',
                                  ratingCountV2: '83',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Croissanwich',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461580',
                              name: 'Bacon Egg And Cheese Croissanwich',
                              category: 'Croissanwich',
                              description:
                                'Savoury and sweet toppings on two sourdough toasts or filled inside a sliced croissant',
                              imageId: 'rott01jidoph2pfd3c15',
                              inStock: 1,
                              price: 42000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '32 ratings',
                                  ratingCountV2: '32',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '71604043',
                              name: 'Creamy Chicken Salad Croissanwich',
                              category: 'Croissanwich',
                              description:
                                'Savoury and sweet toppings on two sourdough toasts or filled inside a sliced croissant',
                              imageId: 'dlds741xtwkkvfzpbk2p',
                              inStock: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '60 ratings',
                                  ratingCountV2: '60',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '69394646',
                              name: 'Creamy Egg Salad Croissanwich',
                              category: 'Croissanwich',
                              description:
                                'Savoury and sweet toppings on two sourdough toasts or filled inside a sliced croissant',
                              imageId: 'cbtyd1uxp9ym6d8y3xhh',
                              inStock: 1,
                              price: 33000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '34 ratings',
                                  ratingCountV2: '34',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461565',
                              name: 'Pesto Grilled English Vegetable Croissanwich',
                              category: 'Croissanwich',
                              description:
                                'Savoury and sweet toppings on two sourdough toasts or filled inside a sliced croissant',
                              imageId: 't1ersvxu6gvnr2ktfeeh',
                              inStock: 1,
                              isVeg: 1,
                              price: 33000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '39 ratings',
                                  ratingCountV2: '39',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Salad',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461574',
                              name: 'Bruleed Figs And Roast Beets',
                              category: 'Salad',
                              description:
                                'With fresh buffalo mozzarella basil and arugula',
                              imageId: 'sezlhghkkt046mp3uapx',
                              inStock: 1,
                              isVeg: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '120943372',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '104448448',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '104448447',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '56 ratings',
                                  ratingCountV2: '56',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461572',
                              name: 'Grilled English Vegetable Salad With Crumbled Feta',
                              category: 'Salad',
                              imageId: 'gy5iwrdymwakj1ml47sd',
                              inStock: 1,
                              isVeg: 1,
                              price: 37000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '120943373',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '104448450',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '104448449',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '31 ratings',
                                  ratingCountV2: '31',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461576',
                              name: 'Seasonal Cold Fruit Salad With Fresh Herbs And Candied Walnuts',
                              category: 'Salad',
                              imageId: 'bp2vzyzrcfytjwlvfh0q',
                              inStock: 1,
                              isVeg: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '120943374',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '104448452',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '104448451',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '16 ratings',
                                  ratingCountV2: '16',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461578',
                              name: 'Slice Tenderloin Salad With Arugula In Orange Mustard Vinaigrette',
                              category: 'Salad',
                              imageId: 'qxnlbl7fv5ajbroefcsb',
                              inStock: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '120943375',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '104448454',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '104448453',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.9',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461582',
                              name: 'Grilled Chicken With Charred Pineapple Salad',
                              category: 'Salad',
                              imageId: 'bwf7jit1n21ykbr8tyvm',
                              inStock: 1,
                              price: 42000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '120943376',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '104448456',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '104448455',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '24 ratings',
                                  ratingCountV2: '24',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461593',
                              name: 'Hearty Cobb Salad With Chicken, Boiled Eggs And Bacon',
                              category: 'Salad',
                              imageId: 'o7mwc1pibpyh4uz81hvx',
                              inStock: 1,
                              price: 44000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '120943377',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '104448458',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '104448457',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '38 ratings',
                                  ratingCountV2: '38',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Burgers',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461603',
                              name: 'Bbq Pulled Pork With Sliced Green Apples Burger',
                              category: 'Burgers',
                              imageId: 'ac7n0qrj0m9dagn8uai3',
                              inStock: 1,
                              price: 51000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.9',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461604',
                              name: 'Grilled Buff Tenderloin Bulgogi Burger',
                              category: 'Burgers',
                              description:
                                'With caramelized onions and gochujang paste. ',
                              imageId: 'xoietaygo3jagq8gmtv8',
                              inStock: 1,
                              price: 53000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461599',
                              name: 'Fried Spicy Chicken With Coleslaw Burger',
                              category: 'Burgers',
                              imageId: 'exdtfbbtpztun4gaswdl',
                              inStock: 1,
                              price: 48000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '18 ratings',
                                  ratingCountV2: '18',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461605',
                              name: 'Double Buff Patty Cheese Burger With Bacon And Fried Egg',
                              category: 'Burgers',
                              imageId: 'yi6c3wrnfedfvqg7hjwg',
                              inStock: 1,
                              price: 58000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '9 ratings',
                                  ratingCountV2: '9',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461598',
                              name: 'Crispy Wasabi Prawn Po Boy Burger',
                              category: 'Burgers',
                              imageId: 'wa93ofmidg75oxtuvhmn',
                              inStock: 1,
                              price: 48000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '5.0',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461600',
                              name: 'Single Patty Cheese Burger With Bacon And Fried Egg',
                              category: 'Burgers',
                              imageId: 'imykucbeyihjg0omjezc',
                              inStock: 1,
                              price: 48000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '24 ratings',
                                  ratingCountV2: '24',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Sandwiches',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461575',
                              name: 'Grilled Chicken With Fresh Tomatoes And Mozzarella Sandwich',
                              category: 'Sandwiches',
                              imageId: 'm82ptwj8dxprgllhb5st',
                              inStock: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '22 ratings',
                                  ratingCountV2: '22',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461581',
                              name: 'Crispy Bacon, Egg And Cheese With Mustard Mayo Sandwich',
                              category: 'Sandwiches',
                              imageId: 'ufcv9c5j4z1vsahxeyxc',
                              inStock: 1,
                              price: 42000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '28 ratings',
                                  ratingCountV2: '28',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461568',
                              name: 'English Vegetables Sandwich',
                              category: 'Sandwiches',
                              description:
                                'With sun dried tomatoes, mozarella and pesto mayo. ',
                              imageId: 'r1cwbfkkqtpz9uipnlwb',
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '15 ratings',
                                  ratingCountV2: '15',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Pasta',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461588',
                              name: 'Basil Pesto Spaghetti With Grilled Vegetables And Bacconcini',
                              category: 'Pasta',
                              imageId: 'zzmi5lh3nbkiuqh8hgv7',
                              inStock: 1,
                              isVeg: 1,
                              price: 44000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '88445836',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '76401420',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401421',
                                      name: 'Grilled Veg',
                                      price: 12000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401419',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.9',
                                  ratingCount: '22 ratings',
                                  ratingCountV2: '22',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461589',
                              name: 'Browned Butter And Sage Fettuccine',
                              category: 'Pasta',
                              description:
                                'With sliced shitake mushrooms and parmesan breadcrumbs. ',
                              imageId: 'zqnhjvtd5o2duuo08o6d',
                              inStock: 1,
                              isVeg: 1,
                              price: 44000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '88445837',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '76401423',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401424',
                                      name: 'Grilled Veg',
                                      price: 12000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401422',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '47 ratings',
                                  ratingCountV2: '47',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461583',
                              name: 'Penne Alfredo With Grilled Vegetables And Bocconcini',
                              category: 'Pasta',
                              imageId: 'yrkqadxiz8efw7umxrtw',
                              inStock: 1,
                              isVeg: 1,
                              price: 42000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '88445838',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '76401426',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401427',
                                      name: 'Grilled Veg',
                                      price: 12000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401425',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461595',
                              name: 'Penne In Browned Bechamel',
                              category: 'Pasta',
                              description:
                                'With shitake and button mushrooms and sun dried tomatoes',
                              imageId: 'oct4wqvwxzuz0jkiopku',
                              inStock: 1,
                              isVeg: 1,
                              price: 46000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '88445839',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '76401430',
                                      name: 'Grilled Veg',
                                      price: 12000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401429',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401428',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.9',
                                  ratingCount: '26 ratings',
                                  ratingCountV2: '26',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461579',
                              name: 'Penne With Roast Eggplant',
                              category: 'Pasta',
                              description:
                                'With roast eggplant, bell peppers, olives, sun dried tomatoes and parmesan breadcrumbs',
                              imageId: 'r1jbxhgoistmo9ermosw',
                              inStock: 1,
                              isVeg: 1,
                              price: 41000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '88445840',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '76401432',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401433',
                                      name: 'Grilled Veg',
                                      price: 12000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401431',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '21 ratings',
                                  ratingCountV2: '21',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '54836940',
                              name: 'Spaghetti Alla Puttanesca',
                              category: 'Pasta',
                              imageId: 'nz4qcweuuo8smasbiosj',
                              inStock: 1,
                              isVeg: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '88445841',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '76401435',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401436',
                                      name: 'Grilled Veg',
                                      price: 12000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401434',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '35 ratings',
                                  ratingCountV2: '35',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461597',
                              name: 'Bacon And Shrimps Fettuccine With Wilted Greens In Creamy Bechamel',
                              category: 'Pasta',
                              imageId: 'hmpyyfzg7selpgnity1a',
                              inStock: 1,
                              price: 48000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '88445842',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '76401438',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401439',
                                      name: 'Grilled Veg',
                                      price: 12000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401437',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'NONVEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '21 ratings',
                                  ratingCountV2: '21',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97461573',
                              name: 'Spaghetti Aglio E Olio',
                              category: 'Pasta',
                              imageId: 'xul44cjqha0kiykasamr',
                              inStock: 1,
                              isVeg: 1,
                              price: 39000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: '88445843',
                                  groupName: 'Add Ons',
                                  choices: [
                                    {
                                      id: '76401441',
                                      name: 'Grilled Chicken',
                                      price: 12000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401442',
                                      name: 'Grilled Veg',
                                      price: 12000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: '76401440',
                                      name: 'Crispy Bacon',
                                      price: 12000,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: 'VEG',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '74 ratings',
                                  ratingCountV2: '74',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory',
                      title: 'Beverage',
                      categories: [
                        {
                          title: 'Coffee',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '54836953',
                                  name: 'Americano',
                                  category: 'Beverage',
                                  description:
                                    'Rich aromatic coffee brewed along with hot water. ',
                                  imageId: 'hovrpzv7rfrhzgpsaydv',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '5.0',
                                      ratingCount: '16 ratings',
                                      ratingCountV2: '16',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461508',
                                  name: 'Cafe Latte',
                                  category: 'Beverage',
                                  description:
                                    'Freshly brewed espresso balanced with steamed milk and a thin layer of foam. ',
                                  imageId: 'anamt4saylfpcunswryw',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461537',
                                  name: 'Cafe Mocha',
                                  category: 'Beverage',
                                  description:
                                    'A warm infusion of couverture dark chocolate and coffee. ',
                                  imageId: 'mao54nqiejj7ypyqotky',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '3.8',
                                      ratingCount: '9 ratings',
                                      ratingCountV2: '9',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '54836951',
                                  name: 'Cappuccino',
                                  category: 'Beverage',
                                  description:
                                    'Freshly brewed espresso with an equal amount of steamed milk topped with foam. ',
                                  imageId: 'tsbkkzhqmeudnmudikox',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.9',
                                      ratingCount: '67 ratings',
                                      ratingCountV2: '67',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '54836950',
                                  name: 'Cold Coffee',
                                  category: 'Beverage',
                                  description:
                                    'The original iced milk-coffee blended to perfection and served cold. ',
                                  imageId: 'lwc4gijmjrrrzo0m9elg',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {
                                    text: 'Bestseller',
                                    textColor: '#ffffff',
                                    topBackgroundColor: '#d53d4c',
                                    bottomBackgroundColor: '#b02331',
                                  },
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.7',
                                      ratingCount: '145 ratings',
                                      ratingCountV2: '145',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '54836948',
                                  name: 'Filter Coffee',
                                  category: 'Beverage',
                                  description:
                                    'A rich and aromatic variation of the traditional south indian styled coffee. ',
                                  imageId: 'ighmzpsxbhyqlnyawxvf',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.3',
                                      ratingCount: '10 ratings',
                                      ratingCountV2: '10',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461516',
                                  name: 'Flat White',
                                  category: 'Beverage',
                                  description:
                                    'An espresso dominant beverage topped with velvety foam. ',
                                  imageId: 'wvqmo1xgmso6tuzkvzox',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '5.0',
                                      ratingCount: '3 ratings',
                                      ratingCountV2: '3',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461472',
                                  name: 'Iced Americano',
                                  category: 'Beverage',
                                  description:
                                    'The refreshing goodness of an americano served ice cold. ',
                                  imageId: 'skk6wye7ff7p37pclh6z',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '5.0',
                                      ratingCount: '4 ratings',
                                      ratingCountV2: '4',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '54836902',
                                  name: 'Iced Latte',
                                  category: 'Beverage',
                                  description:
                                    'Freshly brewed coffee blended and balanced with cold milk and foam. ',
                                  imageId: 'jxs7dc9bzm4qkp4kkyzw',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.9',
                                      ratingCount: '16 ratings',
                                      ratingCountV2: '16',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '54836903',
                                  name: 'Iced Mocha',
                                  category: 'Beverage',
                                  description:
                                    'The perfect balance of dark chocolate and coffee, served cold. ',
                                  imageId: 'eqi1ng8io8mxina7zn4s',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.5',
                                      ratingCount: '15 ratings',
                                      ratingCountV2: '15',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '87929209',
                                  name: 'Vietnamese Iced Coffee',
                                  category: 'Beverage',
                                  description:
                                    'Traditional vietnamese beverage made with freshly brewed coffee and condensed milk. ',
                                  imageId: 'nffxqrima3vnt7mjvaaw',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.9',
                                      ratingCount: '50 ratings',
                                      ratingCountV2: '50',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461522',
                                  name: 'Cold Brew Black',
                                  category: 'Beverage',
                                  description:
                                    'Refreshing cold coffee beverage steeped overnight and served ice cold. ',
                                  imageId: 'fg9bgvhudv26gv9mznda',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '5.0',
                                      ratingCount: '3 ratings',
                                      ratingCountV2: '3',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461523',
                                  name: 'Cold Brew Cinnamon',
                                  category: 'Beverage',
                                  description:
                                    'Refreshing cold coffee beverage steeped overnight and flavoured with cinnamon bark. ',
                                  imageId: 'ligvee8pubvaa67v68bv',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.7',
                                      ratingCount: '6 ratings',
                                      ratingCountV2: '6',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '71604035',
                                  name: 'Cold Brew Mint',
                                  category: 'Beverage',
                                  description:
                                    'Refreshing cold coffee beverage steeped overnight and balanced off with flavours of mint. ',
                                  imageId: 'iiu2dnf4vsnujlfizjcs',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '5.0',
                                      ratingCount: '7 ratings',
                                      ratingCountV2: '7',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: 'Coffees',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '71604036',
                                  name: 'Cold Brew Classic',
                                  category: 'Beverage',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '3.3',
                                      ratingCount: '5 ratings',
                                      ratingCountV2: '5',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: 'Dairy Delights',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461533',
                                  name: 'Banana Caramel Thickshake',
                                  category: 'Beverage',
                                  description:
                                    'A smooth blend of fresh bananas along with caramel sauce, ice cream and cold milk, served over ice. ',
                                  imageId: 'q13iokuxm99eswfb01rv',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461544',
                                  name: 'Signature Chocolate Shake',
                                  category: 'Beverage',
                                  description:
                                    'Lavonne signature chocolate cake blended along with ice-cream, chocolate ganache and cold milk. ',
                                  imageId: 'yvslbhvkhvw5amlqibni',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '5.0',
                                      ratingCount: '3 ratings',
                                      ratingCountV2: '3',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '54836947',
                                  name: 'Belgian Hot Chocolate With Marshmallows',
                                  category: 'Beverage',
                                  description:
                                    'A rich delicious concoction of the finest couverture dark chocolate, steamed with milk and topped with marshmallows. ',
                                  imageId: 'arp2ffik6q0avtlyyzh1',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.5',
                                      ratingCount: '130 ratings',
                                      ratingCountV2: '130',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734785',
                                  name: 'Belgian Hot Chocolate With Marshmallows Classic',
                                  category: 'Beverage',
                                  inStock: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'NONVEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '123734786',
                                  name: 'Belgian Cold Chocolate',
                                  category: 'Beverage',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: 'Refreshers',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '54836913',
                                  name: 'Orange Juice',
                                  category: 'Beverage',
                                  description:
                                    'Slow and fresh pressed orange juice, with no added sugar. ',
                                  imageId: 'i82fm7do0sneag0nlpqx',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.9',
                                      ratingCount: '83 ratings',
                                      ratingCountV2: '83',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461532',
                                  name: 'Watermelon Fruit Juice',
                                  category: 'Beverage',
                                  description:
                                    'Slow and fresh pressed watermelon juice, with no added sugar. ',
                                  imageId: 'cozu3oxv5aohulpi5yie',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.9',
                                      ratingCount: '16 ratings',
                                      ratingCountV2: '16',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '120994384',
                                  name: 'Ginger Kombucha',
                                  category: 'Beverage',
                                  imageId: 'ae2cd0991161ae2b09a32813367da2aa',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 23500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '120994385',
                                  name: 'Peach Kombucha',
                                  category: 'Beverage',
                                  imageId: 'eb2f8e285f81f3e3b2477feae704955c',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 23500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '120994386',
                                  name: 'Earlgrey Lavender Kombucha',
                                  category: 'Beverage',
                                  imageId: '6faa48a27480c3b32f8b1b53a4a8ddc3',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 23500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: 'Smoothies',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '54836904',
                                  name: 'Blueberry Smoothie',
                                  category: 'Beverage',
                                  description:
                                    'A smooth blend of yoghurt, blueberry puree, ice-cream and milk',
                                  imageId: 'ddcp8hubcz84i9bdjgwp',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '5.0',
                                      ratingCount: '22 ratings',
                                      ratingCountV2: '22',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461540',
                                  name: 'Mixed Berry Smoothie',
                                  category: 'Beverage',
                                  description:
                                    'A smooth blend of yohurt, blueberry and strawberry puree, ice cream and milk',
                                  imageId: 'yfpsydyotuvhrqryrkbn',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.9',
                                      ratingCount: '9 ratings',
                                      ratingCountV2: '9',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461546',
                                  name: 'Strawberry Smoothie',
                                  category: 'Beverage',
                                  description:
                                    'A smooth blend of yoghurt, strawberry puree, ice-cream and milk',
                                  imageId: 'g5tlddy67uphx6rvfkzo',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.9',
                                      ratingCount: '11 ratings',
                                      ratingCountV2: '11',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '54836905',
                                  name: 'Banana Peanut Butter Smoothie',
                                  category: 'Beverage',
                                  description:
                                    'A smooth blend of yoghurt, fresh bananas, peanut butter, ice-cream and milk. ',
                                  imageId: 'eclgggjfzgffajktfwlp',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '5.0',
                                      ratingCount: '27 ratings',
                                      ratingCountV2: '27',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: 'Tea',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '97461524',
                                  name: 'Lemon Iced Tea',
                                  category: 'Beverage',
                                  imageId: 'twbrtlbxb5m8jyxbcyjl',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '5.0',
                                      ratingCount: '6 ratings',
                                      ratingCountV2: '6',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '88083645',
                                  name: 'Peach Iced Tea',
                                  category: 'Beverage',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '5.0',
                                      ratingCount: '6 ratings',
                                      ratingCountV2: '6',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '54836949',
                                  name: 'Pulled Chai',
                                  category: 'Beverage',
                                  description:
                                    'A popular hot milk-tea beverage made by pouring the tea back and forth briskly while aerating it to make it smoother and creamier. ',
                                  imageId: 'f7aokqsreunpjerwphsr',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.3',
                                      ratingCount: '7 ratings',
                                      ratingCountV2: '7',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo',
                      type: 'FSSAI',
                      imageId: 'fssai_final_edss9i',
                      text: ['License No. 11219333001098'],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress',
                      name: 'Lavonne',
                      area: 'St. Marks Road',
                      completeAddress:
                        'Samrah Plaza, 4/2, Ground Floor St. Mark, s Road, Bengaluru, Karnataka 560001',
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: '6bf7a1de-3b01-4c77-8d02-be1353d8cc18',
  sid: 'aag1ef39-e681-4bbf-aaae-7075acb268e1',
  deviceId: '3e6bcc65-b649-f2c4-0cad-fc5abb6ef77d',
  csrfToken: 'K5nLDN2VntXm-MEqwtEK25gl5ZIv6_UVxk70C_7Q',
};
