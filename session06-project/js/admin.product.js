const userLogin = JSON.parse(localStorage.getItem("userLogin"));
const nameAdmin = document.getElementById("name");
const products = JSON.parse(localStorage.getItem("products"));

nameAdmin.innerHTML = userLogin.userAcc;

function display(products) {
  const table = document.querySelector(".table");
  table.innerHTML += `
    <tr>  
    <th>#</th>
    <th>id</th>
    <th>Sản phẩm</th>
    <th>name</th>
    <th>Giá</th>
    <th>Số lượng</th>
    <th>Đã bán</th>
    <th>Đánh giá</th>
    <th>Số sao</th>
    </tr>`;

  products.forEach((products, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${products.id}</td>
        <td><img src="${"."}${products.image}" alt=""></td>
        <td>${products.name}</td>
        <td>${products.price}</td>
        <td>${products.sold}</td>
        <td>${products.stock}</td>
        <td>${products.Evaluate}</td>
        <td>${products.star}</td>
      </tr>`;
  });
}
display(products);