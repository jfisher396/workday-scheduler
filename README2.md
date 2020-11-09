# Workday Planner

A single-workday planner that saves text inputs and also color codes by the hour depending on if the planner event is in the past, present or future as indicated by the colors: grey, red and green.

[A deployed version can be viewed here.](https://jfisher396.github.io/workday-scheduler/)

## Contents

1. [About](#about)
    1. [User Story](#user%20story)
    2. [Acceptance criteria](#acceptance%20criteria)
    3. [Visuals](#visuals)
    4. [Build](#build)
2. [Setup](#setup)
3. [Credits](#credits)
4. [License](#license)
5. [Contributing](#contributing)

### About

A simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

### User Story

    AS AN employee with a busy schedule
    I WANT to add important events to a daily planner
    SO THAT I can manage my time effectively

### Acceptance Criteria

    GIVEN I am using a daily planner to create a schedule
    WHEN I open the planner
    THEN the current day is displayed at the top of the calendar
    WHEN I scroll down
    THEN I am presented with timeblocks for standard business hours
    WHEN I view the timeblocks for that day
    THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    WHEN I click into a timeblock
    THEN I can enter an event
    WHEN I click the save button for that timeblock
    THEN the text for that event is saved in local storage
    WHEN I refresh the page
    THEN the saved events persist


### Visuals:


![Screenshot of load page](/images/workday-scheduler.png)



### Build

* In HTML semantic tags have been used to aid with accessibility.
* The site is built using Bootstrap as as a CSS framework.
   * The use of Bootstrap minimises the need for media queries. 
   * See [Bootstrap documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/) for customizing the site with their provided options
* [Google Fonts](https://fonts.google.com/) allows for the usage of custom fonts that do not have to be installed on the user's machine
* [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) allows for the usage of custom icons
* [jQuery](https://api.jquery.com/) powers the dynamic rendering of the html content based on user input
* [moment.js](https://momentjs.com/) is used to manipulate date values for historic data extraction from APIs


## Setup

To clone the repo:
```
git clone git@github.com:jfisher396/workday-scheduler.git
``` 

## Credits

[James Fisher](https://github.com/jfisher396)

## License

Built by [James Fisher](https://jfisher396.github.io/james-fisher-web-developer/).
This application is released under [MIT](assets/LICENSE.txt) license.

## Contributing

To contribute to this application, create a pull request.
Here are the steps needed for doing that:
- Fork the repo
- Create a feature branch (git checkout -b NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request

Following a code review, your feature will be merged.

=======