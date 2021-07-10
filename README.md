 # Social Services Explorer 
### [Deployed App](https://social-services-explorer.netlify.app/)
### [Loom Video Walkthrough](https://www.loom.com/share/c2c675dd294d4dc0a579010a60a18afb)

## Project Overview
Social Services Explorer showcases skills honed while a student at Nashville Software School.
This app enables the user to search for local services/resources and save a list of relevant Service Sites.

### Motivation/Context
Nonprofit and government service providers provide a wealth of resources on their websites, but often the resources are static data or basic URLs to other sites, which don't allow the user to organize and save their data for later reference.  
The challenge then is presenting the data as accessible information for the user to manipulate in real-time.  

### About the User
- Ideal user is a resident of Nashville/Davidson Co. who is seeking community services/resources relevant to their needs. 

### Features 
- Google Authentication
- User can READ all Service Sites on App load
- User who is authenticated can READ Service Sites on their own list
- User can CREATE a List to save relevant Service Sites after logging in
- User can UPDATE Service Sites on their list and edit List Name
- User can DELETE their entire list
### Stretch:
- User add contact number & zip code on a form to filter Service Sites from their list by distance from user (using zip code or use browser location data)
- User can select preferred days of the week to visit Service Site on form to filter for Service Sites that are not closed on the given day(s).
- User can view a map of all Service Sites avaiable pinned to a Google Map view of Davidson Co.

### Planning Docs:
- [ERD](https://dbdiagram.io/d/60b66194b29a09603d178256)
- [Project Board](https://github.com/jim-conner/capstone-e14/projects/1)
- [Wireframes/WorkFlows on Google Slides](https://docs.google.com/presentation/d/1A5SCPPLKYg6TkFqRbmKZ4inmh-UfrmH2fbheuLv-Zm4/edit#slide=id.gdf1d490e82_0_173)
- [Presentation Slides](https://docs.google.com/presentation/d/1dg38g_EPlypge3pvFkFWYHu847aunqBH9o_c4ewJ3A0/edit)

### Technologies
- Javascript ES6, HTML5, CSS, React.js, Reactstrap
- npm, react-router-dom, Firebase, axios, Postman, Nashville API via Socrata
- dbdiagram, VSCode, Netlify

![App Screenshot](https://github.com/jim-conner/capstone-e14/blob/development/public/capstone1.jpg)
![App Screenshot](https://github.com/jim-conner/capstone-e14/blob/development/public/capstone2.jpg)

### Deployed Personal Bio Site
- [Netlify Link to Bio Site](https://jim-conner.netlify.app/)
- [Bio Site Repo](https://github.com/jim-conner/personal-bio-react)

### Contributors
- [Jim Conner](https://github.com/jim-conner)

### Code Snippet
- [API Source](https://dev.socrata.com/foundry/data.nashville.gov/797j-5xh2)
example of GET request from Postman: `https://data.nashville.gov/resource/797j-5xh2.json?$$app_token={{MSS_APP_KEY}}&building=Cohn Community Center`
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
