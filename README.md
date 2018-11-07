# front-end-junior

The assignment: 
React app that uses the Behance public API. 
The user can enter tags to search for and a submit button (Use redux for the form). After clicking the submit button the page will show a count of images with the tags searched for, grouped per user

Minor Notes

1. Instagram API sandbox mode <br />
Instagram API's sandbox mode stops me from accessing other users data unless they are also sandbox users added by me. And Instagram don't approve the public_content permission for one-off projects such as "displaying hashtag based content on your website". I used behance's API instead because it's open to the public. 

2. CORS (access-control-allow-origin) <br />
The behance api is not CORS enabled, so setting up a proxy in the backend is needed, which I am not sure how to do with reactJS. I resolved this by installing a allow-control-allow-origin extension in my chrome browser https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en <br/>
Without this you won't see the results

3. responsive design <br />
I was going to use breakpoints but semantics ui offers a “stackable grid” shortcut so I chose to use that one instead. The folder for responsive designs are there just for reference.

4. css style sheet <br />
I mainly used semantic ui react as my styling tool so I did not create a separate css stying sheet for this test
