/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */ 

         // it would return expect to not be zero and to be defined; 
        it('allFeeds is defined', function() {
            expect(allFeeds).toBeDefined(); // we expect all Feeds to be defined
            expect(allFeeds.length).not.toBe(0); // expect array to not by empty
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('ensure each allFeeds url isn\'t empty', function() {
            for (var i = 0; allFeeds.length <0; i++)
                expect(allFeeds[i].url).toBeDefined(); // check to make sure each Feed is defined
                expect(allFeeds[i].url.length).not.toBe(0); //check to make sure the length is not equal to zero
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('ensure each allFeeds name isn\'t empty', function() {
            for (var i = 0; allFeeds.length <0; i++)
                expect(allFeeds[i].name).toBeDefined(); // check to make sure that it is defined
                expect(allFeeds[i].name.length).not.toBe(""); // check to make sure it is not equal to empty 
                expect(allFeeds[i].name.length).not.toBe(null); //check to make sure it is not null
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('check menu is hidden on load', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy(); //upon load we expect menu to be hidden
         });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('check toggle visbility on click', function() {
            $('.menu-icon-link').click(); //upon click
            expect($('body').hasClass('menu-hidden')).toBeFalsy(); // menu should not be hidden
            $('.menu-icon-link').click(); //upon click again
            expect($('body').hasClass('menu-hidden')).toBeTruthy(); // menu should be hidden again
            // when you make a command such as click it actually executes it;
          })

    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        var feed_return;

        beforeEach(function(done){
            loadFeed(0); //load first feed
            setTimeout(function(){
                feed_return = $('.feed').html;
                done();
            },300)
        });

        it('Should check if returned array size isn\'t zero', function(){
            expect (feed_return.length).toBeGreaterThan(0); // make sure returned feed is not equal to zero
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */ 
    });

        
    describe('New Feed Selection', function(){
        /* TODO: Write a new test suite named "New Feed Selection"

            /* TODO: Write a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */    

        var feed1
        var feed2;

        beforeEach(function(done){
            loadFeed(0);//load f
            setTimeout(function(){
                feed1 = $('.feed').html;
                done();
            },300);
        });

        it('New Feed content to change', function(){
            loadFeed(1);
            setTimeout(function(){
                feed2 = $('.feed').html;
            },300);
            expect(feed1).not.toEqual(feed2); //checks to make sure feed not the same. This tells us it has changed
        });
    });

    describe('Additional Tests - Delete Last Feed', function(){
        var feed1
        var newFeed = {name: "name", url: "url"};
        allFeeds.push(newFeed);

        beforeEach(function(done){
            loadFeed(0);
            setTimeout(function(){
                feed1 = $('.feed').html;
                done();
            },1000)
        });

        it('Expect feed length to be lower by one upon click of delete button', function(){
            $('.delete-button').click();
            expect($('.feed-list li a[data-id =' + allFeeds.length + ']')).not.toBeDefined();
        })
            
    });
    
}());
