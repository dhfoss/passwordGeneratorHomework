# passwordGeneratorHomework

https://dhfoss.github.io/passwordGeneratorHomework/

My password generator function has 7 sections in it, plus the code that was included in the assignment that adds an event listener to the button. The sections are as follows:

*Section 1: First I define all the variables that I will be using in the function, including all four arrays that consist of all the possible characters that can be included in the password. I defined the variables as local variables rather than global variables so that I could reuse the function in a future app.

*Section 2: First I prompt the user for a password length.  The while loop tests the user's input and will not let the function continue if the input was out of the 8-128 character range, if they entered in a value that is not a number, or if they entered nothing at all.


*Section 3: Next a series of four prompts ask the user which kind of characters they wish to include in their password.  If they answer "no" to all four prompts they are not allowed to continue (since the password must consist of some kind of characters).

*Section 4: This section accomplishes two things. First, it gets all the possible characters that can be included in the password, and puts them into a single array (that the final password will draw from randomly).  Second, it starts creating the password in another array that includes one of each type of character that the user selected.  This ensures that at least one of each included character type is present in the password.

*Section 5: This section selects random characters from the pool of possible password characters, so by the end of the section, all characters that are used in the password are represented in an array.

Section 6: This section randomizes the order of the password array.  This ensures that the order of characters is not determined by the prompts from Section 3. (For instance, without this section, if the user answered yes to all the questions about which type of character to include in the password, the password would always start with a lower case, an upper case, a number, and a special character in that order.) I randomized the order by splicing values at random indices of the password array one at a time, and pushing them into a new array.

Section 7: This takes the final password array, and converts it to a single string, ready to be displayed in the browser.

*Assignment Code: the final section was provided by the assignment. It links the function to the button, making the app usable./Users/danielhawthorne-foss/Desktop/index.html Screen Shot 2020-10-01 at 12.31.38 PM.png/Users/danielhawthorne-foss/Desktop/Application Screen Shot 2020-10-01 at 12.32.18 PM.png
/Users/danielhawthorne-foss/Desktop/script.js1 Screen Shot 2020-10-01 at 12.32.43 PM.png
/Users/danielhawthorne-foss/Desktop/script.js2 Screen Shot 2020-10-01 at 12.32.53 PM.png
/Users/danielhawthorne-foss/Desktop/script.js 3 Screen Shot 2020-10-01 at 12.33.06 PM.png