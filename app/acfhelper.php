


<?php include_once "templates/html-header.php"; ?>


<div class="control-layout">

    <div class="control-layout__left-container ">
        <ul class="js-all-fields"></ul>
    </div>

    <div class="control-layout__center-container">
        <ul class="list-wrapper">

        </ul>
    </div>

    <div class="control-layout__right-container">

        <div class="object-info">

        </div>

    </div>

    <div class="control-layout__top">
        <pre></pre>
        <div class="exit">x</div>
    </div>

</div>

<?php include_once "templates/html-footer.php"; ?>

<script src="scripts/scripts/acf/text.js"></script>
<script src="scripts/scripts/acf/textarea.js"></script>
<script src="scripts/scripts/acf/truefalse.js"></script>
<script src="scripts/scripts/acf/image.js"></script>
<script src="scripts/scripts/acf/wysiwygeditor.js"></script>
<script src="scripts/scripts/acf/repeater.js"></script>
<script src="scripts/scripts/acf/tab.js"></script>
<script src="scripts/scripts/acf/link.js"></script>
<script src="scripts/scripts/acf/pagelink.js"></script>

<script src="scripts/scripts/acfComponent.js"></script>


<script>
    var oldContainer;
    $(".list-wrapper").sortable({
        group: 'nested',
        afterMove: function (placeholder, container) {
            if(oldContainer != container){
                if(oldContainer)
                    oldContainer.el.removeClass("active");
                container.el.addClass("active");

                oldContainer = container;
            }
        },
        onDrop: function ($item, container, _super) {
            container.el.removeClass("active");
            _super($item, container);
        },
        onMousedown: function ($item, _super, event) {
            clearData();
            displayObjectData($item.data("cfid"));
            $item.addClass("selected");
            if (!event.target.nodeName.match(/^(input|select|textarea)$/i)) {
                event.preventDefault()
                return true
            }
        }
    });

    $(".switch-container").on("click", ".switch", function  (e) {
        var method = $(this).hasClass("active") ? "enable" : "disable";
        $(e.delegateTarget).next().sortable(method);
    });

</script>
