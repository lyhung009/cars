# NGV - Coding Challange - Cars

## Solution

#### Technology used:

    - Angular10, AngularCLI for running the application.
    - Ngrx for State management.
    - Bootstrap 4 for styling and ng-bootstrap for component.
    - json-graphql-server for serving db.json.
    - ngx-progressbar for Youtube-like progress bar.
    - ng-lazyload-image for lazy load image.

#### Implementation of client:
- Logo

      - Logo of the application should be in SVG format. On hover should change its color of every squear to a random one. Get back to black when not hovered:
      I actually did not understand this requirement but it seems that we should change the color of each box in the logo. Currently, I'm reducing the opacity when hovering and back to black after hovering.</i>
  
  
- Viewports: <b>Done</b><br>

      - a. Mobile from 0 to 748px. Container should be 100% width of screen.<br>
      - b. Other view ports according to framework defaults or average world stats.<br>
          
- 2 pages each for 3 viweports (mobile, tablet, desktop):<b>Done</b>

      - List page
          - "Filter button" should open modal with filters which are present on "Desktop" wireframe
      - Details page
        - Contact buttons should trigger respective actions: open email client, open phone dealer.
        - Image click should open a "lightbox" gallery.
        - Equipment items should be alphabetically orderd and displayed in order presented in wireframe.
        
-  Product cards must be fluid and take 100% of parent container. <b>Done</b>

        - Carousel and image aspectratios should be preserved: 16:9 on mobile, 4:3 on other viewports.
        - Images should be lazy.
        - Image of optimal dimentions should be loaded.
        - Use modern image formats with fallback.
        (Prefered implementation of image requirements in `<picture>` with source queries and attributes)
        - Application can be non-intercatvie but must load and display content with JavaScript disabled (Server Side Rendering).
        - `html > head > title` must change its text during navigation to a title provided by api.
        - Every fetch request should trigger YouTube-like loading bar indicator.
        - Navigation patterns:
          - Load data THEN navigate.
            OR
          - Load data AND navigate (if this one is choosen, "skeleton" placeholders should be provided).
        - Application should use state management (MobX, Redux, Vuex, etc...).
        - Should handle api reponse errors, and showing a popup/toast notification.
        - Some other functionality is available on wireframe only.
        - Client configuration should be stored in environment variables.
#### API <b>Done</b> 
    - On every 7th request must return 500 status code response.
    - Response payload should bandwidth friendly (be minimal) and return data present in a wireframe.

#### Running
    - npm run dev 
    - The site can be running with SSR but there are some issues with router and lazy image.
    
