# Section 2: Core Concepts — phạm vi bản chi tiết

Ngày biên soạn: 05/11/2026. Giữ nguyên 44 lecture (6–49), tên và lecture ID của mục lục Udemy đã đọc. Không gán tiến độ 39/44 trong ảnh của người dùng vào sổ tay.

## Cách dùng nguồn

- Có 32 video: 31 phụ đề đã lấy được; lecture 22 không có bảng phụ đề trong phiên truy cập.
- Có 12 mục bài đọc/lab/tài nguyên; lecture 47 là hình ảnh không có văn bản trích đọc được.
- Phần nguồn là diễn giải ý chính từ phụ đề/bài đọc, không xác nhận đã xem đủ mọi chi tiết trên màn hình và không tự đặt timestamp.
- YAML, lệnh tự luyện, các bảng so sánh mở rộng, sơ đồ và câu hỏi tự luyện được đánh nhãn bổ sung. Không chép toàn bộ đề/đáp án lab.
- Không lưu video, raw transcript, credential, cookie hoặc thông tin đăng ký trong source giao cho người dùng.
- Lab chưa chạy trên cluster của người dùng. Trạng thái mong đợi là tiêu chí kiểm tra, không phải log kết quả đã chạy.

## Những điểm đã làm rõ

Dockershim so với Docker Engine/CRI; advertise/listen endpoint của etcd; scheduler filter/score so với thực thi; controller so với đối tượng API; ReplicaSet không tự rolling update; port/targetPort/nodePort; Namespace không tự network isolation hoặc dành sẵn tài nguyên; client/server dry-run; client-side so với server-side apply; bỏ field khác bỏ file/tài nguyên. Các liên kết chính thức nằm trong mục tương ứng.

## Kiểm tra

Kiểm tra cú pháp JavaScript; đủ 44 ID chi tiết, giữ nguyên catalog/ID/prefix lưu tiến độ. Kiểm tra hiển thị cả 44 route trong trình duyệt và thực hiện thao tác sơ đồ, quiz, copy, tìm kiếm, đánh dấu hoàn thành và menu trên điện thoại. Không coi các kiểm tra giao diện này là kiểm thử Kubernetes.

| Số | Lecture | Nguồn |
|---|---|---|
| 6 | [6. Core Concepts - Section Introduction](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14280352#overview) | Phụ đề |
| 7 | [7. Cluster Architecture](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298418#overview) | Phụ đề |
| 8 | [8. Docker-vs-ContainerD](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/37105770#overview) | Phụ đề |
| 9 | [9. A note on Docker deprecation](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/46253723#overview) | Phụ đề |
| 10 | [10. ETCD For Beginners](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298420#overview) | Phụ đề |
| 11 | [11. ETCD in Kubernetes](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298422#overview) | Phụ đề |
| 12 | [12. ETCD - Commands (Optional)](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19537454#overview) | Bài đọc/liên kết lab |
| 13 | [13. Kube-API Server](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298426#overview) | Phụ đề |
| 14 | [14. Kube Controller Manager](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298428#overview) | Phụ đề |
| 15 | [15. Kube Scheduler](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298430#overview) | Phụ đề |
| 16 | [16. Kubelet](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298432#overview) | Phụ đề |
| 17 | [17. Kube Proxy](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298434#overview) | Phụ đề |
| 18 | [18. Pods](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298578#overview) | Phụ đề |
| 19 | [19. Pods with YAML](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16214484#overview) | Phụ đề |
| 20 | [20. Demo - Pods with YAML](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16214516#overview) | Phụ đề |
| 21 | [21. Practice Test Introduction](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14280406#overview) | Phụ đề |
| 22 | [22. Demo: Accessing Labs](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17649604#overview) | Chưa có phụ đề |
| 23 | [23. Course setup - accessing the labs](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16488034#overview) | Bài đọc/liên kết lab |
| 24 | [24. Lab - Pods](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14280414#overview) | Bài đọc/liên kết lab |
| 25 | [25. Lab Solution - Pods (optional)](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21738668#overview) | Phụ đề |
| 26 | [26. Recap - ReplicaSets](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298658#overview) | Phụ đề |
| 27 | [27. Lab - ReplicaSets](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14303984#overview) | Bài đọc/liên kết lab |
| 28 | [28. Lab Solution - ReplicaSets (optional)](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21738670#overview) | Phụ đề |
| 29 | [29. Deployments](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295508#overview) | Phụ đề |
| 30 | [30. Certification Tip!](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14937836#overview) | Bài đọc/liên kết lab |
| 31 | [31. Lab - Deployments](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298660#overview) | Bài đọc/liên kết lab |
| 32 | [32. Lab Solution - Deployments (optional)](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19374124#overview) | Phụ đề |
| 33 | [33. Services](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295512#overview) | Phụ đề |
| 34 | [34. Services Cluster IP](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295514#overview) | Phụ đề |
| 35 | [35. Services - Loadbalancer](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21799360#overview) | Phụ đề |
| 36 | [36. Lab- Services](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298668#overview) | Bài đọc/liên kết lab |
| 37 | [37. Lab Solution - Services (optional)](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19500718#overview) | Phụ đề |
| 38 | [38. Namespaces](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295510#overview) | Phụ đề |
| 39 | [39. Lab - Namespaces](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298664#overview) | Bài đọc/liên kết lab |
| 40 | [40. Lab Solution - Namespaces (optional)](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19374168#overview) | Phụ đề |
| 41 | [41. Imperative vs Declarative](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21500820#overview) | Phụ đề |
| 42 | [42. Certification Tips - Imperative Commands with Kubectl](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15018998#overview) | Bài đọc/liên kết lab |
| 43 | [43. Kubectl Explain Command](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/52883807#overview) | Phụ đề |
| 44 | [44. Lab - Imperative Commands](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15021302#overview) | Bài đọc/liên kết lab |
| 45 | [45. Lab Solution - Imperative Commands (optional)](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19374160#overview) | Phụ đề |
| 46 | [46. Kubectl Apply Command](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21500826#overview) | Phụ đề |
| 47 | [47. Here's some inspiration to keep going](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/18893522#overview) | Hình ảnh, chưa đọc được văn bản |
| 48 | [48. A Quick Reminder](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/38139820#overview) | Phụ đề |
| 49 | [49. Reference Notes for lectures and labs](https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/51460767#overview) | Bài đọc/liên kết lab |
