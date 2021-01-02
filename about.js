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

  	// counters
  	const counters = document.querySelectorAll('.counter');
	const speed = 1000; // so cang lon cang cham

	window.addEventListener('scroll',function(){
		if(window.pageYOffset > 1399){	
			counters.forEach( function(counter)
				{
					const updateCount = function() 
						{
							const target = +counter.getAttribute('data-target');
							const count = +counter.innerText;

							// chinh inc de tang toc
							const inc = target / speed;

							// console.log(inc);
							// console.log(count);

							// xem doi tuong da dat duoc chua
							if (count < target) 
								{
									// them inc de chay
									counter.innerText = count + inc;
									// goi ham moi giay ms
									setTimeout(updateCount, 1);
								} 
							else 
								{
									counter.innerText = target;
								}
						};

					updateCount();
				});
		}
	})
		// het counters
	})
