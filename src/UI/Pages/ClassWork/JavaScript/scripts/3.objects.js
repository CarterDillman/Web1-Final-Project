/*===================================
||
|| Objects
||
===================================*/

const objectsScript = () => {

    /*---------------------------
    | Const and Let
    ---------------------------*/
    console.group('Objects');
        const myObj = {
            first: 'Carter',
            last: 'Dillman',
            email: 'carterdillman@hotmail.com'
        };

        console.log('myObj', myObj);
        console.log('myObj.first', myObj.first);
        console.log('myObj.last', myObj.last);
        console.log('myObj.email', myObj.email);


        // Add/Update
        myObj.age = 47;
        myObj.email = 'carterdillman@mmail.com';
        console.log('myObj:', myObj);
    console.groupEnd();
}

export default objectsScript;