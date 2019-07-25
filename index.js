
// $.getJSON('https://frontend-test-api.alex93.now.sh/api/languages?group=backend', function(data){
//     console.log(data.data);
//
//     var items = [];
//
//     $.each(data.data, function(index, val){
//         items.push('<li>' +
//                         '<div id="item-'+ index +'">' +
//                             '<p>' + val.name + ' ' + (val.year ? val.year : '') + ' ' +  (val.docs ? '<a href="' + val.docs + '">Docs</a>' : '' ) + '</p>' +
//                             (val.logo ? '<img src="' + val.logo + '" alt="'+ val.name +'"/>' : '' ) +
//                         '</div>' +
//                     '</li>');
//     });
//
//     $('<ul/>', {
//         'class': 'list-data',
//         html: items.join('')
//     }).appendTo('#result');
// });


$(document).ready(() => {
    $('#btn').click(function(e) {
        let url = 'https://frontend-test-api.alex93.now.sh/api/languages?group=' + $('#select :selected').val();
        $.getJSON(url, function(data){
            console.log(data.data);

            var items = [];

            $.each(data.data, function(index, val){
                val.logo && items.push('<li>' +
                                '<div id="item-'+ index +'">' +
                                    (val.logo ? '<img src="' + val.logo + '" alt="'+ val.name +'"/>' : '' ) +
                                    '<div><p>' + val.name + '</p><p>' + (val.year ? 'Основан в ' + val.year : '') + '</p><p>' +  (val.docs ? '<a href="' + val.docs + '">Документация</a>' : '' ) + '</p></div>' +
                                '</div>' +
                            '</li>');
            });

            let $list = $('<ul/>', {
                'class': 'list-data',
                html: items.join('')
            });
            $('#result').html($list);
        });
    });
});