// responsive design: we say responsive design is fine with a website if it adjusts itself properly to re-sizing the browser. Even after re-size, website should be readable, should not get stuck. It also should adapt to different devices.

// Our websites should be responsive.
// How to check if the website is responsive:- 
// 1) Check for horizontal scrolling in page. [ideally, websites should only have vertical scrolling]
// 2) Check for pin zoom in page
// 3) Check for the behaviour of the website on different screen sizes. You may use online tools like screenfly
// 4) readable fonts and images on different screen sizes
// 5) responsive layout.

// responsive web designing is done using CSS, like below:
/*
    1) problem of pinch zoom - solve this by setting the viewport correctly.
            what is pinch zoom problem? - by doubling clicking (ir using 2 fingers), screen re-sizes        (zoom-in/out) itself and it is not good thing.
            Solution: tag 'viewport' solves this issue.
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
              content="width=device-width == means, sets the width of the whole page equal to the device width.
              user-scalable=no == this part makes page non zoomable.

========================================================================================================
    2) problem of horizontal scrolling - solve this by using relative sizing and positioning instead of absolute.
            what is this?: when we re-size a page, we will get horizontal scorll, which is not good.
            Solution: It can be solved by using relative positioning and relative sizing.
            use absolute units for parent tag and relative units for child tag.
            em&rem are for fonts.

            <div class = 'parent'>
                hey
                <div class = 'child'>
                    There
                </div>
            </div>

            .parent{
            font-size = 20px;
                }
            .child{
            font-size = 2em;
                }

            Here '2em' for child means, it is twice the size of it's parent font-size, so
            it will be 2*20px = 40px.
            The point is, we can change all tag's font-size which comes
            under parent tag just by altering the parent tag.
            ==========================================================
            Similar to this is 'rem' (root em).
            'em' is limited to one parent division but 'rem' is for entire web page.

            :root {
            font-size = 10px;
                }
            .parent{
            font-size = 20px;
                }
            .child{
            font-size = 2rem;
                }

            The best way to get rid of horizontal scorlling is to change everything from absolute
            units to relative units except for 'root', in this case, if we re-size the page,
            font-size of all tag values will be adjusted with respect to 'root' value.

=========================================================================================================
    3) problem of elements not resizing properly on different screen sizes - solve this by using media queries  and handling various screen sizes.
    readable font and resized images and videos on different screen sizes - solve this by using media queries and handling various screen sizes.
         How to resize or change element properties at different screen sizes using media
         queries. It basically means, changing font-size/background-color by varying web page size.
         In CSS:
         @media only screen and (max-width:725px){
            .paragraph{
                width: 30%;
            }
            .row .my-image{
                width: 40vw;
            }
        }

=========================================================================================================
    4) responsive layout - solve this by using flexbox layouts
       Flexbox:
        Sometimes we need to change the way elements move across different screen sizes.
        Changing individual elements across all viewport sizes is inefficient for a complex
        web page, vertical centering is easy with flexbox.

        Flexbox has control at two levels:
        1) We have properties at the flexbox levels which control the behaviour of all
        items in a flexbox in general.
        2) We have properties at the item level through which you can control behaviour of a
        particular item.

        Flexbox comes with special properties for child elements:
        - order
        - flex-grow
        - flex-shrink
        - flex-basis
        - align-self

*/