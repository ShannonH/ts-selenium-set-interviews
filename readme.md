# Selenium Skeleton Project for Technical Interviews  
  
This project contains a basic Protractor/Jasmine/Webdriver framework that includes Chromedriver for direct connect usage. The project uses the page object model to break ultra pages into sections and then provide methods per page section. 

[![Run on Repl.it](https://repl.it/badge/github/ShannonH/ts-selenium-set-interviews)](https://repl.it/github/ShannonH/ts-selenium-set-interviews)
  
#### Installation:  
1. Clone the repository   
2. Move into the new directory   
3. Install the package by running `yarn`  
4. To watch the single provided test go through its process, run `yarn test`  
  
#### Development:  
This package makes use of an `.env` file that you can add to the base of the project. There are 3 values needed to start the tests properly:  
 `learnAdminUsername`  
 `learnAdminPassword` 
 `baseUrl` 
 *These have to be for a working Ultra Learn instance  
  
1. Add all driver and assertion methods in the page_objects directory  
2. Add specs to the tests directory  
3. Additional specs or suites can be specified in the _protractor.conf.ts_ file  
4. Logging is also controlled in the protractor.conf.ts file (see [Protractor site](https://github.com/angular/protractor/blob/master/lib/config.ts) for more info on which types of logging can be controlled from this config file)  
  
More information about page object model:  
[Protractor docs about POM](http://www.protractortest.org/#/page-objects)

[Understanding how promises work with POM](https://medium.com/slalom-build/redefining-using-promises-with-the-page-object-model-6dfd49a3594b)
