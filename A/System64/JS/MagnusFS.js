/*

* Welcome to MagnusFS!
* This lame excuse of a file system is really simple
* and easy to understand because I don't want to
* do the tedious tasks of setting up JSON files for
* BrowserFS. This is so damn simple because it uses
* localStorage.

& Here's how this works:
! You make a function:
? function Theme() {
    ^ Function doesn't need ^
    ^ to be stored in this file ^
?  document.getElementById("Style").className = "Theme";
    ^ Function stuffs ^
?  localStorage.removeItem("tmz");
    ^ Tell the browser to remove ^
    ^ 'tmz' from localStorage ^
        ~ This is here to be safe
        ~ incase something gets
        ~ overwritten or used twice
?  localStorage.setItem("tmz", "Vinci()");
    ^ Now tell localStorage to make ^
    ^ Item 'tmz' and set the value to ^
    ^ the function title ^
        ~ You'll see why later
? }

! Heres the most important thing
? eval(localStorage.getItem("tmz"));
    ^ In this file put in this line ^
    ^ obviously subbing out 'tmz' ^
    ^ for whatever the hell you want ^
        ~ What this does is it fetches
        ~ localStorage item "tmz" and
        ~ runs the 'eval' function which
        ~ inturn runs the function thats
        ~ set to the item 'tmz'

! REMEMBER TO PUT THIS FILE AT THE START OF !
! YOUR HTML FILE FOR FASTEST AND BEST RESULTS !
*/

eval(localStorage.getItem("bgz"));
eval(localStorage.getItem("tmz"));
// eval(localStorage.getItem("scv"));
eval(localStorage.getItem("hif"));
eval(localStorage.getItem("fnd"));
eval(localStorage.getItem("cur"));
eval(localStorage.getItem("fx"));
eval(localStorage.getItem("clippy"));
eval(localStorage.getItem("WadCMD"));