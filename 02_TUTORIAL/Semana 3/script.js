var calcResDiv = "#calc";
$(document).ready( function() {
    var x0 = 10, y0 = 20;
    CalcAddAndShow(x0, y0);
});
function ShowOp(x, y, op){
    $(calcResDiv).append(`<br />${x} ${op} ${y} = `);
    //Alternativa: .. += "<br />" + x + " " + op + " " + y + " = "
}
function ShowResult(res){
    $(calcResDiv).append(res);
}