var input = document.getElementById('search-product');
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     
     document.getElementById("srch-prod").click('search_products()');
    }
  });
  window.addEventListener('load', function(event){
    //lay id tu url query string
    var nodeProducts=document.getElementById('products1');
    // let find=document.getElementById("search-product");
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id');
    if(store.search_product(id)!='000'){
      nodeProducts.innerHTML=store.chuyendanhsachsanphamthanhhtm1(store.search_product(id));
    }else{
      nodeProducts.innerHTML="<h5 style='text-align: center; margin:0 auto;float:none !important;color:red;'>Không có sản phẩm!</h5>"
    }
    
    
  })
