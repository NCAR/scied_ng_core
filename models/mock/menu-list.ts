import { MenuList } from '../menu-list.model';

export const MENU: MenuList[] = [
  {
    "id": "forecast-hurricane",
    "cols": 1,
    "rows": 1,
    "content": {
      "title": "Forecast a HURRICANE",
      "description": "Select an upper-level high and low to see where a hurricane will go",
      "url": "prediction/flash/hurricane",
      "placeholder": {
        "width": "475",
        "height": "243",
        "image": {
          "file": "/assets/images/menu/posterframes/forecast-a-hurricane.jpg"
        },
        "mp4": {
          "file": "/assets/videos/menu/forecast-a-hurricane.mp4"
        }
      }
    }
  },
  {
    "id": "forecast-snowstorm",
    "cols": 1,
    "rows": 1,
    "content": {
      "title": "Create a SNOWSTORM",
      "description": "Drag storm systems to create an upslope storm",
      "url": "prediction/flash/snow",
      "placeholder": {
        "width": "475",
        "height": "243",
        "image": {
          "file": "/assets/images/menu/posterframes/create-a-snowstorm.jpg"
        },
        "mp4": {
          "file": "/assets/videos/menu/create-a-snowstorm.mp4"
        }
      }
    }
  },
  {
    "id": "videos",
    "cols": 1,
    "rows": 1,
    "content": {
      "title": "Videos",
      "description": "Watch videos about modeling and computer systems in the atmospheric sciences",
      "url": "prediction/flash/hurricane",
      "placeholder": {
        "width": "475",
        "height": "243",
        "image": {
          "file": "/assets/images/menu/posterframes/katrina.jpg"
        },
        "mp4": {
          "file": "/assets/videos/menu/katrina.mp4"
        }
      }
    }
  }
];
