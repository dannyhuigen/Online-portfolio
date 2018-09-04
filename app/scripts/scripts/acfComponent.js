function field(fieldType, fieldKey, fields) {

    this.fieldType = fieldType;
    this.fields = fields;
    this.fields.genericFields.key = fieldKey;

    this.getFieldKey = function () {
      return fields.genericFields.key;
    };

    this.getActualPhpArray = function(){
        let raw = this.fields.php;

        for (let key in this.fields.genericFields) {
            console.log(key);
            console.log(this.fields.genericFields[key]);
            raw = raw.replace("[[" + key + "]]", this.fields.genericFields[key]);

        }
        return raw;
    }
}



function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 1; i < 30; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


let fieldTypes = {
    "text": {
        "type": "text",
        "genericFields": {
            "key": "",
            "label": "",
            "name": "",
            "type": "text",
            "instructions": "",
            "required": "false",
            "conditional_logic": 0,
            "wrapper": "array ('width' => '', 'class' => '','id' => '',)",
            "default_value": "",
        },
        "php": acfPhpText,
        "nestAble" : false,
    },
    "textarea":{
        "type" : "textarea",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "textarea",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : acfPhpTextarea,
    },
    "range":{
        "type" : "range",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "range",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "checkbox":{
        "type" : "checkbox",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "checkbox",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "radiobutton":{
        "type" : "radiobutton",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "radiobutton",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "select":{
        "type" : "select",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "select",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "truefalse":{
        "type" : "truefalse",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "truefalse",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : acfPhpTruefalse,
    },
    "buttongroup":{
        "type" : "buttongroup",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "buttongroup",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "file":{
        "type" : "file",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "genericFields",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "gallery":{
        "type" : "gallery",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "gallery",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "image":{
        "type" : "image",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "image",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : acfPhpImage,
    },
    "oEmbed":{
        "type" : "oEmbed",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "oEmbed",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "wysiwygeditor":{
        "type" : "wysiwygeditor",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "wysiwygeditor",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : acfPhpWysiwygeditor,
    },
    "colorpicker":{
        "type" : "colorpicker",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "colorpicker",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "datepciker":{
        "type" : "datepicker",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "datepicker",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "datetimepicker":{
        "type" : "datetimepicker",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "datetimepicker",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "googlemap":{
        "type" : "googlemap",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "googlemap",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "timepicker":{
        "type" : "timepicker",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "timepicker",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "accordion":{
        "type" : "accordion",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "accordion",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "clone":{
        "type" : "clone",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "clone",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
    },
    "flexiblecontent":{
        "type" : "flexiblecontent",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "flexiblecontent",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "group":{
        "type" : "group",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "group",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "repeater":{
        "type" : "repeater",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "repeater",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : acfPhpRepeater,
    },
    "tab":{
        "type" : "tab",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "tab",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : acfPhpTab,
    },
    "link":{
        "type" : "link",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "link",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : acfPhpLink,
    },
    "pagelink":{
        "type" : "pagelink",
            "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "pagelink",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : acfPhpPagelink,
    },
    "postobject":{
        "type" : "postobject",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "postobject",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "relationship":{
        "type" : "relationship",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "relationship",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    },
    "taxonomy":{
        "type" : "taxonomy",
        "genericFields" : {
            "key" : "",
            "label": "",
            "name": "",
            "type" : "taxonomy",
            "instructions" : "",
            "required" : "false",
            "conditional_logic" : 0,
            "wrapper" : "array ('width' => '', 'class' => '','id' => '',)",
            "default_value" : "",
        },
        "php" : "",
    }
};

let allObjects = [];

function getCorrespondingFieldType(typeName){
    for (let key in fieldTypes) {
        if (fieldTypes.hasOwnProperty(key) && fieldTypes[key].type === typeName) {
            return JSON.parse(JSON.stringify(fieldTypes[key]));
        }
    }
}

function deleteFieldObject(cfid){
    for (let i in allObjects) {
        if (allObjects[i].getFieldKey() === cfid){
            console.log(allObjects[i]);
            allObjects.splice(i , 1);
        }
    }
}

function setFieldValue(cfid, fieldName, newValue){
    for (let i in allObjects) {
        if (allObjects[i].getFieldKey() === cfid){
            for (let key in allObjects[i].fields.genericFields){
                if (key === fieldName){
                    allObjects[i].fields.genericFields[key] = newValue;
                }
            }
        }
    }
}

function clearData(){
    $(".object-info").html("");
}

function updatePhpCode(){

    let rightOrder = [];

    $(".control-layout__top pre").html("");

    $(".list-wrapper .object").each(function () {
        rightOrder.push($(this).data("cfid"));
    });

    for (let i in rightOrder) {
        console.log(rightOrder[i]);

        $(".control-layout__top pre").append(getObjectFromCfid(rightOrder[i]).getActualPhpArray());

    }

    $(".control-layout__top").show();
}

function getObjectFromCfid(cfid){
    for (let i in allObjects) {
        if (allObjects[i].getFieldKey() === cfid){
            return allObjects[i];
        }
    }
}

function displayObjectData(cfid) {

    $("ul .object").each(function () {
       $(this).removeClass("selected");
    });

    for (let i in allObjects) {
        if (allObjects[i].getFieldKey() === cfid){
            for (let key in allObjects[i].fields.genericFields){
                if (allObjects[i].fields.genericFields.hasOwnProperty(key)){
                    $(".object-info").append('<label>'+key+'</label>');
                    $(".object-info").append('<input class="realtime-field" data-cfid="'+cfid+'" data-fieldname="'+key+'" value="'+allObjects[i].fields.genericFields[key]+'" type="text" placeholder="'+allObjects[i].fields.genericFields[key]+'">');

                }
            }
        }
    }

    $(".realtime-field").on("keyup" , function () {
        let cfid = $(this).data("cfid");
        let fieldName = $(this).data("fieldname");
        let newText = $(this).val();

        setFieldValue(cfid , fieldName, newText);
        console.log("caller!");
    });
}

for (let key in fieldTypes) {
    if (fieldTypes.hasOwnProperty(key)) {
        $(".js-all-fields").append("<li class='single-field-adder' data-cftype='" + fieldTypes[key].type + "'>" + fieldTypes[key].type + "</li>");
    }
}

$(".single-field-adder").click(function () {
    let id = makeid();
    allObjects.push(new field($(this).data("cftype"), id , getCorrespondingFieldType($(this).data("cftype"))));
    $(".list-wrapper").append("<li class='object' data-cfid='"+id+"' data-cftype='"+$(this).data("cftype")+"'>"+$(this).data("cftype")+"<div class='exit'>x</div></li>");

    $(".exit").click(function () {
        let eventSender = $(this).parent(".object");
        let cfid = eventSender.data("cfid");

        eventSender.remove();
        deleteFieldObject(cfid);

    });
});

$(".control-layout__top .exit").click(function () {
    $(".control-layout__top").hide();
});
