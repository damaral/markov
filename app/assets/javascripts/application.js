// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

 
$(document).ready(function(){
   $(".filtro_relatorio").submit(function(){

      $(".chart").toggle();
      $(".loading").toggle();
      $('.mttf-sistema p').text("");
      $.ajax({
        type: 'GET',
        url: $(this).attr("action"),
        data: $(this).serialize(),
        success: function(data){
          $(".loading").toggle();
          $(".chart").toggle();
        },
        dataType: "script"
      });


      return false;
  });
});

 // Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});


function drawChartLine(dados, colunas, id_div) {

  // Create the data table.
  var data = new google.visualization.DataTable();

  for (var i = 0; i < colunas.length; i++) {
    data.addColumn(colunas[i][0], colunas[i][1]);
  }

  data.addRows(dados);

  // Set chart options
  var options = {
                 'height': 500,
                 'width' : 680,
                 'vAxis': {maxValue: 1, minValue: 0}
                };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(document.getElementById(id_div));
  chart.draw(data, options);
}

function drawChartPie(slice_name_label, slice_value_label, dados, chart_div) {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', slice_name_label);
  data.addColumn('number', slice_value_label);
  data.addRows(dados);

  var options = {
                 'width':800,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById(chart_div));
  chart.draw(data, options);
}

function drawChartColumn(dados, colunas, id_div) {
        
  var data = new google.visualization.DataTable();

  for (var i = 0; i < colunas.length; i++) {
    data.addColumn(colunas[i][0], colunas[i][1]);
  }

  data.addRows(dados);
          

  // Instantiate and draw our chart, passing in some options.
  var options = {

  };

  var chart = new google.visualization.ColumnChart(document.getElementById(id_div));
    chart.draw(data, options);
}

