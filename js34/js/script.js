var test = {
    createTest: function () {

        var wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
       // wrapper.style.display = 'flex';
        //wrapper.style.flexFlow = 'column wrap';
        //wrapper.style.alignItems = 'center';
        document.body.insertBefore(wrapper, document.body.children[0]);

        var h1 = document.createElement('h1');
        h1.innerHTML = 'Тест по программированию';
        wrapper.appendChild(h1);

        var wrapperTest = document.createElement('div');
        wrapperTest.style.display = 'flex';
        wrapperTest.style.flexFlow = 'column wrap';

        wrapper.appendChild(wrapperTest);


        var span1 = document.createElement('span');
        span1.innerHTML = '1. Вопрос №1';
        wrapperTest.appendChild(span1);


        var input = document.createElement('input');
        input.setAttribute('type','checkbox');
        wrapperTest.appendChild(input);
        wrapperTest.appendChild(input);
        wrapperTest.appendChild(input);

        console.log(wrapper);

        /*


        document.body.appendChild(h1);
        document.body.appendChild(input);*/
}
}

test.createTest();