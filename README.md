# Chrome-XKCD936-Style-Password-Generator
XKCD936 inspired password inserter for chrome.

A simple Chrome plugin that generates a four word password into any text/password field. The password is also copied to your clipboard. I designed this specifically for use with Lastpass as I wanted to generate secure* but memorable passwords for each site.  

The password style was inspired by this XKCD:

https://xkcd.com/936/

* Heads up: The author, Randall Munroe, stops short of actually recommending this format of password. I do use these, but am not a security expert by any means. The passwords are pulled from some 10,000 words, 4 words gives you 10^16 combinations. This works out to about the same entropy as a 12 character random letter password (assuming they know you're using this plugin or know you're using random letters). 

Todo:
- Control for how many words to generate.
- Option for to add numeric/special character fluff for poorly designed password input fields.
- Option to disable copying to clipboard. 
