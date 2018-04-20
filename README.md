Project description:

We are making a webpage called "The Master Planner". The purpose of the page is that you can see what courses are aviable for the two master years and in what period/semester they are taken in. You can make a few choices in your searching. You can search for courses in each semester and the amount of points each course is having. In a sidebar on the side you can see a conclution of your choices and go between year 1 and year 2 in the master. This page is for Mediatechnology only. The choosen courses will then be in your profile where you can go back and change your courses and print out a copy of your choices. 

What we have done:

We are using Firebase as our database, to get the API call to firebase we are using a cloudfunction. We are building the code with the framework Vue. We have created the searchfunction. The main page (where you find all the courses) are almost done. 

What we plan to do:

We need to fix the profile page where you store your chosen data to see whenever you log in. We also need to do the log page. We need work more with the design but that we will probably do last.

Project file structure:

SelectCourse - This is the main view. In this view ProgressBarView and CoursesView are in it. 

ProgressBar - Here all your choises will appear after you chosen them. You  can easily remove them if you don't want them anymore. When you are happy with your choices you can click a buttom to save your choices to your profile. 

Courses - Here is where our API call is appearing. The searchbar is here and all the courses you've searched for. If you click a course you will find yourself on KTH's homepage. 

Welcome - This is the first page you will arrive to when opening our page. We are thinking that this might be the log in page later but for now there is only a buttom saying you want to start finding your courses. 