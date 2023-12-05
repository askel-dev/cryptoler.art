var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

		let darkBoxVisible = false;

		window.addEventListener('load', (event) => {
			let images = document.querySelectorAll("img");
			if(images !== null && images !== undefined && images.length > 0) {
				images.forEach(function(img) {
					img.addEventListener('click', (evt) => {
						showDarkbox(img.src);
					});
				});
			}
		});

		function showDarkbox(url) {
			if(!darkBoxVisible) {
				let x = (window.innerWidth - 1280) / 2;
				let y = window.scrollY + 50;

				// Create the darkBox
				var div = document.createElement("div");
				div.id = "darkbox";
				div.innerHTML = '<img class="darkboximg" src="'+url+'" />';
				document.body.appendChild(div);
				let box = document.getElementById("darkbox");
				box.style.left = x.toString()+"px";
				box.style.top = y.toString()+"px";
				box.style.height = 'auto';
				box.addEventListener('click', (event) => {
					// Remove it
					let element = document.getElementById("darkbox");
					element.parentNode.removeChild(element);

					darkBoxVisible = false;
				})

				darkBoxVisible = true;

			} else {
				// Remove it
				let element = document.getElementById("darkbox");
				element.parentNode.removeChild(element);

				darkBoxVisible = false;
			}
		}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // fade in observed elements that are in view
      entry.target.classList.replace('fadeOut', 'fadeIn');
    } 
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const fadeElms = document.querySelectorAll('.fade');
fadeElms.forEach(el => observer.observe(el));

function loadMore() {
  

  var moreImg = document.getElementById("img");


  moreImg.style.display = "inline";
  document.getElementById("moreBtn").style.display = "none";
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("navbar");
	if (x.className === "navbar") {
	  x.className += " responsive";
	} else {
	  x.className = "navbar";
	}
  }

}