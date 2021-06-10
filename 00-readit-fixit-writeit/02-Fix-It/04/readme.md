# FIX IT
## EX 04
* Why are we not seeing any tv shows? Look at the error message in the dev tools and solve it.
    * error: Uncaught ReferenceError: show is not defined.
    * replace "show" with tvshows on both forEach funtion, and inside parentheses of write function.
    * error is gone now.
* There is still something else going wrong. Fix this as well. 
    * list shows with everything as "undefined" string.
    * wrapWithTag was missing the return statement ! 
    * works perfect now