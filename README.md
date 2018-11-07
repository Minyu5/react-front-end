# front-end-junior

The assignment: 
React app that uses the Behance public API. 
The user can enter tags to search for and a submit button (Use redux for the form). After clicking the submit button the page will show a count of images with the tags searched for, grouped per user

Important Notes

**1. Instagram API sandbox mode** <br />
![alt text | width=300](https://github.com/Minyu5/react-front-end/blob/master/public/Screen%20Shot%202018-11-06%20at%2011.02.59%20AM.png)
Instagram API's sandbox mode stops me from accessing other users data unless they are also sandbox users added by me. And Instagram don't approve the public_content permission for one-off projects such as "displaying hashtag based content on your website". I used behance's API instead because it's open to the public. <br />
For more information regarding the sandbox mode and its access limitations, please refer to https://www.instagram.com/developer/sandbox/

**2. CORS (access-control-allow-origin)** <br />
The behance api is not CORS enabled, so setting up a proxy in the backend is needed, which I am not sure how to do with reactJS. I resolved this by installing an Allow-control-allow-origin extension in my chrome browser https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en <br/>
Without this exentsion you won't see the results returned by the API

**3. responsive design** <br />
I was going to use breakpoints but semantics ui offers a “stackable grid” shortcut so I chose to use that one instead. The folder for responsive designs are there just for reference.

**4. css style sheet** <br />
I mainly used semantic ui react as my styling tool so I did not create a separate css stying sheet for this test

**5. .gitignore** <br />
I forgot to add .gitignore the first time I pushed to github so the node_modules folder is huge, so the clone/downloading process for this repo might be slow.
