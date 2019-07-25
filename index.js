//on document ready use click handler on button
$(document).ready(() => {
    $('#btn').click((e) => {
        //getJSON to fetch data from url
        //if we press the button on initial position (Выберите направление) must we get all items from server???
        $.getJSON(
            'https://frontend-test-api.alex93.now.sh/api/languages',
            {
                group: $('#select :selected').val()
            },
            (data) => {
            //console.log(data.data);
            var items = [];
            //create array with html elements with conditions
            $.each(data.data, function(index, val){
                // if element haven't logo shouldn't display it
                val.logo &&
                items.push(
                    '<li>' +
                        '<div id="item-'+ index +'">' +
                            (val.logo ? '<img src="' + val.logo + '" alt="'+ val.name +'"/>' : '' ) +
                            '<div>' +
                                '<p>' + val.name + '</p>' +
                                '<p>' + (val.year ? 'Основан в ' + val.year : '') + '</p>' +
                                '<p>' +  (val.docs ? '<a href="' + val.docs + '">Документация</a>' : '' ) + '</p>' +
                            '</div>' +
                        '</div>' +
                    '</li>'
                );
            });
            //create list of elements we need
            let $list = $('<ul/>', {
                'class': 'list-data',
                html: items.join('')
            });
            //.html to display our elements on page
            $('#result').html($list);
        });
    });
});