<div id="highchartBox" style="height: 400px; margin: auto; min-width: 310px; max-width: 800px; margin-bottom:-3.2vw"></div>

<script>

function checksalary(string) {
    if (string.indexOf("$") == 0) {
        var stringLength=string.length;
        string=string.slice(1,stringLength);
    }
    return string;
}
function checkNull(occ_string) {
    if (occ_string == "") {
        occ_string = "0";
    }
    return occ_string;
}

function setData(occ_percent) {
    if (occ_percent != 0) {
        var occ_percentLength=occ_percent.length;
        occ_percent=occ_percent.replace(",","");
        occ_percent=parseInt(occ_percent.slice(1,occ_percentLength));
        
    } 
    return occ_percent;
}

$(function () {

    var titleDataArray=[];
    var parentDataArray=[];
    var nationalDataArray=[];

    var percent10=checkNull("{flcdc_entry}");
    var percent25=checkNull("{flcdc_qualified}");
    var percent50=checkNull("{flcdc_avg}");
    var percent75=checkNull("{flcdc_experienced}");
    var percent90=checkNull("{flcdc_fullycompetent}");

    var length10=percent10.length;
    var length25=percent25.length;
    var length50=percent50.length;
    var length75=percent75.length;
    var length90=percent90.length;

    var parent10=checksalary("{top_tier_entity_code.flcdc_annual_lvl1}");
    var parent25=checksalary("{top_tier_entity_code.flcdc_annual_lvl2}");
    var parent50=checksalary("{top_tier_entity_code.flcdc_annual_avg}");
    var parent75=checksalary("{top_tier_entity_code.flcdc_annual_lvl3}");
    var parent90=checksalary("{top_tier_entity_code.flcdc_annual_lvl4}");

    
    var national10=checksalary("{top_tier_entity_code.nat_yr_10}");
    var national25=checksalary("{top_tier_entity_code.nat_yr_25}");
    var national50=checksalary("{top_tier_entity_code.nat_yr_50}");
    var national75=checksalary("{top_tier_entity_code.nat_yr_75_wage}");
    var national90=checksalary("{top_tier_entity_code.nat_yr_90_wage}");



    titleDataArray[0]=setData(percent10);
    titleDataArray[1]=setData(percent25);
    titleDataArray[2]=setData(percent50);
    titleDataArray[3]=setData(percent75);
    titleDataArray[4]=setData(percent90);

    parentDataArray[0]=parseInt(parent10.replace(",",""));
    parentDataArray[1]=parseInt(parent25.replace(",",""));
    parentDataArray[2]=parseInt(parent50.replace(",",""));
    parentDataArray[3]=parseInt(parent75.replace(",",""));
    parentDataArray[4]=parseInt(parent90.replace(",",""));

    nationalDataArray[0]=parseInt(national10.replace(",",""));
    nationalDataArray[1]=parseInt(national25.replace(",",""));
    nationalDataArray[2]=parseInt(national50.replace(",",""));
    nationalDataArray[3]=parseInt(national75.replace(",",""));
    nationalDataArray[4]=parseInt(national90.replace(",",""));
    

    $('#highchartBox').highcharts({

        chart: {
            type: 'boxplot',
          inverted: true
        },

        title: {
            text: ''
        },

        legend: {
            enabled: false
        },
        plotOptions: {
            boxplot: {
                fillColor: '#DDDFEC'
            }
        }
        xAxis: {
            categories: ["{plural_short_title}", "{top_tier_name}", "All Occupations"]
        },

        yAxis: {
            title: {
                text: 'Average Annual Wage'
            }
        },
        series: [{
            name: 'Wage Distribution',
            data: [titleDataArray,parentDataArray,nationalDataArray],
            tooltip: {
                headerFormat: '<em>{point.key}</em><br/>'
            }
        }]

    });
});
</script>