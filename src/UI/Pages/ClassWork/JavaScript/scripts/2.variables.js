/*===================================
||
|| Variables, Strings and Numbers
||
===================================*/

const variablesScript = () => {

    /*---------------------------
    | Const and Let
    ---------------------------*/
    console.group("Const and Let");
        const myConst = 100;
        console.log('Const: ', myConst);

        let myLet = 100;
        myLet = 200;
        console.log('Let: ', myLet);

    console.groupEnd();

    /*---------------------------
    | Number and Strings (Primatives)
    ---------------------------*/
    console.group('Number and Strings (Primatives)');
        /* Number ---------------------------*/
        let myNum = 32;
        myNum = myNum + 50;
        console.log('myNum: ', myNum);

        /* Strings ---------------------------*/
        let myString = 'I went to the ';
        myString = myString + 'yesterday';
        console.log('myString: ', myString);

            /* Template Strings ---------------------------*/
            const place = 'museum';
            let myTemplateString = `
                I went to the ${place}
                yesterday. I really like
                the ${place}
            `;
            console.log('myTemplateString: ', myTemplateString);
    console.groupEnd();
}

export default variablesScript;