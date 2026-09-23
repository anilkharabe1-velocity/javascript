import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - logo
 *  - Nav bar
 *
 * Body
 *  - Search
 *  - RestaurantCainer
 *      - RestaurantCard
 *
 * Footer
 *  - Copywrite
 *  - Links
 *  - Contact
 *  - address
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
        ></img>
      </div>

      <div className="nav-items">
        <ul>
          <li> Home</li>
          <li> About us</li>
          <li> Contact us</li>
          <li> Cart</li>
          <li> Help</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { name, avgRating, sla, cuisines, areaName, cloudinaryImageId } =
    props?.resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#DEDEDE" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

const resList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "9020",
      name: "Agra Sweets Banjara",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/13/2a87ca88-07ab-4dbf-8400-88594247ddbd_9020.jpg",
      locality: "West Marredpally",
      areaName: "East Nehru Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Sweets", "Desserts", "Chaat", "Snacks", "Beverages"],
      avgRating: 4.4,
      veg: true,
      parentId: "34",
      avgRatingString: "4.4",
      totalRatingsString: "42K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-09-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "45% OFF",
        subHeader: "UPTO ₹90",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
        commsStyling: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-6a47482f-aa48-4549-8d6e-a4fe4cf28a1f",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/agra-sweets-banjara-west-marredpally-east-nehru-nagar-rest9020",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "968180",
      name: "The Homely Bowls",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/11/7d124344-26c1-4840-b7e0-675d86c4d68c_968180.jpg",
      locality: "Ameerpet",
      areaName: "Ameerpet",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "South Indian"],
      avgRating: 4.1,
      parentId: "566928",
      avgRatingString: "4.1",
      totalRatingsString: "1.7K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-09-24 00:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "70% OFF",
        subHeader: "UPTO ₹140",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
        commsStyling: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-6a47482f-aa48-4549-8d6e-a4fe4cf28a1f",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/the-homely-bowls-ameerpet-rest968180",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "985481",
      name: "Roast CCx",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/3/cd3d76c3-ca5a-44ce-81ca-881259787e3c_985481.jpg",
      locality: "Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹1300 for two",
      cuisines: [
        "Cafe",
        "Desserts",
        "South Indian",
        "North Indian",
        "Asian",
        "Continental",
      ],
      avgRating: 4.4,
      parentId: "575720",
      avgRatingString: "4.4",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-09-24 00:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description:
              "Premium gourmet restaurant offering an elevated, high-quality food experience.",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description:
                    "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
        commsStyling: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.6",
          ratingCount: "6.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-6a47482f-aa48-4549-8d6e-a4fe4cf28a1f",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/roast-ccx-banjara-hills-rest985481",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1449186",
      name: "Varalakshmi Tiffins",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/22/e303496d-1d25-45e0-ad47-826c053d22a6_1065915.jpg",
      locality: "Ameerpet",
      areaName: "Ameerpet",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Biryani", "Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "6482",
      avgRatingString: "4.4",
      totalRatingsString: "<3",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-09-23 11:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
        commsStyling: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-6a47482f-aa48-4549-8d6e-a4fe4cf28a1f",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/varalakshmi-tiffins-ameerpet-rest1449186",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1753",
      name: "Bikanervala",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/319b6969-39e0-4ab4-982a-48b50c8efe8b_1753.jpg",
      locality: "Road No 1",
      areaName: "Banjara Hills",
      costForTwo: "₹450 for two",
      cuisines: ["Sweets", "Indian", "Pizzas"],
      avgRating: 4.5,
      veg: true,
      parentId: "45936",
      avgRatingString: "4.5",
      totalRatingsString: "41K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-09-23 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
        commsStyling: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-6a47482f-aa48-4549-8d6e-a4fe4cf28a1f",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/bikanervala-road-no-1-banjara-hills-rest1753",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "693475",
      name: "Yummy Bee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/2/a6ca9cb5-131e-458c-9205-cbcbcd4753e9_693475.JPG",
      locality: "Madhapur",
      areaName: "Jubilee Hills",
      costForTwo: "₹500 for two",
      cuisines: ["Cakes", "Desserts", "Bakery", "Pizzas", "Pastas", "Healthy"],
      avgRating: 4.3,
      parentId: "358572",
      avgRatingString: "4.3",
      totalRatingsString: "2.3K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 8.8,
        serviceability: "SERVICEABLE",
        slaString: "45-55 mins",
        lastMileTravelString: "8.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-09-24 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "70% OFF",
        subHeader: "UPTO ₹140",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
        commsStyling: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "1.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-6a47482f-aa48-4549-8d6e-a4fe4cf28a1f",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/yummy-bee-madhapur-jubilee-hills-rest693475",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1432947",
      name: "Blue Tokai Coffee Roasters",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/5/56f736ea-ae5a-48bc-a760-435b6d7a8ebc_32955.JPG",
      locality: "Rajbhavan Road",
      areaName: "Banjara Hills",
      costForTwo: "₹600 for two",
      cuisines: ["Coffee", "Beverages", "Cafe"],
      avgRating: 4.3,
      parentId: "2682",
      avgRatingString: "4.3",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-09-23 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description:
              "Premium gourmet restaurant offering an elevated, high-quality food experience.",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description:
                    "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
        commsStyling: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-6a47482f-aa48-4549-8d6e-a4fe4cf28a1f",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/blue-tokai-coffee-roasters-rajbhavan-road-banjara-hills-rest1432947",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "73758",
      name: "Sai Darshini Tiffins",
      cloudinaryImageId: "eeymdtpdkgxxru90w27o",
      locality: "SR Nagar",
      areaName: "SR Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "11825",
      avgRatingString: "4.4",
      totalRatingsString: "39K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-09-23 22:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description:
              "Exclusively available on Swiggy — you won't find it elsewhere.",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description:
                    "Exclusively available on Swiggy — you won't find it elsewhere.",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
        commsStyling: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "5.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-6a47482f-aa48-4549-8d6e-a4fe4cf28a1f",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/sai-darshini-tiffins-sr-nagar-rest73758",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); // object => html element
