export const paginationRange = (currentPage: number, totalPage: number) => {
  // B1: Cấu hình
  const slidePages = 1; // [trang_trước] [hiện_tại] [trang_sau]

  // B2.1: Liệt kê
  // Hàm Set() có tác dụng tập hợp các giá trị duy nhất, nó không cho phép các giá trị trùng lặp tồn tại bên trong
  // Ứng dụng trong case này sẽ xóa trùng page, VD: page 1 vừa đầu vừa kế bên --> xóa trùng lặp
  const visiblePages = new Set<number>();

  // B2.2: Hiển thị page đầu và cuối
  visiblePages.add(1); // --> Hiển thị page đầu
  visiblePages.add(totalPage); // --> Hiển thị page cuối

  // B2.3: Hiện các page xung quanh
  // 1. let i = currentPage - slidePages --> Đây là điểm bắt đầu của page
  // 2. i <= currentPage + slidePages --> Đây là điểm kết thúc của page
  // 3. i > 0 && i <= totalPage
  // --> không lấy nhầm trang 0 hoặc trang -1 (khi đang ở trang 1)
  // --> không lấy nhầm trang 101 (nếu tổng chỉ có 100 trang)

  for (let i = currentPage - slidePages; i <= currentPage + slidePages; i++) {
    if (i > 0 && i <= totalPage) {
      visiblePages.add(i);
    }
  }

  // B3: Chuyển đổi thành mảng và sắp xếp lại
  // 1. Array.from(visiblePages) --> Chuyển tất cả các số từ hàm Set() --> array []
  // 2. sort((a, b) => a - b)
  // --> mặc định sort sắp xếp theo chữ cái, VD: 10 sẽ đứng trước 2
  // --> truyền (a, b) => a - b vào để ép nó sắp xếp theo giá trị số tăng dần
  const sortPages = Array.from(visiblePages).sort((a, b) => a - b);

  // B4.1: Ẩn hiện 3 dấu chấm
  // 1. const result: (number | string)[] = [] --> Nơi lưu trữ số và chữ ("...")
  // 2. let prevPage: number | null = null --> mặc định là null do nếu đứng ở page 1 thì đằng trước sẽ không có gì
  const result: (number | string)[] = [];
  let prevPage: number | null = null;

  // B4.2: Duyệt qua mảng đã sắp xếp
  // 1. prevPage !== null --> Nếu đây không phải là số đầu tiên trong mảng, thì mới bắt đầu so sánh
  // 2. currentPageInLoop - prevPage === 2 --> Khoảng cách giữa trang hiện tại và trang trước là đúng 2 đơn vị
  // 3. result.push(prevPage + 1) --> Đẩy số nằm giữa vào
  // 4. currentPageInLoop - prevPage > 2
  // --> Khoảng cách lớn hơn 2, VD: Số trước là 1, số đang xét là 4
  // --> Chỗ này chắc chắn bị hổng nhiều số (2, 3), nên ta đẩy dấu "..." vào
  // 5. result.push(currentPageInLoop) --> Sau khi check khoảng trống và điền "..." (nếu cần), thì ta đẩy chính cái số đang xét vào mảng kết quả
  // 6. prevPage = currentPageInLoop --> Gán số hiện tại làm "số trước đó" để chuẩn bị cho vòng lặp kế tiếp
  for (const currentPageInLoop of sortPages) {
    if (prevPage !== null) {
      if (currentPageInLoop - prevPage === 2) {
        result.push(prevPage + 1);
      } else if (currentPageInLoop - prevPage > 2) {
        result.push("...");
      }
    }

    result.push(currentPageInLoop);

    prevPage = currentPageInLoop;
  }

  // Test mô phỏng:
  // Giả sử:
  // currentPage = 5
  // totalPage = 10
  // B2: Set có: {1, 10, 4, 5, 6}
  // B3: Mảng sắp xếp: [1, 4, 5, 6, 10]
  // B4: Duyệt mảng:
  // Xét số 1: prevPage đang null -> result = [1], prevPage = 1
  // Xét số 4: Khoảng cách 4 - 1 = 3 (lớn hơn 2) -> Thêm ... -> result = [1, "...", 4], prevPage = 4
  // Xét số 5: Khoảng cách 5 - 4 = 1 (liên tiếp) -> result = [1, "...", 4, 5], prevPage = 5
  // Xét số 6: Khoảng cách 6 - 5 = 1 (liên tiếp) -> result = [1, "...", 4, 5, 6], prevPage = 6
  // Xét số 10: Khoảng cách 10 - 6 = 4 (lớn hơn 2) -> Thêm ... -> result = [1, "...", 4, 5, 6, "...", 10]

  return result;
};
