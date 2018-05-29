function switchTab(n){
    search_action = document.getElementById("search_action")
    camera_action = document.getElementById("camera_action")
    location_edit_action =  document.getElementById("location_edit_action")
    tire_size_action = document.getElementById("tire_size_action")
    tire_postion_action = document.getElementById("tire_postion_action")
    tire_brand_action =  document.getElementById("tire_brand_action")
    confirm_action =  document.getElementById("tire_brand_action")
    let tab = '#scroll-tab-'+ n
    if(n==1){
        
        search_action.style.display = "block";
        camera_action.style.display = "none";
        location_edit_action.style.display = "none";
        tire_size_action.style.display = "none";
        tire_brand_action.style.display = "none";
        tire_postion_action.style.display = "none";
    }
    else if(n==2){
        
        search_action.style.display = "none";
        camera_action.style.display = "block";
        location_edit_action.style.display = "none";
        tire_size_action.style.display = "none";
        tire_brand_action.style.display = "none";
        tire_postion_action.style.display = "none";
    }
    else if(n==3){
      
        search_action.style.display = "none";
        camera_action.style.display = "none";
        location_edit_action.style.display = "block";
        tire_size_action.style.display = "none";
        tire_brand_action.style.display = "none";
        tire_picture_action.style.display = "none";
        tire_postion_action.style.display = "none";
    }
    else if(n==4){
        
        search_action.style.display = "none";
        camera_action.style.display = "none";
        location_edit_action.style.display = "none";
        tire_size_action.style.display = "none";
        tire_brand_action.style.display = "none";
        tire_postion_action.style.display = "block";
    }
    else if(n==5){
        
        search_action.style.display = "none";
        camera_action.style.display = "none";
        location_edit_action.style.display = "none";
        tire_size_action.style.display = "block";
        tire_brand_action.style.display = "none";
        tire_picture_action.style.display = "none";
        tire_postion_action.style.display = "block";
    }
    else if(n==6){
        
        search_action.style.display = "none";
        camera_action.style.display = "none";
        location_edit_action.style.display = "none";
        tire_size_action.style.display = "block";
        tire_brand_action.style.display = "none";
        tire_postion_action.style.display = "none";
    }
    else if(n==7){
        
        search_action.style.display = "none";
        camera_action.style.display = "none";
        location_edit_action.style.display = "none";
        tire_size_action.style.display = "none";
        tire_brand_action.style.display = "none";
        confirm_action.style.display = "block";
        tire_postion_action.style.display = "none"; 
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