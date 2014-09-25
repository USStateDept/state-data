//    var urlWhole = "http://" + host + "/geoserver/opengeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=opengeo%3Astate-data_50m&maxfeatures=250&propertyName=Country,Response,Timestamp&outputformat=json";
	$(function () {
        $('#via-javascript-table').next().click(function () {
            $(this).hide();

            $('#table-javascript').bootstrapTable({
                method: 'get',
                url: 'http://localhost/geoserver/opengeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=opengeo%3Astate-data&maxfeatures=250&propertyName=Country,Response,Timestamp&outputformat=json',
                cache: false,
                height: 400,
                striped: true,
                pagination: true,
                pageSize: 50,
                pageList: [10, 25, 50, 100, 200],
                search: true,
                showColumns: false,
                showRefresh: false,
                minimumCountColumns: 2,
                clickToSelect: true,
                columns: [{
                    field: 'Country',
                    title: 'Country',
                    align: 'left',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'Response',
                    title: 'Response',
                    align: 'left',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'Timestamp',
                    title: 'Timestamp',
                    align: 'left',
                    valign: 'middle',
                    sortable: true
                }]
            });
        });
    });