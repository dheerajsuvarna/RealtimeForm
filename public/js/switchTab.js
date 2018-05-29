function switchTab(n){
    search_action = document.getElementById("search_action")
    camera_action = document.getElementById("camera_action")
    location_edit_action =  document.getElementById("location_edit_action")
    tire_size_action = document.getElementById("tire_size_action")
    let tab = '#scroll-tab-'+ n
    if(n==1){
        
        search_action.style.display = "block";
        camera_action.style.display = "none";
        location_edit_action.style.display = "none";
        tire_size_action.style.display = "none";
    }
    else if(n==2){
        
        search_action.style.display = "none";
        camera_action.style.display = "block";
        location_edit_action.style.display = "none";
        tire_size_action.style.display = "none";
    }
    else if(n==3){
      
        search_action.style.display = "none";
        camera_action.style.display = "none";
        location_edit_action.style.display = "block";
        tire_size_action.style.display = "none";
    }
    else if(n==5){
        
        search_action.style.display = "none";
        camera_action.style.display = "none";
        location_edit_action.style.display = "none";
        tire_size_action.style.display = "block";
    }
    // remove all is-active classes from tabs
    $('a.mdl-layout__tab').removeClass('is-active');
        // activate desired tab
        $('a[href="'+tab+'"]').addClass('is-active');
        // remove all is-active classes from panels
        $('.mdl-layout__tab-panel').removeClass('is-active');
        // activate desired tab panel
        $(tab).addClass('is-active');      
}