# Australia Postcode Viewer
## Release Features
Australian Postcode Viewer (APV) version 1.0 is a web application built using Ruby on Rails and Google Map API that display area of suburb or postcode on Australian map. This application consist of 2 modules
### Admin Module
Admin Module is used by administrator to maintain postcode entries. This module is developed using Active Admin, a Ruby on Rails plugins for generating administration style interfaces. 
The following is the feature on Admin Module:
#### Security
 Only authenticated user can logged in into the system. The security is build using ActivAdmin authentication.
#### Postcode Maintenance
 Authenticated user can create, view, edit and delete states, postcode and suburbs 
### Viewer Module
Viewer Module is used by public user to get visual boundary area on MAP for given postcode or suburb. This module was developed using Ruby on Rails and Google Map API. 
The following are the features on Viewer Module:
#### Auto Complete
When user type ‘PE’ in suburbs then Perth will be one of the items shown in a list of possible completions.
#### Boundary rendering on MAP
A polygon will be rendered on map on given postcode or suburbs

## How to Install
Australia Postcode Viewer 1.0 works with Rails 4.0 onwards, Active Admin, Google Maps API v3, Twitter Bootstrap.

### Configuring Postgres Database
Update configuration template for Postgresql setting. First of all, You can copy file database.yml.template under active-postcode-service/config/ and rename it with database.yml. Open the files and start update the configuration with:

    username: <%= ENV['ACTIVE-POSTCODE-SERVICE_DATABASE_USERNAME'] %> 
    password: <%= ENV['ACTIVE-POSTCODE-SERVICE_DATABASE_PASSWORD'] %>

Replace username and password with your Postgresql environment setup.

    username: your_username 
    password: your_password


### Create, Migrate, and Seed the Database

1. Ensure JSON is placed in folder db/seeds/postcode_boundaries_edited.json
2. Just be sure to run data migration before you run the apps.

    $ rake db:create db:migrate db:seed

*please take note, seeding process with full post code boundaries from the json file may takes hours for 208 MB

## Run the application

Start the rails, by type this in terminal:

    $ rails s

Open web browser and access http://localhost:3000/ to use postcode service

### Administrator module

To maintain some modules (Suburb, State, Post Code), the application need authentication user. Open web browser and access http://localhost:3000/admin to login as activeadmin default user:
    
    username: admin@example.com
    password: password

## Achieved Stretch Goals

- Allow the user to click anywhere in Australia and have the website tell them which postcode they clicked in.
- A dropdown to optionally allow the postcode search to be limited to a single state


## Known Issues

- Search box is missing after search [Fixed]
- When seeding, there is a chance that the JSON data is not sequentially stored in database. [Open]
