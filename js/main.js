( function(){

    "use strict";

    var $target,
        $title,
        $description,
        sTitle,
        sDescription,
        titleTemplate,
        descriptionTemplate;

    var reset = function( e ) {
        var defaultTitleTemplate = $( "<h2 class='work__title'></h2>" ),
            defaultDescriptionTemplate = $( "<p class='work__description'></p>" );

        e.preventDefault();
        $( this ).hide();
        $( '.adminToolBar__link--save' ).hide();
        $( '.adminToolBar__link--edit' ).show();

        defaultTitleTemplate.html( $( '.editForm__input--title' ).val() );
        console.log(defaultTitleTemplate, defaultDescriptionTemplate);
        $( '.editForm__input--title' ).replaceWith( defaultTitleTemplate );
        defaultDescriptionTemplate.html( $( '.editForm__input--description' ).val() );
        $( '.editForm__input--description' ).replaceWith( defaultDescriptionTemplate );
    };


    $( function(){

        // Display edit Form
        $( '.adminToolBar__link--edit' ).on( "click", function( e ){
            titleTemplate = $( "<input class='editForm__input editForm__input--title' type='text' name='title'/>" ),
            descriptionTemplate = $( "<textarea class='editForm__input editForm__input--description' rows='5' name='description'/>" );

            e.preventDefault();

            $target = $( e.target ).attr( 'href' );
            $target = $target.slice(1, $target.length);
            $title = $( '#' + $target + ' .work__title' );
            $description = $( '#' + $target + ' .work__description' );
            sTitle = $title.html();
            sDescription = $description.html();

            $( this ).hide();
            $( '#' + $target + ' .adminToolBar__link--save' ).show();
            $( '#' + $target + ' .adminToolBar__link--abort' ).show();

            titleTemplate.val( sTitle );
            $title.replaceWith( titleTemplate );
            descriptionTemplate.val( sDescription );
            $description.replaceWith( descriptionTemplate );

        } );

        // Send Data
        $( '.adminToolBar__link--save' ).on( "click", function( e ){
            e.preventDefault();
            $( this ).hide();
            $( '#' + $target + ' .adminToolBar__link--edit' ).show();
            $( '#' + $target + ' .adminToolBar__link--abort' ).hide();

            reset( e );
        } );

        // Abort editing
        $( '.adminToolBar__link--abort' ).on( "click", reset );


    } );

} )()
