function lockBody(){return body[0].style.overflow="hidden",!0}function unlockBody(){return body[0].style.overflowY="scroll",!0}var window_width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,body=document.getElementsByTagName("body"),menu=document.getElementsByClassName("menu"),menu__icon=menu[0].childNodes[1],menu__search=menu[0].childNodes[3],menu__list=menu[0].childNodes[5],search=document.getElementsByClassName("search"),search_title=document.getElementsByClassName("search__form_title"),close_search=search_title[0].childNodes[1];menu__icon.addEventListener("click",function(){menu__list.className.indexOf("active")!==-1?menu__list.className="menu__list":menu__list.className+=" active"}),menu__search.addEventListener("click",function(){search[0].style.marginTop=0,lockBody()}),close_search.addEventListener("click",function(){search[0].style.marginTop="-100vh",unlockBody()}),window_width<760&&(menu__list.style.marginTop="-"+(menu__list.clientHeight+10)+"px");