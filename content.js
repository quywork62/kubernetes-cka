/* Ghi chú tiếng Việt tự biên soạn. Không chứa transcript hoặc đề/đáp án đầy đủ của khóa. */
const CHAPTERS = [
  {
    "id": 1,
    "title": "Introduction",
    "en": "Mở đầu",
    "intro": "Bắt đầu bằng mục tiêu của khóa, cách dùng tài liệu và vị trí của CKA trong lộ trình Kubernetes. Phần này có đủ năm lecture mở đầu trên Udemy.",
    "goals": [
      "Xác định cách học cùng video và lab",
      "Tìm ghi chú và thông báo cập nhật của khóa"
    ],
    "lessons": [
      {
        "id": 14224074,
        "ref": "1",
        "chapter": 1,
        "title": "Course Introduction",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14224074#overview",
        "status": "transcript",
        "text": "Khóa học đi từ kiến trúc Kubernetes đến vận hành cụm và luyện thi CKA. Phần thực hành sử dụng môi trường Kubernetes thật trong trình duyệt, gắn với từng chủ đề thay vì chỉ học lý thuyết.",
        "points": [
          "Học khái niệm rồi làm lab tương ứng",
          "Dùng mock exam sau khi đã hoàn thành các phần nền tảng"
        ],
        "code": ""
      },
      {
        "id": 14296562,
        "ref": "2",
        "chapter": 1,
        "title": "Certification",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296562#overview",
        "status": "transcript",
        "text": "CKA kiểm tra năng lực quản trị Kubernetes bằng thao tác thực tế. Bài giảng nhấn mạnh việc luyện terminal và tìm nhanh tài liệu thay vì học đáp án trắc nghiệm.",
        "points": [
          "Tự triển khai và kiểm tra tài nguyên",
          "Đọc quy định thi chính thức trước ngày thi"
        ],
        "code": "",
        "update": {
          "text": "Quy định thi có thể thay đổi. Đọc thông tin CKA và hướng dẫn thí sinh hiện hành trước khi đăng ký, không dùng số liệu trong video cũ làm cam kết.",
          "url": "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/"
        }
      },
      {
        "id": 31843360,
        "ref": "3",
        "chapter": 1,
        "title": "Course Release Notes",
        "duration": "2min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/31843360#overview",
        "status": "article",
        "text": "Release Notes ghi lại các lần cập nhật nội dung và môi trường lab. Bản đang được đối chiếu có các mục cập nhật 2025; thông báo tháng 4/2026 nêu môi trường lab v1.35.0.",
        "points": [
          "Đối chiếu phiên bản lab trước khi làm theo lệnh",
          "Không suy ra phiên bản thi từ phiên bản của video"
        ],
        "code": ""
      },
      {
        "id": 14655942,
        "ref": "4",
        "chapter": 1,
        "title": "The Kubernetes Trilogy",
        "duration": "5min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14655942#overview",
        "status": "transcript",
        "text": "Bài này phân biệt các khóa trong lộ trình Kubernetes: nền tảng cho người mới, quản trị cụm và phát triển ứng dụng. CKA tập trung trách nhiệm quản trị; CKAD tập trung triển khai và cấu hình ứng dụng.",
        "points": [
          "Chọn phần ôn lại theo nền tảng hiện có",
          "Các chủ đề giữa CKA và CKAD có thể giao nhau"
        ],
        "code": ""
      },
      {
        "id": 50899213,
        "ref": "5",
        "chapter": 1,
        "title": "Notes available at KodeKloud Notes",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/50899213#overview",
        "status": "article",
        "text": "Giảng viên giới thiệu KodeKloud Notes để đọc kèm bài giảng, tìm khái niệm và tra cứu khi ôn tập. Chọn đúng khóa học rồi điều hướng theo từng phần.",
        "points": [
          "Dùng ghi chú để củng cố sau video",
          "Đọc lại nguồn gốc khi cần chi tiết thao tác"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 2,
    "title": "Core Concepts",
    "en": "Khái niệm cốt lõi",
    "intro": "Tìm hiểu control plane, worker và các đối tượng ứng dụng cơ bản. Theo thứ tự nguồn, Pod và YAML đi trước ReplicaSet, Deployment, Service và Namespace; các lab và video lời giải giữ vị trí ngay sau chủ đề.",
    "goals": [
      "Phân biệt API server, etcd, scheduler, controller và kubelet",
      "Đọc cấu hình Pod, Deployment và Service",
      "Dùng imperative, declarative và explain có chủ đích"
    ],
    "lessons": [
      {
        "id": 14280352,
        "ref": "6",
        "chapter": 2,
        "title": "Core Concepts - Section Introduction",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14280352#overview",
        "status": "transcript",
        "text": "Phần Core Concepts giới thiệu kiến trúc cụm và các tài nguyên cơ bản: Pod, ReplicaSet, Deployment, Service. Đây là nền tảng để hiểu các phần scheduling và troubleshooting phía sau.",
        "points": [
          "Phân biệt thành phần hệ thống với đối tượng ứng dụng",
          "Đã học nền tảng vẫn nên làm các lab kiểm tra"
        ],
        "code": ""
      },
      {
        "id": 14298418,
        "ref": "7",
        "chapter": 2,
        "title": "Cluster Architecture",
        "duration": "9min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298418#overview",
        "status": "transcript",
        "text": "Giảng viên dùng hình ảnh cảng và tàu chở hàng để giải thích control plane điều phối các worker. API server nhận yêu cầu, etcd lưu trạng thái, scheduler chọn node, controller theo dõi trạng thái mong muốn; kubelet và runtime thực thi trên node.",
        "points": [
          "Scheduler chọn nơi chạy, kubelet quản lý Pod trên node",
          "Các thành phần phối hợp qua API server",
          "Kube-proxy phục vụ kết nối qua Service"
        ],
        "code": ""
      },
      {
        "id": 37105770,
        "ref": "8",
        "chapter": 2,
        "title": "Docker-vs-ContainerD",
        "duration": "13min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/37105770#overview",
        "status": "transcript",
        "text": "Docker cung cấp nhiều công cụ ngoài chức năng chạy container; containerd tập trung vào runtime và có thể dùng trực tiếp với Kubernetes. Bài giảng phân biệt ctr, nerdctl và crictl theo mục đích sử dụng.",
        "points": [
          "ctr là công cụ mức thấp của containerd",
          "nerdctl có cách dùng gần Docker CLI",
          "crictl dùng kiểm tra runtime theo CRI"
        ],
        "code": ""
      },
      {
        "id": 46253723,
        "ref": "9",
        "chapter": 2,
        "title": "A note on Docker deprecation",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/46253723#overview",
        "status": "transcript",
        "text": "Việc bỏ dockershim không có nghĩa Docker image không còn chạy được. Kubernetes giao tiếp với runtime qua CRI, trong khi image xây dựng bằng Docker vẫn có thể dùng trên runtime tương thích.",
        "points": [
          "Phân biệt công cụ build image với runtime của cụm",
          "Đọc ví dụ Docker cũ theo đúng bối cảnh lịch sử"
        ],
        "code": ""
      },
      {
        "id": 14298420,
        "ref": "10",
        "chapter": 2,
        "title": "ETCD For Beginners",
        "duration": "7min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298420#overview",
        "status": "transcript",
        "text": "etcd là kho dữ liệu key/value, khác với bảng và hàng trong cơ sở dữ liệu quan hệ. Video hướng dẫn cách chạy thử etcd và tương tác bằng etcdctl để hiểu mô hình lưu trữ trước khi học Kubernetes.",
        "points": [
          "Key xác định dữ liệu cần đọc hoặc ghi",
          "Lệnh etcdctl phụ thuộc phiên bản API và bộ công cụ"
        ],
        "code": ""
      },
      {
        "id": 14298422,
        "ref": "11",
        "chapter": 2,
        "title": "ETCD in Kubernetes",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298422#overview",
        "status": "transcript",
        "text": "Trong Kubernetes, etcd lưu dữ liệu trạng thái như Node, Pod, cấu hình và Secret. Cách xem cấu hình khác nhau giữa cài thủ công dưới dạng service và cụm kubeadm chạy etcd dưới dạng static Pod.",
        "points": [
          "Tìm endpoint và đường dẫn certificate trong cấu hình",
          "Cụm HA có danh sách thành viên etcd",
          "Không chỉnh trực tiếp dữ liệu Kubernetes trong etcd"
        ],
        "code": ""
      },
      {
        "id": 19537454,
        "ref": "12",
        "chapter": 2,
        "title": "ETCD - Commands (Optional)",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19537454#overview",
        "status": "article",
        "text": "Bài đọc so sánh lệnh etcdctl API v2 và v3, đồng thời nhắc phải truyền endpoint và chứng chỉ khi kết nối etcd có TLS. Các ví dụ v2 giải thích tài liệu cũ, không phải bộ lệnh mặc định cho mọi bản etcd hiện nay.",
        "points": [
          "Kiểm tra etcdctl version và help trên máy lab",
          "Phân biệt thao tác snapshot với thao tác key/value"
        ],
        "code": "",
        "update": {
          "text": "Bài nguồn có ví dụ etcdctl API v2 để giải thích tài liệu cũ. Với etcd hiện hành, kiểm tra version/help; đừng giả định mọi bản đều mặc định API v2.",
          "url": "https://etcd.io/docs/v3.6/op-guide/recovery/"
        }
      },
      {
        "id": 14298426,
        "ref": "13",
        "chapter": 2,
        "title": "Kube-API Server",
        "duration": "5min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298426#overview",
        "status": "transcript",
        "text": "API server là cửa vào quản lý Kubernetes: xác thực, kiểm tra yêu cầu và cập nhật dữ liệu vào etcd. Khi tạo Pod, scheduler và kubelet tiếp tục xử lý sau khi đối tượng đã được ghi nhận.",
        "points": [
          "kubectl gửi yêu cầu tới API server",
          "Tìm tham số qua manifest hoặc service và process đang chạy",
          "Chứng chỉ là một phần quan trọng trong cấu hình API server"
        ],
        "code": ""
      },
      {
        "id": 14298428,
        "ref": "14",
        "chapter": 2,
        "title": "Kube Controller Manager",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298428#overview",
        "status": "transcript",
        "text": "Controller liên tục quan sát và điều chỉnh để trạng thái thực tế tiến về trạng thái mong muốn. kube-controller-manager tập hợp nhiều controller, chẳng hạn controller theo dõi node và số lượng bản sao.",
        "points": [
          "Một controller có trách nhiệm cụ thể",
          "Đọc tham số cấu hình thay vì mặc định mọi cụm dùng cùng thời gian chờ"
        ],
        "code": ""
      },
      {
        "id": 14298430,
        "ref": "15",
        "chapter": 2,
        "title": "Kube Scheduler",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298430#overview",
        "status": "transcript",
        "text": "Scheduler tìm node phù hợp cho Pod chưa được gán node. Quá trình gồm loại những node không đáp ứng điều kiện rồi chấm điểm các node còn lại.",
        "points": [
          "Tài nguyên và ràng buộc ảnh hưởng quyết định",
          "Scheduler không tự khởi chạy container"
        ],
        "code": ""
      },
      {
        "id": 14298432,
        "ref": "16",
        "chapter": 2,
        "title": "Kubelet",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298432#overview",
        "status": "transcript",
        "text": "Kubelet đăng ký node, nhận Pod cần chạy, làm việc với runtime và báo tình trạng về API server. Thành phần này phải được cài và cấu hình trên từng node.",
        "points": [
          "Kiểm tra process và cấu hình kubelet trên host",
          "Phân biệt kubelet với scheduler và kube-proxy"
        ],
        "code": ""
      },
      {
        "id": 14298434,
        "ref": "17",
        "chapter": 2,
        "title": "Kube Proxy",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298434#overview",
        "status": "transcript",
        "text": "Kube-proxy chạy trên các node để thiết lập cơ chế chuyển lưu lượng Service đến Pod đích. Video dùng ví dụ ứng dụng kết nối cơ sở dữ liệu để giải thích địa chỉ Service ổn định.",
        "points": [
          "Service không phải container chạy ứng dụng",
          "Pod networking và Service networking là hai lớp cần phân biệt"
        ],
        "code": ""
      },
      {
        "id": 14298578,
        "ref": "18",
        "chapter": 2,
        "title": "Pods",
        "duration": "9min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298578#overview",
        "status": "transcript",
        "text": "Pod là đơn vị triển khai nhỏ nhất trong Kubernetes và bao bọc một hoặc nhiều container có quan hệ chặt chẽ. Khi cần tăng số bản sao ứng dụng, thông thường tạo thêm Pod thay vì nhét nhiều bản sao vào cùng Pod.",
        "points": [
          "Các container trong Pod dùng chung không gian mạng",
          "Pod nhiều container dành cho các tiến trình phối hợp"
        ],
        "code": ""
      },
      {
        "id": 16214484,
        "ref": "19",
        "chapter": 2,
        "title": "Pods with YAML",
        "duration": "7min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16214484#overview",
        "status": "transcript",
        "text": "Manifest Pod được tổ chức quanh apiVersion, kind, metadata và spec. Metadata chứa tên và label; spec mô tả danh sách container cùng image.",
        "points": [
          "Thụt lề YAML phải nhất quán",
          "containers là danh sách",
          "Dùng get và describe sau khi tạo"
        ],
        "code": ""
      },
      {
        "id": 16214516,
        "ref": "20",
        "chapter": 2,
        "title": "Demo - Pods with YAML",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16214516#overview",
        "status": "transcript",
        "text": "Demo dựng manifest Pod từng bước, thêm label rồi khai báo container và image. Sau khi tạo từ file YAML, giảng viên kiểm tra trạng thái và mô tả chi tiết Pod.",
        "points": [
          "Phân biệt tên Pod với tên container",
          "Đọc lỗi và Events khi Pod chưa sẵn sàng"
        ],
        "code": ""
      },
      {
        "id": 14280406,
        "ref": "21",
        "chapter": 2,
        "title": "Practice Test Introduction",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14280406#overview",
        "status": "transcript",
        "text": "Video giới thiệu cách dùng cổng lab: đọc yêu cầu, quan sát môi trường và thực hiện thay đổi. Cấu hình phải khớp chính xác thông số đề bài, không chỉ đạt trạng thái Running.",
        "points": [
          "Đọc kỹ tên, namespace và image",
          "Tự xác minh trước khi dùng nút kiểm tra của lab"
        ],
        "code": ""
      },
      {
        "id": 17649604,
        "ref": "22",
        "chapter": 2,
        "title": "Demo: Accessing Labs",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17649604#overview",
        "status": "unavailable",
        "text": "Mục lục xác nhận đây là video hướng dẫn truy cập lab. Trình phát không cung cấp bảng phụ đề trong phiên kiểm tra, nên chưa có ghi chú nội dung video đã đối chiếu.",
        "points": [
          "Mở video gốc để xem thao tác",
          "Bài 23 có hướng dẫn đăng ký lab bằng văn bản"
        ],
        "code": ""
      },
      {
        "id": 16488034,
        "ref": "23",
        "chapter": 2,
        "title": "Course setup - accessing the labs",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16488034#overview",
        "status": "article",
        "text": "Lab thực hành của khóa nằm trên KodeKloud, tách khỏi tài khoản Udemy. Bài đọc hướng dẫn dùng liên kết đăng ký dành cho học viên và dùng tên khớp hồ sơ Udemy.",
        "points": [
          "Mở hướng dẫn gốc để lấy liên kết đăng ký hiện hành",
          "Không nhập thông tin tài khoản vào website sổ tay"
        ],
        "code": ""
      },
      {
        "id": 14280414,
        "ref": "24",
        "chapter": 2,
        "title": "Lab - Pods",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14280414#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về pod: image, số container, trạng thái và Events. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl get pods -o wide",
          "kubectl describe pod <ten-pod>"
        ],
        "code": ""
      },
      {
        "id": 21738668,
        "ref": "25",
        "chapter": 2,
        "title": "Lab Solution - Pods (optional)",
        "duration": "12min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21738668#overview",
        "status": "transcript",
        "text": "Video giải lab Pods bắt đầu bằng đếm Pod, xem node chứa Pod và trạng thái từng container. Phần sửa lỗi tập trung vào cấu hình image và kiểm tra lại Pod sau thay đổi.",
        "points": [
          "Đọc cột READY cùng trạng thái, không chỉ tên Pod",
          "Dùng describe để tìm nguyên nhân container chờ"
        ],
        "code": ""
      },
      {
        "id": 14298658,
        "ref": "26",
        "chapter": 2,
        "title": "Recap - ReplicaSets",
        "duration": "16min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298658#overview",
        "status": "transcript",
        "text": "ReplicaSet duy trì số bản sao Pod dựa trên selector và Pod template. Bài giảng so sánh với ReplicationController rồi minh họa thay đổi replicas bằng file cấu hình hoặc lệnh scale.",
        "points": [
          "Selector phải khớp label của template",
          "ReplicaSet có thể tạo lại Pod bị xóa",
          "Phân biệt label của ReplicaSet với label của Pod"
        ],
        "code": ""
      },
      {
        "id": 14303984,
        "ref": "27",
        "chapter": 2,
        "title": "Lab - ReplicaSets",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14303984#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về replicaSet: selector, Pod template và số replicas. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl get rs",
          "Kiểm tra labels và matchLabels"
        ],
        "code": ""
      },
      {
        "id": 21738670,
        "ref": "28",
        "chapter": 2,
        "title": "Lab Solution - ReplicaSets (optional)",
        "duration": "14min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21738670#overview",
        "status": "transcript",
        "text": "Video giải lab ReplicaSets kiểm tra số bản sao, quan sát Pod được tạo lại và sửa lỗi manifest. Giảng viên dùng explain để xác nhận API rồi điều chỉnh image và replicas.",
        "points": [
          "Sửa nguyên nhân trong template",
          "Kiểm tra số desired và ready sau khi scale"
        ],
        "code": ""
      },
      {
        "id": 14295508,
        "ref": "29",
        "chapter": 2,
        "title": "Deployments",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295508#overview",
        "status": "transcript",
        "text": "Deployment quản lý việc triển khai và nâng cấp ứng dụng thông qua ReplicaSet. Bài giảng dẫn từ nhu cầu cập nhật từng bước đến rolling update, rollback, pause và resume.",
        "points": [
          "Deployment quản lý ReplicaSet, ReplicaSet quản lý Pod",
          "Quan sát cả ba loại đối tượng sau khi tạo"
        ],
        "code": ""
      },
      {
        "id": 14937836,
        "ref": "30",
        "chapter": 2,
        "title": "Certification Tip!",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14937836#overview",
        "status": "article",
        "text": "Bài đọc chỉ cách tạo nhanh tài nguyên và sinh khung YAML bằng kubectl. Kết hợp --dry-run=client với -o yaml giúp có manifest để sửa tiếp, thay vì gõ từ đầu.",
        "points": [
          "kubectl run dùng tạo Pod",
          "kubectl create deployment dùng tạo Deployment",
          "Kiểm tra manifest sinh ra trước khi apply"
        ],
        "code": "kubectl run web --image=nginx --dry-run=client -o yaml > pod.yaml\nkubectl create deployment web --image=nginx --dry-run=client -o yaml > deployment.yaml\n# Đọc và chỉnh file theo yêu cầu trước khi apply."
      },
      {
        "id": 14298660,
        "ref": "31",
        "chapter": 2,
        "title": "Lab - Deployments",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298660#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về deployment: replicas, image và các ReplicaSet liên quan. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl get deployment,rs,pods",
          "Kiểm tra spec.template"
        ],
        "code": ""
      },
      {
        "id": 19374124,
        "ref": "32",
        "chapter": 2,
        "title": "Lab Solution - Deployments (optional)",
        "duration": "7min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19374124#overview",
        "status": "transcript",
        "text": "Video giải lab Deployments bắt đầu bằng kiểm tra Deployment, ReplicaSet và Pod hiện có. Khi tạo từ file lỗi, giảng viên đọc thông báo rồi sửa các trường cấu hình trước khi thử lại.",
        "points": [
          "Kiểm tra kind và API của manifest",
          "Xác minh số replicas và image của Pod thực tế"
        ],
        "code": ""
      },
      {
        "id": 14295512,
        "ref": "33",
        "chapter": 2,
        "title": "Services",
        "duration": "14min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295512#overview",
        "status": "transcript",
        "text": "Service cung cấp cách truy cập ổn định tới nhóm Pod. Ví dụ NodePort phân biệt port của Service, targetPort của container và nodePort mở trên node; selector chọn các Pod nhận lưu lượng.",
        "points": [
          "Selector dựa trên label của Pod",
          "Một Service có thể phục vụ Pod trên nhiều node",
          "Phân biệt ba trường port"
        ],
        "code": ""
      },
      {
        "id": 14295514,
        "ref": "34",
        "chapter": 2,
        "title": "Services Cluster IP",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295514#overview",
        "status": "transcript",
        "text": "ClusterIP tạo một đầu mối nội bộ cho nhóm Pod, ví dụ giữa frontend và backend. Các thành phần ứng dụng kết nối qua Service thay vì phụ thuộc vào IP của từng Pod.",
        "points": [
          "Pod có thể được thay thế mà tên Service vẫn giữ",
          "Service cân bằng lưu lượng tới các backend phù hợp"
        ],
        "code": ""
      },
      {
        "id": 21799360,
        "ref": "35",
        "chapter": 2,
        "title": "Services - Loadbalancer",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21799360#overview",
        "status": "transcript",
        "text": "Bài giảng nối tiếp NodePort để giải thích nhu cầu một địa chỉ truy cập bên ngoài thống nhất. Service loại LoadBalancer tích hợp với hạ tầng cung cấp load balancer, tùy môi trường triển khai.",
        "points": [
          "Khai báo type chưa tự tạo hạ tầng ở mọi cụm",
          "Kiểm tra địa chỉ external và khả năng tích hợp của nền tảng"
        ],
        "code": ""
      },
      {
        "id": 14298668,
        "ref": "36",
        "chapter": 2,
        "title": "Lab- Services",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298668#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về service: type, selector và các cổng. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl get svc",
          "Kiểm tra backend và targetPort"
        ],
        "code": ""
      },
      {
        "id": 19500718,
        "ref": "37",
        "chapter": 2,
        "title": "Lab Solution - Services (optional)",
        "duration": "9min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19500718#overview",
        "status": "transcript",
        "text": "Video giải lab Services kiểm tra Service có sẵn, cổng và các Pod được selector chọn. Giảng viên đối chiếu endpoints trước khi tạo Service theo yêu cầu.",
        "points": [
          "Đối chiếu selector với label thực",
          "Kiểm tra targetPort và backend thay vì chỉ xem Service đã tồn tại"
        ],
        "code": ""
      },
      {
        "id": 14295510,
        "ref": "38",
        "chapter": 2,
        "title": "Namespaces",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295510#overview",
        "status": "transcript",
        "text": "Namespace chia tài nguyên thành các không gian tên để tổ chức và cô lập phạm vi quản lý. Video dùng ví dụ các môi trường và giải thích cách gọi Service giữa namespace bằng tên DNS đầy đủ hơn.",
        "points": [
          "Luôn kiểm tra namespace khi tra cứu tài nguyên",
          "Có thể đặt namespace cho context",
          "ResourceQuota giới hạn tài nguyên theo namespace"
        ],
        "code": ""
      },
      {
        "id": 14298664,
        "ref": "39",
        "chapter": 2,
        "title": "Lab - Namespaces",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298664#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về namespace: tài nguyên theo từng phạm vi. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl get pods -A",
          "Xác nhận namespace trước khi tạo"
        ],
        "code": ""
      },
      {
        "id": 19374168,
        "ref": "40",
        "chapter": 2,
        "title": "Lab Solution - Namespaces (optional)",
        "duration": "6min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19374168#overview",
        "status": "transcript",
        "text": "Video giải lab Namespaces luyện liệt kê tài nguyên trong namespace cụ thể và trên toàn cụm. Phần truy cập Service khác namespace nối lại quy tắc đặt tên DNS đã học.",
        "points": [
          "-n chọn namespace",
          " -A xem mọi namespace",
          "Tên Service cần bổ sung namespace khi gọi từ nơi khác"
        ],
        "code": ""
      },
      {
        "id": 21500820,
        "ref": "41",
        "chapter": 2,
        "title": "Imperative vs Declarative",
        "duration": "13min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21500820#overview",
        "status": "transcript",
        "text": "Imperative mô tả thao tác cần thực hiện; declarative mô tả trạng thái cần đạt trong manifest. Bài giảng so sánh tốc độ thao tác trực tiếp với khả năng theo dõi và quản lý cấu hình bằng file.",
        "points": [
          "Imperative tiện cho việc ngắn và sinh mẫu",
          "Declarative phù hợp lưu cấu hình và áp dụng lặp lại",
          "Tránh thay đổi ngoài file mà không ghi nhận"
        ],
        "code": ""
      },
      {
        "id": 15018998,
        "ref": "42",
        "chapter": 2,
        "title": "Certification Tips - Imperative Commands with Kubectl",
        "duration": "2min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15018998#overview",
        "status": "article",
        "text": "Bài đọc tập hợp lệnh kubectl imperative để tạo Pod, Deployment và Service nhanh. Hai tùy chọn --dry-run=client và -o yaml giúp tạo manifest ban đầu để sửa theo yêu cầu.",
        "points": [
          "Phân biệt expose với create service",
          "Kiểm tra selector và port của Service sinh ra"
        ],
        "code": ""
      },
      {
        "id": 52883807,
        "ref": "43",
        "chapter": 2,
        "title": "Kubectl Explain Command",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/52883807#overview",
        "status": "transcript",
        "text": "kubectl api-resources cho biết tài nguyên được API hỗ trợ. kubectl explain mô tả từng trường, kiểu dữ liệu và cấu trúc lồng nhau ngay trong terminal.",
        "points": [
          "Đi sâu theo đường dẫn trường như pod.spec",
          "--recursive hiển thị cấu trúc rộng hơn"
        ],
        "code": "kubectl api-resources\nkubectl explain pod.spec.containers\nkubectl explain deployment.spec --recursive"
      },
      {
        "id": 15021302,
        "ref": "44",
        "chapter": 2,
        "title": "Lab - Imperative Commands",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15021302#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về sinh tài nguyên nhanh bằng lệnh imperative. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Dùng --dry-run=client -o yaml khi cần sửa mẫu",
          "Kiểm tra selector của Service sinh ra"
        ],
        "code": ""
      },
      {
        "id": 19374160,
        "ref": "45",
        "chapter": 2,
        "title": "Lab Solution - Imperative Commands (optional)",
        "duration": "13min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19374160#overview",
        "status": "transcript",
        "text": "Video giải lab Imperative Commands luyện tạo các tài nguyên theo yêu cầu bằng dòng lệnh. Giảng viên so sánh expose với create service và kiểm tra cách các lệnh xác định selector, cổng.",
        "points": [
          "Đừng giả định hai cách tạo Service cho cấu hình giống hệt",
          "Xem YAML kết quả khi cần chỉnh chi tiết"
        ],
        "code": ""
      },
      {
        "id": 21500826,
        "ref": "46",
        "chapter": 2,
        "title": "Kubectl Apply Command",
        "duration": "5min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21500826#overview",
        "status": "transcript",
        "text": "Bài giảng giải thích cách apply quyết định cập nhật đối tượng thông qua cấu hình local, cấu hình live và last-applied. Ví dụ cho thấy trường được sửa hoặc bỏ khỏi file ảnh hưởng đến bản cập nhật như thế nào.",
        "points": [
          "Đây là phần giải thích client-side apply",
          "Giữ file khai báo phản ánh trạng thái muốn quản lý"
        ],
        "code": ""
      },
      {
        "id": 18893522,
        "ref": "47",
        "chapter": 2,
        "title": "Here's some inspiration to keep going",
        "duration": "0min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/18893522#overview",
        "status": "image",
        "text": "Mục này là nội dung hình ảnh khích lệ học tập. Phiên kiểm tra không lấy được phần văn bản bài đọc, nên không gán một bài học Kubernetes giả định cho nó.",
        "points": [
          "Mở mục gốc nếu muốn xem hình ảnh"
        ],
        "code": ""
      },
      {
        "id": 38139820,
        "ref": "48",
        "chapter": 2,
        "title": "A Quick Reminder",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/38139820#overview",
        "status": "transcript",
        "text": "Giảng viên nhắc học theo các video và lab của khóa để tránh bị phân tán khi chưa hoàn thành nền tảng. Nguồn mở rộng có thể dùng sau khi đã nắm luồng học chính.",
        "points": [
          "Làm xong lab của chủ đề trước khi đổi nguồn",
          "Ghi lại câu hỏi còn vướng để quay lại"
        ],
        "code": ""
      },
      {
        "id": 51460767,
        "ref": "49",
        "chapter": 2,
        "title": "Reference Notes for lectures and labs",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/51460767#overview",
        "status": "article",
        "text": "Bài đọc dẫn đến repository ghi chú, tài liệu và đáp án thực hành của khóa. Đây là nguồn tham chiếu bổ sung khi học và ôn lại từng phần.",
        "points": [
          "Đọc ghi chú theo đúng lecture",
          "Làm bài trước khi xem đáp án"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 3,
    "title": "Scheduling",
    "en": "Lập lịch và kiểm soát yêu cầu",
    "intro": "Đi từ gán Pod thủ công tới labels, taints, affinity và tài nguyên. Cuối phần có các bài cập nhật PriorityClass, scheduling profiles và admission controller như trong khóa gốc.",
    "goals": [
      "Chẩn đoán Pod Pending theo điều kiện scheduling",
      "Phối hợp affinity với taint/toleration",
      "Phân biệt admission với scheduling"
    ],
    "lessons": [
      {
        "id": 14295640,
        "ref": "50",
        "chapter": 3,
        "title": "Scheduling - Section Introduction",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295640#overview",
        "status": "transcript",
        "text": "Phần Scheduling mở rộng từ vai trò scheduler sang cách điều khiển vị trí đặt Pod. Lộ trình gồm gán node thủ công, ràng buộc node, tài nguyên và nhiều scheduler.",
        "points": [
          "Theo dõi Events khi Pod Pending",
          "Đặt ràng buộc theo mục tiêu cụ thể"
        ],
        "code": ""
      },
      {
        "id": 14295580,
        "ref": "51",
        "chapter": 3,
        "title": "Manual Scheduling",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295580#overview",
        "status": "transcript",
        "text": "Khi không có scheduler, Pod có thể chưa được gán node. Bài giảng minh họa gán nodeName lúc tạo Pod và dùng đối tượng Binding để thực hiện liên kết.",
        "points": [
          "nodeName bỏ qua quá trình chọn node thông thường",
          "Không thể tùy ý sửa nodeName của Pod đã tạo"
        ],
        "code": ""
      },
      {
        "id": 14298674,
        "ref": "52",
        "chapter": 3,
        "title": "Lab- Manual Scheduling",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298674#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về gán node thủ công khi Pod chưa được schedule. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Xem nodeName và Events",
          "Xác nhận node thực tế sau tạo"
        ],
        "code": ""
      },
      {
        "id": 19500744,
        "ref": "53",
        "chapter": 3,
        "title": "Lab Solution -  Manual Scheduling (optional)",
        "duration": "7min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19500744#overview",
        "status": "transcript",
        "text": "Video giải lab Manual Scheduling tìm lý do Pod Pending khi scheduler không hoạt động. Manifest được bổ sung nodeName rồi Pod được tạo lại để kiểm tra node đích.",
        "points": [
          "Kiểm tra có scheduler trước khi đoán lỗi image",
          "Xác nhận vị trí bằng get pods -o wide"
        ],
        "code": ""
      },
      {
        "id": 14295582,
        "ref": "54",
        "chapter": 3,
        "title": "Labels and Selectors",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295582#overview",
        "status": "transcript",
        "text": "Labels và selectors giúp nhóm, lọc và liên kết đối tượng. Video chỉ ra selector của controller phải khớp label trên Pod template; annotations dùng cho thông tin mô tả khác.",
        "points": [
          "Label phục vụ chọn đối tượng",
          "Annotation không thay thế label selector",
          "Phân biệt metadata của controller và template"
        ],
        "code": "kubectl get pods --show-labels\nkubectl get pods -l app=web,tier=frontend"
      },
      {
        "id": 14298670,
        "ref": "55",
        "chapter": 3,
        "title": "Lab - Labels and Selectors",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298670#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về lọc theo tổ hợp label và sửa selector. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl get pods --show-labels",
          "Đối chiếu selector và template"
        ],
        "code": ""
      },
      {
        "id": 17427706,
        "ref": "56",
        "chapter": 3,
        "title": "Lab Solution : Labels and Selectors : (Optional)",
        "duration": "6min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17427706#overview",
        "status": "transcript",
        "text": "Video giải lab Labels and Selectors lọc tài nguyên theo các nhãn kết hợp và sửa selector sai. Giảng viên cũng minh họa đếm kết quả không kèm dòng tiêu đề.",
        "points": [
          "Đọc đúng tổ hợp key=value",
          "Đối chiếu matchLabels với template khi ReplicaSet lỗi"
        ],
        "code": ""
      },
      {
        "id": 16063306,
        "ref": "57",
        "chapter": 3,
        "title": "Taints and Tolerations",
        "duration": "10min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16063306#overview",
        "status": "transcript",
        "text": "Taint đặt điều kiện loại trừ trên node; toleration cho phép Pod chịu điều kiện đó. Bài giảng phân biệt NoSchedule, PreferNoSchedule và NoExecute qua ví dụ node dành riêng.",
        "points": [
          "Toleration không bắt buộc Pod vào node đó",
          "NoExecute có thể ảnh hưởng Pod đã chạy",
          "Taint control plane là một ví dụ cần quan sát"
        ],
        "code": ""
      },
      {
        "id": 16063308,
        "ref": "58",
        "chapter": 3,
        "title": "Lab - Taints and Tolerations",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16063308#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về taint của node và toleration của Pod. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc effect của taint",
          "Kiểm tra lý do Pending trong Events"
        ],
        "code": ""
      },
      {
        "id": 21738764,
        "ref": "59",
        "chapter": 3,
        "title": "Lab Solution -  Taints and Tolerations (Optional)",
        "duration": "10min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21738764#overview",
        "status": "transcript",
        "text": "Video giải lab kiểm tra taint của node và nguyên nhân Pod không được schedule. Giảng viên thêm toleration phù hợp, sau đó quan sát thay đổi khi gỡ taint.",
        "points": [
          "Khớp key, value, operator và effect",
          "Kiểm tra node thực tế của Pod sau thay đổi"
        ],
        "code": ""
      },
      {
        "id": 16063312,
        "ref": "60",
        "chapter": 3,
        "title": "Node Selectors",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16063312#overview",
        "status": "transcript",
        "text": "nodeSelector giới hạn Pod tới node mang label được chỉ định. Video dùng ví dụ node có kích thước tài nguyên khác nhau và chỉ ra hạn chế khi cần biểu thức OR hoặc NOT.",
        "points": [
          "Gắn label lên node trước",
          "Key và value phải khớp",
          "Nhu cầu biểu thức phức tạp dẫn tới node affinity"
        ],
        "code": ""
      },
      {
        "id": 16063314,
        "ref": "61",
        "chapter": 3,
        "title": "Node Affinity",
        "duration": "7min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16063314#overview",
        "status": "transcript",
        "text": "Node affinity mô tả điều kiện chọn node linh hoạt hơn nodeSelector bằng biểu thức. Bài giảng phân biệt điều kiện bắt buộc, ưu tiên và ý nghĩa IgnoredDuringExecution.",
        "points": [
          "required khác preferred",
          "Đọc operator In, NotIn hoặc Exists",
          "Thay đổi label sau khi chạy không tự di chuyển Pod với IgnoredDuringExecution"
        ],
        "code": ""
      },
      {
        "id": 16063316,
        "ref": "62",
        "chapter": 3,
        "title": "Lab - Node Affinity",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16063316#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về node affinity theo label của node. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl get nodes --show-labels",
          "Đọc required và preferred trong Pod template"
        ],
        "code": ""
      },
      {
        "id": 21738774,
        "ref": "63",
        "chapter": 3,
        "title": "Lab Solution - Node Affinity (Optional)",
        "duration": "10min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21738774#overview",
        "status": "transcript",
        "text": "Video giải lab đặt node affinity lên Deployment và kiểm tra các Pod mới được tạo trên node phù hợp. Việc chỉnh template làm rollout, nên cần quan sát lại toàn bộ Pod.",
        "points": [
          "Kiểm tra label node trước khi viết matchExpressions",
          "Dùng get pods -o wide để xác nhận kết quả"
        ],
        "code": ""
      },
      {
        "id": 16063318,
        "ref": "64",
        "chapter": 3,
        "title": "Taints and Tolerations vs Node Affinity",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16063318#overview",
        "status": "transcript",
        "text": "Taint/toleration ngăn Pod không phù hợp vào node; affinity hướng Pod tới node mong muốn. Ví dụ ghép các Pod và node theo màu cho thấy phải phối hợp hai cơ chế khi muốn dành riêng node.",
        "points": [
          "Toleration chỉ mở quyền vào",
          "Affinity mới ràng buộc nơi đến",
          "Một cơ chế đơn lẻ có thể chưa đủ yêu cầu"
        ],
        "code": ""
      },
      {
        "id": 14298678,
        "ref": "65",
        "chapter": 3,
        "title": "Resource Requirements",
        "duration": "15min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298678#overview",
        "status": "transcript",
        "text": "Requests là cơ sở scheduler cân nhắc tài nguyên cần cấp; limits đặt giới hạn sử dụng. Video phân biệt CPU có thể bị throttling và memory vượt giới hạn có thể dẫn đến OOMKilled.",
        "points": [
          "Khai báo tại từng container",
          "Phân biệt đơn vị CPU và memory",
          "LimitRange và ResourceQuota giải quyết các phạm vi khác nhau"
        ],
        "code": ""
      },
      {
        "id": 14937592,
        "ref": "66",
        "chapter": 3,
        "title": "A quick note on editing Pods and Deployments",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14937592#overview",
        "status": "article",
        "text": "Bài đọc chỉ ra nhiều trường của Pod đang tồn tại không thể chỉnh trực tiếp theo cách thông thường. Có thể xuất cấu hình, sửa rồi tạo lại trong lab; với Deployment, sửa Pod template để controller rollout.",
        "points": [
          "Đánh giá việc gián đoạn trước khi xóa Pod",
          "Danh sách trường sửa được phụ thuộc phiên bản và subresource",
          "Đừng sửa riêng Pod nếu cấu hình cần nằm ở controller"
        ],
        "code": "",
        "update": {
          "text": "Danh sách trường có thể sửa thay đổi theo phiên bản và subresource. Kubernetes v1.35 đã ổn định resize tài nguyên container qua cơ chế resize; không hiểu bài đọc cũ thành cấm tuyệt đối mọi thay đổi resources.",
          "url": "https://kubernetes.io/docs/tasks/configure-pod-container/resize-container-resources/"
        }
      },
      {
        "id": 14298680,
        "ref": "67",
        "chapter": 3,
        "title": "Lab - Resource Limits",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298680#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về requests, limits và dấu hiệu OOMKilled. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Xem cấu hình từng container",
          "Kiểm tra trạng thái kết thúc và số lần restart"
        ],
        "code": ""
      },
      {
        "id": 17428406,
        "ref": "68",
        "chapter": 3,
        "title": "Lab Solution - Resource Limits",
        "duration": "5min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17428406#overview",
        "status": "transcript",
        "text": "Video giải lab Resources dùng trạng thái OOMKilled để nhận diện container vượt memory limit. Sau khi kiểm tra cấu hình và yêu cầu bài, giảng viên chỉnh giới hạn và tạo lại đối tượng khi cần.",
        "points": [
          "Phân biệt lỗi ứng dụng với thiếu bộ nhớ",
          "Kiểm tra restart count và termination reason"
        ],
        "code": ""
      },
      {
        "id": 14295586,
        "ref": "69",
        "chapter": 3,
        "title": "DaemonSets",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295586#overview",
        "status": "transcript",
        "text": "DaemonSet duy trì Pod trên các node đủ điều kiện, phù hợp agent log, giám sát và thành phần mạng. Cấu trúc manifest gần ReplicaSet nhưng mô hình phân bố khác.",
        "points": [
          "Không dùng replicas để yêu cầu mỗi node một Pod",
          "Node selector, affinity và taint vẫn ảnh hưởng phạm vi chạy"
        ],
        "code": ""
      },
      {
        "id": 14298688,
        "ref": "70",
        "chapter": 3,
        "title": "Lab - DaemonSets",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298688#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về daemonSet và số node đủ điều kiện chạy. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl get ds -A",
          "So sánh desired và ready"
        ],
        "code": ""
      },
      {
        "id": 19500732,
        "ref": "71",
        "chapter": 3,
        "title": "Lab Solution - DaemonSets (optional)",
        "duration": "6min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19500732#overview",
        "status": "transcript",
        "text": "Video giải lab DaemonSets liệt kê trên mọi namespace, kiểm tra image và tạo manifest cho một agent. Giảng viên tận dụng khung Deployment rồi sửa thành DaemonSet.",
        "points": [
          "Kiểm tra kind và loại bỏ trường không phù hợp",
          "Xác nhận số desired và ready tương ứng node"
        ],
        "code": ""
      },
      {
        "id": 14863335,
        "ref": "72",
        "chapter": 3,
        "title": "Static Pods",
        "duration": "9min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14863335#overview",
        "status": "transcript",
        "text": "Static Pod do kubelet đọc trực tiếp từ thư mục manifest trên node, không cần scheduler tạo ra. Khi có API server, mirror Pod giúp quan sát qua kubectl nhưng nguồn quản lý vẫn nằm trên host.",
        "points": [
          "Tìm staticPodPath trong cấu hình kubelet",
          "Xóa mirror Pod không xóa manifest gốc",
          "Static Pod khác DaemonSet"
        ],
        "code": ""
      },
      {
        "id": 14865655,
        "ref": "73",
        "chapter": 3,
        "title": "Lab - Static Pods",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14865655#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về manifest static Pod do kubelet theo dõi. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Tìm staticPodPath",
          "Kiểm tra đúng host chứa manifest"
        ],
        "code": ""
      },
      {
        "id": 21744390,
        "ref": "74",
        "chapter": 3,
        "title": "Lab Solution - Static Pods (Optional)",
        "duration": "15min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21744390#overview",
        "status": "transcript",
        "text": "Video giải lab tìm các static Pod và đường dẫn kubelet đang theo dõi. Tạo hoặc gỡ manifest tại đúng node làm kubelet tạo hoặc dừng Pod tương ứng.",
        "points": [
          "Đọc cấu hình thay vì đoán thư mục",
          "Hậu tố tên mirror Pod giúp xác định node"
        ],
        "code": ""
      },
      {
        "id": 50065393,
        "ref": "75",
        "chapter": 3,
        "title": "Priority Classes",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/50065393#overview",
        "status": "transcript",
        "text": "PriorityClass gán mức ưu tiên cho Pod, hỗ trợ scheduler quyết định khi tài nguyên thiếu. Bài giảng phân biệt giá trị ưu tiên, lớp mặc định và preemptionPolicy.",
        "points": [
          "priorityClassName tham chiếu đối tượng PriorityClass",
          "Ưu tiên cao không tự bỏ qua mọi ràng buộc",
          "Preemption cần đọc cùng chính sách"
        ],
        "code": ""
      },
      {
        "id": 50065519,
        "ref": "76",
        "chapter": 3,
        "title": "Lab - Priority Classes",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/50065519#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về priorityClass và chính sách preemption. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl get priorityclass",
          "Kiểm tra priorityClassName của Pod"
        ],
        "code": ""
      },
      {
        "id": 14295588,
        "ref": "77",
        "chapter": 3,
        "title": "Multiple Schedulers",
        "duration": "9min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295588#overview",
        "status": "transcript",
        "text": "Có thể chạy scheduler bổ sung với cấu hình và tên riêng. Pod chọn scheduler qua schedulerName; video cũng đề cập leader election và cách xem Events, logs để biết thành phần nào xử lý.",
        "points": [
          "Tên scheduler trong Pod phải khớp cấu hình",
          "Kiểm tra scheduler mới trước khi gửi Pod cho nó"
        ],
        "code": ""
      },
      {
        "id": 14298694,
        "ref": "78",
        "chapter": 3,
        "title": "Lab - Multiple Schedulers",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298694#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về scheduler riêng và schedulerName. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra scheduler đang chạy",
          "Đọc Events của Pod thử nghiệm"
        ],
        "code": ""
      },
      {
        "id": 16705410,
        "ref": "79",
        "chapter": 3,
        "title": "Lab Solution - Multiple Scheduler",
        "duration": "7min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16705410#overview",
        "status": "transcript",
        "text": "Video giải lab Multiple Schedulers kiểm tra cấu hình scheduler mới, triển khai manifest và tạo Pod dùng scheduler đó. Việc xác nhận dựa trên trạng thái Pod và hoạt động scheduler.",
        "points": [
          "Đọc schedulerName cả hai phía",
          "Quan sát Events nếu Pod vẫn Pending"
        ],
        "code": ""
      },
      {
        "id": 14295628,
        "ref": "80",
        "chapter": 3,
        "title": "Configuring Scheduler Profiles",
        "duration": "9min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295628#overview",
        "status": "transcript",
        "text": "Scheduling framework chia quá trình thành các điểm mở rộng với plugin. Nhiều profile có thể cùng chạy trong một scheduler process nhưng có cấu hình plugin và schedulerName khác nhau.",
        "points": [
          "Phân biệt filter với score",
          "Profile khác với triển khai một process scheduler hoàn toàn riêng",
          "Không nhầm trọng số score với điều kiện bắt buộc"
        ],
        "code": ""
      },
      {
        "id": 31984310,
        "ref": "81",
        "chapter": 3,
        "title": "References",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/31984310#overview",
        "status": "article",
        "text": "Bài đọc tập hợp nguồn tìm hiểu cấu trúc mã và thuật toán scheduling. Dùng sau khi đã nắm filter, score và scheduling profiles để mở rộng cách các phần được triển khai.",
        "points": [
          "Nguồn cũ giúp giải thích thiết kế",
          "Đối chiếu phiên bản khi áp dụng cấu hình plugin"
        ],
        "code": ""
      },
      {
        "id": 48276491,
        "ref": "82",
        "chapter": 3,
        "title": "(2025 Updates)Admission Controllers",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48276491#overview",
        "status": "transcript",
        "text": "Admission controller xử lý yêu cầu sau xác thực và phân quyền, trước khi lưu đối tượng. Các ví dụ minh họa kiểm tra namespace và áp dụng quy tắc vượt ra ngoài quyền truy cập thông thường.",
        "points": [
          "Authentication, authorization và admission là ba bước khác nhau",
          "Kiểm tra plugin qua cấu hình API server"
        ],
        "code": ""
      },
      {
        "id": 48276497,
        "ref": "83",
        "chapter": 3,
        "title": "(2025 Updates)Lab – Admission Controllers",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48276497#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về admission plugin trong API server. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc cấu hình plugin",
          "Kiểm tra API server phục hồi sau thay đổi"
        ],
        "code": ""
      },
      {
        "id": 48276501,
        "ref": "84",
        "chapter": 3,
        "title": "(2025 Updates)Lab Solution: Admission Controllers",
        "duration": "7min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48276501#overview",
        "status": "transcript",
        "text": "Video giải lab Admission Controllers kiểm tra các plugin được bật và thay đổi tham số API server trong môi trường lab. Giảng viên theo dõi việc API server khởi động lại trước khi thử yêu cầu.",
        "points": [
          "Sao lưu manifest trước khi sửa",
          "Kiểm tra API server phục hồi rồi mới đánh giá quy tắc"
        ],
        "code": ""
      },
      {
        "id": 48276505,
        "ref": "85",
        "chapter": 3,
        "title": "(2025 Updates)Validating and Mutating Admission Controllers",
        "duration": "10min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48276505#overview",
        "status": "transcript",
        "text": "Mutating admission có thể thay đổi đối tượng; validating admission chấp nhận hoặc từ chối. Webhook mở rộng cơ chế này bằng dịch vụ xử lý AdmissionReview, cấu hình rule và TLS.",
        "points": [
          "Mutating diễn ra trước validating",
          "Webhook cần endpoint và certificate phù hợp",
          "Lỗi kết nối webhook có thể ảnh hưởng yêu cầu API"
        ],
        "code": ""
      },
      {
        "id": 48276507,
        "ref": "86",
        "chapter": 3,
        "title": "(2025 Updates)Lab  – Validating and Mutating Admission Controllers",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48276507#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về webhook mutating và validating. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra cấu hình, service và certificate",
          "Thử đối tượng được phép và bị từ chối theo lab"
        ],
        "code": ""
      },
      {
        "id": 48276515,
        "ref": "87",
        "chapter": 3,
        "title": "(2025 Updates)Lab Solution: Validating and Mutating Admission Controllers",
        "duration": "8min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48276515#overview",
        "status": "transcript",
        "text": "Video giải lab đi qua cấu hình webhook và thử tạo tài nguyên để quan sát phần chỉnh sửa hoặc từ chối. Kết quả được đối chiếu với quy tắc validation thay vì chỉ kiểm tra đối tượng có được tạo.",
        "points": [
          "Kiểm tra webhook configuration và service liên quan",
          "Đọc thông báo từ chối để hiểu chính sách"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 4,
    "title": "Logging & Monitoring",
    "en": "Log và giám sát",
    "intro": "Theo dõi tài nguyên cụm bằng Metrics Server và xem log ứng dụng. Phần này giữ riêng video khái niệm, đường dẫn lab và video giải tương ứng.",
    "goals": [
      "Đọc mức sử dụng CPU/memory của node và Pod",
      "Chọn đúng container khi lấy log"
    ],
    "lessons": [
      {
        "id": 14295994,
        "ref": "88",
        "chapter": 4,
        "title": "Logging and Monitoring - Section Introduction",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295994#overview",
        "status": "transcript",
        "text": "Phần này học cách xem mức tiêu thụ tài nguyên và log của ứng dụng, thành phần cụm. Các lab tập trung quan sát dữ liệu để tìm nguyên nhân thay vì chỉ tạo tài nguyên.",
        "points": [
          "Tách metrics khỏi logs",
          "Chọn node, Pod và container đúng khi điều tra"
        ],
        "code": ""
      },
      {
        "id": 14295996,
        "ref": "89",
        "chapter": 4,
        "title": "Monitor Cluster Components",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14295996#overview",
        "status": "transcript",
        "text": "Metrics Server thu thập số liệu từ kubelet để cung cấp metrics tài nguyên hiện tại. Bài giảng giới thiệu kubectl top node và top pod, đồng thời phân biệt Metrics Server với hệ thống lưu lịch sử giám sát.",
        "points": [
          "Cần triển khai Metrics Server trước khi top hoạt động",
          "Top là quan sát mức sử dụng, không phải requests/limits"
        ],
        "code": "kubectl top nodes\nkubectl top pods -A"
      },
      {
        "id": 14298716,
        "ref": "90",
        "chapter": 4,
        "title": "Lab - Monitoring Cluster Components",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298716#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về metrics Server và số liệu CPU/memory. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl top nodes",
          "kubectl top pods -A"
        ],
        "code": ""
      },
      {
        "id": 17428590,
        "ref": "91",
        "chapter": 4,
        "title": "Lab Solution: Monitor Cluster Components",
        "duration": "4min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17428590#overview",
        "status": "transcript",
        "text": "Video giải lab triển khai Metrics Server, chờ số liệu sẵn sàng rồi tìm node và Pod tiêu thụ nhiều tài nguyên. Giảng viên kiểm tra triển khai thay vì kết luận ngay khi top chưa có dữ liệu.",
        "points": [
          "Chờ metrics được thu thập",
          "Đọc đúng cột CPU và memory"
        ],
        "code": ""
      },
      {
        "id": 14296002,
        "ref": "92",
        "chapter": 4,
        "title": "Managing Application Logs",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296002#overview",
        "status": "transcript",
        "text": "kubectl logs đọc log của container trong Pod, với -f để theo dõi liên tục. Khi Pod nhiều container, cần chỉ định container muốn xem.",
        "points": [
          "Tên Pod chưa đủ nếu có nhiều nguồn log",
          "Đọc log gắn với thời điểm và triệu chứng"
        ],
        "code": "kubectl logs <ten-pod> -c <ten-container>\nkubectl logs <ten-pod> -c <ten-container> --previous"
      },
      {
        "id": 14298724,
        "ref": "93",
        "chapter": 4,
        "title": "Lab - Monitor Application Logs",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298724#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về log ứng dụng theo Pod và container. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl logs <ten-pod> -c <ten-container>",
          "Tìm sự kiện gắn với triệu chứng"
        ],
        "code": ""
      },
      {
        "id": 17429580,
        "ref": "94",
        "chapter": 4,
        "title": "Lab Solution: Logging : (Optional)",
        "duration": "3min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17429580#overview",
        "status": "transcript",
        "text": "Video giải lab tìm nguyên nhân nghiệp vụ qua log ứng dụng, như tài khoản bị khóa hoặc lỗi giao dịch. Mục tiêu là chọn đúng container và đọc đúng sự kiện liên quan.",
        "points": [
          "Tìm bằng chứng trong log trước khi chọn đáp án",
          "Không nhầm lỗi nghiệp vụ với lỗi scheduling"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 5,
    "title": "Application Lifecycle Management",
    "en": "Vòng đời ứng dụng",
    "intro": "Học rollout, cấu hình command/args, môi trường, Secret và mô hình nhiều container. Chuỗi autoscaling cập nhật nằm ở cuối phần, gồm HPA, resize và VPA.",
    "goals": [
      "Kiểm tra một lần rollout và rollback",
      "Phân biệt ConfigMap, Secret và cấu hình image",
      "So sánh HPA với VPA"
    ],
    "lessons": [
      {
        "id": 14296006,
        "ref": "95",
        "chapter": 5,
        "title": "Application Lifecycle Management - Section Introduction",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296006#overview",
        "status": "transcript",
        "text": "Phần Application Lifecycle Management đi từ rollout và rollback tới cấu hình lệnh, biến môi trường, Secret và nhiều container. Các bài cập nhật mở rộng sang autoscaling.",
        "points": [
          "Đọc cấu hình ở mức container và Pod",
          "Theo dõi thay đổi thông qua controller"
        ],
        "code": ""
      },
      {
        "id": 14296008,
        "ref": "96",
        "chapter": 5,
        "title": "Rolling Updates and Rollbacks",
        "duration": "7min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296008#overview",
        "status": "transcript",
        "text": "Deployment ghi nhận các lần rollout và hỗ trợ quay về revision trước. Video so sánh Recreate với RollingUpdate, rồi minh họa cập nhật image và theo dõi ReplicaSet cũ, mới.",
        "points": [
          "rollout status theo dõi cập nhật",
          "rollout history xem revision",
          "rollout undo phục hồi cấu hình trước"
        ],
        "code": "kubectl rollout status deployment/<ten-deployment>\nkubectl rollout history deployment/<ten-deployment>\n# Đọc history và kiểm tra tác động trước khi chọn undo."
      },
      {
        "id": 14298726,
        "ref": "97",
        "chapter": 5,
        "title": "Lab - Rolling Updates and Rollbacks",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298726#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về rollout và các revision của Deployment. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl rollout status deployment/<ten>",
          "kubectl rollout history deployment/<ten>"
        ],
        "code": ""
      },
      {
        "id": 17428352,
        "ref": "98",
        "chapter": 5,
        "title": "Lab Solution: Rolling update",
        "duration": "9min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17428352#overview",
        "status": "transcript",
        "text": "Video giải lab quan sát ứng dụng đổi phiên bản khi cập nhật Deployment. Giảng viên kiểm tra image, chiến lược rollout và dùng set image để tạo lần cập nhật mới.",
        "points": [
          "Quan sát số bản sao trong lúc chuyển đổi",
          "Kiểm tra phiên bản ứng dụng thực tế qua truy cập"
        ],
        "code": ""
      },
      {
        "id": 14296010,
        "ref": "99",
        "chapter": 5,
        "title": "Configure Applications",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296010#overview",
        "status": "article",
        "text": "Bài đọc giới thiệu ba nhóm cấu hình sẽ học tiếp: command/args, biến môi trường và Secret. Đây là trang chuyển tiếp, không phải một video triển khai ứng dụng riêng.",
        "points": [
          "Nắm cấu hình của image trước",
          "Theo tiếp các bài Docker và Kubernetes để hiểu ánh xạ"
        ],
        "code": ""
      },
      {
        "id": 14296012,
        "ref": "100",
        "chapter": 5,
        "title": "Commands and Arguments in Docker",
        "duration": "7min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296012#overview",
        "status": "transcript",
        "text": "Một container sống theo tiến trình chính của nó. Ví dụ Ubuntu sleeper giải thích CMD cung cấp mặc định và ENTRYPOINT xác định chương trình chạy, cùng cách ghi đè khi khởi động.",
        "points": [
          "Phân biệt shell form và exec form",
          "Đối số sau tên image có thể thay CMD",
          "ENTRYPOINT có thể ghi đè bằng tùy chọn runtime"
        ],
        "code": ""
      },
      {
        "id": 14296014,
        "ref": "101",
        "chapter": 5,
        "title": "Commands and Arguments in Kubernetes",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296014#overview",
        "status": "transcript",
        "text": "Trong manifest Pod, command ghi đè ENTRYPOINT của image, còn args ghi đè CMD. Ví dụ ứng dụng ngủ cho thấy thay đối số khác với thay chương trình thực thi.",
        "points": [
          "command và args là danh sách",
          "Không suy nghĩa command từ tên CMD của Dockerfile"
        ],
        "code": ""
      },
      {
        "id": 14298870,
        "ref": "102",
        "chapter": 5,
        "title": "Lab - Commands and Arguments",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298870#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về command và args so với cấu hình image. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc lệnh chạy thực tế",
          "Phân biệt ghi đè chương trình và đối số"
        ],
        "code": ""
      },
      {
        "id": 21744338,
        "ref": "103",
        "chapter": 5,
        "title": "Lab Solution -  Commands and Arguments (Optional)",
        "duration": "20min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21744338#overview",
        "status": "transcript",
        "text": "Video giải lab đọc lệnh khởi động container rồi sửa thời gian ngủ hoặc màu ứng dụng qua command/args. Việc thay trường bất biến cần tạo lại Pod trong môi trường bài tập.",
        "points": [
          "Đọc cấu hình image và manifest cùng nhau",
          "Kiểm tra tiến trình và kết quả ứng dụng sau chỉnh sửa"
        ],
        "code": ""
      },
      {
        "id": 14296026,
        "ref": "104",
        "chapter": 5,
        "title": "Configure Environment Variables in Applications",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296026#overview",
        "status": "transcript",
        "text": "env khai báo danh sách biến môi trường cho từng container bằng name và value. Ngoài giá trị trực tiếp, valueFrom lấy dữ liệu từ ConfigMap hoặc Secret.",
        "points": [
          "env nằm trong container spec",
          "Phân biệt value với valueFrom"
        ],
        "code": ""
      },
      {
        "id": 14412322,
        "ref": "105",
        "chapter": 5,
        "title": "Configuring ConfigMaps in Applications",
        "duration": "5min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14412322#overview",
        "status": "transcript",
        "text": "ConfigMap tách cấu hình khỏi manifest Pod. Video tạo bằng literal hoặc file, rồi đưa dữ liệu vào container qua env, envFrom hoặc volume.",
        "points": [
          "ConfigMap có data thay vì Pod spec",
          "Tên key phải khớp khi tham chiếu",
          "ConfigMap không dành cho dữ liệu bí mật"
        ],
        "code": ""
      },
      {
        "id": 14298876,
        "ref": "106",
        "chapter": 5,
        "title": "Lab: Env Variables",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298876#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về env, ConfigMap và tham chiếu key. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Xem env/envFrom",
          "Kiểm tra tên ConfigMap trong namespace"
        ],
        "code": ""
      },
      {
        "id": 21744350,
        "ref": "107",
        "chapter": 5,
        "title": "Lab Solution -  Env Variables (Optional)",
        "duration": "9min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21744350#overview",
        "status": "transcript",
        "text": "Video giải lab kiểm tra biến môi trường hiện tại rồi tạo và gắn ConfigMap vào ứng dụng. Kết quả được xác nhận bằng cấu hình Pod và giao diện ứng dụng đổi màu.",
        "points": [
          "Kiểm tra tên ConfigMap và key",
          "Đọc envFrom hoặc valueFrom đúng cấp"
        ],
        "code": ""
      },
      {
        "id": 14296016,
        "ref": "108",
        "chapter": 5,
        "title": "Secrets",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296016#overview",
        "status": "transcript",
        "text": "Secret giữ dữ liệu nhạy cảm dưới dạng đối tượng Kubernetes để container tham chiếu. Video giải thích tạo Secret và dùng qua biến môi trường hoặc volume, đồng thời chỉ ra giá trị trong manifest được mã hóa biểu diễn base64.",
        "points": [
          "Base64 có thể giải mã, không phải mã hóa bảo mật",
          "Không đưa Secret thực vào Git",
          "Kiểm tra quyền truy cập và encryption at rest"
        ],
        "code": ""
      },
      {
        "id": 14298872,
        "ref": "109",
        "chapter": 5,
        "title": "Lab - Secrets",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298872#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về secret và cấu hình ứng dụng sử dụng Secret. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra tên key mà ứng dụng yêu cầu",
          "Không đưa giá trị bí mật vào file theo dõi công khai"
        ],
        "code": ""
      },
      {
        "id": 42945198,
        "ref": "110",
        "chapter": 5,
        "title": "Additional Resource",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/42945198#overview",
        "status": "article",
        "text": "Bài đọc dẫn tới video bổ sung về Secrets Store CSI Driver. Đây là tài nguyên mở rộng cho việc tích hợp nguồn bí mật bên ngoài, không phải nội dung thay thế lab Secrets.",
        "points": [
          "Mở liên kết từ lecture gốc",
          "Phân biệt Secret Kubernetes với kho bí mật ngoài cụm"
        ],
        "code": ""
      },
      {
        "id": 21744372,
        "ref": "111",
        "chapter": 5,
        "title": "Lab Solution -  Secrets (Optional)",
        "duration": "10min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21744372#overview",
        "status": "transcript",
        "text": "Video giải lab Secrets tìm lý do ứng dụng không kết nối được cơ sở dữ liệu rồi đưa thông tin kết nối vào Secret. Giảng viên kiểm tra cách các key được chuyển thành biến môi trường.",
        "points": [
          "Tên biến phải đúng ứng dụng mong đợi",
          "Không in hoặc lưu mật khẩu thật vào ghi chú"
        ],
        "code": ""
      },
      {
        "id": 34549248,
        "ref": "112",
        "chapter": 5,
        "title": "Demo: Encrypting Secret Data at Rest",
        "duration": "19min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/34549248#overview",
        "status": "transcript",
        "text": "Demo cho thấy dữ liệu Secret trong etcd trước và sau khi bật encryption at rest. Giảng viên cấu hình EncryptionConfiguration và API server, rồi kiểm tra dữ liệu được ghi bằng cơ chế đã chọn.",
        "points": [
          "Base64 và encryption at rest giải quyết hai việc khác nhau",
          "Thay cấu hình chưa tự mã hóa lại mọi Secret đã tồn tại",
          "Bảo vệ cả khóa mã hóa và bản sao lưu"
        ],
        "code": ""
      },
      {
        "id": 14827414,
        "ref": "113",
        "chapter": 5,
        "title": "A Note on Secrets",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14827414#overview",
        "status": "article",
        "text": "Bài đọc nhấn mạnh an toàn của Secret đến từ cách sử dụng: quyền truy cập, tránh đưa lên source control và bật mã hóa khi lưu. Chỉ encode base64 không ngăn người có dữ liệu đọc nội dung.",
        "points": [
          "Giới hạn quyền đọc Secret",
          "Không log giá trị bí mật",
          "Xem encryption và quản lý khóa như phần riêng"
        ],
        "code": ""
      },
      {
        "id": 15029472,
        "ref": "114",
        "chapter": 5,
        "title": "Multi Container Pods",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15029472#overview",
        "status": "transcript",
        "text": "Multi-container Pod dành cho các tiến trình cần phối hợp chặt, chẳng hạn ứng dụng và agent hỗ trợ. Chúng dùng chung mạng của Pod và có thể chia sẻ volume được khai báo.",
        "points": [
          "Truy cập nhau qua localhost",
          "Đồng vị trí khác với scale độc lập từng service",
          "Mỗi container vẫn có image và cấu hình riêng"
        ],
        "code": ""
      },
      {
        "id": 51450256,
        "ref": "115",
        "chapter": 5,
        "title": "Multi container Pods Design Pattern",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/51450256#overview",
        "status": "transcript",
        "text": "Video so sánh container chạy song song, init container và native sidecar theo vòng đời. Điểm quan trọng là tiến trình nào phải hoàn tất trước, tiến trình nào cần tiếp tục chạy cùng ứng dụng.",
        "points": [
          "Init thông thường phải hoàn tất",
          "Sidecar hỗ trợ chạy cùng ứng dụng",
          "Đọc restartPolicy và vị trí khai báo để hiểu vòng đời"
        ],
        "code": ""
      },
      {
        "id": 15029474,
        "ref": "116",
        "chapter": 5,
        "title": "Lab - Multi Container Pods",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15029474#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về các container phối hợp trong một Pod. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đếm và xem trạng thái từng container",
          "Chọn đúng container khi đọc log"
        ],
        "code": ""
      },
      {
        "id": 15030046,
        "ref": "117",
        "chapter": 5,
        "title": "InitContainers",
        "duration": "2min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15030046#overview",
        "status": "article",
        "text": "Init container thông thường chạy theo thứ tự và phải hoàn tất thành công trước khi app container bắt đầu. Bài đọc cũng giới thiệu native sidecar trong initContainers với restartPolicy: Always để tiếp tục chạy cùng ứng dụng.",
        "points": [
          "Kubelet thường khởi động lại container bị lỗi, không mặc nhiên tạo Pod mới",
          "Init thất bại thường được thử lại theo chính sách",
          "Native sidecar có vòng đời khác init thông thường"
        ],
        "code": "",
        "update": {
          "text": "Bài nguồn có những câu mô tả restart chưa nhất quán. Init container thông thường bị lỗi sẽ được thử lại theo chính sách; không phải cứ một container lỗi là toàn bộ Pod và mọi container đều khởi động lại từ đầu. Native sidecar có restartPolicy riêng và lifecycle khác init thông thường.",
          "url": "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"
        }
      },
      {
        "id": 15030262,
        "ref": "118",
        "chapter": 5,
        "title": "Lab - Init Containers",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15030262#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về thứ tự và trạng thái init container. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc initContainers trong describe",
          "Xem log bước khởi tạo bị lỗi"
        ],
        "code": ""
      },
      {
        "id": 21744380,
        "ref": "119",
        "chapter": 5,
        "title": "Lab Solution - Init Containers (Optional)",
        "duration": "11min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21744380#overview",
        "status": "transcript",
        "text": "Video giải lab kiểm tra số lượng init container, thứ tự và thời gian chúng thực hiện công việc. Khi Pod kẹt ở Init, giảng viên xem cấu hình và sửa lệnh gây lỗi trước khi kiểm tra lại.",
        "points": [
          "Xem trạng thái và log từng init container",
          "Đừng sửa app container khi lỗi nằm ở bước khởi tạo"
        ],
        "code": ""
      },
      {
        "id": 14296030,
        "ref": "120",
        "chapter": 5,
        "title": "Self Healing Applications",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296030#overview",
        "status": "article",
        "text": "Trang đọc nối cơ chế duy trì replicas với khả năng phục hồi của ứng dụng. Nó nhắc tới liveness/readiness như các cơ chế kiểm tra sức khỏe, nhưng không triển khai chi tiết trong mục này.",
        "points": [
          "Controller tạo Pod thay thế khi cần",
          "Container restart và Pod replacement là hai cơ chế khác nhau",
          "Không coi mọi lỗi ứng dụng đều được controller tự sửa"
        ],
        "code": ""
      },
      {
        "id": 48755033,
        "ref": "121",
        "chapter": 5,
        "title": "(2025 Updates) Introduction to Autoscaling?",
        "duration": "5min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48755033#overview",
        "status": "transcript",
        "text": "Autoscaling được phân loại theo chiều ngang, chiều dọc và theo đối tượng được scale: workload hoặc hạ tầng cụm. Video giới thiệu HPA và VPA trước khi đi vào từng cơ chế.",
        "points": [
          "Thêm Pod khác tăng tài nguyên mỗi Pod",
          "Thêm node là scale hạ tầng",
          "Có cả thao tác thủ công và tự động"
        ],
        "code": ""
      },
      {
        "id": 48755067,
        "ref": "122",
        "chapter": 5,
        "title": "(2025 Updates) Horizontal Pod Autoscaler (HPA)?",
        "duration": "5min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48755067#overview",
        "status": "transcript",
        "text": "HPA điều chỉnh số replicas theo metrics như CPU, memory hoặc custom metrics. Video nối thao tác scale thủ công với vòng theo dõi và điều chỉnh tự động, giới hạn trong min/max replicas.",
        "points": [
          "Cần nguồn metrics hoạt động",
          "Mục tiêu utilization liên quan requests",
          "Theo dõi current, target và replicas"
        ],
        "code": ""
      },
      {
        "id": 48755069,
        "ref": "123",
        "chapter": 5,
        "title": "(2025 Updates) Lab - Manual Scaling?",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48755069#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về điều chỉnh số replicas bằng tay. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra desired và ready trước/sau",
          "Xác nhận controller được yêu cầu"
        ],
        "code": ""
      },
      {
        "id": 48755079,
        "ref": "124",
        "chapter": 5,
        "title": "(2025 Updates) Lab - HPA?",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48755079#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về hPA và metrics nguồn. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl get hpa",
          "Kiểm tra requests và khả năng đọc metrics"
        ],
        "code": ""
      },
      {
        "id": 48755083,
        "ref": "125",
        "chapter": 5,
        "title": "(2025 Updates) In-Place Resize of Pods?",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48755083#overview",
        "status": "transcript",
        "text": "Video giới thiệu in-place resize để thay tài nguyên container mà không luôn phải thay Pod. Bài giảng giải thích resizePolicy và trạng thái khi mức tài nguyên mong muốn chưa thể được áp dụng.",
        "points": [
          "CPU và memory có đặc điểm resize khác nhau",
          "Resize vẫn phụ thuộc điều kiện node và chính sách",
          "Đọc ô cập nhật phiên bản bên dưới trước khi dùng"
        ],
        "code": "",
        "update": {
          "text": "Video còn mô tả giai đoạn alpha. Tài liệu Kubernetes xác nhận in-place Pod resize đạt stable ở v1.35; khi thực hành cần đọc tài liệu đúng phiên bản của cụm.",
          "url": "https://kubernetes.io/docs/tasks/configure-pod-container/resize-container-resources/"
        }
      },
      {
        "id": 48755089,
        "ref": "126",
        "chapter": 5,
        "title": "(2025 Updates) Vertical Pod Autoscaling (VPA)?",
        "duration": "9min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48755089#overview",
        "status": "transcript",
        "text": "VPA gồm recommender đề xuất tài nguyên, updater xử lý thay đổi và admission controller can thiệp lúc tạo Pod. Video phân biệt các chế độ đề xuất, khởi tạo và tự động cập nhật.",
        "points": [
          "VPA thay resources, HPA thay số bản sao",
          "Cần cài thành phần VPA riêng",
          "Xem update mode để hiểu khả năng gây gián đoạn"
        ],
        "code": ""
      },
      {
        "id": 48755099,
        "ref": "127",
        "chapter": 5,
        "title": "(2025 Updates) Lab - Install VPA?",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48755099#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về các thành phần VPA được cài riêng. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra CRD và controller",
          "Đọc recommendation sau khi có số liệu"
        ],
        "code": ""
      },
      {
        "id": 48755103,
        "ref": "128",
        "chapter": 5,
        "title": "(2025 Updates) Lab - Modifying CPU resources in VPA?",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48755103#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về vPA và thay đổi CPU theo update mode. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra mode và resources",
          "Theo dõi Pod có được thay thế hoặc cập nhật"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 6,
    "title": "Cluster Maintenance",
    "en": "Bảo trì cụm",
    "intro": "Bảo trì node trong khi ứng dụng đang chạy, đọc phiên bản, nâng cấp cụm và sao lưu/khôi phục. Các số phiên bản trong demo được giữ như ví dụ lịch sử, không tự đổi thành lệnh cài hiện hành.",
    "goals": [
      "Phân biệt cordon, drain và uncordon",
      "Lập trình tự upgrade control plane rồi worker",
      "Phân biệt backup etcd với dữ liệu ứng dụng"
    ],
    "lessons": [
      {
        "id": 14296040,
        "ref": "129",
        "chapter": 6,
        "title": "Cluster Maintenance - Section Introduction",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296040#overview",
        "status": "transcript",
        "text": "Phần Cluster Maintenance học cách đưa node ra bảo trì, nâng cấp phiên bản và phục hồi dữ liệu cụm. Các bài thực hành yêu cầu thao tác trên cụm đang có workload.",
        "points": [
          "Bảo trì phải tính việc di chuyển workload",
          "Backup cần đi cùng kiểm tra khả năng restore"
        ],
        "code": ""
      },
      {
        "id": 14296046,
        "ref": "130",
        "chapter": 6,
        "title": "OS Upgrades",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296046#overview",
        "status": "transcript",
        "text": "Khi cần bảo trì hệ điều hành, cordon ngăn Pod mới vào node còn drain đưa các Pod có thể di chuyển ra ngoài. Uncordon cho phép scheduler dùng node trở lại sau bảo trì.",
        "points": [
          "Drain có điều kiện liên quan controller và DaemonSet",
          "Cordon không tự đuổi Pod đang chạy",
          "Kiểm tra workload trước và sau thao tác"
        ],
        "code": ""
      },
      {
        "id": 14298854,
        "ref": "131",
        "chapter": 6,
        "title": "Lab - OS Upgrades",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298854#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về cordon, drain và uncordon khi bảo trì. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra node và workload trước thao tác",
          "Xác nhận scheduling được mở lại"
        ],
        "code": ""
      },
      {
        "id": 14296052,
        "ref": "132",
        "chapter": 6,
        "title": "Kubernetes Releases",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296052#overview",
        "status": "transcript",
        "text": "Bài giảng giải thích cách đọc major, minor, patch và các giai đoạn phát hành. Không phải mọi thành phần của hệ thống đều dùng chung số phiên bản với Kubernetes.",
        "points": [
          "Phân biệt bản stable với alpha/beta",
          "Đọc release notes và tương thích trước nâng cấp"
        ],
        "code": ""
      },
      {
        "id": 15015878,
        "ref": "133",
        "chapter": 6,
        "title": "References",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15015878#overview",
        "status": "article",
        "text": "Các liên kết bổ sung đi sâu vào Kubernetes API, quy ước và thay đổi API. Dùng để hiểu vì sao manifest hoặc cấu hình cũ có thể cần sửa khi chuyển phiên bản.",
        "points": [
          "Kiểm tra API được hỗ trợ trên cụm đích",
          "Tra tài liệu theo phiên bản"
        ],
        "code": ""
      },
      {
        "id": 14296062,
        "ref": "134",
        "chapter": 6,
        "title": "Cluster Upgrade Introduction",
        "duration": "11min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296062#overview",
        "status": "transcript",
        "text": "Nâng cấp cụm phải tôn trọng tương thích phiên bản giữa API server và các thành phần. Video giải thích nâng cấp control plane trước rồi worker theo từng bước để giảm ảnh hưởng ứng dụng.",
        "points": [
          "Không nhảy qua minor release tùy ý",
          "Chọn cách bảo trì phù hợp số node và workload",
          "Dùng kế hoạch nâng cấp thay vì cập nhật mọi gói cùng lúc"
        ],
        "code": ""
      },
      {
        "id": 24458188,
        "ref": "135",
        "chapter": 6,
        "title": "Demo - Cluster upgrade",
        "duration": "19min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/24458188#overview",
        "status": "transcript",
        "text": "Demo nâng cụm từ 1.28 lên 1.29 bằng kubeadm, minh họa cập nhật kho gói, kubeadm, control plane và kubelet. Worker được xử lý từng node cùng các bước drain/uncordon.",
        "points": [
          "Số phiên bản trong video là ví dụ lịch sử",
          "Kiểm tra phiên bản gói trước khi cài",
          "Xác nhận node và workload sau từng bước"
        ],
        "code": ""
      },
      {
        "id": 14298856,
        "ref": "136",
        "chapter": 6,
        "title": "Lab - Cluster Upgrade",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298856#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về nâng cấp cụm theo thứ tự an toàn. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra phiên bản thực và kế hoạch nâng cấp",
          "Xác nhận control plane trước worker"
        ],
        "code": ""
      },
      {
        "id": 14296066,
        "ref": "137",
        "chapter": 6,
        "title": "Backup and Restore Methods",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296066#overview",
        "status": "transcript",
        "text": "Bài giảng phân biệt backup manifest tài nguyên, dữ liệu etcd và dữ liệu ứng dụng. Snapshot etcd giữ trạng thái cụm nhưng không thay thế việc sao lưu dữ liệu trên volume của ứng dụng.",
        "points": [
          "Giữ file khai báo trong quản lý phiên bản",
          "Backup qua API có thể bỏ sót loại tài nguyên nếu truy vấn không đủ",
          "Thử restore trong môi trường kiểm tra"
        ],
        "code": ""
      },
      {
        "id": 18478622,
        "ref": "138",
        "chapter": 6,
        "title": "Working with ETCDCTL and ETCDUTL",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/18478622#overview",
        "status": "article",
        "text": "Bài đọc tập hợp thao tác snapshot etcd và khôi phục sang data directory khác. Điểm cần nắm là dùng endpoint/chứng chỉ đúng khi lấy snapshot và kiểm tra bộ công cụ có sẵn trước khi chạy lệnh phục hồi.",
        "points": [
          "etcdctl snapshot save lấy snapshot từ etcd đang chạy",
          "etcdutl snapshot status và snapshot restore dùng với file snapshot ở các bản hiện hành",
          "Không sao chép mù lệnh khác phiên bản"
        ],
        "code": "",
        "update": {
          "text": "Không dùng nguyên bộ lệnh trong bài đọc cho mọi phiên bản. Tài liệu etcd v3.6 hướng dẫn etcdctl snapshot save, etcdutl snapshot status và etcdutl snapshot restore. Kiểm tra help; không giả định có lệnh etcdutl backup.",
          "url": "https://etcd.io/docs/v3.6/op-guide/recovery/"
        }
      },
      {
        "id": 14298862,
        "ref": "139",
        "chapter": 6,
        "title": "Lab - Backup and Restore Methods",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298862#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về snapshot và restore etcd. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Xác định endpoint cùng certificate",
          "Kiểm tra snapshot và kết quả phục hồi"
        ],
        "code": ""
      },
      {
        "id": 14410304,
        "ref": "140",
        "chapter": 6,
        "title": "Certification Exam Tip!",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14410304#overview",
        "status": "article",
        "text": "Trong kỳ thi thật, không có nút kiểm tra kết quả như trong lab của khóa. Bài đọc nhắc xác minh chính mình đã tạo đúng tên, image và các yêu cầu khác.",
        "points": [
          "Dùng get, describe hoặc kiểm tra hành vi",
          "Lệnh thành công chưa chứng minh yêu cầu đã hoàn tất"
        ],
        "code": ""
      },
      {
        "id": 15146874,
        "ref": "141",
        "chapter": 6,
        "title": "References",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15146874#overview",
        "status": "article",
        "text": "Bài đọc dẫn tới tài liệu backup, recovery etcd và video bổ sung. Dùng khi ôn quy trình phục hồi và kiểm tra tham số theo phiên bản etcd trong lab.",
        "points": [
          "Snapshot cần được kiểm tra",
          "Hiểu đường dẫn data-dir và cấu hình mount khi restore"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 7,
    "title": "Security",
    "en": "Bảo mật",
    "intro": "Theo đúng nhịp nguồn: nền tảng TLS rồi chứng chỉ Kubernetes, kubeconfig, authorization/RBAC, ServiceAccount, image, security context và network policy. CRD, controller và operator là chuỗi cập nhật ở cuối.",
    "goals": [
      "Đọc certificate và cấu hình truy cập API",
      "Kiểm tra quyền trong namespace và toàn cụm",
      "Viết và kiểm tra chính sách giao tiếp Pod",
      "Phân biệt CRD với controller"
    ],
    "lessons": [
      {
        "id": 14296074,
        "ref": "142",
        "chapter": 7,
        "title": "Security - Section Introduction",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296074#overview",
        "status": "transcript",
        "text": "Phần Security đi từ cơ chế bảo vệ API đến TLS, certificate, phân quyền và network policy. Các bài TLS nền tảng giúp giải thích cấu hình và xử lý lỗi chứng chỉ phía sau.",
        "points": [
          "Tách xác thực khỏi phân quyền",
          "Học đường đi của yêu cầu trước khi chỉnh bảo mật"
        ],
        "code": ""
      },
      {
        "id": 14296078,
        "ref": "143",
        "chapter": 7,
        "title": "Kubernetes Security Primitives",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296078#overview",
        "status": "transcript",
        "text": "API server là trọng tâm kiểm soát truy cập: authentication xác nhận danh tính, authorization xác định quyền. Các lớp khác gồm bảo vệ kết nối TLS, Secret, image và giao tiếp mạng giữa Pod.",
        "points": [
          "Một kết nối thành công chưa có nghĩa đủ quyền",
          "Bảo mật cần xem cả control plane và workload"
        ],
        "code": ""
      },
      {
        "id": 14296084,
        "ref": "144",
        "chapter": 7,
        "title": "Authentication",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296084#overview",
        "status": "transcript",
        "text": "Kubernetes không cung cấp hệ thống quản lý tài khoản người dùng thông thường như một ứng dụng. API server xác thực thông qua cơ chế bên ngoài hoặc credential như certificate; ServiceAccount phục vụ workload.",
        "points": [
          "User thường khác ServiceAccount",
          "Đừng dùng cơ chế mật khẩu tĩnh cũ làm mẫu bảo mật hiện tại"
        ],
        "code": ""
      },
      {
        "id": 14296088,
        "ref": "145",
        "chapter": 7,
        "title": "TLS Introduction",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296088#overview",
        "status": "transcript",
        "text": "Nhóm bài TLS bắt đầu từ certificate và certificate authority trước khi áp dụng vào Kubernetes. Mục tiêu là hiểu tại sao client và server tin nhau để tự tìm lỗi chứng chỉ.",
        "points": [
          "Có thể ôn nhanh nền tảng nếu đã quen PKI",
          "Xác định bên nào là client và server trong từng kết nối"
        ],
        "code": ""
      },
      {
        "id": 14296090,
        "ref": "146",
        "chapter": 7,
        "title": "TLS Basics",
        "duration": "20min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296090#overview",
        "status": "transcript",
        "text": "Bài giảng dùng trao đổi an toàn để giải thích khóa đối xứng, cặp khóa bất đối xứng và certificate. CA ký chứng chỉ để bên nhận xác minh danh tính thay vì chỉ nhận một public key bất kỳ.",
        "points": [
          "Private key cần được giữ kín",
          "Public certificate có issuer và subject",
          "Chữ ký CA tạo chuỗi tin cậy"
        ],
        "code": ""
      },
      {
        "id": 14296092,
        "ref": "147",
        "chapter": 7,
        "title": "TLS in Kubernetes",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296092#overview",
        "status": "transcript",
        "text": "Các thành phần Kubernetes vừa có thể làm server vừa làm client nên cần bộ certificate phù hợp từng kết nối. Video lập bản đồ chứng chỉ của API server, etcd, kubelet và các client điều khiển.",
        "points": [
          "Phân biệt server certificate với client certificate",
          "CA certificate khác CA private key",
          "Đọc mục đích sử dụng trước khi chọn file"
        ],
        "code": ""
      },
      {
        "id": 14296096,
        "ref": "148",
        "chapter": 7,
        "title": "TLS in Kubernetes - Certificate Creation",
        "duration": "11min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296096#overview",
        "status": "transcript",
        "text": "Video minh họa tạo CA, private key, CSR rồi ký certificate cho các thành phần. Subject, nhóm hệ thống và SAN phải phù hợp danh tính hoặc địa chỉ mà client thực sự sử dụng.",
        "points": [
          "CN và organization có vai trò trong danh tính",
          "SAN cần chứa các tên hoặc IP phục vụ",
          "Không chia sẻ private key giữa các chủ thể tùy tiện"
        ],
        "code": ""
      },
      {
        "id": 14296098,
        "ref": "149",
        "chapter": 7,
        "title": "View Certificate Details",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296098#overview",
        "status": "transcript",
        "text": "Khi nhận quản trị một cụm, cần lập danh sách certificate và vị trí cấu hình tham chiếu tới chúng. Video dùng openssl x509 để kiểm tra issuer, subject, SAN và thời hạn rồi nối với lỗi thành phần.",
        "points": [
          "Tìm file từ cấu hình API server hoặc service",
          "Kiểm tra CA và expiry",
          "Dùng crictl logs nếu API không phục vụ được kubectl"
        ],
        "code": "openssl x509 -in <duong-dan-certificate> -noout -text"
      },
      {
        "id": 14715146,
        "ref": "150",
        "chapter": 7,
        "title": "Resource: Download Kubernetes Certificate Health Check Spreadsheet",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14715146#overview",
        "status": "article",
        "text": "Bài đọc cung cấp bảng theo dõi sức khỏe certificate trong repository của giảng viên. Bảng hỗ trợ ghi đường dẫn, chủ thể và hạn dùng khi kiểm tra một cụm.",
        "points": [
          "Dùng như checklist kiểm tra",
          "Không lưu private key vào bảng theo dõi"
        ],
        "code": ""
      },
      {
        "id": 14298918,
        "ref": "151",
        "chapter": 7,
        "title": "Lab - View Certificates",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298918#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về issuer, subject, SAN và hạn certificate. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Dùng openssl x509 đọc file",
          "Đối chiếu đường dẫn trong cấu hình thành phần"
        ],
        "code": ""
      },
      {
        "id": 32211138,
        "ref": "152",
        "chapter": 7,
        "title": "Lab Solution - View Certification Details",
        "duration": "21min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/32211138#overview",
        "status": "transcript",
        "text": "Video giải lab tìm đường dẫn certificate trong manifest và đọc các trường bằng OpenSSL. Phần xử lý lỗi kiểm tra tên SAN, thời hạn và các đường dẫn certificate của thành phần.",
        "points": [
          "Đối chiếu cấu hình đang chạy với file thật",
          "Kiểm tra API server đã trở lại sau sửa"
        ],
        "code": ""
      },
      {
        "id": 14296100,
        "ref": "153",
        "chapter": 7,
        "title": "Certificates API",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296100#overview",
        "status": "transcript",
        "text": "Certificates API cho phép gửi yêu cầu ký dưới dạng CertificateSigningRequest rồi kiểm tra, approve và lấy certificate. Controller sử dụng thông tin signer để xử lý yêu cầu phù hợp.",
        "points": [
          "CSR chứa yêu cầu đã encode, không phải private key",
          "Approve cần quyền và kiểm tra danh tính",
          "Certificate được cấp còn cần gắn vào credential của client"
        ],
        "code": ""
      },
      {
        "id": 14298922,
        "ref": "154",
        "chapter": 7,
        "title": "Lab - Certificates API",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298922#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về yêu cầu CertificateSigningRequest. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra signerName, usages và danh tính",
          "Đọc trạng thái trước khi approve"
        ],
        "code": ""
      },
      {
        "id": 32211144,
        "ref": "155",
        "chapter": 7,
        "title": "Lab Solution - Certificates API",
        "duration": "8min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/32211144#overview",
        "status": "transcript",
        "text": "Video giải lab tạo và xử lý CSR cho người dùng mới, kiểm tra danh sách rồi chấp thuận hoặc xóa yêu cầu theo đề. Giảng viên đọc trạng thái và dữ liệu certificate trong đối tượng CSR.",
        "points": [
          "Kiểm tra signerName và usages",
          "Không approve mọi CSR chỉ vì đang Pending"
        ],
        "code": ""
      },
      {
        "id": 14296104,
        "ref": "156",
        "chapter": 7,
        "title": "KubeConfig",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296104#overview",
        "status": "transcript",
        "text": "Kubeconfig gom thông tin clusters, users và contexts để kubectl chọn nơi kết nối cùng credential. Context liên kết một cluster với một user, có thể kèm namespace.",
        "points": [
          "current-context quyết định lựa chọn mặc định",
          "File credential có thể nằm ngoài kubeconfig hoặc nhúng dạng dữ liệu",
          "Bảo vệ kubeconfig có thông tin truy cập"
        ],
        "code": "kubectl config get-contexts\nkubectl config current-context\n# Xác nhận đúng cụm, user và namespace trước khi thay đổi."
      },
      {
        "id": 14298928,
        "ref": "157",
        "chapter": 7,
        "title": "Lab - KubeConfig",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298928#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về clusters, users và contexts của kubeconfig. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "kubectl config get-contexts",
          "kubectl config current-context"
        ],
        "code": ""
      },
      {
        "id": 32211148,
        "ref": "158",
        "chapter": 7,
        "title": "Lab Solution - KubeConfig",
        "duration": "8min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/32211148#overview",
        "status": "transcript",
        "text": "Video giải lab tìm kubeconfig mặc định, đọc các context và đổi sang context yêu cầu. Phần sửa lỗi kiểm tra đường dẫn certificate và thông tin cluster/user được tham chiếu.",
        "points": [
          "Context không phải tên cluster đơn thuần",
          "Kiểm tra current-context trước thao tác"
        ],
        "code": ""
      },
      {
        "id": 14296106,
        "ref": "159",
        "chapter": 7,
        "title": "Persistent Key/Value Store",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296106#overview",
        "status": "article",
        "text": "Trang này nhắc lại việc bảo vệ etcd bằng TLS đã học trước đó và dẫn tới phần dựng cụm sau. Không có một quy trình cài etcd mới trong mục này.",
        "points": [
          "Ôn vai trò CA và client certificate",
          "Xem phần thiết kế HA để hiểu topology"
        ],
        "code": ""
      },
      {
        "id": 14296108,
        "ref": "160",
        "chapter": 7,
        "title": "API Groups",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296108#overview",
        "status": "transcript",
        "text": "API Kubernetes được chia thành nhóm và phiên bản. Video phân biệt core group dưới /api với các named group dưới /apis, cùng resource và verb để chuẩn bị cho phân quyền.",
        "points": [
          "API group không phải namespace",
          "apiVersion của manifest kết hợp group và version",
          "Tra API reference cho tài nguyên cụ thể"
        ],
        "code": ""
      },
      {
        "id": 23096066,
        "ref": "161",
        "chapter": 7,
        "title": "Authorization",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/23096066#overview",
        "status": "transcript",
        "text": "Sau khi xác thực, authorization xác định yêu cầu được phép làm gì. Bài giảng giới thiệu Node authorizer, ABAC, RBAC và webhook, rồi giải thích chuỗi authorizer xử lý yêu cầu.",
        "points": [
          "Quyền gắn với verb, resource và phạm vi",
          "Authentication thành công vẫn có thể Forbidden",
          "RBAC là cơ chế sẽ luyện sâu tiếp theo"
        ],
        "code": ""
      },
      {
        "id": 14296110,
        "ref": "162",
        "chapter": 7,
        "title": "Role Based Access Controls",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296110#overview",
        "status": "transcript",
        "text": "Role định nghĩa quyền trong một namespace; RoleBinding gắn quyền đó cho subject. Ví dụ cho phép thao tác với Pod và giới hạn resourceNames minh họa quyền tối thiểu.",
        "points": [
          "apiGroups, resources và verbs phải đúng",
          "Dùng kubectl auth can-i để kiểm tra",
          "RoleBinding không tự tạo tài khoản người dùng"
        ],
        "code": "kubectl auth can-i get pods -n <namespace>\n# Kiểm tra quyền hiện tại. --as cần quyền impersonate riêng."
      },
      {
        "id": 14298934,
        "ref": "163",
        "chapter": 7,
        "title": "Lab - Role-Based Access Controls",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298934#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về role và RoleBinding theo namespace. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc resources/verbs/apiGroups",
          "Kiểm tra bằng kubectl auth can-i"
        ],
        "code": ""
      },
      {
        "id": 32211152,
        "ref": "164",
        "chapter": 7,
        "title": "Lab Solution - Role-Based Access Controls",
        "duration": "13min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/32211152#overview",
        "status": "transcript",
        "text": "Video giải lab tìm Role và RoleBinding, đọc quy tắc rồi sửa quyền để user làm đúng tác vụ. Giảng viên dùng --as để kiểm tra với danh tính được yêu cầu.",
        "points": [
          "Phải có quyền impersonate khi dùng --as",
          "Thử cả hành động được phép và ngoài phạm vi"
        ],
        "code": ""
      },
      {
        "id": 14296112,
        "ref": "165",
        "chapter": 7,
        "title": "Cluster Roles",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296112#overview",
        "status": "transcript",
        "text": "ClusterRole mô tả quyền có thể áp dụng cho tài nguyên toàn cụm hoặc được tái sử dụng cho tài nguyên namespaced. ClusterRoleBinding cấp quyền ở phạm vi cụm; RoleBinding có thể dùng ClusterRole trong một namespace.",
        "points": [
          "Node và PV là tài nguyên toàn cụm",
          "Phạm vi binding quyết định phạm vi quyền",
          "Tránh cấp wildcard khi không cần"
        ],
        "code": ""
      },
      {
        "id": 14298940,
        "ref": "166",
        "chapter": 7,
        "title": "Lab - Cluster Roles",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298940#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về clusterRole và ClusterRoleBinding. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Phân biệt tài nguyên toàn cụm",
          "Kiểm tra subject và phạm vi binding"
        ],
        "code": ""
      },
      {
        "id": 32211156,
        "ref": "167",
        "chapter": 7,
        "title": "Lab Solution - Cluster Roles",
        "duration": "11min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/32211156#overview",
        "status": "transcript",
        "text": "Video giải lab đọc quyền của ClusterRole và binding hiện có rồi tạo quyền cho tác vụ toàn cụm. Các lệnh tạo nhanh được kiểm chứng bằng thao tác của user.",
        "points": [
          "Dấu * có nghĩa phạm vi rất rộng",
          "Kiểm tra subject và roleRef",
          "Xác minh quyền trên đúng loại tài nguyên"
        ],
        "code": ""
      },
      {
        "id": 18696106,
        "ref": "168",
        "chapter": 7,
        "title": "Service Accounts",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/18696106#overview",
        "status": "transcript",
        "text": "ServiceAccount cung cấp danh tính cho tiến trình trong Pod khi truy cập API. Video phân biệt cơ chế Secret token cũ với token chiếu qua projected volume có thời hạn và được xoay vòng.",
        "points": [
          "serviceAccountName chọn tài khoản cho Pod",
          "Token không tự đồng nghĩa có mọi quyền",
          "Không phát tán token hoặc tạo token dài hạn không cần thiết"
        ],
        "code": ""
      },
      {
        "id": 28132342,
        "ref": "169",
        "chapter": 7,
        "title": "Lab: Service Accounts",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/28132342#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về danh tính workload qua ServiceAccount. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra serviceAccountName",
          "Đọc RBAC liên quan và cơ chế token"
        ],
        "code": ""
      },
      {
        "id": 37844312,
        "ref": "170",
        "chapter": 7,
        "title": "Lab Solution:  Service Accounts",
        "duration": "7min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/37844312#overview",
        "status": "transcript",
        "text": "Video giải lab kiểm tra ServiceAccount của dashboard và xử lý việc ứng dụng dùng tài khoản mặc định thiếu quyền. Giảng viên tạo token khi cần và gắn đúng ServiceAccount cho workload.",
        "points": [
          "Kiểm tra RBAC đi kèm danh tính",
          "Không giả định ServiceAccount luôn có Secret token tự sinh"
        ],
        "code": ""
      },
      {
        "id": 14296114,
        "ref": "171",
        "chapter": 7,
        "title": "Image Security",
        "duration": "5min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296114#overview",
        "status": "transcript",
        "text": "Image name gồm registry, tài khoản hoặc dự án, repository và tag. Khi lấy image từ registry riêng, kubelet cần credential phù hợp thông qua imagePullSecrets.",
        "points": [
          "Secret registry phải tồn tại trong namespace Pod",
          "Kiểm tra tên image trước khi đoán lỗi mật khẩu"
        ],
        "code": ""
      },
      {
        "id": 14298948,
        "ref": "172",
        "chapter": 7,
        "title": "Lab - Image Security",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298948#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về lấy image từ registry riêng. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Xem Events khi pull thất bại",
          "Kiểm tra imagePullSecrets cùng namespace"
        ],
        "code": ""
      },
      {
        "id": 32211158,
        "ref": "173",
        "chapter": 7,
        "title": "Lab Solution - Image Security",
        "duration": "7min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/32211158#overview",
        "status": "transcript",
        "text": "Video giải lab xác định registry và xử lý image pull từ kho riêng. Giảng viên tạo Secret kiểu registry, thêm imagePullSecrets rồi quan sát rollout.",
        "points": [
          "Xem Events của Pod khi ImagePullBackOff",
          "Kiểm tra namespace của Secret và Pod"
        ],
        "code": ""
      },
      {
        "id": 25864666,
        "ref": "174",
        "chapter": 7,
        "title": "Pre-requisite - Security in Docker",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/25864666#overview",
        "status": "transcript",
        "text": "Bài nền tảng giải thích container dùng cơ chế Linux isolation và capabilities. User root trong container không đồng nghĩa toàn quyền host, nhưng vẫn cần giới hạn đặc quyền phù hợp.",
        "points": [
          "USER trong image khác ghi đè user lúc chạy",
          "Capabilities chia nhỏ quyền",
          "privileged cấp phạm vi quyền rất rộng"
        ],
        "code": ""
      },
      {
        "id": 14296116,
        "ref": "175",
        "chapter": 7,
        "title": "Security Contexts",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296116#overview",
        "status": "transcript",
        "text": "securityContext cho phép đặt user ID và các tùy chọn bảo mật ở mức Pod hoặc container. Cấu hình container có thể ghi đè trường tương ứng ở Pod; capabilities là cấu hình mức container.",
        "points": [
          "Đặt đúng cấp trong YAML",
          "runAsUser là ID số",
          "Kiểm tra quyền ứng dụng thực sự cần"
        ],
        "code": ""
      },
      {
        "id": 14298954,
        "ref": "176",
        "chapter": 7,
        "title": "Lab - Security Contexts",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14298954#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về user và capabilities của container. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra Pod-level/container-level",
          "Xác minh user thực thi tiến trình"
        ],
        "code": ""
      },
      {
        "id": 32211174,
        "ref": "177",
        "chapter": 7,
        "title": "Lab Solution -  Security Contexts",
        "duration": "5min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/32211174#overview",
        "status": "transcript",
        "text": "Video giải lab xác định user đang chạy tiến trình và điều chỉnh runAsUser hoặc capabilities. Giảng viên kiểm tra sự ghi đè giữa Pod-level và container-level security context.",
        "points": [
          "Kiểm tra bằng id hoặc process trong container",
          "Không tăng lên root nếu yêu cầu không cần"
        ],
        "code": ""
      },
      {
        "id": 14332380,
        "ref": "178",
        "chapter": 7,
        "title": "Network Policy",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14332380#overview",
        "status": "transcript",
        "text": "NetworkPolicy mô tả lưu lượng được phép tới hoặc rời một tập Pod. Bài giảng dùng mô hình web, API và DB để giới hạn kết nối trực tiếp không mong muốn.",
        "points": [
          "Pod selector chọn đối tượng được bảo vệ",
          "Ingress và egress là hai chiều riêng",
          "CNI phải thực thi NetworkPolicy thì quy tắc mới có hiệu lực"
        ],
        "code": ""
      },
      {
        "id": 24458474,
        "ref": "179",
        "chapter": 7,
        "title": "Developing network policies",
        "duration": "11min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/24458474#overview",
        "status": "transcript",
        "text": "Video đi sâu vào cách viết rule ingress/egress, phối hợp podSelector, namespaceSelector và ipBlock. Vị trí các điều kiện trong cùng phần tử hoặc các phần tử khác nhau làm thay đổi logic kết hợp.",
        "points": [
          "Cùng phần tử có thể là điều kiện AND",
          "Các phần tử thay thế là OR",
          "Cho phép chiều đi cần xét cả policy ở bên gửi và nhận"
        ],
        "code": ""
      },
      {
        "id": 14332388,
        "ref": "180",
        "chapter": 7,
        "title": "Lab - Network Policy",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14332388#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về luồng ingress và egress giữa các Pod. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc podSelector và peers",
          "Thử kết nối theo các chiều được yêu cầu"
        ],
        "code": ""
      },
      {
        "id": 21913718,
        "ref": "181",
        "chapter": 7,
        "title": "Lab Solution -  Network Policies (optional)",
        "duration": "14min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21913718#overview",
        "status": "transcript",
        "text": "Video giải lab đọc policy có sẵn rồi kiểm tra kết nối giữa các Pod. Giảng viên bổ sung egress và ingress theo đúng luồng cần cho phép thay vì mở mọi cổng.",
        "points": [
          "Xác định Pod bị policy chọn trước",
          "Kiểm tra cả port và selector",
          "Dùng thử kết nối để xác nhận thực thi"
        ],
        "code": ""
      },
      {
        "id": 27430646,
        "ref": "182",
        "chapter": 7,
        "title": "Kubectx and Kubens - Command Line Utilities",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/27430646#overview",
        "status": "article",
        "text": "kubectx và kubens giúp chuyển context hoặc namespace nhanh khi làm nhiều cụm. Bài đọc giới thiệu tiện ích để giảm lệnh dài và nhầm phạm vi thao tác.",
        "points": [
          "Xác nhận context sau khi chuyển",
          "Không giả định môi trường thi có sẵn tiện ích bổ sung"
        ],
        "code": ""
      },
      {
        "id": 48273217,
        "ref": "183",
        "chapter": 7,
        "title": "(2025 Updates)Custorm Resource Definition (CRD)",
        "duration": "11min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273217#overview",
        "status": "transcript",
        "text": "CRD mở rộng API để Kubernetes chấp nhận một loại tài nguyên riêng, qua ví dụ đặt vé chuyến bay. CRD mô tả tên, group, version, scope và schema; bản thân đối tượng custom chưa thực thi nghiệp vụ.",
        "points": [
          "CRD định nghĩa loại, custom resource là một đối tượng của loại đó",
          "Cần controller nếu muốn tự động hóa hành vi"
        ],
        "code": ""
      },
      {
        "id": 50133061,
        "ref": "184",
        "chapter": 7,
        "title": "(2025 Updates) Lab - Custom Resource Definition",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/50133061#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về định nghĩa CRD và tạo custom resource. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra group/version/scope/schema",
          "Phân biệt CRD với đối tượng mẫu"
        ],
        "code": ""
      },
      {
        "id": 48273225,
        "ref": "185",
        "chapter": 7,
        "title": "(2025 Updates) Custom Controllers",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273225#overview",
        "status": "transcript",
        "text": "Custom controller theo dõi custom resource và thực hiện công việc đưa trạng thái thực về trạng thái mong muốn. Video tiếp tục ví dụ đặt vé, giới thiệu client và cơ chế informer/queue trong quá trình xây dựng controller.",
        "points": [
          "Controller chứa logic nghiệp vụ",
          "Reconcile cần xử lý việc chạy lại",
          "CRD đơn lẻ chưa tạo cơ chế điều khiển"
        ],
        "code": ""
      },
      {
        "id": 48273233,
        "ref": "186",
        "chapter": 7,
        "title": "(2025 Updates) Operator Framework",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273233#overview",
        "status": "transcript",
        "text": "Operator kết hợp API mở rộng với controller để tự động hóa kiến thức vận hành một ứng dụng. Ví dụ etcd operator bao gồm triển khai, backup và recovery thay cho thao tác quản trị lặp lại.",
        "points": [
          "Operator không chỉ tạo object một lần",
          "Phân biệt cài CRD với cài cả controller",
          "Đây là nội dung mở rộng của chuỗi CRD"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 8,
    "title": "Storage",
    "en": "Lưu trữ",
    "intro": "Ôn lớp filesystem của container trước khi học CSI, volume, PV/PVC và StorageClass. Bài đọc ngắn và lab được đánh dấu đúng loại thay vì biến mọi mục thành video lý thuyết.",
    "goals": [
      "Liên kết volume với volumeMounts",
      "Hiểu binding, reclaim và cấp phát động",
      "Phân biệt dữ liệu ứng dụng với trạng thái cụm"
    ],
    "lessons": [
      {
        "id": 14296120,
        "ref": "187",
        "chapter": 8,
        "title": "Storage - Section Introduction",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296120#overview",
        "status": "transcript",
        "text": "Phần Storage tập trung cách Kubernetes cấp và sử dụng lưu trữ qua volume, PV, PVC và access modes. Các hệ thống lưu trữ ngoài cụm có thể khác nhau nhưng các đối tượng Kubernetes là lớp cần nắm.",
        "points": [
          "Phân biệt nhu cầu của ứng dụng với cách cấp dung lượng",
          "Không coi hostPath là giải pháp chung cho mọi cụm"
        ],
        "code": ""
      },
      {
        "id": 17482920,
        "ref": "188",
        "chapter": 8,
        "title": "Docker Storage - Introduction",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17482920#overview",
        "status": "transcript",
        "text": "Nhóm bài mở đầu Storage ôn cách container lưu dữ liệu trước khi áp dụng vào Kubernetes. Giảng viên tách storage driver quản lý lớp filesystem với volume driver cung cấp vùng lưu trữ.",
        "points": [
          "Image layer khác volume",
          "Nắm tính tồn tại của dữ liệu trước khi chọn loại mount"
        ],
        "code": ""
      },
      {
        "id": 17482930,
        "ref": "189",
        "chapter": 8,
        "title": "Storage in Docker",
        "duration": "12min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17482930#overview",
        "status": "transcript",
        "text": "Docker image có các lớp chỉ đọc và container thêm lớp ghi. Khi sửa một file của image, cơ chế copy-on-write tạo bản thay đổi trong lớp ghi; volume giúp tách dữ liệu khỏi vòng đời container.",
        "points": [
          "Xóa container có thể mất dữ liệu trong writable layer",
          "Bind mount và managed volume có cách chỉ định khác nhau",
          "Storage driver quản lý filesystem layer"
        ],
        "code": ""
      },
      {
        "id": 17482942,
        "ref": "190",
        "chapter": 8,
        "title": "Volume Driver Plugins in Docker",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17482942#overview",
        "status": "transcript",
        "text": "Volume driver plugins cho phép cấp volume từ nhiều hệ thống ngoài local Docker host. Video dùng ví dụ nhà cung cấp lưu trữ để phân biệt volume driver với storage driver của image.",
        "points": [
          "Driver phải được cài và cấu hình phù hợp",
          "Ví dụ plugin trong video là bối cảnh Docker, không phải cấu hình CSI cho Kubernetes"
        ],
        "code": ""
      },
      {
        "id": 17482962,
        "ref": "191",
        "chapter": 8,
        "title": "Container Storage Interface",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17482962#overview",
        "status": "transcript",
        "text": "CSI chuẩn hóa cách hệ điều phối yêu cầu các hệ thống lưu trữ cấp, gắn và tháo volume. Nhờ interface này, nhà cung cấp có thể phát triển driver bên ngoài mã nguồn Kubernetes.",
        "points": [
          "CSI khác CRI và CNI",
          "Driver triển khai các thao tác theo chuẩn",
          "Đối chiếu driver thật của môi trường"
        ],
        "code": ""
      },
      {
        "id": 58472859,
        "ref": "192",
        "chapter": 8,
        "title": "Practice Test - CSI Volume Expansion",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/58472859#overview",
        "status": "article",
        "text": "Mục này dẫn tới bài thực hành CSI Volume Expansion trên KodeKloud. Nội dung đề và môi trường nằm ở cổng lab, không có đề bài chi tiết trong trang Udemy đã đọc.",
        "points": [
          "Mở lecture gốc để vào đúng lab",
          "Khi tự luyện, kiểm tra StorageClass có cho phép mở rộng",
          "Xác minh dung lượng PVC và filesystem sau thao tác"
        ],
        "code": ""
      },
      {
        "id": 14296124,
        "ref": "193",
        "chapter": 8,
        "title": "Volumes",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296124#overview",
        "status": "transcript",
        "text": "Volume cho Pod cho phép ghi dữ liệu ngoài lớp ghi container. Ví dụ tạo số ngẫu nhiên rồi ghi vào đường dẫn mount minh họa liên kết giữa volume và volumeMounts.",
        "points": [
          "volume nằm ở spec của Pod",
          "volumeMounts nằm ở từng container",
          "hostPath gắn với một node, cần chú ý khi Pod đổi node"
        ],
        "code": ""
      },
      {
        "id": 14296126,
        "ref": "194",
        "chapter": 8,
        "title": "Persistent Volumes",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296126#overview",
        "status": "transcript",
        "text": "PV đưa cấu hình lưu trữ thành tài nguyên toàn cụm do quản trị viên chuẩn bị. Manifest mô tả capacity, accessModes và loại lưu trữ để ứng dụng có thể yêu cầu dùng qua PVC.",
        "points": [
          "PV tách khỏi manifest ứng dụng",
          "Access mode phải phù hợp backend",
          "Dung lượng được khai báo chưa chứng minh backend đã cấp đúng"
        ],
        "code": ""
      },
      {
        "id": 14296130,
        "ref": "195",
        "chapter": 8,
        "title": "Persistent Volume Claims",
        "duration": "5min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296130#overview",
        "status": "transcript",
        "text": "PVC biểu diễn nhu cầu lưu trữ của ứng dụng và được bind với PV phù hợp. Video xét dung lượng, access modes, selector và vòng đời khi claim bị xóa.",
        "points": [
          "PVC có namespace, PV không có namespace",
          "Reclaim policy quyết định cách xử lý PV sau giải phóng",
          "Claim nhỏ hơn PV vẫn có thể bind toàn PV"
        ],
        "code": ""
      },
      {
        "id": 17328568,
        "ref": "196",
        "chapter": 8,
        "title": "Using PVCs in Pods",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17328568#overview",
        "status": "article",
        "text": "Bài đọc hướng dẫn dùng claimName trong persistentVolumeClaim thuộc volumes của Pod. Container gắn volume đó bằng volumeMounts; với Deployment hoặc ReplicaSet, cấu hình đặt trong Pod template.",
        "points": [
          "PVC phải ở cùng namespace với Pod",
          "Tên volumeMount phải khớp tên volume"
        ],
        "code": ""
      },
      {
        "id": 14299002,
        "ref": "197",
        "chapter": 8,
        "title": "Lab - Persistent Volume Claims",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14299002#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về pV/PVC và mount vào ứng dụng. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra trạng thái Bound và accessModes",
          "Xem reclaim policy trước khi xóa"
        ],
        "code": ""
      },
      {
        "id": 21913030,
        "ref": "198",
        "chapter": 8,
        "title": "Lab Solution - Persistent Volumes and Persistent Volume Claims",
        "duration": "18min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21913030#overview",
        "status": "transcript",
        "text": "Video giải lab kiểm tra chỗ ứng dụng ghi dữ liệu, tạo PV/PVC rồi gắn claim cho Pod. Phần cuối quan sát trạng thái PV khi claim bị xóa để hiểu reclaim policy.",
        "points": [
          "Xem Bound, Pending hoặc Released",
          "Kiểm tra mount path từ ứng dụng",
          "Không xóa claim trước khi hiểu hậu quả dữ liệu"
        ],
        "code": ""
      },
      {
        "id": 14296132,
        "ref": "199",
        "chapter": 8,
        "title": "Application Configuration",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296132#overview",
        "status": "article",
        "text": "Trang này nhắc cách cấu hình ứng dụng dùng volume đã học trước đó. Trọng tâm là volumeMounts ở container và volume tương ứng ở Pod.",
        "points": [
          "Đối chiếu tên volume và mountPath",
          "Làm lab PVC để kiểm tra dữ liệu tồn tại"
        ],
        "code": ""
      },
      {
        "id": 17489738,
        "ref": "200",
        "chapter": 8,
        "title": "Additional Topics",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17489738#overview",
        "status": "article",
        "text": "Giảng viên đánh dấu StatefulSets là chủ đề mở rộng và dẫn sang CKAD trong bài đọc này. Đây là mô tả phạm vi của mục nguồn, không phải cam kết mọi phiên bản đề thi đều bỏ chủ đề đó.",
        "points": [
          "Phạm vi ôn thi cuối cùng dựa trên curriculum hiện hành",
          "Không tự thêm một chương StatefulSet vào số lecture gốc"
        ],
        "code": "",
        "update": {
          "text": "Câu “out of scope” là nhận định trong mục nguồn. Phạm vi thi hiện hành phải đối chiếu curriculum chính thức, không suy từ bài đọc cũ.",
          "url": "https://www.cncf.io/training/certification/cka/"
        }
      },
      {
        "id": 21795216,
        "ref": "201",
        "chapter": 8,
        "title": "Storage Class",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21795216#overview",
        "status": "transcript",
        "text": "StorageClass cho phép cấp volume động theo provisioner và các tham số lưu trữ. PVC chỉ định storageClassName để hệ thống tạo PV, thay vì quản trị viên luôn tạo PV thủ công.",
        "points": [
          "StorageClass định nghĩa cách provision, không chứa dữ liệu ứng dụng",
          "Kiểm tra provisioner và volumeBindingMode",
          "Phân biệt cấp động với PV tĩnh"
        ],
        "code": ""
      },
      {
        "id": 21795258,
        "ref": "202",
        "chapter": 8,
        "title": "Lab - Storage Class",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21795258#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về provisioner và volumeBindingMode của StorageClass. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc Events của PVC Pending",
          "Kiểm tra consumer dùng claim"
        ],
        "code": ""
      },
      {
        "id": 32211186,
        "ref": "203",
        "chapter": 8,
        "title": "Lab Solution - Storage Class",
        "duration": "10min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/32211186#overview",
        "status": "transcript",
        "text": "Video giải lab kiểm tra StorageClass và tạo PVC theo lớp lưu trữ cần dùng. Trạng thái Pending được giải thích qua WaitForFirstConsumer, khi cần có Pod sử dụng claim trước khi bind.",
        "points": [
          "Pending không luôn là lỗi",
          "Đọc Events và volumeBindingMode",
          "Tạo consumer rồi kiểm tra lại binding"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 9,
    "title": "Networking",
    "en": "Mạng Kubernetes",
    "intro": "Bắt đầu từ switching, routing, DNS và network namespace rồi đi qua CNI, Pod network, Service, CoreDNS và Ingress. Chuỗi Gateway API cập nhật được đặt cuối phần giống Udemy.",
    "goals": [
      "Truy vết từ mạng host đến Pod và Service",
      "Phân biệt lỗi phân giải tên với lỗi kết nối",
      "Phân biệt Ingress/Gateway resource với controller thực thi"
    ],
    "lessons": [
      {
        "id": 14296136,
        "ref": "204",
        "chapter": 9,
        "title": "Networking - Introduction",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296136#overview",
        "status": "transcript",
        "text": "Phần Networking bắt đầu từ mạng Linux, DNS, network namespace và Docker networking. Sau đó chuyển sang pod network, Service, DNS nội bộ và truy cập qua Ingress/Gateway API.",
        "points": [
          "Đừng bỏ qua nền tảng nếu chưa hiểu route và namespace",
          "Tách đường mạng host, Pod và Service khi điều tra"
        ],
        "code": ""
      },
      {
        "id": 14296138,
        "ref": "205",
        "chapter": 9,
        "title": "Prerequisite Switching, Routing, Gateways CNI in Kubernetes",
        "duration": "13min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296138#overview",
        "status": "transcript",
        "text": "Video nền tảng giải thích switch nối máy cùng mạng, router/gateway nối các mạng và cách khai báo route. Ví dụ máy trung gian làm router yêu cầu bật IP forwarding ngoài việc gán địa chỉ.",
        "points": [
          "Kiểm tra interface, địa chỉ và route độc lập",
          "Default route xử lý đích không có tuyến cụ thể",
          "Forwarding quyết định host có chuyển gói hộ hay không"
        ],
        "code": ""
      },
      {
        "id": 14296140,
        "ref": "206",
        "chapter": 9,
        "title": "Prerequisite DNS",
        "duration": "14min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296140#overview",
        "status": "transcript",
        "text": "DNS chuyển tên thành địa chỉ; Linux có thể dùng hosts cục bộ và DNS server theo cấu hình resolver. Bài giảng giải thích tên miền, loại record và công cụ tra cứu.",
        "points": [
          "/etc/hosts chỉ tác động máy cục bộ",
          "Kiểm tra resolv.conf và thứ tự tra cứu",
          "Phân biệt A/AAAA với CNAME"
        ],
        "code": ""
      },
      {
        "id": 14410330,
        "ref": "207",
        "chapter": 9,
        "title": "Prerequisite - CoreDNS",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14410330#overview",
        "status": "article",
        "text": "Bài đọc minh họa chạy CoreDNS độc lập và cấu hình qua Corefile. Ví dụ ban đầu phục vụ việc hiểu DNS server trên host trước khi xem CoreDNS trong Kubernetes.",
        "points": [
          "Plugin trong Corefile quyết định cách trả lời",
          "Trỏ resolver về đúng DNS server khi thử",
          "Không nhầm cấu hình host này với ConfigMap của cụm"
        ],
        "code": ""
      },
      {
        "id": 14296142,
        "ref": "208",
        "chapter": 9,
        "title": "Prerequisite Network Namespaces",
        "duration": "15min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296142#overview",
        "status": "transcript",
        "text": "Network namespace tạo stack mạng riêng cho tiến trình/container. Video nối các namespace bằng veth và bridge, rồi dùng route và NAT để đi ra mạng khác hoặc truy cập dịch vụ.",
        "points": [
          "Veth có hai đầu liên kết",
          "Địa chỉ và route thuộc namespace cụ thể",
          "Bridge nối nhiều đầu veth trên host"
        ],
        "code": ""
      },
      {
        "id": 16368360,
        "ref": "209",
        "chapter": 9,
        "title": "FAQ",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16368360#overview",
        "status": "article",
        "text": "FAQ nhắc đặt netmask khi gán IP cho namespace và kiểm tra firewall khi ping không đi qua. Khắc phục cần dựa trên địa chỉ, route và rule thực tế.",
        "points": [
          "Dùng địa chỉ kèm prefix như /24",
          "Chỉ thử tắt firewall trong lab cô lập nếu thật sự cần",
          "Ưu tiên sửa rule đúng phạm vi"
        ],
        "code": ""
      },
      {
        "id": 14296144,
        "ref": "210",
        "chapter": 9,
        "title": "Prerequisite Docker Networking",
        "duration": "7min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296144#overview",
        "status": "transcript",
        "text": "Docker networking được giải thích bằng network namespace, docker0 bridge, veth và iptables. Các chế độ none, host và bridge cho container mức chia sẻ mạng khác nhau.",
        "points": [
          "Tên bridge logic và interface trên host có thể khác",
          "Port publishing dùng luật chuyển tiếp",
          "Kiểm tra từng namespace khi truy vết"
        ],
        "code": ""
      },
      {
        "id": 14296146,
        "ref": "211",
        "chapter": 9,
        "title": "Prerequisite CNI",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296146#overview",
        "status": "transcript",
        "text": "CNI định nghĩa hợp đồng giữa runtime và chương trình plugin để thiết lập mạng container. Các công việc tạo interface, gán IP và route được tách thành các plugin tuân theo chuẩn.",
        "points": [
          "Plugin nhận thông tin container và network namespace",
          "Chuẩn giao tiếp khác với một sản phẩm CNI cụ thể"
        ],
        "code": ""
      },
      {
        "id": 14296148,
        "ref": "212",
        "chapter": 9,
        "title": "Cluster Networking",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296148#overview",
        "status": "transcript",
        "text": "Cluster networking cần địa chỉ node, tên máy và các cổng cho control plane, kubelet, etcd. Bài giảng đi qua các kết nối giữa thành phần để chuẩn bị khảo sát cụm.",
        "points": [
          "API server thường dùng 6443",
          "etcd client và peer dùng vai trò cổng khác nhau",
          "Kiểm tra tài liệu/cấu hình thực trước khi mở firewall"
        ],
        "code": ""
      },
      {
        "id": 21615696,
        "ref": "213",
        "chapter": 9,
        "title": "Important Note about CNI and CKA Exam",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21615696#overview",
        "status": "article",
        "text": "Bài đọc nhắc lựa chọn network addon phù hợp và kiểm tra nguồn cài của nhà cung cấp. Ví dụ Weave trong tài liệu không có nghĩa mọi bài bắt buộc dùng cùng một plugin.",
        "points": [
          "Đề yêu cầu plugin cụ thể thì phải làm đúng",
          "Không đoán lệnh cài chỉ từ tên addon",
          "Đọc quy định nguồn tài liệu được phép dùng trong kỳ thi hiện hành"
        ],
        "code": ""
      },
      {
        "id": 14299080,
        "ref": "214",
        "chapter": 9,
        "title": "Lab - Explore Environment",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14299080#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về interface, địa chỉ, route và port của cụm. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đối chiếu mạng node với mạng Pod",
          "Ghi lại quan sát từ đúng host"
        ],
        "code": ""
      },
      {
        "id": 21739568,
        "ref": "215",
        "chapter": 9,
        "title": "Lab Solution - Explore Environment (optional)",
        "duration": "8min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21739568#overview",
        "status": "transcript",
        "text": "Video giải lab Explore Environment khảo sát số node, interface, địa chỉ và đường đi giữa máy. Giảng viên liên hệ port lắng nghe với chức năng của thành phần cụm.",
        "points": [
          "Dùng dữ liệu quan sát được thay vì tên interface cố định",
          "Phân biệt địa chỉ node và mạng Pod"
        ],
        "code": ""
      },
      {
        "id": 14296150,
        "ref": "216",
        "chapter": 9,
        "title": "Pod Networking",
        "duration": "9min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296150#overview",
        "status": "transcript",
        "text": "Bài giảng xây mô hình Pod networking từ namespace, veth và bridge trên từng node tới route giữa các node. Yêu cầu là các Pod liên lạc được với nhau theo mô hình mạng của Kubernetes.",
        "points": [
          "Mỗi Pod cần địa chỉ phù hợp và không trùng",
          "Route liên node phải biết mạng đích",
          "CNI hiện thực hóa mô hình thay cho script thủ công"
        ],
        "code": ""
      },
      {
        "id": 14296152,
        "ref": "217",
        "chapter": 9,
        "title": "CNI in kubernetes",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296152#overview",
        "status": "transcript",
        "text": "Kubernetes làm việc với runtime và CNI plugin để dựng mạng cho Pod. Video chỉ ra vị trí cấu hình plugin, executable và mục IPAM chịu trách nhiệm cấp địa chỉ.",
        "points": [
          "Phân biệt cấu hình CNI với binary plugin",
          "Runtime có vai trò gọi plugin",
          "IPAM có thể dùng các cơ chế cấp IP khác nhau"
        ],
        "code": ""
      },
      {
        "id": 50127703,
        "ref": "218",
        "chapter": 9,
        "title": "Lab - CNI",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/50127703#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về runtime endpoint và CNI configuration. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Tìm thư mục binary/config thực",
          "Đọc loại plugin đang cấu hình"
        ],
        "code": ""
      },
      {
        "id": 21739688,
        "ref": "219",
        "chapter": 9,
        "title": "Lab Solution - Explore CNI (optional)",
        "duration": "2min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21739688#overview",
        "status": "transcript",
        "text": "Video giải lab Explore CNI kiểm tra runtime endpoint, thư mục binary và cấu hình CNI. Từ file cấu hình, giảng viên xác định plugin đang dùng thay vì đoán từ tên Pod.",
        "points": [
          "Đọc loại plugin trong cấu hình thực",
          "Kiểm tra cả thành phần runtime và CNI khi mạng chưa sẵn sàng"
        ],
        "code": ""
      },
      {
        "id": 14296160,
        "ref": "220",
        "chapter": 9,
        "title": "ipam weave",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296160#overview",
        "status": "transcript",
        "text": "IPAM quản lý địa chỉ cho container sao cho không trùng nhau. Video giải thích vì sao script tạo interface nên giao cấp IP cho plugin như host-local hoặc DHCP thông qua cấu hình CNI.",
        "points": [
          "Subnet và route là tham số đầu vào",
          "Cấp IP và tạo kết nối mạng là các trách nhiệm phối hợp",
          "Đừng suy plugin đang cài chỉ từ tên lecture"
        ],
        "code": ""
      },
      {
        "id": 14299090,
        "ref": "221",
        "chapter": 9,
        "title": "Lab - Networking CNIs",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14299090#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về các thành phần của giải pháp CNI. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đối chiếu plugin và IPAM",
          "Kiểm tra node/Pod network theo yêu cầu thực tế của lab"
        ],
        "code": ""
      },
      {
        "id": 14296162,
        "ref": "222",
        "chapter": 9,
        "title": "Service Networking",
        "duration": "9min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296162#overview",
        "status": "transcript",
        "text": "Service dùng địa chỉ ảo, không phải một interface mới cho từng Service. Kube-proxy theo dõi đối tượng và thiết lập quy tắc chuyển lưu lượng đến Pod; video xem các chế độ proxy và rule.",
        "points": [
          "ClusterIP khác IP Pod",
          "Service CIDR được cấu hình cho cụm",
          "Kiểm tra selector, backend và luật chuyển tiếp theo từng lớp"
        ],
        "code": ""
      },
      {
        "id": 14299100,
        "ref": "223",
        "chapter": 9,
        "title": "Lab - Service Networking",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14299100#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về service CIDR, kube-proxy và backend. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra cấu hình và proxy mode",
          "Phân biệt Service range với Pod range"
        ],
        "code": ""
      },
      {
        "id": 21739774,
        "ref": "224",
        "chapter": 9,
        "title": "Lab Solution - Service Networking (optional)",
        "duration": "5min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21739774#overview",
        "status": "transcript",
        "text": "Video giải lab Service Networking xác định mạng node, Service CIDR và cách kube-proxy được triển khai. Giảng viên đọc cấu hình API server và workload hệ thống để tìm câu trả lời.",
        "points": [
          "Service range không phải Pod range",
          "Kube-proxy có thể chạy dưới dạng DaemonSet",
          "Đọc proxy mode từ cấu hình"
        ],
        "code": ""
      },
      {
        "id": 14296164,
        "ref": "225",
        "chapter": 9,
        "title": "DNS in kubernetes",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296164#overview",
        "status": "transcript",
        "text": "DNS trong cụm cho phép gọi Service bằng tên thay cho IP. Tên ngắn hoạt động nhờ search domain và namespace; truy cập khác namespace cần bổ sung phần tên phù hợp.",
        "points": [
          "Service có record ổn định theo tên",
          "Đọc namespace và cluster domain",
          "Không giả định mọi Pod đều có hostname DNS tiện dụng như Service"
        ],
        "code": ""
      },
      {
        "id": 14296166,
        "ref": "226",
        "chapter": 9,
        "title": "CoreDNS in Kubernetes",
        "duration": "7min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296166#overview",
        "status": "transcript",
        "text": "CoreDNS trong Kubernetes theo dõi tài nguyên để trả lời tên Service và chuyển truy vấn ngoài cụm theo cấu hình. Bài giảng liên hệ Corefile, Service DNS và thiết lập resolver do kubelet cung cấp cho Pod.",
        "points": [
          "Xem ConfigMap CoreDNS",
          "Pod dùng IP của Service DNS trong resolv.conf",
          "Kiểm tra search domains khi tên ngắn thất bại"
        ],
        "code": ""
      },
      {
        "id": 14299106,
        "ref": "227",
        "chapter": 9,
        "title": "Lab - CoreDNS in Kubernetes",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14299106#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về coreDNS, resolver và tên Service. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Thử tên ngắn rồi tên đầy đủ",
          "Đọc ConfigMap và log DNS khi lỗi"
        ],
        "code": ""
      },
      {
        "id": 21739822,
        "ref": "228",
        "chapter": 9,
        "title": "Lab Solution -  Explore DNS (optional)",
        "duration": "16min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21739822#overview",
        "status": "transcript",
        "text": "Video giải lab Explore DNS xác định DNS solution rồi thử gọi Service trong cùng và khác namespace. Giảng viên dùng truy vấn DNS để kiểm chứng câu trả lời, có bài yêu cầu ghi đầu ra vào file.",
        "points": [
          "Thử tên đầy đủ khi tên ngắn không phân giải",
          "Kiểm tra đúng đường dẫn file yêu cầu"
        ],
        "code": ""
      },
      {
        "id": 14296170,
        "ref": "229",
        "chapter": 9,
        "title": "Ingress",
        "duration": "18min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296170#overview",
        "status": "transcript",
        "text": "Ingress mô tả định tuyến HTTP(S) theo host hoặc path tới các Service. Ingress resource cần một ingress controller thực thi; chính controller còn cần được expose ra bên ngoài.",
        "points": [
          "Resource khác controller",
          "Backend trỏ Service và port",
          "Một controller có thể xử lý nhiều rule"
        ],
        "code": ""
      },
      {
        "id": 28046886,
        "ref": "230",
        "chapter": 9,
        "title": "Article: Ingress",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/28046886#overview",
        "status": "article",
        "text": "Bài đọc cập nhật cú pháp Ingress hiện đại và cách sinh resource bằng kubectl create ingress. Khi tham khảo ví dụ cũ cần chú ý apiVersion, pathType và cấu trúc backend service.",
        "points": [
          "Dùng networking.k8s.io/v1 khi cụm hỗ trợ",
          "Đọc service.name và service.port đúng cấu trúc"
        ],
        "code": ""
      },
      {
        "id": 16827080,
        "ref": "231",
        "chapter": 9,
        "title": "Ingress - Annotations and rewrite-target",
        "duration": "2min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16827080#overview",
        "status": "article",
        "text": "Rewrite target điều chỉnh path gửi vào backend khi đường dẫn ngoài khác đường dẫn ứng dụng phục vụ. Ví dụ /watch hoặc /wear được định tuyến tới ứng dụng chỉ phục vụ ở /.",
        "points": [
          "Rewrite là hành vi của controller cụ thể",
          "Định tuyến đúng Service vẫn có thể lỗi path",
          "Đối chiếu annotation của controller đang dùng"
        ],
        "code": ""
      },
      {
        "id": 14299110,
        "ref": "232",
        "chapter": 9,
        "title": "Lab - CKA Ingress Networking - 1",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14299110#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về khảo sát rule và backend Ingress. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra controller và namespace",
          "Xác minh host/path qua truy cập"
        ],
        "code": ""
      },
      {
        "id": 21738984,
        "ref": "233",
        "chapter": 9,
        "title": "Lab Solution -  Ingress Networking 1  - (optional)",
        "duration": "16min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21738984#overview",
        "status": "transcript",
        "text": "Video giải lab Ingress 1 khám phá controller và rule có sẵn rồi thêm đường dẫn hoặc backend theo yêu cầu. Giảng viên xác minh bằng truy cập ứng dụng thay vì chỉ liệt kê Ingress.",
        "points": [
          "Kiểm tra namespace của Ingress và Service",
          "Đọc path, backend và rewrite cùng nhau"
        ],
        "code": ""
      },
      {
        "id": 14299118,
        "ref": "234",
        "chapter": 9,
        "title": "Lab - CKA Ingress Networking - 2",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14299118#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về controller Ingress và tài nguyên expose. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Chờ controller sẵn sàng",
          "Kiểm tra Service ngoài và backend riêng"
        ],
        "code": ""
      },
      {
        "id": 21738990,
        "ref": "235",
        "chapter": 9,
        "title": "Lab Solution - Ingress Networking - 2 (optional)",
        "duration": "15min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21738990#overview",
        "status": "transcript",
        "text": "Video giải lab Ingress 2 đi sâu triển khai controller cùng các tài nguyên liên quan rồi cấu hình truy cập ứng dụng. Các lỗi cần kiểm tra ở cả trạng thái controller và rule định tuyến.",
        "points": [
          "Controller phải sẵn sàng trước",
          "Service expose controller khác Service backend",
          "Thử địa chỉ truy cập cuối cùng"
        ],
        "code": ""
      },
      {
        "id": 48755137,
        "ref": "236",
        "chapter": 9,
        "title": "Introduction to Gateway API (2025 updates)",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48755137#overview",
        "status": "transcript",
        "text": "Gateway API phân chia trách nhiệm giữa người cung cấp controller, quản trị hạ tầng và nhóm ứng dụng. GatewayClass xác định loại triển khai, Gateway khai báo listener, HTTPRoute gắn rule tới backend.",
        "points": [
          "Route cần được listener cho phép attach",
          "Gateway API dùng CRD và controller phù hợp",
          "Không coi việc tạo HTTPRoute là đã có đường truy cập"
        ],
        "code": ""
      },
      {
        "id": 50127829,
        "ref": "237",
        "chapter": 9,
        "title": "Practical Guide to Gateway API (2025 Updates)",
        "duration": "7min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/50127829#overview",
        "status": "article",
        "text": "Bài hướng dẫn thực hành Gateway API dùng NGINX làm ví dụ triển khai. Luồng học đi từ cài CRD/controller tới GatewayClass, Gateway và HTTPRoute, sau đó kiểm tra listener và backend.",
        "points": [
          "Lệnh cài gắn với phiên bản mẫu của bài",
          "Đọc status/conditions của Gateway và Route",
          "Kiểm tra parentRefs và backendRefs"
        ],
        "code": ""
      },
      {
        "id": 48755139,
        "ref": "238",
        "chapter": 9,
        "title": "(2025 Updates) Lab - Gateway API (2025 Updates)",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48755139#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về gatewayClass, Gateway và HTTPRoute. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc status conditions và listener",
          "Kiểm tra parentRefs/backendRefs"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 10,
    "title": "Design and Install a Kubernetes Cluster",
    "en": "Thiết kế cụm",
    "intro": "Đặt yêu cầu trước khi chọn hạ tầng, thiết kế HA control plane và hiểu quorum của etcd. Kubernetes the Hard Way được giữ là nguồn tùy chọn ngoài chuỗi kubeadm.",
    "goals": [
      "Chọn mô hình cụm theo mục tiêu và workload",
      "Phân biệt stacked với external etcd",
      "Tính quorum theo số thành viên"
    ],
    "lessons": [
      {
        "id": 14296182,
        "ref": "239",
        "chapter": 10,
        "title": "Design a Kubernetes Cluster",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296182#overview",
        "status": "transcript",
        "text": "Thiết kế cụm bắt đầu từ mục tiêu: học tập hay production, ứng dụng gì, nhu cầu tài nguyên và khả năng phục hồi ra sao. Bài giảng dùng các câu hỏi đó để lựa chọn số node và cách triển khai.",
        "points": [
          "Thiết kế theo workload và mức sẵn sàng",
          "Không bê cấu hình lab nhỏ vào production",
          "Hạ tầng ảnh hưởng cách quản trị cụm"
        ],
        "code": ""
      },
      {
        "id": 14296184,
        "ref": "240",
        "chapter": 10,
        "title": "Choosing Kubernetes Infrastructure",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296184#overview",
        "status": "transcript",
        "text": "Kubernetes có thể chạy trên máy cá nhân, VM, máy vật lý hoặc dịch vụ được quản lý. Video so sánh mức tự quản lý và trách nhiệm của nhà cung cấp rồi chọn mô hình VM cho phần thực hành.",
        "points": [
          "kubeadm cần hạ tầng được chuẩn bị trước",
          "Managed service chuyển một phần trách nhiệm control plane",
          "Kiểm tra công cụ phù hợp nền tảng máy đang dùng"
        ],
        "code": ""
      },
      {
        "id": 14296190,
        "ref": "241",
        "chapter": 10,
        "title": "Configure High Availability",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296190#overview",
        "status": "transcript",
        "text": "HA control plane giảm điểm lỗi đơn bằng nhiều API server sau load balancer và leader election cho controller/scheduler. Video so sánh etcd đặt cùng control plane với etcd tách riêng.",
        "points": [
          "API server có thể phục vụ song song",
          "Controller/scheduler phối hợp leader election",
          "HA control plane chưa tự giải quyết mọi lỗi workload hoặc storage"
        ],
        "code": ""
      },
      {
        "id": 14296192,
        "ref": "242",
        "chapter": 10,
        "title": "ETCD in HA",
        "duration": "12min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296192#overview",
        "status": "transcript",
        "text": "etcd dùng Raft với leader và quorum để thống nhất dữ liệu. Số thành viên lẻ giúp đạt mức chịu lỗi hợp lý; quorum là phần lớn số thành viên, nên cụm mất quá nhiều thành viên không thể tiếp tục ghi.",
        "points": [
          "Cụm 3 thành viên cần 2 cho quorum",
          "Thêm thành viên không tăng chịu lỗi theo từng bước đơn vị",
          "Stacked và external etcd có đánh đổi khác nhau"
        ],
        "code": ""
      },
      {
        "id": 22498956,
        "ref": "243",
        "chapter": 10,
        "title": "Important Update: Kubernetes the Hard Way",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/22498956#overview",
        "status": "article",
        "text": "Bài đọc chuyển phần cài thủ công Kubernetes the Hard Way sang chuỗi video và repository riêng. Nội dung được giới thiệu như nguồn học thêm để hiểu cách các thành phần được ghép nối.",
        "points": [
          "Không nhầm nguồn tùy chọn với sáu lecture kubeadm kế tiếp",
          "Dùng tài liệu đúng phiên bản khi tự triển khai"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 11,
    "title": "Install \"Kubernetes the kubeadm way\"",
    "en": "Cài cụm bằng kubeadm",
    "intro": "Từ chuẩn bị VM và containerd đến init control plane, cài CNI và join worker. Demo, lab và lời giải là các mục riêng để bạn tự làm rồi đối chiếu.",
    "goals": [
      "Phân biệt cấp máy với bootstrap Kubernetes",
      "Kiểm tra runtime/cgroup và các gói công cụ",
      "Xác minh node Ready cùng mạng Pod"
    ],
    "lessons": [
      {
        "id": 20666292,
        "ref": "244",
        "chapter": 11,
        "title": "Deployment With kubeadm - Introduction",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/20666292#overview",
        "status": "transcript",
        "text": "kubeadm giúp bootstrap cụm theo trình tự: chuẩn bị máy, cài runtime và các công cụ, init control plane, cài mạng Pod rồi join worker. Nó không thay bước cấp VM hoặc thiết kế mạng.",
        "points": [
          "Chuẩn bị các node nhất quán",
          "Cài CNI trước khi kỳ vọng mạng Pod hoạt động",
          "Giữ join credential an toàn"
        ],
        "code": ""
      },
      {
        "id": 20715920,
        "ref": "245",
        "chapter": 11,
        "title": "Resources",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/20715920#overview",
        "status": "article",
        "text": "Tài nguyên cho phần thực hành gồm repository chứa Vagrantfile và hướng dẫn cài kubeadm chính thức. Đọc trước để chuẩn bị VM và kiểm tra yêu cầu máy.",
        "points": [
          "Vagrantfile là ví dụ môi trường của khóa",
          "Đối chiếu kiến trúc CPU và provider đang dùng"
        ],
        "code": ""
      },
      {
        "id": 20666284,
        "ref": "246",
        "chapter": 11,
        "title": "Deployment With Kubeadm - Provision VMs With Vagrant",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/20666284#overview",
        "status": "transcript",
        "text": "Demo tạo một control plane và hai worker bằng Vagrant, theo dõi việc provision và kiểm tra trạng thái VM. Đây là bước hạ tầng trước khi cài Kubernetes.",
        "points": [
          "Đọc cấu hình VM trước khi vagrant up",
          "Chỉ tiếp tục khi có thể truy cập các máy"
        ],
        "code": ""
      },
      {
        "id": 20666298,
        "ref": "247",
        "chapter": 11,
        "title": "Demo - Deployment with Kubeadm",
        "duration": "26min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/20666298#overview",
        "status": "transcript",
        "text": "Demo bootstrap bằng kubeadm gồm cấu hình containerd, cgroup, cài gói Kubernetes, init và cài mạng. Sau khi join worker, giảng viên kiểm tra trạng thái và chạy workload thử.",
        "points": [
          "Runtime và kubelet cần cấu hình cgroup phù hợp",
          "Chọn control-plane-endpoint theo thiết kế",
          "Kiểm tra node Ready và Pod hệ thống"
        ],
        "code": ""
      },
      {
        "id": 17174018,
        "ref": "248",
        "chapter": 11,
        "title": "Lab - Deploy a Kubernetes Cluster using Kubeadm",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17174018#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về bootstrap cụm bằng kubeadm. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Chuẩn bị runtime và gói trên đúng host",
          "Kiểm tra CNI, node Ready và workload thử"
        ],
        "code": ""
      },
      {
        "id": 17332598,
        "ref": "249",
        "chapter": 11,
        "title": "Lab Solution - Deploy a Kubernetes Cluster using kubeadm : (Optional)",
        "duration": "10min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17332598#overview",
        "status": "transcript",
        "text": "Video giải lab kubeadm cài công cụ trên control plane và worker rồi thực hiện init, join và cài addon mạng. Giảng viên sửa lỗi cấu hình và kiểm chứng lại cụm qua kubectl.",
        "points": [
          "Thực hiện đúng host cho từng bước",
          "Đọc lỗi trước khi chạy lại toàn bộ",
          "Xác minh node và mạng sau khi join"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 12,
    "title": "(2025 Updates)Helm Basics",
    "en": "Helm căn bản · cập nhật 2025",
    "intro": "Giới thiệu Helm và cấu trúc chart, cài công cụ rồi thực hành tìm, cài, tùy chỉnh và nâng cấp release. Lưu ý Helm 2/3 được giữ riêng theo đúng nguồn.",
    "goals": [
      "Phân biệt chart, repository và release",
      "Tùy chỉnh values mà không sửa template tùy tiện",
      "Đọc history và kiểm tra upgrade/rollback"
    ],
    "lessons": [
      {
        "id": 48273139,
        "ref": "250",
        "chapter": 12,
        "title": "Helm - Introduction",
        "duration": "7min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273139#overview",
        "status": "transcript",
        "text": "Helm quản lý một nhóm tài nguyên Kubernetes như một gói ứng dụng. Thay vì thao tác rời từng manifest, người dùng cài chart thành release rồi quản lý nâng cấp và gỡ bỏ.",
        "points": [
          "Chart là gói, release là lần cài",
          "Helm không thay Kubernetes thực thi tài nguyên"
        ],
        "code": ""
      },
      {
        "id": 48273147,
        "ref": "251",
        "chapter": 12,
        "title": "Installation and Configuration",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273147#overview",
        "status": "transcript",
        "text": "Bài giảng hướng dẫn cài Helm theo nền tảng Linux và yêu cầu có kubectl/kubeconfig kết nối cụm. Cách cài cụ thể phụ thuộc hệ điều hành và công cụ quản lý gói.",
        "points": [
          "Kiểm tra helm version",
          "Kiểm tra context Kubernetes trước khi cài chart"
        ],
        "code": ""
      },
      {
        "id": 48273155,
        "ref": "252",
        "chapter": 12,
        "title": "Lab: Installing Helm",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273155#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về cài Helm và kết nối Kubernetes. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "helm version",
          "Kiểm tra kubeconfig/context trước khi cài chart"
        ],
        "code": ""
      },
      {
        "id": 48273163,
        "ref": "253",
        "chapter": 12,
        "title": "A Quick Note on Helm2 vs Helm3",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273163#overview",
        "status": "transcript",
        "text": "Helm 3 bỏ thành phần Tiller của Helm 2, giao tiếp với API bằng quyền của client. Video cũng giải thích cách upgrade xét trạng thái cũ, trạng thái mong muốn và thay đổi thực tế.",
        "points": [
          "Đừng áp dụng hướng dẫn Tiller của Helm 2 cho Helm 3",
          "Quyền của Helm phụ thuộc kubeconfig/RBAC",
          "Upgrade không nên hiểu như ghi đè mù mọi trường"
        ],
        "code": ""
      },
      {
        "id": 48273171,
        "ref": "254",
        "chapter": 12,
        "title": "Helm Components",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273171#overview",
        "status": "transcript",
        "text": "Video giới thiệu hệ sinh thái Helm gồm chart, repository, client và release. Các chart có sẵn giúp tái sử dụng cấu hình nhưng vẫn cần xem nội dung và tham số trước khi cài.",
        "points": [
          "Repository là nơi phân phối chart",
          "Một chart có thể tạo nhiều release",
          "Tìm chart khác với cài chart"
        ],
        "code": ""
      },
      {
        "id": 48273177,
        "ref": "255",
        "chapter": 12,
        "title": "Helm Charts",
        "duration": "7min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273177#overview",
        "status": "transcript",
        "text": "Một chart có Chart.yaml chứa metadata, templates chứa manifest mẫu và values.yaml chứa giá trị mặc định. Video phân biệt chart version với appVersion.",
        "points": [
          "apiVersion của chart không phải apiVersion của Deployment",
          "version xác định gói chart",
          "appVersion mô tả ứng dụng được đóng gói"
        ],
        "code": ""
      },
      {
        "id": 48273183,
        "ref": "256",
        "chapter": 12,
        "title": "Working With Helm - Basics",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273183#overview",
        "status": "transcript",
        "text": "Các thao tác cơ bản gồm tìm chart, thêm repository, cập nhật chỉ mục, cài và liệt kê release. Video dùng WordPress để minh họa việc cài nhóm tài nguyên và đọc hướng dẫn sau cài.",
        "points": [
          "Phân biệt tên release và tên chart",
          "Kiểm tra namespace",
          "Đọc NOTES và trạng thái workload"
        ],
        "code": ""
      },
      {
        "id": 48273189,
        "ref": "257",
        "chapter": 12,
        "title": "Customizing Chart Parameters",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273189#overview",
        "status": "transcript",
        "text": "Tùy chỉnh chart bằng --set hoặc file values riêng giúp thay thông số mà không sửa trực tiếp template. Video chỉ cách xem giá trị mặc định và chuyển cấu hình sang file YAML dễ quản lý.",
        "points": [
          "Khóa values phải đúng chart hỗ trợ",
          "File riêng thuận tiện lưu và tái sử dụng",
          "Xem manifest render để kiểm tra ảnh hưởng"
        ],
        "code": ""
      },
      {
        "id": 48273193,
        "ref": "258",
        "chapter": 12,
        "title": "Lab: Using Helm to Deploy a chart",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273193#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về cài chart thành release với values phù hợp. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc chart và giá trị mặc định",
          "Kiểm tra helm list và workload"
        ],
        "code": ""
      },
      {
        "id": 48273199,
        "ref": "259",
        "chapter": 12,
        "title": "Lifecycle Management With Helm",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273199#overview",
        "status": "transcript",
        "text": "Helm quản lý lịch sử revision cho release thông qua install, upgrade và rollback. Video minh họa nâng ứng dụng rồi quay lại revision trước, đồng thời nhắc hook có thể tham gia vòng đời.",
        "points": [
          "helm history xem revision",
          "Rollback không bảo đảm hoàn tác dữ liệu ứng dụng",
          "Kiểm tra workload sau upgrade hoặc rollback"
        ],
        "code": ""
      },
      {
        "id": 48273205,
        "ref": "260",
        "chapter": 12,
        "title": "Lab: Upgrading a Helm Chart",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273205#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về upgrade và lịch sử release Helm. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "helm history <ten-release>",
          "Kiểm tra revision và tình trạng ứng dụng"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 13,
    "title": "(2025 Updates)Kustomize Basics",
    "en": "Kustomize căn bản · cập nhật 2025",
    "intro": "Theo từ vấn đề tái sử dụng YAML tới resources, transformers, patches, overlays và components. Phân biệt rõ build ra manifest với apply vào cụm.",
    "goals": [
      "Gom resources qua cấu trúc thư mục",
      "Chọn transformer hoặc patch theo phạm vi",
      "Tách base, overlay và tính năng tùy chọn"
    ],
    "lessons": [
      {
        "id": 48273251,
        "ref": "261",
        "chapter": 13,
        "title": "Kustomize Problem Statement and Ideology",
        "duration": "8min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273251#overview",
        "status": "transcript",
        "text": "Kustomize giải quyết việc tái sử dụng YAML giữa nhiều môi trường mà không sao chép toàn bộ file. Base giữ cấu hình chung, overlay chỉ định khác biệt; cú pháp vẫn dựa trên YAML thay vì template.",
        "points": [
          "Tránh nhiều bản sao lệch nhau",
          "Tách phần chung khỏi thay đổi theo môi trường"
        ],
        "code": ""
      },
      {
        "id": 48273253,
        "ref": "262",
        "chapter": 13,
        "title": "Kustomize vs Helm",
        "duration": "5min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273253#overview",
        "status": "transcript",
        "text": "Video so sánh Helm dùng template và values với Kustomize biến đổi manifest YAML. Hai công cụ giải quyết bài toán tái sử dụng theo cách khác nhau và có các đánh đổi về độ linh hoạt, dễ đọc.",
        "points": [
          "Helm thuận tiện phân phối ứng dụng dạng chart",
          "Kustomize thuận tiện điều chỉnh manifest có sẵn",
          "Chọn theo nhu cầu thay vì coi một công cụ luôn thay thế công cụ kia"
        ],
        "code": ""
      },
      {
        "id": 48273255,
        "ref": "263",
        "chapter": 13,
        "title": "Installation/Setup",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273255#overview",
        "status": "transcript",
        "text": "Bài giảng hướng dẫn cài binary Kustomize và kiểm tra command hoạt động trên hệ điều hành. Kustomize cũng có tích hợp trong kubectl, nhưng phiên bản tích hợp có thể khác binary độc lập.",
        "points": [
          "Kiểm tra version/help khi cú pháp không khớp",
          "Xác nhận PATH nếu shell chưa tìm thấy lệnh"
        ],
        "code": ""
      },
      {
        "id": 48273257,
        "ref": "264",
        "chapter": 13,
        "title": "The kustomization.yaml File",
        "duration": "4min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273257#overview",
        "status": "transcript",
        "text": "kustomization.yaml xác định danh sách resources và các biến đổi cần áp dụng. kustomize build đọc cấu hình và in manifest kết quả chứ chưa tự tạo tài nguyên trong cụm.",
        "points": [
          "Không nhầm build với apply",
          "Đường dẫn resources tính theo thư mục cấu hình",
          "Xem đầu ra trước khi triển khai"
        ],
        "code": "# Dựng manifest để xem, chưa áp dụng vào cụm:\nkubectl kustomize ./overlays/dev\n# Chỉ triển khai sau khi đọc đầu ra và xác nhận context."
      },
      {
        "id": 48273261,
        "ref": "265",
        "chapter": 13,
        "title": "Kustomize Output",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273261#overview",
        "status": "transcript",
        "text": "Đầu ra kustomize build có thể truyền qua stdin cho kubectl apply -f -. Video giới thiệu cách tương đương dùng kubectl apply -k và delete -k với thư mục Kustomize.",
        "points": [
          "-f đọc manifest, -k đọc cấu hình Kustomize",
          "Build trước để kiểm tra kết quả",
          "Delete tác động tài nguyên của cấu hình đã chọn"
        ],
        "code": ""
      },
      {
        "id": 48273263,
        "ref": "266",
        "chapter": 13,
        "title": "Kustomize ApiVersion & Kind",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273263#overview",
        "status": "transcript",
        "text": "Bài ngắn khuyên khai báo apiVersion và kind trong kustomization.yaml thay vì phụ thuộc mặc định. Đây là metadata cho cấu hình Kustomize, không phải loại tài nguyên ứng dụng được tạo.",
        "points": [
          "kind là Kustomization",
          "Không nhầm với custom resource có tên tương tự của công cụ khác"
        ],
        "code": ""
      },
      {
        "id": 48273267,
        "ref": "267",
        "chapter": 13,
        "title": "Managing Directories",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273267#overview",
        "status": "transcript",
        "text": "Khi ứng dụng có nhiều thư mục, mỗi thư mục có thể có kustomization.yaml riêng. Cấu hình cấp trên tham chiếu các thư mục này để gom nhiều nhóm tài nguyên thành một lần build.",
        "points": [
          "Thư mục được tham chiếu phải có cấu hình phù hợp",
          "Tổ chức theo nhóm chức năng để dễ đọc"
        ],
        "code": ""
      },
      {
        "id": 48273271,
        "ref": "268",
        "chapter": 13,
        "title": "Managing Directories Demo",
        "duration": "9min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273271#overview",
        "status": "transcript",
        "text": "Demo chuyển các manifest NGINX và cơ sở dữ liệu vào các thư mục riêng rồi liên kết bằng resources. Giảng viên build và apply từ cấu hình gốc để tạo toàn bộ tập tài nguyên.",
        "points": [
          "Kiểm tra đường dẫn tương đối",
          "Xem manifest kết quả khi thêm thư mục con"
        ],
        "code": ""
      },
      {
        "id": 48273275,
        "ref": "269",
        "chapter": 13,
        "title": "Lab: Managing Directories",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273275#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về gom resources từ các thư mục Kustomize. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra đường dẫn tương đối",
          "Build từ thư mục gốc và đọc đầu ra"
        ],
        "code": ""
      },
      {
        "id": 48273277,
        "ref": "270",
        "chapter": 13,
        "title": "Common Transformers",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273277#overview",
        "status": "transcript",
        "text": "Common transformers áp dụng thay đổi chung như namespace, nhãn, annotation và tiền/hậu tố tên. Video chỉ ra một khai báo có thể tác động nhiều tài nguyên mà không sửa từng file.",
        "points": [
          "Phạm vi biến đổi phụ thuộc vị trí cấu hình",
          "Kiểm tra tên tham chiếu sau biến đổi",
          "Đọc cú pháp theo phiên bản Kustomize"
        ],
        "code": ""
      },
      {
        "id": 48273283,
        "ref": "271",
        "chapter": 13,
        "title": "Image Transformers",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273283#overview",
        "status": "transcript",
        "text": "Image transformer sửa image name, tag hoặc digest trong các manifest được build. Trường name đối chiếu tên image đang dùng, không phải tên container trong Pod template.",
        "points": [
          "Phân biệt container.name với image",
          "newName và newTag giải quyết hai phần khác nhau",
          "Kiểm tra đầu ra khi thay registry hoặc repository"
        ],
        "code": ""
      },
      {
        "id": 48273285,
        "ref": "272",
        "chapter": 13,
        "title": "Transformers Demo",
        "duration": "12min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273285#overview",
        "status": "transcript",
        "text": "Demo áp dụng label và đổi tên ở cấu hình gốc hoặc cấu hình con để so sánh phạm vi ảnh hưởng. Các image transformer được kết hợp và kết quả được kiểm tra bằng build.",
        "points": [
          "Vị trí đặt transformer quyết định tập tài nguyên chịu tác động",
          "Quan sát cả reference sau đổi tên"
        ],
        "code": ""
      },
      {
        "id": 48273291,
        "ref": "273",
        "chapter": 13,
        "title": "Lab: Transformers",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273291#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về thay tên, nhãn hoặc image bằng transformer. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra phạm vi cấu hình",
          "Đối chiếu manifest trước/sau build"
        ],
        "code": ""
      },
      {
        "id": 48273297,
        "ref": "274",
        "chapter": 13,
        "title": "Patches Intro",
        "duration": "9min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273297#overview",
        "status": "transcript",
        "text": "Patch sửa chọn lọc một phần tài nguyên khi common transformer quá rộng. Video giới thiệu chọn target và hai dạng JSON 6902, strategic merge; ví dụ sửa tên hoặc số replicas qua đường dẫn trường.",
        "points": [
          "JSON patch dùng op, path và value khi cần",
          "Target có thể lọc theo loại, tên hoặc selector",
          "Strategic merge có cấu trúc gần manifest gốc"
        ],
        "code": "# Ví dụ tự biên soạn trong kustomization.yaml\nresources:\n  - deployment.yaml\npatches:\n  - target:\n      kind: Deployment\n      name: web\n    patch: |-\n      - op: replace\n        path: /spec/replicas\n        value: 3\n# Dùng build để kiểm tra kết quả trước khi apply."
      },
      {
        "id": 48273303,
        "ref": "275",
        "chapter": 13,
        "title": "Different Types of Patches",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273303#overview",
        "status": "transcript",
        "text": "Patch có thể viết inline trong kustomization.yaml hoặc tách thành file để tham chiếu. Video áp dụng cả hai cách cho JSON 6902 và strategic merge.",
        "points": [
          "Tách file giúp cấu hình dài dễ đọc",
          "Đường dẫn patch phải chính xác",
          "Luôn build để xem thay đổi thực"
        ],
        "code": ""
      },
      {
        "id": 48273307,
        "ref": "276",
        "chapter": 13,
        "title": "Patches Dictionary",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273307#overview",
        "status": "transcript",
        "text": "Video luyện add, replace, remove một key trong dictionary như labels. JSON patch thao tác theo path; strategic merge dùng cấu trúc YAML và có cách loại bỏ key tương ứng.",
        "points": [
          "Thay key khác thay toàn map",
          "Đọc đường dẫn đầy đủ tới metadata hoặc template",
          "Không xóa nhầm label đang được selector dùng"
        ],
        "code": ""
      },
      {
        "id": 48273315,
        "ref": "277",
        "chapter": 13,
        "title": "Patches List",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273315#overview",
        "status": "transcript",
        "text": "Patch với list phức tạp hơn dictionary: JSON patch có thể dùng vị trí phần tử, còn strategic merge thường dựa trên khóa gộp của danh sách. Ví dụ thay hoặc xóa container giúp phân biệt hai cách.",
        "points": [
          "Chỉ số list có thể thay đổi khi cấu trúc đổi",
          "Dấu - ở cuối JSON path có thể thêm phần tử",
          "Strategic merge phụ thuộc schema/merge key"
        ],
        "code": ""
      },
      {
        "id": 48273319,
        "ref": "278",
        "chapter": 13,
        "title": "Lab: Patches",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273319#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về patch chọn lọc dictionary và list. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Xác định đúng target/path",
          "Build để kiểm tra cả trường không muốn thay"
        ],
        "code": ""
      },
      {
        "id": 48273325,
        "ref": "279",
        "chapter": 13,
        "title": "Overlays",
        "duration": "6min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273325#overview",
        "status": "transcript",
        "text": "Overlay nhập base rồi áp dụng thay đổi cho môi trường như dev hoặc production. Cấu trúc thư mục và đường dẫn tương đối cho phép giữ phần chung ở base mà không sao chép mọi manifest.",
        "points": [
          "Đừng chỉnh base chỉ để đáp ứng riêng một môi trường",
          "Build từng overlay và so sánh đầu ra"
        ],
        "code": ""
      },
      {
        "id": 48273329,
        "ref": "280",
        "chapter": 13,
        "title": "Lab: Overlay",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273329#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về overlay môi trường dựa trên base. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra nguồn base và patch",
          "So sánh đầu ra từng overlay"
        ],
        "code": ""
      },
      {
        "id": 48273331,
        "ref": "281",
        "chapter": 13,
        "title": "Components",
        "duration": "9min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273331#overview",
        "status": "transcript",
        "text": "Component đóng gói nhóm cấu hình tùy chọn có thể bật ở nhiều overlay. Video dùng ví dụ tính năng xác thực để tránh đưa vào base khi chỉ vài môi trường cần.",
        "points": [
          "Component khác base dùng chung bắt buộc",
          "Overlay chọn các component cần thiết",
          "Kiểm tra tương thích apiVersion/kind của component"
        ],
        "code": ""
      },
      {
        "id": 48273333,
        "ref": "282",
        "chapter": 13,
        "title": "Lab: Components",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/48273333#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về component tùy chọn trong Kustomize. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra overlay bật component",
          "Build cả cấu hình có và không có tính năng"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 14,
    "title": "Troubleshooting",
    "en": "Xử lý sự cố",
    "intro": "Luyện điều tra theo từng lớp: ứng dụng, control plane, worker và mạng. Bài học nhấn mạnh lấy bằng chứng và kiểm chứng hành vi sau khi sửa.",
    "goals": [
      "Khoanh vùng từ triệu chứng tới thành phần",
      "Dùng logs, Events và cấu hình thực tế",
      "Xác nhận chức năng phục hồi"
    ],
    "lessons": [
      {
        "id": 14296294,
        "ref": "283",
        "chapter": 14,
        "title": "Troubleshooting - Section Introduction",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296294#overview",
        "status": "transcript",
        "text": "Phần Troubleshooting tổ chức theo lỗi ứng dụng, control plane, worker và mạng. Các lab đặt người học vào cụm hỏng để luyện thu thập dấu hiệu rồi khôi phục.",
        "points": [
          "Xác nhận phạm vi hỏng trước",
          "Ghi giả thuyết và bằng chứng thay vì sửa ngẫu nhiên"
        ],
        "code": ""
      },
      {
        "id": 14296310,
        "ref": "284",
        "chapter": 14,
        "title": "Application Failure",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296310#overview",
        "status": "transcript",
        "text": "Video đi theo đường truy cập của người dùng qua Service tới Pod rồi tới cơ sở dữ liệu. Mỗi mắt xích được kiểm tra bằng cấu hình, endpoints, trạng thái và log.",
        "points": [
          "Service đúng tên vẫn có thể sai selector/port",
          "Pod Running chưa bảo đảm ứng dụng kết nối DB",
          "Khoanh vùng từ triệu chứng tới backend"
        ],
        "code": ""
      },
      {
        "id": 14436890,
        "ref": "285",
        "chapter": 14,
        "title": "Lab - Application Failure",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14436890#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về lỗi dọc đường ứng dụng, Service và DB. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Kiểm tra endpoints, port và cấu hình kết nối",
          "Xác nhận truy cập ứng dụng sau sửa"
        ],
        "code": ""
      },
      {
        "id": 16695422,
        "ref": "286",
        "chapter": 14,
        "title": "Lab Solution - Application Failure : (Optional)",
        "duration": "28min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16695422#overview",
        "status": "transcript",
        "text": "Video giải lab Application Failure kiểm tra Service, selector, endpoints và cấu hình ứng dụng qua nhiều tình huống. Giảng viên sửa từng lỗi rồi thử truy cập lại để biết đã xử lý đúng nguyên nhân.",
        "points": [
          "Đừng dừng ở việc Pod chuyển Running",
          "Kiểm tra giá trị kết nối và port",
          "Làm lại không xem đáp án để luyện quy trình"
        ],
        "code": ""
      },
      {
        "id": 14296312,
        "ref": "287",
        "chapter": 14,
        "title": "Control Plane Failure",
        "duration": "1min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296312#overview",
        "status": "transcript",
        "text": "Khi control plane lỗi, bắt đầu với trạng thái node và thành phần hệ thống. Cách xem trạng thái/log phụ thuộc thành phần chạy dưới dạng static Pod hay system service.",
        "points": [
          "kubectl logs cần API hoạt động",
          "systemctl/journalctl hữu ích với service",
          "Dùng runtime logs khi không thể truy cập API"
        ],
        "code": ""
      },
      {
        "id": 14436900,
        "ref": "288",
        "chapter": 14,
        "title": "Lab - Control Plane Failure",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14436900#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về control plane không hoạt động đúng. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc logs và manifest thành phần",
          "Kiểm tra chức năng scheduling/controller sau sửa"
        ],
        "code": ""
      },
      {
        "id": 17382676,
        "ref": "289",
        "chapter": 14,
        "title": "Lab Solution - Control Plane Failure : (Optional)",
        "duration": "16min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17382676#overview",
        "status": "transcript",
        "text": "Video giải lab kiểm tra manifest và logs của scheduler/controller-manager để tìm cấu hình bị sai. Sau khi sửa, giảng viên theo dõi Pod hệ thống và khả năng tạo đủ replicas.",
        "points": [
          "Lỗi cú pháp hoặc tên tham số có thể làm thành phần không chạy",
          "Kiểm tra triệu chứng sau sửa thay vì chỉ process",
          "Giữ bản sao manifest trước chỉnh"
        ],
        "code": ""
      },
      {
        "id": 14296314,
        "ref": "290",
        "chapter": 14,
        "title": "Worker Node Failure",
        "duration": "2min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14296314#overview",
        "status": "transcript",
        "text": "Worker NotReady cần xem Conditions như memory, disk, PID pressure và khả năng liên lạc. Video tiếp tục kiểm tra host, kubelet, cấu hình và certificate để tìm nguyên nhân.",
        "points": [
          "Node Unknown có thể do mất liên lạc",
          "Xem systemctl và journalctl của kubelet",
          "Kiểm tra CA, thời hạn và endpoint"
        ],
        "code": ""
      },
      {
        "id": 14436904,
        "ref": "291",
        "chapter": 14,
        "title": "Lab - Worker Node Failure",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14436904#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về worker NotReady và kubelet. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Xem Conditions, service và journal",
          "Xác minh kết nối API và certificate"
        ],
        "code": ""
      },
      {
        "id": 17360654,
        "ref": "292",
        "chapter": 14,
        "title": "Lab Solution - Worker Node Failure : (Optional)",
        "duration": "10min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/17360654#overview",
        "status": "transcript",
        "text": "Video giải lab Worker Node Failure lần từ trạng thái node tới kubelet service và logs. Các cấu hình liên lạc với API server được đọc và sửa trước khi xác nhận node trở lại Ready.",
        "points": [
          "Không restart liên tục khi chưa đọc lỗi",
          "Kiểm tra kubelet config và credential",
          "Đợi node cập nhật trạng thái rồi kiểm chứng workload"
        ],
        "code": ""
      },
      {
        "id": 55527943,
        "ref": "293",
        "chapter": 14,
        "title": "Network Troubleshooting",
        "duration": "12min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/55527943#overview",
        "status": "transcript",
        "text": "Networking troubleshooting tách Service, DNS, CNI và kube-proxy để kiểm tra. Video nhấn mạnh xác minh selector/backend, CoreDNS và rule chuyển lưu lượng thay vì xem mạng như một khối duy nhất.",
        "points": [
          "Thử IP và tên để tách lỗi DNS",
          "Kiểm tra CNI khi Pod không có mạng",
          "Đọc trạng thái kube-proxy và Service"
        ],
        "code": ""
      },
      {
        "id": 21836458,
        "ref": "294",
        "chapter": 14,
        "title": "Practice Test - Troubleshoot Network",
        "duration": "0min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21836458#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về lỗi mạng qua Service, DNS và CNI. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Thử IP để tách DNS",
          "Kiểm tra selector/backend rồi mới đi sâu rule mạng"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 15,
    "title": "Other Topics",
    "en": "Chủ đề khác",
    "intro": "JSONPath là công cụ trích đúng thông tin từ đầu ra Kubernetes. Giữ thứ tự nguồn gồm lab, bài nền tảng rồi bài giảng và lab lệnh nâng cao.",
    "goals": [
      "Đọc cấu trúc JSON trước khi viết truy vấn",
      "Định dạng và sắp xếp đầu ra theo trường"
    ],
    "lessons": [
      {
        "id": 19114096,
        "ref": "295",
        "chapter": 15,
        "title": "Lab  - JSON PATH",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/19114096#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về truy vấn dữ liệu JSON bằng JSONPath. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc cấu trúc đầu vào",
          "Thử từng đường dẫn trước khi ghép biểu thức"
        ],
        "code": ""
      },
      {
        "id": 15271428,
        "ref": "296",
        "chapter": 15,
        "title": "Pre-Requisites - JSON PATH",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15271428#overview",
        "status": "article",
        "text": "Bài đọc cung cấp bài nhập môn JSONPath và các bài tập trên đối tượng Kubernetes. Nên làm trước khi dùng những truy vấn nâng cao ở bài kế tiếp.",
        "points": [
          "Bắt đầu từ cấu trúc JSON thực tế",
          "Luyện truy xuất list và trường lồng nhau"
        ],
        "code": ""
      },
      {
        "id": 15271414,
        "ref": "297",
        "chapter": 15,
        "title": "JSON Path in Kubernetes",
        "duration": "12min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15271414#overview",
        "status": "transcript",
        "text": "JSONPath cho phép chọn đúng các trường cần từ đầu ra JSON của kubectl. Bài giảng đi từ xem dữ liệu gốc tới lọc, lặp, định dạng cột và sắp xếp kết quả.",
        "points": [
          "Xem -o json trước khi viết query",
          "Đường dẫn sai có thể cho đầu ra rỗng",
          "--sort-by nhận đường dẫn trường để sắp xếp"
        ],
        "code": "kubectl get nodes -o json\nkubectl get nodes -o jsonpath='{range .items[*]}{.metadata.name}{\"\\n\"}{end}'\nkubectl get pods --sort-by=.metadata.creationTimestamp"
      },
      {
        "id": 15271426,
        "ref": "298",
        "chapter": 15,
        "title": "Lab - Advanced Kubectl Commands",
        "duration": "1min",
        "kind": "lab",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15271426#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về kubectl nâng cao và định dạng đầu ra. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Dùng -o json để xác định trường",
          "Kiểm tra sort, cột và file kết quả"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 16,
    "title": "Lightning Labs",
    "en": "Lightning Labs",
    "intro": "Đọc quy tắc luyện tập rồi mở bài thực hành tổng hợp. Đây là môi trường luyện của KodeKloud, có cách chấm và thời gian riêng.",
    "goals": [
      "Luyện thao tác với giới hạn thời gian",
      "Tự kiểm tra thay vì chỉ dựa nút chấm lab"
    ],
    "lessons": [
      {
        "id": 18341314,
        "ref": "299",
        "chapter": 16,
        "title": "Lightning Lab Introduction",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/18341314#overview",
        "status": "article",
        "text": "Lightning Labs kết hợp nhiều chủ đề trong giới hạn thời gian. Bài đọc của khóa đặt mục tiêu làm 5–8 câu trong 30 phút trên môi trường có thời hạn 60 phút và dùng mức đánh giá riêng của lab.",
        "points": [
          "Đây là quy tắc luyện tập của khóa",
          "Không suy ra thời lượng hay ngưỡng đạt của kỳ thi thật",
          "Bấm kết thúc theo hướng dẫn trước khi hết thời gian"
        ],
        "code": ""
      },
      {
        "id": 18341304,
        "ref": "300",
        "chapter": 16,
        "title": "Lightning Lab - 1",
        "duration": "1min",
        "kind": "exam",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/18341304#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về bài thực hành tổng hợp có giới hạn thời gian. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc quy tắc ở bài 299",
          "Tự làm trước khi tra cứu lời giải"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 17,
    "title": "Mock Exams",
    "en": "Thi thử",
    "intro": "Ba mock exam và ba video giải được giữ thành sáu lecture riêng. Làm độc lập trước rồi dùng lời giải để tìm bước thiếu, lỗi phạm vi hoặc cách kiểm tra.",
    "goals": [
      "Xác nhận context và namespace cho từng câu",
      "Ghi lại lỗi và thời gian của mỗi lượt",
      "Luyện lại chủ đề yếu trước khi thi"
    ],
    "lessons": [
      {
        "id": 15328838,
        "ref": "301",
        "chapter": 17,
        "title": "Mock Exam - 1",
        "duration": "1min",
        "kind": "exam",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15328838#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về mock Exam 1 trên môi trường KodeKloud. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Chọn đúng context/namespace cho từng câu",
          "Ghi lỗi và thời gian để luyện lại"
        ],
        "code": ""
      },
      {
        "id": 21738900,
        "ref": "302",
        "chapter": 17,
        "title": "Solution - Mock Exam -1 (Optional)",
        "duration": "32min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/21738900#overview",
        "status": "transcript",
        "text": "Video giải Mock Exam 1 đi qua các tác vụ hỗn hợp, đọc đề rồi tra cấu hình và kiểm tra kết quả. Các ví dụ có cả sửa lỗi tài nguyên lẫn làm việc với Helm, nên cần chọn đúng context và namespace cho từng câu.",
        "points": [
          "Tự làm đề trước khi xem lời giải",
          "Kiểm tra chart/release và version từ môi trường",
          "Ghi lại thao tác mất thời gian để luyện lại"
        ],
        "code": ""
      },
      {
        "id": 15594406,
        "ref": "303",
        "chapter": 17,
        "title": "Mock Exam - 2",
        "duration": "1min",
        "kind": "exam",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15594406#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về mock Exam 2 trên môi trường KodeKloud. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Đọc toàn bộ thông số yêu cầu",
          "Tự kiểm tra kết quả và file đầu ra"
        ],
        "code": ""
      },
      {
        "id": 15622940,
        "ref": "304",
        "chapter": 17,
        "title": "Mock Exam - 2 - Solution : (Optional)",
        "duration": "44min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15622940#overview",
        "status": "transcript",
        "text": "Video giải Mock Exam 2 nhắc chọn đúng cluster trước mỗi câu và xử lý nhiều đối tượng khác nhau. Các đoạn minh họa gồm rollout, CSR/certificate và Service backend, với kiểm chứng sau thay đổi.",
        "points": [
          "Đừng dùng credential của câu trước cho câu sau",
          "Đọc chính xác tên, đường dẫn và đầu ra cần lưu",
          "Luyện lại quy trình thay vì nhớ giá trị đáp án mẫu"
        ],
        "code": ""
      },
      {
        "id": 15617866,
        "ref": "305",
        "chapter": 17,
        "title": "Mock Exam - 3",
        "duration": "1min",
        "kind": "exam",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15617866#overview",
        "status": "article",
        "text": "Mục nguồn là liên kết mở bài thực hành về mock Exam 3 trên môi trường KodeKloud. Đề và môi trường cụ thể nằm trên KodeKloud. Checklist dưới đây được tự biên soạn để ôn trước lab, không phải bản chép đề hoặc đáp án.",
        "points": [
          "Luyện hoàn thành độc lập",
          "Ôn lại chủ đề sai trước khi làm lượt tiếp theo"
        ],
        "code": ""
      },
      {
        "id": 15670780,
        "ref": "306",
        "chapter": 17,
        "title": "Mock Exam - 3 - Solution : (Optional)",
        "duration": "48min",
        "kind": "solution",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15670780#overview",
        "status": "transcript",
        "text": "Video giải Mock Exam 3 kết hợp các tác vụ tài nguyên, ưu tiên, tạo Pod, scale và lưu đầu ra. Giảng viên liên tục quay lại kiểm tra yêu cầu sau khi chạy lệnh.",
        "points": [
          "Tách từng yêu cầu nhỏ trong câu",
          "Kiểm tra namespace trước thao tác",
          "Mở file kết quả để xác minh nội dung đã ghi"
        ],
        "code": ""
      }
    ]
  },
  {
    "id": 18,
    "title": "Bonus Section",
    "en": "Phần bổ sung",
    "intro": "Các mục cuối gồm kênh hỗ trợ, FAQ, mẹo thi, kết luận và nguồn cập nhật. Thông tin quy định thi phải đối chiếu Linux Foundation trước ngày dự thi.",
    "goals": [
      "Biết nơi tìm hỗ trợ",
      "Đánh giá mức sẵn sàng qua thực hành",
      "Theo dõi cập nhật từ nguồn chính thức"
    ],
    "lessons": [
      {
        "id": 14355432,
        "ref": "307",
        "chapter": 18,
        "title": "Bonus Lecture",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/14355432#overview",
        "status": "article",
        "text": "Bài bonus giới thiệu các kênh hỗ trợ và cộng đồng của KodeKloud. Khi hỏi kỹ thuật nên mô tả bối cảnh, lỗi và các bước đã thử để người khác có thể hỗ trợ.",
        "points": [
          "Không đăng credential hoặc dữ liệu nhạy cảm",
          "Dùng đúng kênh cho câu hỏi kỹ thuật hay hỗ trợ tài khoản"
        ],
        "code": ""
      },
      {
        "id": 15717196,
        "ref": "308",
        "chapter": 18,
        "title": "Frequently Asked Questions!",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/15717196#overview",
        "status": "article",
        "text": "FAQ khuyên đánh giá độ sẵn sàng bằng cách làm lại lab và mock exam mà không dựa vào gợi ý. Các thông tin thương mại, thời hạn và quy định thi trong bài đọc cần được kiểm tra lại trên nguồn chính thức.",
        "points": [
          "Không coi hoàn thành video là đã đủ năng lực",
          "Dùng kết quả tự làm để chọn chủ đề ôn lại",
          "Không lưu mã giảm giá hoặc thông tin đăng ký vào source"
        ],
        "code": "",
        "update": {
          "text": "Mức đạt, thời hạn, retake và thời gian trả kết quả cần đọc ở quy định Linux Foundation hiện hành. Sổ tay không sao chép mã ưu đãi hoặc hứa kết quả thi.",
          "url": "https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad-cks"
        }
      },
      {
        "id": 16103293,
        "ref": "309",
        "chapter": 18,
        "title": "More Certification Tips!",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/16103293#overview",
        "status": "article",
        "text": "Mục này dẫn tới hướng dẫn thi chính thức của Linux Foundation. Dùng để đọc quy định, cách chuẩn bị và lưu ý cho môi trường thi trước khi đăng ký hoặc dự thi.",
        "points": [
          "Quy định hiện hành có thể thay đổi",
          "Ưu tiên trang chính thức thay cho lời nhắc cũ trong video"
        ],
        "code": ""
      },
      {
        "id": 37772362,
        "ref": "310",
        "chapter": 18,
        "title": "Conclusion",
        "duration": "3min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/37772362#overview",
        "status": "transcript",
        "text": "Giảng viên kết thúc khóa, khuyến khích tiếp tục luyện các bài thực hành và mock exam. Các khóa khác được giới thiệu như hướng học tiếp theo sau nền tảng CKA.",
        "points": [
          "Ôn theo lỗi đã gặp trong lab",
          "Luyện thao tác độc lập trước ngày thi"
        ],
        "code": ""
      },
      {
        "id": 44020480,
        "ref": "311",
        "chapter": 18,
        "title": "What's Next?",
        "duration": "9min",
        "kind": "video",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/44020480#overview",
        "status": "transcript",
        "text": "Video giới thiệu chuỗi mock exam mở rộng và thao tác trong môi trường luyện tập. Nó nhắc chú ý node/context lúc mở terminal mới và ghi đúng đầu ra mà đề yêu cầu.",
        "points": [
          "Đọc môi trường của từng đề",
          "Mở terminal mới cần xác nhận lại nơi đang thao tác",
          "Nguồn mở rộng không thay các bài lab chưa hoàn tất"
        ],
        "code": ""
      },
      {
        "id": 41933610,
        "ref": "312",
        "chapter": 18,
        "title": "Kubernetes Update and Project Videos - Your Essential Guide",
        "duration": "1min",
        "kind": "article",
        "sourceUrl": "https://ibmcsr.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/learn/lecture/41933610#overview",
        "status": "article",
        "text": "Trang cuối tổng hợp video cập nhật Kubernetes và tìm hiểu dự án như SIG và KEP. Đây là các nguồn học thêm, không phải một video giảng toàn bộ nội dung cập nhật ở mục này.",
        "points": [
          "Xem release note theo bản cụ thể",
          "SIG tổ chức lĩnh vực phát triển",
          "KEP ghi lại đề xuất cải tiến và quá trình thiết kế"
        ],
        "code": ""
      }
    ]
  }
];
const LESSONS = CHAPTERS.flatMap(c=>c.lessons);
