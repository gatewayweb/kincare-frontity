const settings = {
  "name": "kincare-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "KinCare at Home",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "kincare-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Services",
              "/services"
            ],
            [
              "Resources",
              "/resources"
            ],
            [
              "Testimonials",
              "/testimonials"
            ],
            [
              "Careers",
              "/careers"
            ],
            [
              "Contact Us",
              "/contact-us"
            ]
          ],
          "colors": {
            "darkGray": "#333333",
            "mediumGray": "#777777",
            "lightGray": "#cccccc",
            "darkBlue": "#2A58A7",
            "orange": "#F2822C",
            "lightGrayBlue": "#ECF3F9"
          },
          "weight": {
            "light": 300,
            "regular": 400,
            "bold": 700,
            "black": 900
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://kincare.gatewayweb.net",
          "api": "https://kincare.gatewayweb.net/wp-json",
          "homepage": "/home",
          "postsPage": "/blog"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast"
  ]
};

export default settings;
