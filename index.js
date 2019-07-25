let result = fetch('https://frontend-test-api.alex93.now.sh/api/languages').then(res=>res.json());
console.log(result);

$.ajax({
    url: 'https://frontend-test-api.alex93.now.sh/api/languages',
    method: 'GET',
});

$(document).ready(()=>{

});