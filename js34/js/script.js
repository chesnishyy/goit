/**
 * Created by agent on 25.09.2016.
 */
var test = {
    createHeader: function () {
        var header = document.createElement('h1');
        header.innerHTML = 'Тест по программированию';
        header.style.display = 'flex';
        header.style.justifyContent = 'center';
        document.body.appendChild(header);
    },
    createQuestions: function (questionsCount, variantsCount) {

        for (var i = 0; i < questionsCount; i++){
            var question = document.createElement('div');
            question.setAttribute('class', 'question' + +(i+1));
            document.body.appendChild(question);
            var span = document.createElement('span');
            span.innerHTML = +(i + 1) +'. ' + 'Вопрос №' + +(i + 1);
            question.appendChild(span);
            for (var j = 0; j < variantsCount; j++) {
                var variant = document.createElement('div');
                //variant.setAttribute('class', 'checkbox' + +(j + 1));
                variant.setAttribute('class', 'checkbox');
                variant.style.display = 'flex';
                question.appendChild(variant);

                var input = document.createElement('input');
                input.setAttribute('type','checkbox');
                input.setAttribute('id','checkbox' + j);
                var label = document.createElement('label');
                label.setAttribute('for', 'checkbox' + j);
                label.innerHTML = 'Вариант ответа №' + +(j + 1);
                variant.appendChild(input);
                variant.appendChild(label);
            }
        }

    },
    createButton: function () {
        var button = document.createElement('button');
        button.innerHTML = 'Проверить мои результаты';
        button.style.display = 'flex';
        button.style.justifyContent = 'center';
        document.body.appendChild(button);
    }

}

test.createHeader();

test.createQuestions(3, 3);

test.createButton();