$( document ).ready(function() {
    $('#heatmap-table').html('');
    $('#heatmap-table').append(generate_grid(10));
    apply_json();
});

function generate_grid(accuracy){
    var html = "";
    for(let i = 1; i <= accuracy; i++){
        html += "<tr>";
        for(let j = 1; j <= accuracy; j++){
            html += "<td class='text-dark' id='" + i + "-" + j + "'>" + i + "," + j + "</td>";
        }
        html += "</tr>";
    }
    return html;
}

function apply_json(){
    $.each(heatmap, function (i, item) {
        $.each(item.sectors, function (i, sector) {
            $.each(sector.coordinates, function (i, coordinate) {
                console.log(coordinate);
                $("#" + coordinate).addClass( "bg-" + get_color(sector.heat) );
            });
        });
    });
}

function get_color(num){
    if(num >= 7){
        return "primary";
    }
    else if(num >=3){
        return "warning";
    }
    else if(num >=0){
        return "danger"
    }
    else{
        return "muted";
    }
}