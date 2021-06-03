 # Social Service Explorer

## Project Overview
- This app enables the user to search for local services/resources and save a list of relevant Service Sites.

## About the User
- Ideal user is a resident of Nashville/Davidson Co. who is seeking community services/resources relevant to their needs. 

## Features 
- Google Authentication
- User can create an account on login to save relevant Service Sites
- User can filter search results based on available services
- User can read Service Sites that they select
- User can update Service Sites on their list
- User can delete their list
#### STRETCH:
- User add contact number & zip code on a form to filter Service Sites from their list by distance from user (using zip code or use browser location data)
- User can select preferred days of the week to visit Service Site on form to filter for Service Sites that are not closed on the given day(s).
- User can view a map of all Service Sites avaiable pinned to a Google Map view of Davidson Co.
- User can view a map of Davidson County with their selected sites only

## Relevant Links:
- [ERD](https://dbdiagram.io/d/60b66194b29a09603d178256)
<!-- - [Project Board](https://github.com/jim-conner/capstone-e14/projects/1) -->
<!-- - [Check out the deployed site](#your-link) -->
<!-- - [Wireframes](#your-link) -->

## Code Snippet
- example of get request for specific org: `https://data.nashville.gov/resource/797j-5xh2.json?building=Cohn Community Center`
```[
    {
        "organization_name": "Metro Social Services",
        "organization_type": "Congregated Meals Site",
        "building": "Cohn Community Center",
        "address": "4805 Park Avenue",
        "city": "Nashville ",
        "state": "Tennessee",
        "zip_code": "37209",
        "phone_number": "615-601-7737",
        "contact": "Site Coordinator",
        "monday_opening_time": "9:00 AM",
        "monday_closing_time": "1:30 PM",
        "tuesday_opening_time": "9:00 AM",
        "tuesday_closing_time": "1:30 PM",
        "wednesday_opening_time": "9:00 AM",
        "wednesday_closing_time": "1:30 PM",
        "thursday_opening_time": "9:00 AM",
        "thursday_closing_time": "1:30 PM",
        "friday_opening_time": "9:00 AM",
        "friday_closing_time": "1:30 PM",
        "saturday_opening_time": "Closed",
        "saturday_closing_time": "Closed",
        "sunday_opening_time": "Closed",
        "sunday_closing_time": "Closed",
        "information_and_referral": "No",
        "counseling": "No",
        "case_management": "No",
        "life_management_skills": "No",
        "homeless_services": "No",
        "senior_nutirition": "No",
        "burial_services": "No",
        "planning": "No",
        "coordiantion_and_social_data_analysis": "No",
        "meal_delivery_to_home_bound_residents": "No",
        "nutrition_education": "Yes",
        "lunch_dinner_provided_monday_through_friday": "No",
        "senior_adult_meals": "Yes",
        "social_activies_fun_fitness_fellowship": "Yes",
        "mapped_location": {
            "latitude": "36.150961",
            "longitude": "-86.844705",
            "human_address": "{\"address\": \"4805 Park Avenue\", \"city\": \"Nashville\", \"state\": \"TN\", \"zip\": \"37209\"}"
        }
    }
]
```

## Deployed Personal Bio Site [![Netlify Status](https://api.netlify.com/api/v1/badges/1b4bfa03-03a1-4e40-ab79-f85ffed56070/deploy-status)](https://app.netlify.com/sites/jim-conner/deploys)
- [Netlify Link to Bio Site](https://jim-conner.netlify.app/)
- [Bio Site Repo](https://github.com/jim-conner/personal-bio-react)

<!-- ## Video Walkthrough of APP NAME -->

<!-- ## Project Screenshots These can be inside of your project. -->
<!-- <img width="1148" alt="Your Alt" src="your-link.png"> -->
<!-- ![Alt Text Here](https://www.yourlinkhere.com) -->

## Contributors
- [JIM CONNER](https://github.com/jim-conner)
