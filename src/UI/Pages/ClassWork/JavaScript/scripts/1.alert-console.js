/*===================================
||
|| Alert and Console
||
===================================*/

const alertConsoleScript = () => {
    //alert('I will alert the user as a pop up.');

    console.group("Alert and Console");
        console.log('I will print to console instead of annoying user.');
        console.log(123);
    console.groupEnd();
}

export default alertConsoleScript;