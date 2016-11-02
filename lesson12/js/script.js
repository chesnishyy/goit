/**
 * Created by agent on 19.10.2016.
 */
$(function () {
    var html = $('#test').html();

    var articles = [
        {
            title: 'Article 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  At dicta enim eos harum ipsa laudantium nesciunt quibusdam reprehenderit sapiente tempore! Commodi tempore, voluptas.'
        },
        {
            title: 'Article 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda deleniti dolorum laudantium recusandae vero.'
        },
        {
            title: 'Article 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda deleniti dolorum laudantium recusandae vero. At dicta enim eos harum ipsa laudantium nesciunt quibusdam reprehenderit sapiente tempore! Commodi tempore, voluptas.'
        },
    ];

    var content = tmpl(html, {
        data: articles
    });
    $('body').append(content);
});