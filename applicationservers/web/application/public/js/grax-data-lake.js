/* --------------------------------------------------------------------------
 * This file is subject to the terms and conditions defined in
 * file https://github.com/HardingPoint/GRAXForSFDC/blob/master/LICENSE,
 * which is part of this source code package.
 * --------------------------------------------------------------------------
 *          Copyright (c) 2017-2018 Harding Point
 *                  All rights reserved
 * --------------------------------------------------------------------------
 * Support:	Support@Grax.io
 * Website:	https://grax.io
 * Github:	https://github.com/HardingPoint/grax-application
 * License:	https://github.com/HardingPoint/grax-application/blob/master/LICENSE
 * --------------------------------------------------------------------------*/

function GetParams(params){
    var tokenParam = window.location.search.match(/[\?&]token\=([^&]+)/);
    var orgid = window.location.search.match(/[\?&]orgid\=([^&]+)/);
    var sessionid = window.location.search.match(/[\?&]sessionid\=([^&]+)/);
    var endpoint = window.location.search.match(/[\?&]endpoint\=([^&]+)/);

    if (params===null || params===undefined)
        params = {};

    if (params.action===null || params.action===undefined || params.action==='')
        params.action = 'load';

    return '?action=' + params.action +
        (tokenParam ? ('&token=' + decodeURIComponent(tokenParam[1])) : '') +
        (orgid ? ('&orgid=' + decodeURIComponent(orgid[1])) : '') +
        (sessionid ? ('&sessionid=' + decodeURIComponent(sessionid[1])) : '') +
        (endpoint ? ('&endpoint=' + decodeURIComponent(endpoint[1])) : '');
}

$(function() {

    var tabs = $('.tabs');
    var items = $('.tabs').find('a').length;
    var selector = $(".tabs").find(".selector");
    var activeItem = tabs.find('.active');
    var activeWidth = activeItem.innerWidth();

    $(".selector").css({
        "left": activeItem.position.left + "px",
        "width": activeWidth + "px"
    });

    $(".tabs").on("click","a",function(){
        $('.tabs a').removeClass("active");
        $(this).addClass('active');
        var activeWidth = $(this).innerWidth();
        var itemPos = $(this).position();
        $(".selector").css({
            "left":itemPos.left + "px",
            "width": activeWidth + "px"
        });
    });


    var booleanVals = [
        { Name: "", Id: 0 },
        { Name: "true", Id: 1 },
        { Name: "false", Id: 2 }
    ];

    $("#jsGrid").jsGrid({
        height: "70%",
        width: "100%",
        filtering: true,
        inserting: false,
        editing: false,
        sorting: true,
        editButton: false,
        paging: true,
        autoload: true,
        pageSize: 12,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete this record?",
        controller: {
            loadData: function(filter) {
                return $.ajax({
                    type: "GET",
                    // url: "/grax-app/grax-data-lake" + (tokenParam ? ('?token=' + decodeURIComponent(tokenParam[1])) : ''),
                    url: "/grax-app/grax-data-lake" + GetParams({action:'load'}),
                    data: filter
                });
            },
            insertItem: function(item) {
                alert(JSON.stringify(item));
                return $.ajax({
                    type: "POST",
                    // url: "/grax-app/grax-data-lake" + (tokenParam ? ('?token=' + decodeURIComponent(tokenParam[1])) : ''),
                    url: "/grax-app/grax-data-lake" + GetParams({action:'insert'}),
                    data: item
                });
            },
            updateItem: function(item) {
                alert(JSON.stringify(item));
                return $.ajax({
                    type: "PUT",
                    // url: "/grax-app/grax-data-lake" + (tokenParam ? ('?token=' + decodeURIComponent(tokenParam[1])) : ''),
                    url: "/grax-app/grax-data-lake" + GetParams({action:'update'}),
                    data: item
                });
            },
            deleteItem: function(item) {
                alert(JSON.stringify(item));
                return $.ajax({
                    type: "DELETE",
                    // url: "/grax-app/grax-data-lake" + (tokenParam ? ('?token=' + decodeURIComponent(tokenParam[1])) : ''),
                    url: "/grax-app/grax-data-lake" + GetParams({action:'delete'}),
                    // data: item
                    contentType: "application/json; charset=utf-8",
                    data : JSON.stringify(item)
                });
            }
        },
        fields: [
            { name: "Id", type: "text", width: 100, align:"center"},
            { name: "Name", type: "text", width: 150},
            { name: "graxorgid", type: "text", width: 150, align:"center"},
            { name: "CreatedDate", type: "date", width: 200, align:"center"},
            { name: "IsDeleted", type: "checkbox", width: 75, align:"center"}
            // { name: "IsDeleted", type: "select", items: booleanVals, valueField: "Name", textField: "Name" , width: 75}
        ],
        rowDoubleClick: function(args) {
            var getData = args.item;
            var keys = Object.keys(getData);
            var text = [];

            $.each(keys, function(idx, value) {
                text.push(value + " : " + getData[value])
            });

            if (confirm("GRAX Time Machine : Would you like to restore record?\n\n" + text.join("\n "))) {
                $.ajax({
                    type: "POST",
                    // url: "/grax-app/grax-data-lake" + (tokenParam ? ('?token=' + decodeURIComponent(tokenParam[1])) : ''),
                    url: "/grax-app/grax-data-lake" + GetParams({action:'restore'}),
                    contentType: "application/json; charset=utf-8",
                    data : JSON.stringify(args.item)
                });
                alert("Submitted for Restoring");
            } else {
                alert("Cencelled : Restore!");
            }
        }
    });
});


