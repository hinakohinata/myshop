
  /** xu ly form */
  
  function renderTable(products) {
    let content = "";
    if(products.length>0){
    for (let i = 0; i < products.length; i++) {
      const item = products[i];
      content += `
        <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                    <td style="width: 30%;"><img class= "product-img-table" src="${item.image}" alt=''></td>
                    <td>
                      <button type="button" class="btn-nhap" onclick="onEdit('${item.id}')">edit</button>
                      <button type="button" class="btn-nhap" onclick="onRemove('${item.id}')">remove</button>
                      <a href="./product.html?id=${item.id}">xem</a>

                      </td>
                  </tr>
        `;
    }}else{
      content='  '
    }
    document.getElementById("tableBody").innerHTML = content;
  }
  
  renderTable(store.getProduct());