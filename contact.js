document.addEventListener("DOMContentLoaded",function(){
	var searchBTN = document.querySelector(".search-btn"),
		cancelBTN = document.querySelector(".cancel-btn"),
		searchinput = document.querySelector("input"),
		searchbox = document.querySelector(".searchbox");
		

		searchBTN.onclick = function(){
			searchbox.classList.add("active");
			searchBTN.classList.add("active");
			searchinput.classList.add("active");
			cancelBTN.classList.add("active");
		}

		cancelBTN.onclick = function(){
			searchbox.classList.remove("active");
			searchBTN.classList.remove("active");
			searchinput.classList.remove("active");
			cancelBTN.classList.remove("active");
		}

	var menucuon = document.querySelector(".menu"),
  			trangthaimenucuon = "duoi100";

  		window.addEventListener('scroll',function(){
  			if(window.pageYOffset > 100){
  				if(trangthaimenucuon == "duoi100"){
  					trangthaimenucuon = "tren100";
  					menucuon.classList.add("menumoi");
  				}
  			}

  			 else if(window.pageYOffset < 100){
  				if(trangthaimenucuon == "tren100"){
  					trangthaimenucuon = "duoi100";
  					menucuon.classList.remove("menumoi");
  				}
  			}

  		})
  	})