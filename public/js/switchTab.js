function switchTab(n){
    let tab = '#scroll-tab-'+ n
    console.log("the tab = " + tab)
    // remove all is-active classes from tabs
    $('a.mdl-layout__tab').removeClass('is-active');
        // activate desired tab
        $('a[href="'+tab+'"]').addClass('is-active');
        // remove all is-active classes from panels
        $('.mdl-layout__tab-panel').removeClass('is-active');
        // activate desired tab panel
        $(tab).addClass('is-active');
}