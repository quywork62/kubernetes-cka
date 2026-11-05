# CKA · Sổ tay tiếng Việt theo Udemy

Website tĩnh bằng **HTML, CSS và JavaScript thuần**, không cần npm hoặc bước build. Nội dung được cập nhật theo mục lục Udemy đã truy cập ngày 05/11/2026: **18 phần, 312 lecture**. Tên và số bài giữ nguyên nguồn, gồm phần mở đầu, bài đọc, lab, video giải và các phần cập nhật Helm/Kustomize.

## Nội dung và giới hạn

- 201 video: có phụ đề để đối chiếu 200 video; lecture 22 “Demo: Accessing Labs” chưa có bảng phụ đề trong phiên kiểm tra.
- 111 mục bài đọc/tài nguyên: đã đọc phần văn bản hoặc liên kết; lecture 47 chỉ có nội dung hình ảnh, không lấy được văn bản.
- Ghi chú tiếng Việt là diễn giải ngắn, không phải bản dịch đầy đủ hoặc xác nhận đã xem toàn bộ thao tác trên màn hình. Không dựng timestamp khi nguồn không có.
- Lab thường là một liên kết KodeKloud trên Udemy. Checklist của sổ tay được tự biên soạn và ghi nhãn rõ, không phải đề bài hoặc đáp án đầy đủ. Mở lecture gốc để vào môi trường được cấp quyền.
- Ô cập nhật tại các bài liên quan dẫn tới tài liệu chính thức, tách biệt với phần tóm tắt nguồn. Không áp dụng nguyên lệnh hoặc số phiên bản trong video cũ cho mọi cụm.
- Không chứa video, transcript đầy đủ, đề thi thật, token, cookie hay dữ liệu tài khoản Udemy. Không đồng bộ tiến độ với Udemy.

Bảng nguồn cho từng lecture: [COURSE_SOURCES.md](COURSE_SOURCES.md).

## Xem tại máy

Chạy từ thư mục chứa index.html:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Mở http://127.0.0.1:8080. Cũng có thể mở index.html trực tiếp. Chữ dùng Google Fonts khi có mạng và font hệ thống khi không có.

## GitHub Pages

Đặt các file của website ở root repository, không đặt một repository con như submodule. Trong **Settings → Pages**, chọn **Deploy from a branch → main → /(root)**. Giữ `.nojekyll`. Các đường dẫn tài nguyên là tương đối nên hoạt động dưới `/kubernetes-cka/`.

Sau khi xem diff và quyết định cập nhật, có thể dùng:

```sh
git add index.html style.css app.js content.js course.js .nojekyll .gitignore README.md COURSE_SOURCES.md
git commit -m "Align CKA handbook with Udemy course lectures"
git push origin main
```

Không cần đưa các ZIP, ảnh preview hoặc thư mục source lồng vào commit. Nếu Actions báo thiếu URL submodule, kiểm tra `git ls-files --stage`: không nên có gitlink (mode 160000) cho thư mục source đã vô tình thêm trước đó.

## Sửa nội dung

- `content.js`: 18 chapter và 312 lesson, mỗi lesson có số lecture, lecture ID, loại nội dung, nguồn, trạng thái đối chiếu, ghi chú và điểm cần nhớ.
- `course.js`: nhãn khóa và prefix lưu tiến độ.
- `app.js`: điều hướng hash, tìm kiếm không dấu, lọc loại nội dung, đánh dấu học xong, theme/cỡ chữ.
- `style.css`: giao diện đọc dạng sổ tay, đáp ứng điện thoại và hỗ trợ giảm chuyển động.

Hash route ví dụ: `#/phan/1`, `#/bai/7`, `#/bai/30`, `#/bai/274`.

Tiến độ mới dùng prefix `cka-udemy-aligned-v2:` và ID lecture Udemy. Không chuyển các dấu hoàn thành của bản cũ 55 bài vì cách chia và số bài không tương đương. Dữ liệu cũ không bị xóa; tiến độ mới lưu riêng ở trình duyệt đang dùng.
