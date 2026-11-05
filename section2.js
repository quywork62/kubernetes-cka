/* Section 2: ghi chú sâu độc lập; không chứa transcript đầy đủ. */
const RICH_LESSONS = {
  "6": {
    "lead": "Phần mở đầu của Core Concepts: biết mình sắp học gì và mỗi nhóm bài giải quyết câu hỏi nào.",
    "sections": [
      {
        "title": "Lộ trình giảng viên giới thiệu",
        "origin": "source",
        "paragraphs": [
          "Giảng viên bắt đầu bằng kiến trúc cụm, sau đó tới các API primitive như Pod, ReplicaSet, Deployment và Service. Bạn sẽ nhìn từ hệ thống quản lý ở cấp cụm xuống tài nguyên mô tả ứng dụng, thay vì học các lệnh rời rạc.",
          "Nếu đã học Kubernetes cho người mới hoặc CKAD, một số nội dung sẽ lặp lại. Giảng viên gợi ý có thể ôn nhanh phần đã biết, nhưng vẫn dùng các bài thực hành để kiểm tra năng lực."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Bản đồ học của Section 2",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "6–17",
            "Kiến trúc và thành phần",
            "Ai lưu trạng thái, ai chọn node, ai thực thi?"
          ],
          [
            "18–25",
            "Pod, YAML và cổng lab",
            "Tạo ứng dụng tối thiểu và đọc trạng thái."
          ],
          [
            "26–32",
            "ReplicaSet và Deployment",
            "Duy trì bản sao và quản lý triển khai."
          ],
          [
            "33–40",
            "Service và Namespace",
            "Truy cập nhóm Pod và tổ chức tài nguyên."
          ],
          [
            "41–49",
            "Cách quản lý và tra cứu",
            "Imperative, declarative, explain và apply."
          ]
        ],
        "headers": [
          "Lecture",
          "Nhóm chủ đề",
          "Câu hỏi trọng tâm"
        ],
        "flow": []
      },
      {
        "title": "Chuẩn bị trước khi đi tiếp",
        "origin": "practice",
        "paragraphs": [
          "Dùng cluster lab riêng và xác nhận context trước khi chạy lệnh. Tên namespace cka-core-demo trong các ví dụ là tên do sổ tay đặt, không phải tên bắt buộc trong lab của khóa."
        ],
        "bullets": [
          "Đọc ghi chú rồi mở bài gốc để theo dõi đủ minh họa.",
          "Làm lab trước khi xem video lời giải; ghi lại điều bạn chưa giải thích được.",
          "Các ví dụ không được chạy sẵn trên cụm của bạn; đầu ra mô tả chỉ là tiêu chí kiểm tra."
        ],
        "code": "kubectl config current-context\nkubectl get nodes -o wide\nkubectl version --client",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "8": {
    "lead": "Chọn đúng công cụ khi cụm dùng containerd: kubectl quản lý tài nguyên Kubernetes, còn crictl giúp kiểm tra runtime trên node.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Docker là một bộ công cụ gồm CLI, API, khả năng build image và lớp runtime. Containerd có thể chạy độc lập với Docker Engine. Vì vậy việc một node không có lệnh docker không đồng nghĩa nó không chạy được container.",
          "CRI là giao diện kubelet dùng để làm việc với runtime tương thích. OCI mô tả các tiêu chuẩn image/runtime; hai khái niệm liên quan nhưng không phải cùng một giao diện. Đừng suy rằng chỉ có image chuẩn là runtime tự động triển khai đủ CRI."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Video kể lại sự chuyển dịch từ Docker qua dockershim tới runtime dùng CRI, rồi so sánh ba CLI. ctr làm việc ở mức thấp với containerd; nerdctl cung cấp trải nghiệm gần Docker CLI; crictl nhìn runtime theo mô hình của Kubernetes.",
          "Giảng viên nhắc thao tác liệt kê image, container, xem log và kiểm tra Pod sandbox bằng crictl. Nội dung không có nghĩa bạn nên tạo container bằng crictl để thay thế việc khai báo Pod."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Đọc tình huống thực tế: kubectl lỗi, ứng dụng vẫn chạy",
        "origin": "practice",
        "paragraphs": [
          "Giả sử laptop không gọi được API server nhưng người dùng vẫn truy cập ứng dụng. Không có mâu thuẫn: các container có thể tiếp tục chạy trên node trong khi đường điều khiển bị sự cố. Dùng crictl trên đúng node để quan sát runtime là một hướng kiểm tra; chạy crictl ở laptop không có quyền truy cập socket node thì chưa giải quyết được gì.",
          "Nếu crictl ps trống trong khi bạn tin Pod đang có trên node, kiểm tra đúng endpoint, đúng node và tùy chọn -a trước. Đừng tạo container mới bằng công cụ mức thấp để bù số lượng mà không đưa vào trạng thái Kubernetes."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "kubectl",
            "Đối tượng API",
            "Pod, Deployment, Service, trạng thái qua API."
          ],
          [
            "crictl",
            "Runtime qua CRI",
            "Container/sandbox trên node cần kiểm tra."
          ],
          [
            "nerdctl",
            "Containerd",
            "Thao tác container theo trải nghiệm gần Docker."
          ],
          [
            "ctr",
            "Containerd mức thấp",
            "Thăm dò/debug, không phải giao diện quản lý workload Kubernetes."
          ]
        ],
        "headers": [
          "Công cụ",
          "Làm việc với",
          "Bạn đang nhìn gì?"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Trên một node lab đã có crictl, xem help và kiểm tra runtime endpoint trước. Những lệnh dưới là quan sát, không tạo workload. Nếu runtime đã có container, chọn ID thực từ ps trước khi đọc log."
        ],
        "bullets": [
          "Phân biệt container ID với Pod sandbox ID.",
          "Nếu crictl không kết nối được, kiểm tra endpoint và quyền socket; không kết luận node không có container.",
          "Container trong Kubernetes nên được tạo qua API để kubelet/controller quản lý."
        ],
        "code": "crictl --version\ncrictl info\ncrictl pods\ncrictl ps -a\ncrictl images\n# Thay ID bằng container thật trên node:\ncrictl logs <container-id>",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Lệnh ctr/nerdctl không thay thế kubectl; namespace containerd không phải namespace Kubernetes.",
          "Không giả định crictl đã được cài trên mọi máy quản trị. Nó cần truy cập runtime của node.",
          "Tên bị phụ đề tự động nhận sai như “node control” trong ngữ cảnh này được chuẩn hóa thành nerdctl."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Dockershim tích hợp bị loại bỏ từ Kubernetes v1.24. Docker Engine vẫn có thể được tích hợp qua cri-dockerd; không nên diễn đạt việc bỏ dockershim thành mọi cách dùng Docker đều bị cấm."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/setup/production-environment/container-runtimes/"
      }
    ],
    "edition": "section2-detailed-1",
    "quiz": {
      "question": "Muốn xem container trên node dùng CRI khi API lỗi, công cụ nào hợp vai trò nhất?",
      "options": [
        "kubectl create deployment",
        "crictl với runtime endpoint đúng",
        "Tạo thêm container bằng ctr"
      ],
      "correct": 1,
      "explanation": "crictl kiểm tra runtime theo CRI; nó không thay controller tạo workload."
    }
  },
  "9": {
    "lead": "Bỏ dockershim không có nghĩa phải bỏ Docker khỏi quy trình phát triển hoặc build lại mọi image.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Cần tách ba việc: xây image, phân phối image và chạy container trong cluster. Bạn có thể build bằng Docker, lưu vào registry rồi để containerd lấy image và chạy workload. Công cụ build không quyết định runtime phải giống hệt nó.",
          "Kubernetes cần runtime giao tiếp được qua CRI. Docker CLI và Docker Engine là những thành phần riêng; việc bỏ lớp tích hợp cũ trong kubelet không làm Docker CLI biến mất khỏi máy lập trình viên."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Giảng viên giải đáp câu hỏi vì sao các phần sau vẫn dùng Docker để minh họa. Khi học một khái niệm container trước rồi mới đưa sang Kubernetes, Docker vẫn là một ví dụ dễ hiểu. Một số thao tác có thể chuyển sang nerdctl nếu môi trường chỉ có containerd."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Tự vẽ ranh giới build, registry và runtime",
        "origin": "practice",
        "paragraphs": [
          "Nếu một image không pull được trên node containerd, đừng lập tức kết luận phải build lại bằng containerd. Đọc lỗi trước: registry không truy cập được, tag không tồn tại hoặc credential sai đều là nguyên nhân độc lập với công cụ build.",
          "Khi theo các phần Docker của khóa để hiểu CMD, volume hoặc network namespace, hãy nắm khái niệm rồi đối chiếu cách biểu diễn trong Kubernetes. Không chép mọi cờ docker run thành một thuộc tính Pod theo tên gần giống."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Máy phát triển",
            "Build image",
            "Docker hoặc công cụ build khác tạo image."
          ],
          [
            "Registry",
            "Phân phối image",
            "Lưu image/tag/digest để node lấy về."
          ],
          [
            "Node của cluster",
            "Chạy image",
            "Kubelet làm việc với runtime tương thích."
          ]
        ],
        "headers": [
          "Vị trí",
          "Công việc",
          "Điểm cần hiểu"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Bắt đầu bằng thông tin runtime mà node báo qua API. Đây là quan sát cluster, không yêu cầu cài Docker lên node."
        ],
        "bullets": [
          "Đọc containerRuntimeVersion rồi so sánh với runtime thực của node.",
          "Nếu máy bạn có docker nhưng node dùng containerd, đó không phải mâu thuẫn."
        ],
        "code": "kubectl get nodes -o wide\nkubectl get node <ten-node> -o jsonpath='{.status.nodeInfo.containerRuntimeVersion}{\"\\n\"}'",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Không đổi tên lệnh Docker sang nerdctl một cách máy móc cho mọi tùy chọn và môi trường.",
          "Không cài Docker lên node chỉ để làm một ví dụ kubectl.",
          "Docker image không phải Kubernetes Pod; Pod là đối tượng điều phối sử dụng image."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Tham khảo mục runtime để phân biệt containerd, CRI-O và Docker Engine qua cri-dockerd. Mẫu runtime cần khớp cấu hình kubelet của cụm."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/setup/production-environment/container-runtimes/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "10": {
    "lead": "Hiểu etcd như kho key/value trước khi đọc vai trò của nó trong Kubernetes.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Một key xác định một value để lưu hoặc lấy lại. Khác với cách nghĩ theo hàng/cột và truy vấn quan hệ, bài này tập trung thao tác đọc/ghi bằng key. Value có thể chứa dữ liệu có cấu trúc chứ không nhất thiết chỉ là một từ.",
          "etcd là dịch vụ lưu trữ, etcdctl là client gửi yêu cầu tới dịch vụ. Cài client chưa làm xuất hiện server. Phần distributed, Raft và HA được giảng viên để lại cho phần sau, không nên đoán các bảo đảm từ một ví dụ chạy đơn lẻ."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Video so sánh bảng thông tin người có trường lương hoặc điểm học tập với document và key/value. Mục đích là giải thích các mô hình lưu dữ liệu; đó không phải kết luận mọi cơ sở dữ liệu quan hệ luôn kém linh hoạt.",
          "Sau phần khái niệm, giảng viên giới thiệu chạy binary etcd và dùng client để ghi rồi lấy lại một key; endpoint client thường dùng cổng 2379."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Đọc kết quả client theo từng lớp",
        "origin": "practice",
        "paragraphs": [
          "Hai endpoint của hai cụm etcd khác nhau có thể cùng dùng một key nhưng giá trị khác. Luôn xác nhận đích khi thực hành. Ví dụ key/value nhỏ giúp hiểu API, chưa đại diện cho việc duy trì database Kubernetes thật.",
          "Khi học xong, bạn cần nói được: client nào đã ghi, server nào nhận và key nào được dùng. Nếu chỉ nhớ hai từ put/get mà không biết endpoint, rất dễ thao tác sai môi trường."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Không kết nối TCP",
            "Server/địa chỉ/cổng",
            "Client chưa nói chuyện được với server."
          ],
          [
            "Lỗi x509/TLS",
            "Chuỗi tin cậy hoặc danh tính",
            "Kết nối đã tới bước kiểm tra bảo mật."
          ],
          [
            "Không có key trả về",
            "Dữ liệu/đường dẫn/cluster",
            "Không tự chứng minh server mất dữ liệu."
          ],
          [
            "Đọc được key và value",
            "Thao tác đã hoàn tất",
            "Chưa chứng minh HA hoặc quy trình phục hồi."
          ]
        ],
        "headers": [
          "Dấu hiệu",
          "Lớp kiểm tra",
          "Không nên kết luận nhầm"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Chỉ thử put/get dưới đây trên etcd học tập độc lập đã được chuẩn bị, không phải etcd của cluster Kubernetes. Kiểm tra endpoint đúng trước khi ghi key."
        ],
        "bullets": [
          "Lệnh get phải trả về key vừa chọn và value web.",
          "Nếu connection refused, kiểm tra server/endpoint trước khi đổi cú pháp key.",
          "Server có TLS cần HTTPS và các chứng chỉ đúng; ví dụ HTTP này chỉ cho lab độc lập không bật TLS."
        ],
        "code": "etcdctl version\n# Endpoint lab độc lập, thay bằng cấu hình thực nếu khác:\netcdctl --endpoints=http://127.0.0.1:2379 put cka-demo/name web\netcdctl --endpoints=http://127.0.0.1:2379 get cka-demo/name",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Không dùng lệnh set của tài liệu etcdctl v2 cho bài tập v3.",
          "Đừng coi một etcd process là đã có HA.",
          "Không thử ghi tùy ý vào key Kubernetes để “sửa nhanh” tài nguyên."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Tài liệu etcd v3 sử dụng put/get và cú pháp endpoint hiện hành. Hãy đọc version/help thay vì giả định client hiện nay mặc định API v2 như một số tài liệu cũ."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://etcd.io/docs/v3.6/dev-guide/interacting_v3/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "11": {
    "lead": "etcd giữ trạng thái Kubernetes; phần lớn thao tác của bạn phải đi qua API server.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Dữ liệu về Pod, Node, cấu hình và các đối tượng khác được lưu trong etcd. Khi kubectl đọc đối tượng, nó làm việc với API server, không trực tiếp mở database. Các thành phần điều khiển cập nhật trạng thái thông qua API.",
          "Cách chạy etcd phụ thuộc cách dựng cluster. Video đối chiếu cài binary dưới systemd với kubeadm triển khai etcd dưới dạng static Pod. Mục tiêu ở đây là biết tìm cấu hình, chưa phải tự sửa cấu hình HA hoặc chứng chỉ."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Trong ví dụ kubeadm, giảng viên tìm etcd ở kube-system và giới thiệu cấu trúc key dưới /registry. Với nhiều control plane, các thành viên etcd còn cần cấu hình để biết nhau; phần HA được học sau."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Phân biệt trạng thái cluster với dữ liệu ứng dụng",
        "origin": "practice",
        "paragraphs": [
          "Khi khai báo một Deployment cho database, thông tin Deployment/Pod/PVC nằm trong hệ thống quản lý trạng thái. Các bản ghi nghiệp vụ mà database ghi lên volume là lớp dữ liệu khác. Khôi phục snapshot etcd không tự lấy lại mọi file đã mất trên backend lưu trữ.",
          "Trong môi trường kubeadm, file manifest giúp tìm data-dir và certificate thực tế; trên managed cluster, nhà cung cấp có thể quản lý lớp này. Bài tập đọc kiến trúc không yêu cầu giành quyền vào etcd hoặc bỏ qua bảo vệ của nền tảng."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "API server endpoint",
            "kubectl và các client API dùng",
            "Đọc/ghi đối tượng Kubernetes."
          ],
          [
            "etcd client endpoint",
            "API server và client etcd được phép",
            "Giao tiếp kho dữ liệu."
          ],
          [
            "etcd peer endpoint",
            "Các thành viên etcd dùng với nhau",
            "Đồng thuận giữa thành viên, không phải URL kubectl."
          ]
        ],
        "headers": [
          "Địa chỉ",
          "Bên sử dụng",
          "Vai trò"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Quan sát từ Kubernetes trước. Trên cụm được quản lý, bạn có thể không nhìn thấy etcd; không tìm thấy Pod không chứng minh database đã mất."
        ],
        "bullets": [
          "Tìm command/args, volume mounts và các đường dẫn certificate được cấu hình.",
          "Phân biệt client endpoint của etcd với địa chỉ API server mà kubectl gọi.",
          "Không xuất giá trị Secret hoặc toàn bộ database để ghi vào source của sổ tay."
        ],
        "code": "kubectl get pods -n kube-system -o wide\n# Nếu có Pod etcd và được cấp quyền:\nkubectl describe pod <ten-pod-etcd> -n kube-system",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "etcd không chứa toàn bộ file dữ liệu nghiệp vụ trên PV.",
          "Không đặt cứng tên etcd-master: tên Pod thường gắn với node và có thể khác.",
          "Một cluster không cho truy cập control plane vẫn có thể hoạt động bình thường."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "--listen-client-urls xác định địa chỉ lắng nghe; --advertise-client-urls là địa chỉ quảng bá cho client. Hai tùy chọn không đồng nghĩa, dù ví dụ đơn giản có thể đặt cùng giá trị."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://etcd.io/docs/v3.6/op-guide/configuration/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "12": {
    "lead": "Bài đọc bổ sung về etcdctl: đọc đúng phiên bản API, endpoint và chứng chỉ trước khi dùng ví dụ.",
    "sections": [
      {
        "title": "Bài đọc gốc muốn giải thích gì?",
        "origin": "source",
        "paragraphs": [
          "Tài liệu đặt các lệnh etcdctl v2 cạnh v3 để giải thích vì sao dùng nhầm phiên bản sẽ không nhận ra lệnh. Nó cũng minh họa rằng client phải có certificate khi etcd bật TLS, không chỉ thêm ETCDCTL_API.",
          "Tên Pod, đường dẫn certificate và client trong mẫu phụ thuộc cluster của giảng viên. Không dùng chúng như đường dẫn bắt buộc trên mọi cụm."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Bảng đối chiếu để tránh học lẫn",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Ví dụ v2 cũ",
            "set, mk, mkdir, cluster-health",
            "Chỉ nhận diện tài liệu cũ."
          ],
          [
            "Nhóm lệnh v3",
            "put, get, endpoint health",
            "Xem version/help của client hiện có."
          ],
          [
            "Endpoint",
            "HTTPS và port của server",
            "Không trỏ nhầm API server port 6443."
          ],
          [
            "Credential",
            "CA, cert và key của client được phép",
            "Dùng file thật trong lab; không công khai key."
          ]
        ],
        "headers": [
          "Thành phần",
          "Điểm nhận diện",
          "Cách dùng"
        ],
        "flow": []
      },
      {
        "title": "Mẫu kiểm tra kết nối · tự biên soạn",
        "origin": "practice",
        "paragraphs": [
          "Dưới đây là mẫu không ghi dữ liệu. Cần thay toàn bộ placeholder và dùng client có quyền truy cập etcd. Không chép dấu <…> nguyên xi vào shell."
        ],
        "bullets": [
          "Phân biệt lỗi kết nối, lỗi TLS và lỗi quyền truy cập.",
          "Lệnh health không chứng minh backup/restore đã được chuẩn bị.",
          "Không cần đọc key nhạy cảm để kiểm tra client kết nối được."
        ],
        "code": "etcdctl version\netcdctl --endpoints=https://<etcd-host>:2379 \\\n  --cacert=<duong-dan-ca.crt> \\\n  --cert=<duong-dan-client.crt> \\\n  --key=<duong-dan-client.key> \\\n  endpoint health",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Cập nhật phiên bản",
        "origin": "update",
        "paragraphs": [
          "Không suy từ câu mặc định API v2 trong bài đọc rằng etcdctl mới cũng như vậy. Dùng tài liệu đúng phiên bản etcd và xác nhận bằng version/help."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://etcd.io/docs/v3.6/dev-guide/interacting_v3/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "13": {
    "lead": "API server là nơi các thành phần trao đổi trạng thái, không phải tiến trình trực tiếp chạy container.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "kubectl gửi yêu cầu API; API server xử lý xác thực, phân quyền, admission và kiểm tra đối tượng trước khi lưu thay đổi. Khi nhận phản hồi created, bạn biết API đã nhận tài nguyên, chưa thể kết luận ứng dụng đã sẵn sàng.",
          "Scheduler quan sát Pod chưa gán node, ghi kết quả gán qua API; kubelet thực hiện trên node và cập nhật trạng thái. Trong luồng quản lý Kubernetes thông thường, các thành phần này không tự sửa key trong etcd."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Video đi theo yêu cầu tạo Pod để nối API server, etcd, scheduler và kubelet. Sau đó giảng viên giới thiệu các nhóm tham số của kube-apiserver, đặc biệt etcd servers và chứng chỉ, rồi chỉ nơi xem cấu hình theo kiểu cài đặt."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Phân loại lỗi trước khi sửa",
        "origin": "practice",
        "paragraphs": [
          "Ví dụ một lệnh get pods bị Forbidden không phải lý do sửa cấu hình etcd hoặc restart API server. Trước hết xác nhận context và user, rồi kiểm tra quyền phù hợp. Cách phân lớp giúp giảm các thay đổi không liên quan.",
          "Phản hồi created là xác nhận ở lớp API. Muốn biết workload chạy, phải đọc tiếp trạng thái Pod, Events và khả năng ứng dụng trả lời. Hai bước kiểm chứng này giải quyết hai câu hỏi khác nhau."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Không kết nối/timeout",
            "Mạng, endpoint, server",
            "Yêu cầu có tới API được không?"
          ],
          [
            "Lỗi certificate",
            "TLS, CA, tên máy, thời gian",
            "Client có tin và xác minh đúng server không?"
          ],
          [
            "Unauthorized",
            "Credential/xác thực",
            "Bạn gửi danh tính hợp lệ chưa?"
          ],
          [
            "Forbidden",
            "Quyền thực hiện",
            "Danh tính có được làm thao tác đó không?"
          ],
          [
            "Invalid hoặc lỗi admission",
            "Spec/chính sách",
            "Đối tượng đã thỏa schema và rule chưa?"
          ]
        ],
        "headers": [
          "Dấu hiệu",
          "Nhóm kiểm tra",
          "Câu hỏi đầu tiên"
        ],
        "flow": []
      },
      {
        "title": "Theo dấu luồng hoạt động",
        "origin": "practice",
        "paragraphs": [
          "Sơ đồ rút gọn để ôn lại chủ đề. Bấm từng bước; đây là phần giải thích bổ sung, không mô phỏng cụm Kubernetes thật."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Nhận yêu cầu",
            "kubectl gửi đối tượng tới API server."
          ],
          [
            "Kiểm tra và lưu",
            "Sau các kiểm tra cần thiết, trạng thái được lưu vào etcd."
          ],
          [
            "Điều phối",
            "Scheduler/controller quan sát thay đổi qua API."
          ],
          [
            "Thực thi và báo cáo",
            "Kubelet/runtime thực thi rồi trạng thái quay lại API."
          ]
        ]
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Quan sát API và control plane từ quyền bạn đang có; không sửa static manifest trong bài tập này. Đầu ra phụ thuộc cluster tự quản hoặc managed."
        ],
        "bullets": [
          "Đọc API endpoint từ kubeconfig/cluster-info, không đoán địa chỉ etcd.",
          "Chỉ khi có quyền host control plane mới kiểm tra manifest thực trên máy đó.",
          "Nếu truy vấn /version thành công nhưng thao tác tài nguyên Forbidden, cần xem quyền, không mặc định API server hỏng."
        ],
        "code": "kubectl cluster-info\nkubectl get --raw=/version\nkubectl get pods -n kube-system -l component=kube-apiserver -o wide\n# Cụm kubeadm, khi có Pod phù hợp:\nkubectl describe pod <ten-api-server-pod> -n kube-system",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Connection refused khác TLS error và khác Forbidden.",
          "Static manifest dưới /etc/kubernetes/manifests là quy ước phổ biến của kubeadm, không phải đường dẫn của mọi mô hình cài đặt.",
          "Không xóa hoặc thay certificate chỉ vì chưa hiểu tham số."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Kubelet theo dõi Pod được giao và chủ động cập nhật trạng thái về API. Đọc mô tả “API truyền chỉ thị” như mô hình tổng quan, không phải API server SSH tới từng node để chạy lệnh."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/concepts/overview/components/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "14": {
    "lead": "Controller là vòng quan sát và điều chỉnh; controller-manager gom nhiều vòng điều khiển vào một tiến trình.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Thay vì chạy một lần rồi kết thúc, controller liên tục đối chiếu trạng thái mong muốn và trạng thái thực. Khi thấy lệch, nó yêu cầu thay đổi qua API. Đây là lý do xóa một Pod thuộc bộ điều khiển có thể dẫn tới một Pod mới được tạo.",
          "Node controller và các controller workload không có cùng trách nhiệm. Một bên quan sát sức khỏe node; bên khác duy trì bản sao hoặc cấu trúc đối tượng ứng dụng. Muốn hiểu “tự hồi phục”, cần biết controller nào sở hữu đối tượng."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Giảng viên tiếp tục ví dụ các phòng ban trên đội tàu: bộ phận theo dõi tàu và bộ phận theo dõi hàng. Video minh họa node mất liên lạc và nhóm bản sao bị thiếu, rồi tìm các tham số cấu hình controller-manager."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Thí nghiệm suy nghĩ: xóa một Pod sẽ xảy ra gì?",
        "origin": "practice",
        "paragraphs": [
          "Nếu làm thí nghiệm thật trong lab, chọn duy nhất một Pod của workload thử, ghi tên/UID trước rồi quan sát Pod thay thế. Thay đổi tên hoặc UID cho thấy đây là đối tượng mới; không diễn giải là container cũ đã được chuyển nguyên vẹn sang máy khác.",
          "Nếu Pod thay thế Pending, controller có thể đã hoàn thành phần tạo đối tượng nhưng scheduler không tìm được node. Xem đúng lớp giúp bạn không nhầm một vấn đề capacity thành controller-manager không chạy."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Pod độc lập",
            "Không có controller workload sở hữu",
            "Không tự có một Pod thay thế chỉ vì bị xóa."
          ],
          [
            "Pod của ReplicaSet",
            "ReplicaSet muốn đủ replicas",
            "Controller có thể tạo một Pod mới có UID khác."
          ],
          [
            "ReplicaSet của Deployment",
            "Deployment quản lý lớp triển khai",
            "Sửa tại nguồn template phù hợp, không tùy tiện sửa con."
          ]
        ],
        "headers": [
          "Tình huống",
          "Trạng thái mong muốn",
          "Điều cần dự đoán"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Trên cụm tự quản, quan sát controller-manager. Sau đó xem quan hệ Deployment, ReplicaSet và Pod trong namespace lab đã có workload."
        ],
        "bullets": [
          "OwnerReference cho biết đối tượng nào sở hữu Pod, không chỉ dựa vào tiền tố tên.",
          "Nếu replicas thiếu, kiểm tra cả Events và scheduler; controller tạo Pod không bảo đảm node đủ tài nguyên để chạy."
        ],
        "code": "kubectl get pods -n kube-system -l component=kube-controller-manager\nkubectl get deployment,rs,pods -n cka-core-demo\nkubectl get pod <ten-pod> -n cka-core-demo \\\n  -o jsonpath='{.metadata.ownerReferences}{\"\\n\"}'",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Standalone Pod không được ReplicaSet tự tạo lại chỉ vì “Kubernetes có self-healing”.",
          "ReplicaSet object và controller theo dõi nó là hai khái niệm khác nhau.",
          "Không học các mốc 5 giây/40 giây/5 phút trong video như quy luật cố định cho mọi phiên bản."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Thời gian phát hiện và xử lý node mất liên lạc còn phụ thuộc cấu hình, heartbeat, taint và toleration. Khi xử lý sự cố, đọc điều kiện và tham số thực thay vì dùng một con số duy nhất."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/concepts/architecture/nodes/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "15": {
    "lead": "Scheduler quyết định nơi đặt Pod bằng điều kiện và điểm ưu tiên; kubelet mới quản lý việc chạy tại node.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Pod chưa gán node được scheduler xem xét. Trước hết, filter loại node không đủ điều kiện, chẳng hạn thiếu tài nguyên request hoặc không đáp ứng ràng buộc. Sau đó scoring giúp chọn trong những node còn khả thi.",
          "CPU/memory request là dữ liệu cho quá trình chọn node. Nó khác mức sử dụng đo được tại một thời điểm. Một node đang ít tải vẫn có thể không nhận Pod nếu tài nguyên đã được request hoặc ràng buộc khác không phù hợp."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Video dùng Pod lớn và các node có mức tài nguyên khác nhau. Hai node bị loại, các node còn lại được xếp hạng; ví dụ minh họa ưu tiên node có nhiều CPU trống hơn. Giảng viên để các ràng buộc scheduling chi tiết cho phần tiếp theo."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Tách hai câu hỏi: đủ điều kiện hay được ưu tiên?",
        "origin": "practice",
        "paragraphs": [
          "Trong ví dụ CPU của giảng viên, một node bị loại vì không đáp ứng request không nên “được cứu” chỉ bằng điểm ưu tiên cao. Trước hết phải thỏa điều kiện bắt buộc. Taint, affinity và quota/tài nguyên còn thuộc các cơ chế khác cần đọc đúng vị trí.",
          "Khi nhìn thấy PodScheduled=True nhưng chưa Ready, chuyển hướng điều tra. Giữ nguyên giả thuyết thiếu scheduler ở giai đoạn đó có thể khiến bạn sửa một thành phần không liên quan."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Filter",
            "Node có thể nhận Pod không?",
            "Rớt điều kiện thì không vào bước so điểm của tập khả thi."
          ],
          [
            "Score",
            "Trong tập nhận được, node nào được ưu tiên?",
            "Điểm phụ thuộc plugin và cấu hình."
          ],
          [
            "Thực thi",
            "Pod trên node được giao có chạy không?",
            "Kubelet/runtime tiếp tục xử lý sau quyết định."
          ]
        ],
        "headers": [
          "Giai đoạn",
          "Câu hỏi",
          "Ý nghĩa"
        ],
        "flow": []
      },
      {
        "title": "Theo dấu luồng hoạt động",
        "origin": "practice",
        "paragraphs": [
          "Sơ đồ rút gọn để ôn lại chủ đề. Bấm từng bước; đây là phần giải thích bổ sung, không mô phỏng cụm Kubernetes thật."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Pod chờ",
            "Pod được tạo, chưa có node."
          ],
          [
            "Filter",
            "Loại node không thỏa các điều kiện."
          ],
          [
            "Score và chọn",
            "Xếp hạng các node khả thi; ghi kết quả qua API."
          ],
          [
            "Kubelet xử lý",
            "Node được giao bắt đầu chuẩn bị container."
          ]
        ]
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Tạo một Pod thử trong namespace lab, rồi xem node và Events. Không đặt nodeName để còn đi qua scheduler bình thường."
        ],
        "bullets": [
          "PodScheduled=True là bằng chứng đã gán node, không phải bằng chứng ứng dụng hoạt động.",
          "Nếu FailedScheduling, đọc lý do cụ thể như insufficient cpu hoặc taint.",
          "Nếu đã có Node và lỗi image pull, chuyển sang kiểm tra runtime/registry."
        ],
        "code": "kubectl get pods -n cka-core-demo -o wide\nkubectl describe pod web -n cka-core-demo\nkubectl get events -n cka-core-demo --sort-by=.metadata.creationTimestamp",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Scheduler không tạo container trực tiếp.",
          "Không phải lúc nào scheduler cũng chọn node trống nhất theo một chỉ số CPU.",
          "Pending chưa đủ thông tin để khẳng định scheduler không chạy."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Thang điểm và plugin phụ thuộc scheduling framework, profile và phiên bản. Con số 0–10 trong ví dụ là minh họa cũ; không biến nó thành API bảo đảm hiện tại."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/"
      }
    ],
    "edition": "section2-detailed-1",
    "quiz": {
      "question": "Pod đã có Node nhưng image pull lỗi. Bước nào đã qua?",
      "options": [
        "Bước chọn node của scheduler",
        "Mọi bước tới ứng dụng ready",
        "Chưa thể biết scheduler đã chọn node"
      ],
      "correct": 0,
      "explanation": "Gán node đã có kết quả; cần đọc lỗi image/runtime tiếp theo."
    }
  },
  "16": {
    "lead": "Kubelet là agent của node: đăng ký, nhận workload, phối hợp runtime và báo tình trạng.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Kubelet làm việc tại từng node, không điều phối toàn cluster. Khi thấy Pod được giao cho node, nó dùng runtime để chuẩn bị container, theo dõi tình trạng và báo lại qua API. Một lỗi của kubelet có thể khiến một node mất khả năng quản lý workload dù API server vẫn truy cập được.",
          "Kubeadm hỗ trợ bootstrap control plane nhưng không có nghĩa bạn không phải chuẩn bị kubelet trên host. Kubelet thường chạy như service trên máy; nó cũng có thể quản lý static Pod theo file cấu hình."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Giảng viên ví kubelet như thuyền trưởng: đăng ký tham gia đội tàu, nhận hàng cần chở và gửi báo cáo. Phần cài đặt nhắc xem process kubelet và các tùy chọn đang chạy trước khi học TLS/bootstrap ở phần sau."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Đọc kubelet cùng trạng thái node và container",
        "origin": "practice",
        "paragraphs": [
          "Một node Ready có thể chứa container crash vì lỗi ứng dụng. Ngược lại, thấy một node không cập nhật heartbeat không cho bạn biết ngay mọi tiến trình trên host đã chết. Cần nối bằng chứng API với trạng thái host khi bạn có quyền truy cập.",
          "Với cluster do nền tảng quản lý, thao tác host và đường dẫn có thể bị giới hạn. Dùng cơ chế quan sát được cung cấp; không coi việc không có shell vào control plane là lỗi triển khai."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Node Ready/NotReady",
            "Thông tin cấp node",
            "Điều kiện có thể liên quan kubelet, runtime hoặc mạng."
          ],
          [
            "Pod phase/conditions",
            "Thông tin cấp Pod",
            "Pod được schedule và chuẩn bị tới đâu."
          ],
          [
            "Container state/restartCount",
            "Thông tin từng container",
            "Tiến trình chạy, chờ hay đã kết thúc và có restart không."
          ]
        ],
        "headers": [
          "Mức quan sát",
          "Bạn đang đọc gì?",
          "Tại sao cần tách"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Các lệnh systemctl/journalctl chạy trên node Linux dùng systemd và cần quyền phù hợp, không phải chạy bên trong Pod bất kỳ. Bắt đầu từ API để biết node nào gặp vấn đề."
        ],
        "bullets": [
          "Xem Conditions của node và lỗi trong journal tương ứng thời điểm.",
          "Đối chiếu runtime endpoint, cấu hình và certificate nếu kubelet không liên lạc được."
        ],
        "code": "kubectl get nodes\nkubectl describe node <ten-node>\n# Trên chính node đó, nếu dùng systemd:\nsystemctl status kubelet --no-pager\njournalctl -u kubelet -n 50 --no-pager",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Restart kubelet không thay thế việc đọc nguyên nhân lỗi.",
          "Kubelet chạy trên control plane vẫn có thể quản lý container của control plane.",
          "Kubelet service khỏe không chứng minh mọi ứng dụng bên trong Pod đều khỏe."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Đọc runtime như một thành phần CRI tương thích; ví dụ Docker trong video cần đặt trong bối cảnh các bài 8–9."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/concepts/overview/components/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "17": {
    "lead": "kube-proxy phục vụ lớp Service; nó không phải toàn bộ giải pháp mạng Pod.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Pod có IP và có thể bị thay thế, nên ứng dụng không nên giữ cứng địa chỉ của một Pod backend. Service cung cấp đầu mối để trỏ tới tập backend phù hợp. Trong triển khai dùng kube-proxy, nó theo dõi Service và backend rồi thiết lập quy tắc chuyển tiếp trên node.",
          "Service ClusterIP không tương ứng một container ứng dụng riêng đang lắng nghe. Trường hợp dùng iptables trong video giúp thấy địa chỉ ảo được ánh xạ tới backend, nhưng chưa mô tả mọi implementation hiện nay."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Giảng viên đặt web ở node thứ nhất và DB ở node thứ hai. Khi DB đổi IP, tên Service vẫn làm đầu mối. Video tiếp tục dùng ví dụ luật iptables từ IP Service sang Pod và nhắc kubeadm thường triển khai kube-proxy bằng DaemonSet."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Một request thất bại có thể hỏng ở đâu?",
        "origin": "practice",
        "paragraphs": [
          "Bảng này là phương pháp tự luyện, không phải kết luận tự động cho mọi lỗi. Chẳng hạn policy hoặc TLS ứng dụng có thể làm kết quả phức tạp hơn. Mục tiêu là hình thành giả thuyết có kiểm chứng, không đổi iptables trên host ngay khi curl thất bại."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Tên không phân giải",
            "DNS/resolver",
            "Thử tên đầy đủ, xem namespace và DNS."
          ],
          [
            "Tên có IP nhưng không phản hồi",
            "Service/backend/mạng",
            "Đọc selector, EndpointSlice, targetPort."
          ],
          [
            "Pod IP gọi được, Service không được",
            "Lớp Service",
            "Kiểm tra dataplane Service thực tế."
          ],
          [
            "Pod IP cũng không gọi được",
            "Ứng dụng hoặc Pod network",
            "Kiểm tra tiến trình lắng nghe, route và policy."
          ]
        ],
        "headers": [
          "Triệu chứng",
          "Hướng khoanh vùng",
          "Cách phân biệt"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Xem thành phần và backend mà không sửa rule mạng trên node. Tên Service dưới đây được tạo ở bài thực hành Service; nếu chưa có thì làm bài 34 trước."
        ],
        "bullets": [
          "Đối chiếu selector Service và label Pod.",
          "EndpointSlice giúp tìm địa chỉ backend và trạng thái ready.",
          "Không có kube-proxy thì kiểm tra network implementation trước khi kết luận cụm thiếu thành phần."
        ],
        "code": "kubectl get ds -n kube-system\nkubectl get svc web-svc -n cka-core-demo -o yaml\nkubectl get endpointslices -n cka-core-demo \\\n  -l kubernetes.io/service-name=web-svc",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Port-forward tới Pod không kiểm chứng đường qua Service.",
          "CNI/Pod network khác với Service proxy.",
          "Mở containerPort trong YAML không tạo Service hoặc rule NodePort."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Có giải pháp mạng thay thế chức năng kube-proxy. Dùng EndpointSlice để quan sát backend hiện hành; đừng chỉ dựa vào mô tả iptables hoặc danh sách Endpoints trong bài cũ."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/concepts/services-networking/service/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "18": {
    "lead": "Pod là đơn vị triển khai nhỏ nhất của Kubernetes, không phải cách gọi khác của một container.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Thông thường một Pod chứa một container ứng dụng; Pod cũng có thể gồm nhiều container phối hợp chặt. Các container trong cùng Pod dùng chung network namespace nên có thể gọi nhau qua localhost; volume chỉ được chia sẻ khi bạn khai báo và mount phù hợp.",
          "Khi muốn tăng số bản sao phục vụ người dùng, ta tăng số Pod của ứng dụng. Không thêm nhiều bản sao web giống nhau vào một Pod để thay thế scale ngang. Các Pod có thể nằm cùng node hoặc khác node tùy tài nguyên và ràng buộc."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Video bắt đầu với một ứng dụng đã được build thành image và registry đã có image đó. Khi người dùng tăng, thêm Pod; khi một node không còn khả năng chứa, cụm cần tài nguyên node khác.",
          "Ví dụ helper xử lý dữ liệu/file đi cùng web giải thích lợi ích đóng gói các tiến trình có liên hệ chặt trong một Pod, thay vì tự ghép network và volume bằng các lệnh Docker rời rạc."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Pod, container và replica nhìn giống nhau nhưng không đếm cùng thứ",
        "origin": "practice",
        "paragraphs": [
          "Nếu bảng get pods hiện một dòng với READY 2/2, đó vẫn là một Pod có hai container ready, không phải hai Pod. Nếu có ba dòng mỗi dòng 1/1, bạn đang có ba Pod, mỗi Pod một container ready.",
          "Khi một Pod có helper, cần khai báo rõ volume chung để chia file. Chung network namespace cho phép localhost nhưng không tự sao chép mọi thư mục giữa filesystem của các container."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Pod",
            "Đơn vị Kubernetes",
            "Có metadata, spec, trạng thái và UID."
          ],
          [
            "Container",
            "Tiến trình được đóng gói",
            "Một Pod có thể có nhiều container."
          ],
          [
            "Replica",
            "Một bản sao workload",
            "Thường thể hiện bằng nhiều Pod dưới controller."
          ]
        ],
        "headers": [
          "Khái niệm",
          "Mức quản lý",
          "Ví dụ cần nhớ"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Tạo một Pod độc lập chỉ trong namespace lab. Sau đó quan sát trước khi học controller ở bài sau."
        ],
        "bullets": [
          "Nếu namespace đã có, không cần tạo lại.",
          "READY 1/1 cho biết số container ready trong Pod; không phải 1 replica của Deployment.",
          "Lệnh run tạo Pod chưa expose ứng dụng ra ngoài cluster."
        ],
        "code": "kubectl create namespace cka-core-demo\nkubectl run web --image=nginx:stable -n cka-core-demo\nkubectl get pods -n cka-core-demo -o wide\nkubectl describe pod web -n cka-core-demo",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Pod không phải VM có nhiều ứng dụng độc lập tùy ý.",
          "Container restart tại chỗ khác với xóa Pod rồi có Pod thay thế.",
          "Pod độc lập bị xóa không có ReplicaSet tự tái tạo."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Một container lỗi không mặc nhiên khiến mọi container trong cùng Pod đều restart. Đọc trạng thái từng container và restartPolicy; đừng hiểu “chung vòng đời” là mọi tiến trình luôn restart đồng thời."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/"
      }
    ],
    "edition": "section2-detailed-1",
    "quiz": {
      "question": "Muốn scale web từ một lên ba bản sao thường làm gì?",
      "options": [
        "Thêm ba web container vào cùng Pod",
        "Tăng số Pod của workload",
        "Đổi namespace"
      ],
      "correct": 1,
      "explanation": "Scale ngang thường tăng số Pod, giữ đơn vị triển khai rõ ràng."
    }
  },
  "19": {
    "lead": "Đọc YAML theo cấu trúc đối tượng, không chỉ chép đúng số dấu cách.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "apiVersion chọn nhóm/phiên bản API; kind chọn loại đối tượng; metadata xác định tên, namespace, labels; spec mô tả điều bạn muốn Kubernetes thực hiện. Đây là cách tổ chức manifest được giới thiệu trong bài.",
          "metadata và spec có cấu trúc được API quy định. labels cho phép các cặp nhãn theo quy tắc Kubernetes, nhưng không có nghĩa bạn tự thêm trường bất kỳ dưới metadata. containers là danh sách vì một Pod có thể chứa nhiều container."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Giảng viên đặt name và labels cùng cấp dưới metadata, rồi chỉ ra lỗi khi thụt labels thành con của name. Phần spec dùng dấu gạch đầu dòng cho từng container, bên trong có name và image.",
          "Ví dụ label frontend/backend/database cho thấy nhãn có ích về sau khi cần chọn nhóm Pod, không chỉ để ghi chú cho đẹp."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Đọc manifest từ ngoài vào trong",
        "origin": "practice",
        "paragraphs": [
          "Một lỗi thường thấy là đặt name của container cùng cấp với spec thay vì nằm trong phần tử danh sách. Đọc đường dẫn đầy đủ giúp thấy lỗi cấu trúc mà chỉ nhìn số dấu cách khó phát hiện.",
          "Sau tạo, get -o yaml có thêm các trường do server/controller quản lý. Đừng sao chép mọi status, UID hoặc resourceVersion vào manifest mong muốn mà không hiểu mục đích."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "metadata.name",
            "Đối tượng Pod",
            "Tên dùng trong kubectl get/describe pod."
          ],
          [
            "metadata.labels",
            "Nhãn của Pod",
            "Dùng chọn nhóm tài nguyên sau này."
          ],
          [
            "spec.containers",
            "Danh sách container",
            "Mỗi phần tử có name và image."
          ],
          [
            "containers[].name",
            "Tên bên trong Pod",
            "Cần khi chọn container để đọc log/exec."
          ],
          [
            "containers[].image",
            "Image cần lấy về",
            "Không bảo đảm tag tồn tại chỉ vì tên parse được."
          ]
        ],
        "headers": [
          "Đường dẫn",
          "Phạm vi",
          "Cách sử dụng"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Lưu file pod.yaml dưới đây, bảo đảm namespace cka-core-demo đã tồn tại. Đây là manifest tự biên soạn theo cấu trúc đã giải thích, không phải bản chép hình slide."
        ],
        "bullets": [
          "kind: Pod phân biệt hoa/thường.",
          "Tên container và tên Pod nằm ở hai cấp khác nhau, có thể giống hoặc khác.",
          "Đọc lỗi validation rồi đối chiếu đường dẫn trường; đừng sửa ngẫu nhiên indentation."
        ],
        "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: web\n  namespace: cka-core-demo\n  labels:\n    app: web\nspec:\n  containers:\n    - name: nginx\n      image: nginx:stable\n      ports:\n        - containerPort: 80\n\n# Kiểm tra với API trước khi tạo:\n# kubectl apply --dry-run=server -f pod.yaml\n# kubectl apply -f pod.yaml",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Dùng space, không dùng tab để thụt YAML.",
          "ports nằm trong container spec; labels của Pod nằm dưới metadata.",
          "YAML parse được chưa chắc đúng schema Kubernetes."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Các API beta cũ được video nhắc làm ví dụ không nên dùng máy móc. Pod dùng v1, ReplicaSet/Deployment hiện dùng apps/v1; kiểm tra tài nguyên được cụm hỗ trợ."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_api-resources/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "20": {
    "lead": "Demo tạo Pod từ file: soạn manifest, kiểm tra cấu trúc, gửi API rồi xác minh trạng thái.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Một file manifest giúp tái đọc và chỉnh cấu hình thay vì dựa vào lịch sử shell. Trong bài này, trọng tâm là cấu trúc YAML tối thiểu và quan sát Pod sau khi tạo, chưa phải triển khai ứng dụng production.",
          "Khi dùng create -f hoặc apply -f để tạo một đối tượng chưa tồn tại, cả hai có thể tạo thành công. Cách xử lý cập nhật và theo dõi cấu hình của chúng khác nhau; các bài 41 và 46 sẽ giải thích."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Theo phụ đề, giảng viên mở editor dòng lệnh, tạo bốn trường gốc rồi thêm label app và tier. Trong danh sách containers, ví dụ ban đầu nhắc thêm BusyBox nhưng bỏ lại để giữ một container NGINX.",
          "Sau khi lưu bằng editor, giảng viên xem nội dung file, tạo Pod, quan sát ContainerCreating chuyển Running và dùng describe để đọc chi tiết. Không cần tái hiện thao tác editor giống hệt mới hiểu mục tiêu của demo."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Tiêu chí đạt của demo YAML",
        "origin": "practice",
        "paragraphs": [
          "Tự kiểm tra theo ba lớp: file local đúng cấu trúc; API chấp nhận cấu hình; container chạy và đáp ứng mục tiêu. Nếu validation lỗi thì chưa tới bước chạy image. Nếu API tạo thành công nhưng Pod không ready, đọc runtime/container state thay vì sửa indentation mãi.",
          "Khi chỉnh một Pod đã tạo, không phải trường nào cũng cho cập nhật trực tiếp. Nếu cần tạo lại trong lab, trước hết xác định Pod có controller không và chấp nhận gián đoạn. Trong bài này chỉ cần tạo manifest ban đầu đúng; chưa cần học thuộc danh sách trường sửa được."
        ],
        "bullets": [
          "Dùng cat/editor xem lại file trước khi gửi.",
          "Sử dụng dry-run phía server để xem lỗi API khi có kết nối.",
          "Dùng get -o wide để xác định node.",
          "Describe để nối tên image và Events với triệu chứng."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Nếu Pod web từ bài trước đã tồn tại, dùng tên web-yaml riêng để dễ phân biệt. Lưu manifest rồi thực hiện các bước quan sát."
        ],
        "bullets": [
          "Events cho biết giai đoạn schedule, pull image và start container.",
          "Nếu không thấy trạng thái chuyển tiếp do quá nhanh, xem Events thay vì nghĩ bước đó không diễn ra.",
          "Pod Running không tự tạo URL cho người dùng bên ngoài."
        ],
        "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: web-yaml\n  namespace: cka-core-demo\n  labels:\n    app: web\nspec:\n  containers:\n    - name: nginx\n      image: nginx:stable\n      ports:\n        - containerPort: 80\n\n# Sau khi lưu vào pod-yaml.yaml:\n# kubectl apply --dry-run=server -f pod-yaml.yaml\n# kubectl apply -f pod-yaml.yaml\n# kubectl get pod web-yaml -n cka-core-demo -o wide\n# kubectl describe pod web-yaml -n cka-core-demo",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Thêm container bằng cách thêm phần tử danh sách, không lặp lại khóa containers ở cùng cấp.",
          "Pod image có tên hợp lệ về YAML vẫn có thể không tồn tại trong registry.",
          "Không dùng replace --force để né lỗi mà chưa hiểu nó xóa và tạo lại đối tượng."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Tập thói quen dry-run với API để kiểm tra manifest. Các trường được admission thêm hoặc môi trường từ chối vẫn phụ thuộc cụm, khác với việc chỉ parse YAML tại máy."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_apply/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "21": {
    "lead": "Học cách dùng cổng lab trước khi bắt đầu nhóm bài thực hành.",
    "sections": [
      {
        "title": "Quy trình giảng viên giới thiệu",
        "origin": "source",
        "paragraphs": [
          "Lab có thể yêu cầu quan sát tài nguyên đã triển khai hoặc thay đổi cấu hình theo thông số. Chỉ tạo được một đối tượng Running chưa đủ nếu sai tên, image, namespace hoặc replicas.",
          "Giảng viên nhắc làm đúng spec và dùng giao diện kiểm tra của lab. Một số cách điều hướng hoặc quay lại câu hỏi tùy loại lab; hãy đọc hướng dẫn trên chính môi trường bạn mở, không lấy hành vi một video làm cam kết cho mọi bài."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Một vòng làm bài hiệu quả",
        "origin": "practice",
        "paragraphs": [
          "Luồng ôn tập tự biên soạn. Không phải mô phỏng đề lab của KodeKloud."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Đọc yêu cầu",
            "Tách tên tài nguyên, namespace, image, số bản sao và các thuộc tính cần đạt."
          ],
          [
            "Quan sát",
            "Xem môi trường trước thay đổi: cái gì đã tồn tại, ở namespace nào?"
          ],
          [
            "Thực hiện",
            "Sửa đúng đối tượng và giữ lại file cấu hình khi cần."
          ],
          [
            "Xác minh",
            "Dùng API và hành vi ứng dụng để kiểm tra rồi mới bấm chấm lab."
          ]
        ]
      },
      {
        "title": "Checklist trước khi bấm kiểm tra",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Tôi đang thao tác đúng context và namespace.",
          "Tên, kind, image và số lượng đều khớp yêu cầu, không chỉ gần giống.",
          "Tôi đã xem describe/Events nếu tài nguyên chưa sẵn sàng.",
          "Tôi có thể giải thích mình đã đổi gì trước khi mở lời giải."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Giới hạn cần nhớ",
        "origin": "practice",
        "paragraphs": [
          "Nút chấm và lời giải giúp học, nhưng bài thi thật có quy trình riêng. Đừng mang thời gian, giao diện hoặc cách chấm của lab sang suy luận quy định thi."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "22": {
    "lead": "Video truy cập lab chưa lấy được phụ đề trong phiên đối chiếu; giữ nguyên vị trí để bạn mở nguồn, không bịa thao tác.",
    "sections": [
      {
        "title": "Trạng thái xác minh",
        "origin": "source",
        "paragraphs": [
          "Mục lục xác nhận lecture 22 là Demo: Accessing Labs. Trình phát ở phiên kiểm tra không hiện bảng phụ đề. Vì chưa xác minh nội dung thao tác đầy đủ, sổ tay không mô tả video này như đã đọc được từng bước."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Hướng đi có nguồn để kiểm tra",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Mở video gốc bằng nút phía trên để xem luồng giao diện.",
          "Đọc bài 23 ngay sau đó: nguồn văn bản có hướng dẫn đăng ký lab.",
          "Nếu link lab hoặc giao diện đã đổi, ưu tiên thông báo hiện tại của khóa."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Không đánh đồng tiến độ",
        "origin": "practice",
        "paragraphs": [
          "Đánh dấu hoàn thành ở sổ tay chỉ lưu trên trình duyệt đang dùng; nó không xác nhận đã xem video và không thay đổi tiến độ Udemy."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "23": {
    "lead": "Cổng lab nằm trên KodeKloud, tách với hệ thống Udemy đang mở bài giảng.",
    "sections": [
      {
        "title": "Nội dung có trong bài đọc",
        "origin": "source",
        "paragraphs": [
          "Bài đọc hướng dẫn đăng ký các lab của khóa qua liên kết riêng và dùng tên khớp hồ sơ Udemy để nhận diện học viên. Giảng viên nói không cần khoản thanh toán bổ sung cho nhóm lab được cung cấp theo khóa.",
          "Việc đăng ký và quy trình nhận quyền diễn ra trên nền tảng KodeKloud, không nằm trong source sổ tay. Mở bài gốc để dùng liên kết và điều kiện đăng ký hiện hành."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Tự kiểm tra đường vào lab",
        "origin": "practice",
        "paragraphs": [
          "Đây là diễn giải luồng sử dụng từ nội dung văn bản, không tự đăng ký tài khoản hoặc nhập dữ liệu thay bạn."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Udemy",
            "Đăng nhập tài khoản có quyền xem khóa và mở lecture 23."
          ],
          [
            "Liên kết lab",
            "Dùng liên kết ngay trong bài đọc, tránh link quảng cáo hoặc bản sao ngoài nguồn."
          ],
          [
            "KodeKloud",
            "Làm theo hướng dẫn đăng nhập/đăng ký trên nền tảng đó."
          ],
          [
            "Đúng khóa",
            "Kiểm tra tên khóa và bài lab trước khi bắt đầu."
          ]
        ]
      },
      {
        "title": "Nếu không truy cập được",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Lỗi quyền truy cập khác lỗi mạng hoặc link thay đổi; ghi lại thông báo cụ thể.",
          "Không gửi mật khẩu, cookie hay token vào GitHub issue hoặc source website.",
          "Dùng kênh hỗ trợ chính thức được bài nguồn cung cấp nếu quyền học viên chưa được nhận diện."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "26": {
    "lead": "ReplicaSet duy trì số bản sao bằng cách chọn nhóm Pod và dùng một template để tạo Pod mới khi cần.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "spec.replicas là số mong muốn; selector xác định tập Pod liên quan; template mô tả Pod cần tạo. Cả ba cùng cần thiết: dù đã có đủ Pod hiện tại, template vẫn cần để tạo Pod thay thế về sau.",
          "Label của ReplicaSet object không thay cho label của Pod template. Selector phải khớp label trong template; những Pod nằm ngoài selector không đơn giản được cộng vào replicas chỉ vì cùng image."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Giảng viên bắt đầu với một Pod có nguy cơ gián đoạn rồi thêm bản sao để tăng khả năng phục vụ. Sau đó so sánh ReplicationController cũ với ReplicaSet, và dùng ví dụ ba Pod có cùng nhãn để giải thích selector.",
          "Phần scale đổi từ ba lên sáu giúp thấy lệnh scale có thể thay trạng thái live nhưng không tự sửa con số trong file YAML đang lưu trên máy."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Giải thích các trường ReplicaSet bằng câu hỏi",
        "origin": "practice",
        "paragraphs": [
          "Giả sử desired là 3 nhưng chỉ ready 1. Đừng scale lên 10 để “bù lỗi”. Trước hết xem hai Pod còn lại có được tạo không, đang Pending hay lỗi image. Tăng desired khi nguyên nhân chưa sửa có thể tạo thêm tài nguyên lỗi.",
          "Với bài tập sửa image ở template, xác định cách cập nhật Pod hiện có theo môi trường lab. ReplicaSet không có tính năng rolling update tự động như Deployment; sổ tay không tự gắn khả năng đó vào nó."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "replicas",
            "Muốn bao nhiêu Pod?",
            "Desired không đồng nghĩa ready."
          ],
          [
            "selector.matchLabels",
            "Đếm và quản lý nhóm Pod nào?",
            "Phải khớp template label và tránh chồng lấn."
          ],
          [
            "template.metadata.labels",
            "Pod mới sẽ có nhãn gì?",
            "Là nhãn của Pod, khác metadata ReplicaSet."
          ],
          [
            "template.spec.containers",
            "Pod mới chạy gì?",
            "Image này được dùng khi controller tạo Pod."
          ]
        ],
        "headers": [
          "Trường",
          "Câu hỏi nó trả lời",
          "Điểm phải kiểm tra"
        ],
        "flow": []
      },
      {
        "title": "Theo dấu luồng hoạt động",
        "origin": "practice",
        "paragraphs": [
          "Sơ đồ rút gọn để ôn lại chủ đề. Bấm từng bước; đây là phần giải thích bổ sung, không mô phỏng cụm Kubernetes thật."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Mong muốn",
            "ReplicaSet khai báo N bản sao."
          ],
          [
            "Quan sát",
            "Controller so tập Pod phù hợp và hiện trạng."
          ],
          [
            "Điều chỉnh",
            "Tạo hoặc loại bớt Pod khi cần."
          ],
          [
            "Lặp lại",
            "Trạng thái được quan sát liên tục, không chỉ lúc apply."
          ]
        ]
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Để tránh ReplicaSet nhận các Pod của ví dụ trước, dùng label web-rs riêng. Lưu file rs.yaml rồi apply trong namespace lab đã chuẩn bị."
        ],
        "bullets": [
          "So desired/current/ready; Pod được tạo chưa chắc ready.",
          "Xem ownerReferences để biết Pod thuộc ReplicaSet nào.",
          "Muốn cấu hình lặp lại nhất quán, cập nhật replicas trong file sau thử scale."
        ],
        "code": "apiVersion: apps/v1\nkind: ReplicaSet\nmetadata:\n  name: web-rs\n  namespace: cka-core-demo\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: web-rs\n  template:\n    metadata:\n      labels:\n        app: web-rs\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:stable\n\n# kubectl apply -f rs.yaml\n# kubectl get rs,pods -n cka-core-demo -l app=web-rs\n# kubectl scale rs web-rs -n cka-core-demo --replicas=3",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Đổi image trong ReplicaSet template không tự rolling update các Pod đang có.",
          "Không tạo hai controller với selector chồng lấn trong cùng namespace.",
          "Xóa một Pod rồi có Pod mới là replacement, không phải Pod cũ được hồi sinh."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "ReplicaSet là đối tượng API, controller của nó thực hiện vòng reconcile. Thường dùng Deployment để quản lý ReplicaSet trong ứng dụng thực tế."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/"
      }
    ],
    "edition": "section2-detailed-1",
    "quiz": {
      "question": "Đổi image trong ReplicaSet template có tự rolling update mọi Pod cũ không?",
      "options": [
        "Luôn luôn",
        "Không; ReplicaSet không cung cấp rollout như Deployment",
        "Chỉ cần đổi tên file"
      ],
      "correct": 1,
      "explanation": "Template ảnh hưởng Pod tạo mới; Deployment là lớp quản lý rollout."
    }
  },
  "29": {
    "lead": "Deployment bổ sung quản lý triển khai và cập nhật lên trên cơ chế duy trì bản sao của ReplicaSet.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Một Deployment quản lý ReplicaSet; ReplicaSet quản lý Pod. Cấu trúc template vẫn mô tả Pod, nhưng lớp Deployment giúp tổ chức các lần thay đổi phiên bản và hỗ trợ rollout/rollback.",
          "Thay đổi Pod template có thể tạo một rollout mới. Tăng replicas là scale workload, không giống thay image để chuyển sang phiên bản ứng dụng mới. Muốn hiểu kết quả, cần quan sát cả Deployment, ReplicaSet và Pod."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Giảng viên đặt yêu cầu production: nhiều bản sao, cập nhật từng phần để giảm ảnh hưởng, có khả năng quay lui và tạm dừng khi gom nhiều thay đổi. Sau đó tạo Deployment với cấu trúc gần ReplicaSet và liệt kê các đối tượng được sinh ra.",
          "Bài này giới thiệu khả năng, chưa triển khai hết các chiến lược rollout. Các bài Lifecycle Management về sau sẽ đi sâu hơn."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Tìm đúng chỗ thay đổi trong chuỗi sở hữu",
        "origin": "practice",
        "paragraphs": [
          "Nếu bạn thay image trực tiếp ở Pod con, Deployment template không tự học thay đổi đó. Pod mới được tạo sau này có thể vẫn dùng image trong template của controller. Cần sửa đúng nguồn khai báo để thay đổi có tính lặp lại.",
          "Khi rollout có ReplicaSet cũ với replicas bằng 0, đó có thể là lịch sử được giữ lại, không phải dấu hiệu phải xóa hết ReplicaSet. Đọc ownerReferences, desired và rollout history trước khi can thiệp."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Deployment",
            "Cấu hình triển khai",
            "Đổi template và theo dõi rollout tại đây."
          ],
          [
            "ReplicaSet",
            "Số bản sao của template tương ứng",
            "Deployment có thể quản lý nhiều ReplicaSet qua các revision."
          ],
          [
            "Pod",
            "Bản thực thi",
            "Đọc trạng thái/Events để tìm lỗi runtime."
          ]
        ],
        "headers": [
          "Đối tượng",
          "Trách nhiệm",
          "Khi nào nhìn vào"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Lưu file deployment.yaml. Label web-deploy khác bài ReplicaSet để không chọn nhầm Pod."
        ],
        "bullets": [
          "Theo ownerReferences từ Pod tới ReplicaSet, rồi từ ReplicaSet tới Deployment.",
          "Kiểm tra image và ready replicas thực, không chỉ thông báo created.",
          "Đọc Events nếu rollout chờ quá lâu; thiếu tài nguyên hoặc pull image vẫn có thể chặn tiến trình."
        ],
        "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-deploy\n  namespace: cka-core-demo\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: web-deploy\n  template:\n    metadata:\n      labels:\n        app: web-deploy\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:stable\n\n# kubectl apply -f deployment.yaml\n# kubectl rollout status deployment/web-deploy -n cka-core-demo\n# kubectl get deployment,rs,pods -n cka-core-demo",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Không sửa Pod con rồi kỳ vọng cấu hình đó trở thành template của Deployment.",
          "Rollback cấu hình ứng dụng không tự khôi phục database.",
          "RollingUpdate không mặc định bảo đảm mọi ứng dụng không gián đoạn; cần thiết kế readiness, tài nguyên và chiến lược phù hợp."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Dùng apps/v1 với selector khớp Pod template. Khi muốn triển khai phiên bản ổn định có thể tái lập, chọn image tag/digest đã xác định thay vì dựa mãi vào tag mutable trong ví dụ."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "30": {
    "lead": "Bài đọc gợi ý sinh YAML bằng kubectl để tiết kiệm thời gian, nhưng vẫn phải kiểm tra file trước khi tạo.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "kubectl run tạo Pod; kubectl create deployment tạo Deployment. --dry-run=client giúp in đối tượng dự kiến mà không tạo tài nguyên, còn -o yaml chọn định dạng YAML. Dấu > chuyển đầu ra vào file để sửa tiếp.",
          "Mẫu sinh ra là điểm bắt đầu, chưa tự chứa mọi yêu cầu về namespace, replicas, cổng, resources hoặc policy. Dry-run phía client cũng không bảo đảm API/admission của cluster sẽ chấp nhận."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Bài đọc đưa các trường hợp tạo NGINX Pod, sinh Pod manifest, tạo Deployment và sinh Deployment có số replicas mong muốn. Nó khuyến khích làm lại các lab trước bằng lệnh nhanh thay cho tự gõ toàn bộ YAML."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ba mức “kiểm tra” không thay thế nhau",
        "origin": "practice",
        "paragraphs": [
          "Nếu đề yêu cầu ba replicas, việc sinh file có replicas: 3 mới chứng minh ý định trong file. Sau tạo còn phải xem controller đã nhận và có đủ Pod ready. Không dùng dry-run để kết luận đã hoàn thành toàn bộ bài thực hành."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Client dry-run",
            "Dựng đối tượng mà chưa lưu",
            "Không kéo image, không schedule."
          ],
          [
            "Server dry-run",
            "Kiểm tra với API/admission trong phạm vi hỗ trợ",
            "Không chạy workload để kiểm thử hành vi."
          ],
          [
            "Triển khai và quan sát",
            "Tài nguyên có chạy và phục vụ không?",
            "Cần cluster lab và tự xác minh kết quả."
          ]
        ],
        "headers": [
          "Cách kiểm tra",
          "Trả lời được gì?",
          "Giới hạn"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Đây là ví dụ cùng kỹ thuật với giá trị tự đặt. Hai lệnh đầu chỉ tạo file local; lệnh server dry-run kiểm tra với API nhưng chưa lưu tài nguyên."
        ],
        "bullets": [
          "Mở file để xác minh kind, tên, namespace, image và replicas.",
          "Nếu đúng yêu cầu, mới chọn apply -f để tạo thật.",
          "Kiểm tra replicas ready sau khi tạo; server dry-run chưa chạy container."
        ],
        "code": "kubectl run quick-web --image=nginx:stable -n cka-core-demo \\\n  --dry-run=client -o yaml > quick-pod.yaml\nkubectl create deployment quick-app --image=nginx:stable \\\n  --replicas=2 -n cka-core-demo --dry-run=client -o yaml > quick-deploy.yaml\nkubectl apply --dry-run=server -f quick-deploy.yaml",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "--dry-run=client không thử kết nối registry hoặc schedule lên node.",
          "kubectl run không còn là cách tạo Deployment như một số bài viết rất cũ.",
          "Dấu > có thể ghi đè file local cùng tên; đặt tên rõ để không làm mất ghi chú cũ."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Hãy đọc help của kubectl trong môi trường lab để biết tùy chọn hiện có. Không dựa vào cú pháp generator cũ cho lệnh run."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_run/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "33": {
    "lead": "NodePort nối một cổng trên node tới Service rồi tới cổng ứng dụng của Pod.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "port là cổng client gọi ở Service; targetPort là cổng backend mà Service chuyển tới; nodePort là cổng được cấp trên node cho kiểu NodePort. Các con số có thể giống nhau nhưng vai trò khác nhau.",
          "Selector của Service chọn Pod theo label, không chọn theo tên Deployment hoặc image. Nhờ đó Pod thay đổi mà client vẫn dùng đầu mối Service, miễn backend phù hợp và mạng hoạt động."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Video đặt người dùng ngoài cluster cần gọi ứng dụng bên trong. Ví dụ dùng ba cổng để nối từ node vào container rồi mở rộng sang nhiều Pod có chung label. Giảng viên giải thích có thể truy cập qua node khác ngay cả khi Pod không chạy trực tiếp trên node đó."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ đường đi với các cổng khác nhau",
        "origin": "practice",
        "paragraphs": [
          "Nếu Service port là 8080 nhưng container vẫn nghe 80, targetPort phải đưa request về 80. Đặt cả ba cổng cùng số có thể chạy được nhưng không giúp bạn hiểu vai trò. Khi học hãy đọc từng trường theo chức năng.",
          "Trong manifest NodePort của sổ tay, nodePort không được đặt cố định. API sẽ cấp một cổng phù hợp; dùng get svc đọc cổng đó trước khi thử từ bên ngoài. Nếu cluster lab chạy trong VM/container, có thể còn cần port mapping của lớp hạ tầng ngoài Kubernetes."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Client ngoài",
            "node-ip:nodePort",
            "Cần route và firewall phù hợp."
          ],
          [
            "Service",
            "port 8080",
            "Cổng logic mà Service công bố."
          ],
          [
            "Backend Pod",
            "targetPort 80",
            "NGINX thực sự lắng nghe ở đây."
          ]
        ],
        "headers": [
          "Điểm trên đường đi",
          "Ví dụ",
          "Điều kiện"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Giả sử Deployment web-deploy ở bài 29 đang ready. Lưu service-nodeport.yaml. Không cấp nodePort cố định để cụm tự chọn cổng còn trống."
        ],
        "bullets": [
          "Đọc cổng thực được cấp trong Service, không đoán từ ví dụ.",
          "Từ máy có route tới node và firewall cho phép, thử http://<node-ip>:<node-port>.",
          "Nếu thất bại, kiểm tra label, backend ready, targetPort và đường mạng bên ngoài."
        ],
        "code": "apiVersion: v1\nkind: Service\nmetadata:\n  name: web-nodeport\n  namespace: cka-core-demo\nspec:\n  selector:\n    app: web-deploy\n  ports:\n    - name: http\n      port: 8080\n      targetPort: 80\n  type: NodePort\n\n# kubectl apply -f service-nodeport.yaml\n# kubectl get svc web-nodeport -n cka-core-demo\n# kubectl get pods -n cka-core-demo --show-labels",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "containerPort không tự tạo NodePort.",
          "Không phải mọi node IP đều truy cập được từ laptop của bạn.",
          "Phân biệt Service port với nodePort khi dùng curl."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Dải mặc định NodePort thường 30000–32767 nhưng có thể được cấu hình khác. externalTrafficPolicy và cách triển khai mạng cũng ảnh hưởng đường đi; ví dụ tổng quan không bao trùm mọi lựa chọn."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/concepts/services-networking/service/"
      }
    ],
    "edition": "section2-detailed-1",
    "quiz": {
      "question": "Service port 8080 chuyển tới container 80. targetPort là gì?",
      "options": [
        "8080",
        "80",
        "Bất kỳ nodePort nào"
      ],
      "correct": 1,
      "explanation": "port là đầu vào Service, targetPort là đích trên backend."
    }
  },
  "34": {
    "lead": "ClusterIP là đầu mối nội bộ ổn định để các tầng ứng dụng gọi nhau mà không giữ cứng IP Pod.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Frontend, backend, cache và database có thể có số Pod khác nhau. Khi Pod thay thế, địa chỉ cụ thể thay đổi; Service giúp client giữ tên/địa chỉ logic còn danh sách backend được cập nhật.",
          "ClusterIP là kiểu mặc định khi không chỉ định type. Nó không tự expose ra Internet. Service là lớp chọn/chuyển tiếp, không tự sửa lỗi ứng dụng hoặc tự tạo Pod nếu backend chưa tồn tại."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Giảng viên mô tả frontend gọi backend, backend gọi Redis và MySQL. Nếu chọn trực tiếp một Pod thì phải theo dõi từng IP; nhóm Pod sau Service giảm sự phụ thuộc đó và cho phép mỗi tầng scale riêng."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Phân biệt kiểm thử tới Pod và kiểm thử tới Service",
        "origin": "practice",
        "paragraphs": [
          "Port-forward tới pod/web chỉ kiểm tra được đường chuyển tiếp tới Pod đã chọn; nó bỏ qua việc Service chọn backend. Ngay cả khi HTTP trả 200 ở cách đó, selector Service vẫn có thể đang sai.",
          "Muốn kiểm tra Service, dùng một client ở vị trí có thể truy cập mạng Service và gọi Service name/port. Sau đó đối chiếu EndpointSlice. Tên phân giải được nhưng không có backend ready là dấu hiệu cần quay lại nhãn hoặc tình trạng Pod."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "curl Pod IP",
            "Ứng dụng/Pod network",
            "Không xác minh selector Service."
          ],
          [
            "curl Service IP",
            "Lớp Service và backend",
            "Chưa xác minh tên DNS."
          ],
          [
            "curl tên Service",
            "DNS cộng đường Service",
            "Cần resolver/phạm vi namespace đúng."
          ]
        ],
        "headers": [
          "Bài kiểm tra",
          "Phạm vi",
          "Không chứng minh"
        ],
        "flow": []
      },
      {
        "title": "Theo dấu luồng hoạt động",
        "origin": "practice",
        "paragraphs": [
          "Sơ đồ rút gọn để ôn lại chủ đề. Bấm từng bước; đây là phần giải thích bổ sung, không mô phỏng cụm Kubernetes thật."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Client",
            "Ứng dụng gọi tên Service và Service port."
          ],
          [
            "DNS",
            "Tên được phân giải theo namespace/search domain."
          ],
          [
            "Service",
            "Cơ chế mạng chuyển tới backend được chọn."
          ],
          [
            "Pod",
            "Ứng dụng nhận request tại targetPort."
          ]
        ]
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Dùng Deployment web-deploy ở bài 29. Tạo Service nghe port 8080 nhưng chuyển tới NGINX port 80, để nhìn rõ hai vai trò cổng."
        ],
        "bullets": [
          "Phải thử từ vị trí có khả năng truy cập DNS/ClusterIP của cluster.",
          "Kiểm tra EndpointSlice có backend ready tương ứng selector.",
          "Nếu curl IP được nhưng tên không được, kiểm tra DNS thay vì đổi targetPort ngay."
        ],
        "code": "apiVersion: v1\nkind: Service\nmetadata:\n  name: web-svc\n  namespace: cka-core-demo\nspec:\n  selector:\n    app: web-deploy\n  ports:\n    - name: http\n      port: 8080\n      targetPort: 80\n  type: ClusterIP\n\n# Sau khi lưu service.yaml:\n# kubectl apply -f service.yaml\n# kubectl get endpointslices -n cka-core-demo \\\n#   -l kubernetes.io/service-name=web-svc\n# Trong một Pod client có curl cùng namespace:\n# curl -I http://web-svc:8080",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Tên Service không cần giống tên Deployment nhưng selector phải đúng label Pod.",
          "DNS phân giải được không chứng minh có backend khỏe.",
          "ClusterIP không phải IP của một Pod proxy riêng."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Sổ tay dùng EndpointSlice để đối chiếu backend. Một số bài cũ xem Endpoints; cần hiểu ý nghĩa danh sách backend thay vì phụ thuộc duy nhất một loại đối tượng."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "35": {
    "lead": "LoadBalancer giải quyết địa chỉ truy cập ngoài cụm, nhưng cần hạ tầng hoặc controller thực thi.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "NodePort cung cấp cổng trên node; người dùng thường muốn một đầu mối thống nhất thay vì danh sách node IP:port. Service type LoadBalancer yêu cầu lớp tích hợp bên ngoài cấp và cấu hình cơ chế cân bằng tải phù hợp.",
          "Chỉ khai báo type không bảo đảm một load balancer xuất hiện trên mọi cluster. Trạng thái pending có thể phản ánh chưa có implementation, quota hoặc cấu hình nhà cung cấp, không phải lỗi của NGINX phía sau."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Video dùng ứng dụng voting và result trên nhiều node: đưa tất cả địa chỉ node cho người dùng là khó vận hành. Giảng viên nêu phương án tự đặt load balancer hoặc dùng khả năng tích hợp của nền tảng cloud."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Đừng giải một vấn đề cấp hạ tầng bằng cách sửa image",
        "origin": "practice",
        "paragraphs": [
          "Nếu backend Pod ready và Service có backend đúng nhưng EXTERNAL-IP chờ mãi, tìm controller/integration và Events của Service. Sửa image NGINX không thể tạo một cloud load balancer khi cluster không có khả năng cấp phát đó.",
          "Ngược lại, có external address chưa đảm bảo ứng dụng nhận request: health check, firewall, selector và targetPort đều còn quan trọng. Đặt giả thuyết dựa vào lớp nào đã có bằng chứng thành công."
        ],
        "bullets": [
          "Nếu môi trường lab không cung cấp LoadBalancer implementation, đọc hướng dẫn lab trước khi tạo thêm controller.",
          "Nếu nhà cung cấp cấp tài nguyên ngoài cluster, hiểu vòng đời và chi phí theo môi trường được cấp.",
          "Không dùng thao tác tăng đặc quyền hoặc mở toàn bộ firewall làm bước mặc định."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Quan sát trước khi tạo vì Service LoadBalancer có thể làm nhà cung cấp cấp tài nguyên tính phí. Không cần tạo thật để hiểu YAML; bài tập mặc định chỉ sinh manifest local."
        ],
        "bullets": [
          "Đọc status.loadBalancer và Events nếu Service đã được tạo bởi lab.",
          "Kiểm tra backend và đường ra ngoài như hai phần riêng.",
          "Nếu lab không có LB implementation, dùng bài ClusterIP/NodePort theo mục tiêu thay vì chờ vô hạn."
        ],
        "code": "kubectl create service loadbalancer web-public --tcp=80:80 \\\n  -n cka-core-demo --dry-run=client -o yaml > loadbalancer.yaml\n# Đọc và chỉnh selector trong file trước khi quyết định triển khai.\n# Nếu cluster đã có Service được cho phép:\nkubectl get service <ten-service> -n <namespace> -o wide",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "External IP có thể là hostname, không luôn là địa chỉ số.",
          "Không coi type LoadBalancer là cấu hình đầy đủ cho TLS hay định tuyến HTTP theo path.",
          "Dry-run tạo file không chứng minh cloud cấp được load balancer."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Không chỉ cloud công cộng mới triển khai được LoadBalancer; cụm tự quản cũng có thể dùng implementation phù hợp. Sự phụ thuộc là controller/hạ tầng được cấu hình, không phải tên môi trường đơn thuần."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/concepts/services-networking/service/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "38": {
    "lead": "Namespace xác định phạm vi tên và quản lý tài nguyên, không phải một cluster riêng bên trong cluster.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Hai Pod cùng tên có thể nằm ở hai namespace khác nhau. Khi truy vấn tài nguyên namespaced, cần chỉ rõ phạm vi hoặc dùng namespace của current context. Node và một số tài nguyên toàn cụm không thuộc namespace theo cách đó.",
          "Namespace giúp tổ chức, phân quyền và đặt quota, nhưng không tự dựng ranh giới mạng. Muốn chặn giao tiếp cần cơ chế riêng như NetworkPolicy cùng implementation thực thi. Quota giới hạn mức cho phép, không tự dự trữ vật lý tài nguyên."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Giảng viên dùng hai người cùng tên Mark ở hai gia đình: trong một nhà gọi tên ngắn, ra ngoài cần tên đầy đủ hơn. Tương tự, tên Service ngắn thường dùng được trong cùng namespace; khác namespace cần thêm phần namespace của Service.",
          "Video cũng giới thiệu default, kube-system, kube-public; hướng dẫn tạo namespace, chuyển namespace mặc định cho context và xem toàn bộ namespace."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Cùng tên tài nguyên, khác phạm vi",
        "origin": "practice",
        "paragraphs": [
          "Trước khi xóa hoặc sửa đối tượng tên giống nhau, đọc cả kind, name và namespace. Bỏ -n có thể khiến bạn thao tác trúng một đối tượng cùng tên trong namespace mặc định của context, ngay cả khi lệnh không báo lỗi.",
          "Khi cần giới hạn tài nguyên, quota là một chủ đề riêng. Nó không tự cấp sẵn CPU/memory, và namespace không thay các ràng buộc schedule hoặc chính sách mạng."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "web trong namespace dev",
            "dev/web",
            "Khác đối tượng web trong namespace prod."
          ],
          [
            "web-svc từ Pod cùng namespace",
            "Tên ngắn thường đủ",
            "Resolver bổ sung search domain."
          ],
          [
            "web-svc từ namespace khác",
            "Thêm namespace của Service",
            "Dùng cluster domain thực khi cần tên đầy đủ."
          ],
          [
            "Node",
            "Tài nguyên toàn cụm",
            "Không đổi namespace để tìm node."
          ]
        ],
        "headers": [
          "Tình huống",
          "Cách nhận diện",
          "Điểm cần nhớ"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Tạo namespace lab nếu chưa có. Dùng -n tường minh trong ví dụ để tránh quên thay đổi context sau buổi học."
        ],
        "bullets": [
          "Đọc namespace từ metadata của đối tượng và lệnh sử dụng.",
          "Nếu No resources found, thử -A hoặc kiểm tra namespace chứ chưa cần tạo lại ngay.",
          "Cluster domain có thể khác cluster.local; đối chiếu resolver khi kiểm tra DNS."
        ],
        "code": "kubectl get namespaces\nkubectl create namespace cka-core-demo\nkubectl get pods -n cka-core-demo\nkubectl get pods -A\n# Ví dụ tên Service khác namespace trong môi trường DNS cluster:\n# web-svc.cka-core-demo.svc.cluster.local",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "-A xem toàn bộ namespace, không tạo một bản sao đối tượng ở tất cả namespace.",
          "kubectl config set-context --current --namespace=... thay mặc định của context hiện có, nên phải nhớ trạng thái mới.",
          "Service selector thông thường không chọn Pod ở namespace khác."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Namespace không tự áp đặt isolation hoặc đảm bảo tài nguyên được dành sẵn. Cần đọc RBAC, quota và network policy tương ứng với mục tiêu."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
      }
    ],
    "edition": "section2-detailed-1",
    "quiz": {
      "question": "Tạo namespace mới có tự chặn mạng tới namespace khác không?",
      "options": [
        "Có",
        "Không, cần cơ chế isolation phù hợp",
        "Chỉ đổi tên là đủ"
      ],
      "correct": 1,
      "explanation": "Namespace là phạm vi tài nguyên; policy và implementation quyết định chặn mạng."
    }
  },
  "41": {
    "lead": "Phân biệt “ra lệnh thay đổi” với “khai báo trạng thái mong muốn”, kể cả khi cả hai đều dùng YAML.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Imperative có thể là lệnh run/scale/edit hoặc create -f/replace -f: bạn chỉ định thao tác cần làm. Declarative dùng manifest như cấu hình mong muốn và apply để tính thay đổi. Có file YAML chưa tự động biến quy trình thành declarative.",
          "Giữ cấu hình local nhất quán với live là vấn đề chính. Nếu edit trực tiếp live nhưng không ghi lại vào nguồn, lần áp dụng file cũ có thể ghi đè thay đổi ngoài quy trình. Không nên chọn phương pháp chỉ dựa vào số lượng ký tự của câu lệnh."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Giảng viên dùng ví dụ taxi: chỉ đường từng ngã rẽ so với chỉ đưa địa điểm đích. Sang Kubernetes, video so sánh lệnh trực tiếp, các thao tác dựa trên file và cách apply dùng một bộ manifest để quản lý trạng thái."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Chọn cách làm theo loại tác vụ",
        "origin": "practice",
        "paragraphs": [
          "Declarative không có nghĩa công cụ đoán ý định ngoài phạm vi bạn khai báo. Nếu file chưa có yêu cầu readiness hoặc port phù hợp, apply thành công không tự bổ sung một thiết kế ứng dụng hoàn chỉnh.",
          "Để luyện thao tác thi, imperative giúp tiết kiệm thời gian; để học quản lý cấu hình, hãy luôn giải thích trạng thái mong muốn nằm ở đâu và lần sau bạn tái hiện nó bằng cách nào."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Tạo một Pod đơn giản trong lab",
            "Imperative có thể nhanh",
            "Vẫn đọc lại đúng image/name/namespace."
          ],
          [
            "Đối tượng có nhiều thuộc tính",
            "Sinh YAML rồi sửa",
            "Tránh cờ lệnh dài khó kiểm chứng."
          ],
          [
            "Cấu hình duy trì dài hạn",
            "File được quản lý và apply có quy trình",
            "Tránh live drift không ghi nhận."
          ],
          [
            "Xóa tài nguyên không dùng nữa",
            "Delete hoặc cơ chế đồng bộ rõ ràng",
            "Không suy từ việc bỏ file."
          ]
        ],
        "headers": [
          "Nhu cầu",
          "Cách cân nhắc",
          "Bước không được bỏ"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Tạo Deployment thử bằng file ở bài 29. Đọc trạng thái, sửa replicas trong file rồi apply lại. Có thể dùng diff trước để xem thay đổi; diff có mã thoát 1 khi có khác biệt, không nhất thiết là lỗi."
        ],
        "bullets": [
          "File phải phản ánh giá trị replicas/image muốn duy trì về sau.",
          "Phân biệt tạo mới, cập nhật live và quản lý lịch sử cấu hình.",
          "Nếu apply bị từ chối, đọc validation/immutable field/admission thay vì cho rằng apply luôn thành công."
        ],
        "code": "kubectl get deployment web-deploy -n cka-core-demo -o yaml\n# Sửa spec.replicas trong deployment.yaml trước:\nkubectl diff -f deployment.yaml\nkubectl apply -f deployment.yaml\nkubectl get deployment web-deploy -n cka-core-demo",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "apply không bảo đảm mọi thay đổi trường đều hợp lệ.",
          "Xóa một file khỏi thư mục rồi apply thư mục không mặc nhiên xóa tài nguyên cũ.",
          "replace --force có thể xóa và tạo lại đối tượng, gây gián đoạn hoặc mất identity."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Quản lý xóa tài nguyên cần thao tác delete hoặc cơ chế pruning/đồng bộ được cấu hình rõ. Client-side và server-side apply cũng khác cách quản lý trường; bài 46 tập trung cơ chế client-side."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/"
      }
    ],
    "edition": "section2-detailed-1",
    "quiz": {
      "question": "Bỏ một file khỏi thư mục rồi apply thư mục có tự xóa object trước đó không?",
      "options": [
        "Mặc định có",
        "Mặc định không",
        "Chỉ cần chạy apply hai lần"
      ],
      "correct": 1,
      "explanation": "Cần delete hoặc cơ chế pruning/đồng bộ được cấu hình rõ."
    }
  },
  "42": {
    "lead": "Chọn lệnh nhanh phù hợp và đọc manifest sinh ra, đặc biệt selector của Service.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Các lệnh imperative hữu ích khi yêu cầu đơn giản hoặc cần khung YAML để sửa. --dry-run=client ngăn tạo tài nguyên trong ví dụ, còn -o yaml giúp nhìn toàn bộ các trường được công cụ suy ra.",
          "expose dùng đối tượng có sẵn để suy selector/cổng khi phù hợp; create service sinh cấu hình theo tùy chọn riêng. Hai cách không bảo đảm tạo cùng selector. Một Service tồn tại nhưng chọn sai Pod vẫn không phục vụ ứng dụng mong muốn."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Bài đọc đưa mẫu cho Pod, Deployment và Service. Trường hợp ClusterIP và NodePort minh họa sự đánh đổi: cách suy selector thuận tiện không luôn cho chỉnh mọi chi tiết nodePort ngay trong cùng lệnh."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "So selector bằng mắt trước khi tạo",
        "origin": "practice",
        "paragraphs": [
          "Giả sử Pod có label tier=frontend nhưng Service sinh ra lại chọn app=quick-service. Cả hai tài nguyên đều có thể tạo thành công mà không liên kết với nhau. Sửa selector theo label thực của Pod; không đổi tên Pod chỉ để tên giống Service.",
          "Khi expose một Deployment, kiểm tra selector sinh từ cấu hình nguồn. Nếu dùng create service, xem các nhãn mà lệnh mặc định giả định. Điều quan trọng của bài đọc là biết đọc kết quả, không chỉ nhớ hai câu lệnh có cùng chữ service."
        ],
        "bullets": [
          "Dùng get pods --show-labels để có bằng chứng nhãn thực.",
          "Dùng describe svc hoặc get svc -o yaml để đọc selector.",
          "Xem EndpointSlice sau tạo để xác nhận có backend phù hợp."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Chỉ sinh YAML để so sánh, chưa tạo Service. Deployment web-deploy cần tồn tại cho expose đọc thông tin."
        ],
        "bullets": [
          "So selector trong hai đầu ra với label Pod thật.",
          "Với NodePort cố định, kiểm tra dải và xung đột trước khi tạo.",
          "Nếu yêu cầu nhiều thuộc tính, lưu YAML rồi sửa cho rõ thay vì ghép lệnh dài khó kiểm tra."
        ],
        "code": "kubectl expose deployment web-deploy -n cka-core-demo \\\n  --name=from-expose --port=8080 --target-port=80 \\\n  --dry-run=client -o yaml\nkubectl create service clusterip from-create -n cka-core-demo \\\n  --tcp=8080:80 --dry-run=client -o yaml\nkubectl create service nodeport quick-nodeport -n cka-core-demo \\\n  --tcp=80:80 --node-port=30080 --dry-run=client -o yaml",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "--dry-run=client của expose vẫn có thể cần đọc đối tượng nguồn từ API.",
          "port/targetPort/nodePort có ba vai trò khác nhau.",
          "Không bỏ qua namespace của nguồn expose và Service kết quả."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Dry-run phía client không kiểm tra toàn bộ admission, runtime hoặc mạng. Khi cần kiểm tra API, dùng server dry-run; khi cần kiểm tra hành vi, phải triển khai trong lab và thử kết nối."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_expose/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "43": {
    "lead": "Dùng API discovery và explain để tìm đúng tên tài nguyên, nhóm API và cấu trúc trường ngay trong terminal.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "api-resources liệt kê tài nguyên mà server cung cấp cùng tên, shortname, API version và phạm vi namespace. explain đọc mô tả schema của một tài nguyên hoặc đường dẫn trường, hữu ích khi không nhớ YAML phải đặt ở đâu.",
          "Đi sâu theo dấu chấm như pod.spec.containers để xem đúng cấp. --recursive giúp nhìn cấu trúc nhưng không nên hiểu rằng nó thay mọi quy tắc validation, ngữ nghĩa và giới hạn phiên bản."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Giảng viên lần từ api-resources sang explain pods, sau đó thêm .spec để đọc trường con và bật recursive. Ví dụ giải quyết cả câu hỏi “tài nguyên tên gì?” lẫn “trường này là chuỗi, danh sách hay object?”."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Từ lỗi trường YAML tới câu hỏi cho explain",
        "origin": "practice",
        "paragraphs": [
          "Nếu API báo unknown field ở một đường dẫn, chia nhỏ đường dẫn đó để tra từng cấp. Ví dụ bạn cần tìm image nằm trong spec.containers, chứ không trực tiếp dưới spec của mọi loại tài nguyên. Với Deployment, còn có lớp template trước Pod spec.",
          "Khi output recursive quá dài, thu hẹp tới một trường thay vì đọc toàn bộ schema. Công cụ này trả lời cấu trúc, còn câu hỏi vì sao Service không chuyển được request vẫn cần trạng thái và kiểm thử mạng."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Pod container image",
            "pod.spec.containers.image",
            "Spec của Pod trực tiếp."
          ],
          [
            "Deployment container image",
            "deployment.spec.template.spec.containers.image",
            "Có thêm Pod template."
          ],
          [
            "ReplicaSet selector",
            "replicaset.spec.selector",
            "Bộ chọn ở controller."
          ]
        ],
        "headers": [
          "Thông tin cần tìm",
          "Đường dẫn để tra",
          "Cách đọc"
        ],
        "flow": []
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Các lệnh dưới chỉ tra cứu. Cần kết nối cụm phù hợp để server cung cấp discovery/schema chính xác."
        ],
        "bullets": [
          "Tìm containers là danh sách, rồi đi sâu vào image/name.",
          "Đối chiếu ReplicaSet ở apps/v1 thay vì dùng v1 của Pod.",
          "Nếu không tìm thấy tài nguyên, kiểm tra context, phiên bản và CRD có được cài."
        ],
        "code": "kubectl api-resources\nkubectl explain pod\nkubectl explain pod.spec.containers\nkubectl explain deployment.spec --api-version=apps/v1\nkubectl explain pod.spec --recursive",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Shortname dùng trong kubectl không thay cho kind phân biệt hoa/thường trong manifest.",
          "explain không tạo tài nguyên và không test image pull.",
          "Output của client/server khác phiên bản có thể khác tài liệu bạn đang đọc."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Dùng --api-version khi tài nguyên có nhiều phiên bản để tra schema mong muốn. Xác nhận manifest qua server dry-run trước khi tạo thật khi phù hợp."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_explain/"
      }
    ],
    "edition": "section2-detailed-1"
  },
  "46": {
    "lead": "Client-side apply dùng ba nguồn cấu hình để xác định thay đổi, đặc biệt khi bạn bỏ một trường khỏi file.",
    "sections": [
      {
        "title": "Khái niệm và cách hoạt động",
        "origin": "source",
        "paragraphs": [
          "Ba nguồn là file local hiện tại, đối tượng live và cấu hình last-applied. Với client-side apply, annotation last-applied ghi nhận cấu hình trước đó mà client đã quản lý. Nhờ vậy nó phân biệt một trường bạn vừa bỏ với một trường live nằm ngoài bản khai báo trước.",
          "Ví dụ label từng có trong last-applied nhưng bị bỏ khỏi local có thể được xóa khi apply. Trường do cơ chế khác thêm và chưa từng thuộc bản local trước có cách xử lý khác; cần hiểu quyền sở hữu trường và cách merge, không diễn giải là ghi đè toàn bộ object."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ví dụ hoặc thao tác giảng viên nhắc tới",
        "origin": "source",
        "paragraphs": [
          "Video đổi image rồi bỏ một label để cho thấy vì sao so file local với live thôi chưa đủ. Giảng viên tìm annotation lưu JSON của lần apply trước và nhắc sự bất nhất khi trộn edit/create/replace với apply mà không hiểu tác động."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Bỏ một nhãn khác với bỏ một tài nguyên",
        "origin": "practice",
        "paragraphs": [
          "Trong thí nghiệm ConfigMap, bạn bỏ field temporary khỏi cấu hình local đã từng apply; client-side apply có dữ liệu trước đó để nhận ra sự thay đổi trường. ConfigMap vẫn tồn tại vì bạn vẫn khai báo đối tượng đó.",
          "Nếu xóa cả apply-demo.yaml khỏi thư mục và chỉ apply các file còn lại, API không mặc định nhận lệnh xóa ConfigMap. Cần thao tác quản lý vòng đời riêng. Đừng suy quy tắc xử lý trường thành quy tắc xóa toàn bộ resource."
        ],
        "bullets": [],
        "code": "",
        "rows": [
          [
            "Local thay image/label",
            "Đề xuất cập nhật field",
            "API vẫn phải chấp nhận thay đổi."
          ],
          [
            "Local bỏ field đã quản lý",
            "Có thể đề xuất bỏ field",
            "Phụ thuộc merge và cấu trúc field."
          ],
          [
            "Live có field do bên khác thêm",
            "Cần xét quyền quản lý",
            "Không phải mọi field ngoài local đều bị xóa."
          ],
          [
            "Bỏ file khỏi bộ đầu vào",
            "Không tự là delete resource",
            "Cần quy trình xóa/prune được chọn."
          ]
        ],
        "headers": [
          "Tình huống",
          "Ý định",
          "Điều phải phân biệt"
        ],
        "flow": []
      },
      {
        "title": "Theo dấu luồng hoạt động",
        "origin": "practice",
        "paragraphs": [
          "Sơ đồ rút gọn để ôn lại chủ đề. Bấm từng bước; đây là phần giải thích bổ sung, không mô phỏng cụm Kubernetes thật."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Local",
            "Bạn sửa cấu hình mong muốn trong file."
          ],
          [
            "So sánh",
            "Client-side apply xét local, live và last-applied."
          ],
          [
            "Gửi thay đổi",
            "API kiểm tra và nhận bản cập nhật hợp lệ."
          ],
          [
            "Ghi nhận",
            "Last-applied được cập nhật theo cấu hình vừa áp dụng."
          ]
        ]
      },
      {
        "title": "Thực hành bổ sung · từng bước",
        "origin": "practice",
        "paragraphs": [
          "Tạo ConfigMap độc lập trong namespace lab để quan sát metadata, không cần thay ứng dụng. Lưu file, apply, rồi xóa dòng nhãn temporary khỏi file và apply lại."
        ],
        "bullets": [
          "Nhãn temporary phải mất sau cập nhật, còn dữ liệu mong muốn vẫn đúng.",
          "Xem diff trước apply để biết bạn sẽ thay trường nào.",
          "Không dùng annotation như nơi lưu Secret hoặc dữ liệu riêng tư không cần thiết."
        ],
        "code": "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: apply-demo\n  namespace: cka-core-demo\n  labels:\n    app: apply-demo\n    temporary: yes-demo\ndata:\n  mode: learning\n\n# kubectl apply -f apply-demo.yaml\n# kubectl apply view-last-applied configmap/apply-demo -n cka-core-demo\n# Sau khi bỏ nhãn temporary khỏi file:\n# kubectl diff -f apply-demo.yaml\n# kubectl apply -f apply-demo.yaml\n# kubectl get configmap apply-demo -n cka-core-demo --show-labels",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi thường gặp và điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Bỏ field trong manifest khác bỏ toàn bộ file manifest khỏi thư mục.",
          "apply vẫn có thể lỗi vì schema, immutable field, admission hoặc xung đột.",
          "Trạng thái Ready/Running không được suy từ việc apply trả về configured."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Làm rõ theo tài liệu hiện hành",
        "origin": "update",
        "paragraphs": [
          "Đây là mô hình client-side apply trong video. Server-side apply quản lý trường qua managedFields và có cơ chế xung đột/field manager khác; không áp dụng nguyên mô tả annotation cho --server-side."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://kubernetes.io/docs/reference/using-api/server-side-apply/"
      }
    ],
    "edition": "section2-detailed-1",
    "quiz": {
      "question": "Video bài 46 giải thích cơ chế nào?",
      "options": [
        "Client-side apply với last-applied",
        "Mọi cơ chế apply luôn giống nhau",
        "Scheduler chấm điểm"
      ],
      "correct": 0,
      "explanation": "Server-side apply dùng quản lý trường và field manager khác mô hình annotation trong video."
    }
  },
  "24": {
    "lead": "Trang vào lab Pod của khóa. Đề, tài nguyên cụ thể và nút chấm nằm trong môi trường KodeKloud.",
    "sections": [
      {
        "title": "Nguồn hiện có",
        "origin": "source",
        "paragraphs": [
          "Bài đọc Udemy ở mục này cung cấp liên kết mở lab. Không có toàn bộ đề chi tiết trong phần văn bản đã đối chiếu, nên các bước dưới là kế hoạch tự luyện, không phải danh sách câu hỏi thực của tác giả.",
          "Mục tiêu ôn trước lab: Phân biệt số Pod, số container, image và node đang chạy. Khi có container chờ, tìm lý do trong trạng thái chi tiết và Events."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Quy trình tự luyện",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Liệt kê Pod trong namespace được bài yêu cầu; không mặc định số lượng từ video lời giải.",
          "Describe từng Pod liên quan để đọc image và trạng thái từng container.",
          "Nếu sửa image, kiểm tra giá trị live và Events mới sau thay đổi."
        ],
        "code": "kubectl get pods -n <namespace> -o wide\nkubectl describe pod <ten-pod> -n <namespace>\nkubectl get pod <ten-pod> -n <namespace> -o yaml",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Xác minh và ghi lại kết quả",
        "origin": "practice",
        "paragraphs": [
          "Sau mỗi thay đổi, đọc lại đối tượng live và trạng thái liên quan. Viết ngắn: trước khi sửa thấy gì, đã đổi trường nào, bằng chứng nào cho thấy đạt yêu cầu.",
          "Các lệnh có <…> là placeholder: thay bằng giá trị của đề. Không chạy nguyên ký hiệu này trong shell."
        ],
        "bullets": [
          "Đúng tên và namespace chưa?",
          "Đúng thông số được yêu cầu chưa?",
          "Tài nguyên ready và hành vi có đúng không, hay mới chỉ tồn tại?"
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "READY là container ready/tổng container trong một Pod, không phải số Pod.",
          "ImagePullBackOff khác CrashLoopBackOff: một bên liên quan kéo image, bên kia tiến trình đã chạy rồi lỗi.",
          "Không xóa toàn namespace chỉ để làm lại một câu."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ôn lại trước hoặc sau lab",
        "origin": "practice",
        "paragraphs": [
          "Xem lecture 18 để ôn khái niệm; sau khi tự làm, mở video lời giải lecture 25 để đối chiếu cách điều tra. Không dùng giá trị đáp án trong video thay dữ liệu hiện tại của lab."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "27": {
    "lead": "Trang vào lab ReplicaSet của khóa. Đề, tài nguyên cụ thể và nút chấm nằm trong môi trường KodeKloud.",
    "sections": [
      {
        "title": "Nguồn hiện có",
        "origin": "source",
        "paragraphs": [
          "Bài đọc Udemy ở mục này cung cấp liên kết mở lab. Không có toàn bộ đề chi tiết trong phần văn bản đã đối chiếu, nên các bước dưới là kế hoạch tự luyện, không phải danh sách câu hỏi thực của tác giả.",
          "Mục tiêu ôn trước lab: Nối desired replicas với selector và Pod template; tìm nguyên nhân số ready không đạt mong muốn."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Quy trình tự luyện",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Liệt kê ReplicaSet và Pod để phân biệt desired, current và ready.",
          "Đọc selector và template labels, rồi kiểm tra ownerReferences của Pod.",
          "Khi đề yêu cầu scale hoặc sửa cấu hình, thay đúng controller rồi quan sát các Pod."
        ],
        "code": "kubectl get rs,pods -n <namespace>\nkubectl describe rs <ten-rs> -n <namespace>\nkubectl get pods -n <namespace> --show-labels",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Xác minh và ghi lại kết quả",
        "origin": "practice",
        "paragraphs": [
          "Sau mỗi thay đổi, đọc lại đối tượng live và trạng thái liên quan. Viết ngắn: trước khi sửa thấy gì, đã đổi trường nào, bằng chứng nào cho thấy đạt yêu cầu.",
          "Các lệnh có <…> là placeholder: thay bằng giá trị của đề. Không chạy nguyên ký hiệu này trong shell."
        ],
        "bullets": [
          "Đúng tên và namespace chưa?",
          "Đúng thông số được yêu cầu chưa?",
          "Tài nguyên ready và hành vi có đúng không, hay mới chỉ tồn tại?"
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Đổi template image không tự thay toàn bộ Pod hiện tại của ReplicaSet.",
          "Pod mới xuất hiện sau khi xóa Pod cũ chứng minh controller reconcile, không chứng minh Pod cũ sống lại.",
          "Scale bằng lệnh không tự sửa file YAML local."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ôn lại trước hoặc sau lab",
        "origin": "practice",
        "paragraphs": [
          "Xem lecture 26 để ôn khái niệm; sau khi tự làm, mở video lời giải lecture 28 để đối chiếu cách điều tra. Không dùng giá trị đáp án trong video thay dữ liệu hiện tại của lab."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "31": {
    "lead": "Trang vào lab Deployment của khóa. Đề, tài nguyên cụ thể và nút chấm nằm trong môi trường KodeKloud.",
    "sections": [
      {
        "title": "Nguồn hiện có",
        "origin": "source",
        "paragraphs": [
          "Bài đọc Udemy ở mục này cung cấp liên kết mở lab. Không có toàn bộ đề chi tiết trong phần văn bản đã đối chiếu, nên các bước dưới là kế hoạch tự luyện, không phải danh sách câu hỏi thực của tác giả.",
          "Mục tiêu ôn trước lab: Quan sát quan hệ Deployment → ReplicaSet → Pod và hiểu vì sao Deployment chưa ready."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Quy trình tự luyện",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Xem cả ba loại tài nguyên thay vì chỉ đếm Deployment.",
          "Đối chiếu image, replicas và Events từ Pod con khi rollout bị kẹt.",
          "Tạo tài nguyên theo thông số lab rồi đọc lại cấu hình thực để xác minh."
        ],
        "code": "kubectl get deployment,rs,pods -n <namespace>\nkubectl describe deployment <ten-deployment> -n <namespace>\nkubectl rollout status deployment/<ten-deployment> -n <namespace> --timeout=90s",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Xác minh và ghi lại kết quả",
        "origin": "practice",
        "paragraphs": [
          "Sau mỗi thay đổi, đọc lại đối tượng live và trạng thái liên quan. Viết ngắn: trước khi sửa thấy gì, đã đổi trường nào, bằng chứng nào cho thấy đạt yêu cầu.",
          "Các lệnh có <…> là placeholder: thay bằng giá trị của đề. Không chạy nguyên ký hiệu này trong shell."
        ],
        "bullets": [
          "Đúng tên và namespace chưa?",
          "Đúng thông số được yêu cầu chưa?",
          "Tài nguyên ready và hành vi có đúng không, hay mới chỉ tồn tại?"
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Deployment tồn tại không đồng nghĩa ứng dụng chạy.",
          "Không sửa nhầm ReplicaSet con khi đề yêu cầu cấu hình Deployment.",
          "Nhiều ReplicaSet có thể là lịch sử rollout, không mặc định là lỗi."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ôn lại trước hoặc sau lab",
        "origin": "practice",
        "paragraphs": [
          "Xem lecture 29 để ôn khái niệm; sau khi tự làm, mở video lời giải lecture 32 để đối chiếu cách điều tra. Không dùng giá trị đáp án trong video thay dữ liệu hiện tại của lab."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "36": {
    "lead": "Trang vào lab Service của khóa. Đề, tài nguyên cụ thể và nút chấm nằm trong môi trường KodeKloud.",
    "sections": [
      {
        "title": "Nguồn hiện có",
        "origin": "source",
        "paragraphs": [
          "Bài đọc Udemy ở mục này cung cấp liên kết mở lab. Không có toàn bộ đề chi tiết trong phần văn bản đã đối chiếu, nên các bước dưới là kế hoạch tự luyện, không phải danh sách câu hỏi thực của tác giả.",
          "Mục tiêu ôn trước lab: Đọc type, port, targetPort và selector, sau đó đối chiếu backend thực tế."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Quy trình tự luyện",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Liệt kê Service và xác định Service nào là tài nguyên hệ thống, Service nào của ứng dụng.",
          "Đọc selector rồi tìm Pod phù hợp trong cùng namespace.",
          "Quan sát EndpointSlice và kiểm tra truy cập từ vị trí mạng thích hợp."
        ],
        "code": "kubectl get svc -n <namespace>\nkubectl describe svc <ten-service> -n <namespace>\nkubectl get pods -n <namespace> --show-labels\nkubectl get endpointslices -n <namespace> -l kubernetes.io/service-name=<ten-service>",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Xác minh và ghi lại kết quả",
        "origin": "practice",
        "paragraphs": [
          "Sau mỗi thay đổi, đọc lại đối tượng live và trạng thái liên quan. Viết ngắn: trước khi sửa thấy gì, đã đổi trường nào, bằng chứng nào cho thấy đạt yêu cầu.",
          "Các lệnh có <…> là placeholder: thay bằng giá trị của đề. Không chạy nguyên ký hiệu này trong shell."
        ],
        "bullets": [
          "Đúng tên và namespace chưa?",
          "Đúng thông số được yêu cầu chưa?",
          "Tài nguyên ready và hành vi có đúng không, hay mới chỉ tồn tại?"
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Không suy selector từ tên Service.",
          "ClusterIP nội bộ không mặc định gọi được từ laptop.",
          "Backend có địa chỉ nhưng sai targetPort vẫn có thể không phục vụ."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ôn lại trước hoặc sau lab",
        "origin": "practice",
        "paragraphs": [
          "Xem lecture 33 để ôn khái niệm; sau khi tự làm, mở video lời giải lecture 37 để đối chiếu cách điều tra. Không dùng giá trị đáp án trong video thay dữ liệu hiện tại của lab."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "39": {
    "lead": "Trang vào lab Namespace của khóa. Đề, tài nguyên cụ thể và nút chấm nằm trong môi trường KodeKloud.",
    "sections": [
      {
        "title": "Nguồn hiện có",
        "origin": "source",
        "paragraphs": [
          "Bài đọc Udemy ở mục này cung cấp liên kết mở lab. Không có toàn bộ đề chi tiết trong phần văn bản đã đối chiếu, nên các bước dưới là kế hoạch tự luyện, không phải danh sách câu hỏi thực của tác giả.",
          "Mục tiêu ôn trước lab: Tìm tài nguyên đúng phạm vi và chọn tên DNS Service phù hợp nơi gọi."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Quy trình tự luyện",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Xem các namespace và phạm vi của câu hỏi.",
          "Nếu chưa tìm thấy Pod, dùng -A để tìm vị trí rồi quay lại -n rõ ràng.",
          "Khi gọi Service khác namespace, phân biệt tên ngắn và tên kèm namespace."
        ],
        "code": "kubectl get ns\nkubectl get pods -A\nkubectl get pods -n <namespace>\nkubectl get svc -n <namespace>",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Xác minh và ghi lại kết quả",
        "origin": "practice",
        "paragraphs": [
          "Sau mỗi thay đổi, đọc lại đối tượng live và trạng thái liên quan. Viết ngắn: trước khi sửa thấy gì, đã đổi trường nào, bằng chứng nào cho thấy đạt yêu cầu.",
          "Các lệnh có <…> là placeholder: thay bằng giá trị của đề. Không chạy nguyên ký hiệu này trong shell."
        ],
        "bullets": [
          "Đúng tên và namespace chưa?",
          "Đúng thông số được yêu cầu chưa?",
          "Tài nguyên ready và hành vi có đúng không, hay mới chỉ tồn tại?"
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Namespace khác không tự đồng nghĩa mạng bị chặn.",
          "Đặt namespace cho context có thể ảnh hưởng các lệnh sau lab.",
          "Không lấy số namespace từ video vì môi trường hiện tại có thể khác."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ôn lại trước hoặc sau lab",
        "origin": "practice",
        "paragraphs": [
          "Xem lecture 38 để ôn khái niệm; sau khi tự làm, mở video lời giải lecture 40 để đối chiếu cách điều tra. Không dùng giá trị đáp án trong video thay dữ liệu hiện tại của lab."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "44": {
    "lead": "Trang vào lab Imperative Commands của khóa. Đề, tài nguyên cụ thể và nút chấm nằm trong môi trường KodeKloud.",
    "sections": [
      {
        "title": "Nguồn hiện có",
        "origin": "source",
        "paragraphs": [
          "Bài đọc Udemy ở mục này cung cấp liên kết mở lab. Không có toàn bộ đề chi tiết trong phần văn bản đã đối chiếu, nên các bước dưới là kế hoạch tự luyện, không phải danh sách câu hỏi thực của tác giả.",
          "Mục tiêu ôn trước lab: Chọn lệnh tạo nhanh và xác minh các trường sinh ra, nhất là label/selector của Service."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Quy trình tự luyện",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Tách yêu cầu thành kind, tên, image, namespace, label và cổng.",
          "Sinh YAML nếu lệnh không biểu diễn đủ mọi chi tiết.",
          "Sau tạo, đọc lại spec và backend để xác nhận thay vì chỉ nhìn created."
        ],
        "code": "kubectl run --help\nkubectl create deployment --help\nkubectl expose --help\n# Mẫu tạo file, chưa tạo Pod:\nkubectl run quick-check --image=nginx:stable \\\n  --dry-run=client -o yaml > quick-check.yaml",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Xác minh và ghi lại kết quả",
        "origin": "practice",
        "paragraphs": [
          "Sau mỗi thay đổi, đọc lại đối tượng live và trạng thái liên quan. Viết ngắn: trước khi sửa thấy gì, đã đổi trường nào, bằng chứng nào cho thấy đạt yêu cầu.",
          "Các lệnh có <…> là placeholder: thay bằng giá trị của đề. Không chạy nguyên ký hiệu này trong shell."
        ],
        "bullets": [
          "Đúng tên và namespace chưa?",
          "Đúng thông số được yêu cầu chưa?",
          "Tài nguyên ready và hành vi có đúng không, hay mới chỉ tồn tại?"
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Điểm dễ nhầm",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "run tạo Pod; create deployment tạo Deployment.",
          "expose đọc nhãn đối tượng nguồn; create service có thể suy selector khác mong muốn.",
          "--dry-run=client không test image pull hoặc readiness."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Ôn lại trước hoặc sau lab",
        "origin": "practice",
        "paragraphs": [
          "Xem lecture 42 để ôn khái niệm; sau khi tự làm, mở video lời giải lecture 45 để đối chiếu cách điều tra. Không dùng giá trị đáp án trong video thay dữ liệu hiện tại của lab."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "25": {
    "lead": "Đọc lại cách giải lab Pod: tập trung quy trình điều tra và xác minh, không học thuộc giá trị đáp án của môi trường mẫu.",
    "sections": [
      {
        "title": "Diễn giải cách giảng viên đi qua lab",
        "origin": "source",
        "paragraphs": [
          "Giảng viên bắt đầu bằng liệt kê Pod, tạo một Pod theo image được yêu cầu, rồi dùng describe để đọc các thông tin không hiện đủ ở bảng get.",
          "Một tình huống nhiều container có image bị sai cho thấy cần xác định container nào lỗi thay vì kết luận cả Pod có cùng nguyên nhân. Video còn sửa một image được tạo sai có chủ ý và kiểm tra Pod trở lại trạng thái mong đợi."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Tách quy trình để tự làm lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "get cho cái nhìn tổng quan; describe/manifest cho thông tin image, node và từng container.",
          "Tìm state.waiting.reason và Events nếu container chưa chạy.",
          "Đối chiếu giá trị live sau sửa; đừng coi file đã lưu là bằng chứng API nhận."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Quan sát",
            "Xác định trạng thái và đối tượng trước thay đổi."
          ],
          [
            "Giả thuyết",
            "Từ Events/spec, chọn nguyên nhân có bằng chứng."
          ],
          [
            "Thay đổi",
            "Sửa đúng trường hoặc controller theo yêu cầu."
          ],
          [
            "Kiểm chứng",
            "Đọc lại trạng thái và thử hành vi liên quan."
          ]
        ]
      },
      {
        "title": "Bộ lệnh quan sát để luyện lại",
        "origin": "practice",
        "paragraphs": [
          "Các lệnh là bộ tự biên soạn từ phương pháp của lời giải. Tên tài nguyên/số lượng phải lấy từ lab hiện tại. Không tuyên bố đây là bản chép nguyên terminal trong video."
        ],
        "bullets": [],
        "code": "kubectl get pods -n <namespace> -o wide\nkubectl describe pod <ten-pod> -n <namespace>\nkubectl get pod <ten-pod> -n <namespace> -o jsonpath='{.spec.containers[*].image}{\"\\n\"}'",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi dễ lặp lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Đọc nhầm tên container thành tên image.",
          "Nhầm READY 1/2 với một Pod trong hai Pod của ReplicaSet.",
          "Xóa Pod độc lập rồi chờ controller chưa từng tồn tại tạo lại."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Bài tự kiểm tra sau khi xem",
        "origin": "practice",
        "paragraphs": [
          "Quay lại lab ở lecture 24, làm lại mà không mở video. Với mỗi câu, nêu một bằng chứng kiểm tra được qua API hoặc hành vi ứng dụng. Nếu chỉ nhớ đáp án mà chưa giải thích được nguyên nhân, quay lại nhóm bài khái niệm."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "28": {
    "lead": "Đọc lại cách giải lab ReplicaSet: tập trung quy trình điều tra và xác minh, không học thuộc giá trị đáp án của môi trường mẫu.",
    "sections": [
      {
        "title": "Diễn giải cách giảng viên đi qua lab",
        "origin": "source",
        "paragraphs": [
          "Video so số replicas mong muốn với số Pod ready, đọc image trong template và tìm lý do image pull thất bại.",
          "Một bước xóa Pod cho thấy ReplicaSet tạo Pod mới. Các phần tiếp theo sửa manifest và thay số replicas, dùng explain khi cần xác nhận API/cấu trúc."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Tách quy trình để tự làm lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Đọc controller rồi xuống Pod con để tìm lỗi thực thi.",
          "Template đúng là điều kiện cho Pod mới; cần quan sát cả Pod hiện có.",
          "Khi scale, xác nhận spec.replicas live và ready replicas, rồi ghi lại thay đổi vào file nếu dùng file làm nguồn."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Quan sát",
            "Xác định trạng thái và đối tượng trước thay đổi."
          ],
          [
            "Giả thuyết",
            "Từ Events/spec, chọn nguyên nhân có bằng chứng."
          ],
          [
            "Thay đổi",
            "Sửa đúng trường hoặc controller theo yêu cầu."
          ],
          [
            "Kiểm chứng",
            "Đọc lại trạng thái và thử hành vi liên quan."
          ]
        ]
      },
      {
        "title": "Bộ lệnh quan sát để luyện lại",
        "origin": "practice",
        "paragraphs": [
          "Các lệnh là bộ tự biên soạn từ phương pháp của lời giải. Tên tài nguyên/số lượng phải lấy từ lab hiện tại. Không tuyên bố đây là bản chép nguyên terminal trong video."
        ],
        "bullets": [],
        "code": "kubectl describe rs <ten-rs> -n <namespace>\nkubectl explain replicaset --api-version=apps/v1\nkubectl get pods -n <namespace> --show-labels\n# Chỉ scale theo con số đề yêu cầu:\n# kubectl scale rs <ten-rs> -n <namespace> --replicas=<so-ban-sao>",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi dễ lặp lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Sai apiVersion của ReplicaSet khác lỗi image trong Pod.",
          "Xóa Pod có thể chỉ tạo thêm một Pod lỗi nếu template vẫn sai.",
          "Không nhận định ReplicaSet không làm việc chỉ vì Pod mới chưa ready."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Bài tự kiểm tra sau khi xem",
        "origin": "practice",
        "paragraphs": [
          "Quay lại lab ở lecture 27, làm lại mà không mở video. Với mỗi câu, nêu một bằng chứng kiểm tra được qua API hoặc hành vi ứng dụng. Nếu chỉ nhớ đáp án mà chưa giải thích được nguyên nhân, quay lại nhóm bài khái niệm."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "32": {
    "lead": "Đọc lại cách giải lab Deployment: tập trung quy trình điều tra và xác minh, không học thuộc giá trị đáp án của môi trường mẫu.",
    "sections": [
      {
        "title": "Diễn giải cách giảng viên đi qua lab",
        "origin": "source",
        "paragraphs": [
          "Giảng viên kiểm tra hiện trạng trước và sau khi Deployment xuất hiện để cho thấy nó sinh ReplicaSet rồi Pod.",
          "Video dùng Pod describe để tìm nguyên nhân Deployment chưa ready do image không hợp lệ, sau đó tạo Deployment mới theo spec và sửa lỗi file khi cần."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Tách quy trình để tự làm lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Bắt đầu bằng inventory của cả Deployment, ReplicaSet và Pod.",
          "Khi Deployment không ready, đi xuống Pod và Events thay vì chỉ sửa replicas.",
          "Tạo theo yêu cầu xong phải đọc lại image và số bản sao thực tế."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Quan sát",
            "Xác định trạng thái và đối tượng trước thay đổi."
          ],
          [
            "Giả thuyết",
            "Từ Events/spec, chọn nguyên nhân có bằng chứng."
          ],
          [
            "Thay đổi",
            "Sửa đúng trường hoặc controller theo yêu cầu."
          ],
          [
            "Kiểm chứng",
            "Đọc lại trạng thái và thử hành vi liên quan."
          ]
        ]
      },
      {
        "title": "Bộ lệnh quan sát để luyện lại",
        "origin": "practice",
        "paragraphs": [
          "Các lệnh là bộ tự biên soạn từ phương pháp của lời giải. Tên tài nguyên/số lượng phải lấy từ lab hiện tại. Không tuyên bố đây là bản chép nguyên terminal trong video."
        ],
        "bullets": [],
        "code": "kubectl get deploy,rs,pods -n <namespace>\nkubectl describe deploy <ten-deployment> -n <namespace>\nkubectl describe pod <ten-pod-con> -n <namespace>\nkubectl rollout status deployment/<ten-deployment> -n <namespace> --timeout=90s",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi dễ lặp lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Deployment có thể đã nhận spec nhưng workload chưa chạy được.",
          "Sửa file sai chưa làm live tự đổi nếu chưa gửi API.",
          "Trộn scale/edit ngoài file dễ khiến lần apply tiếp theo thay đổi trở lại."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Bài tự kiểm tra sau khi xem",
        "origin": "practice",
        "paragraphs": [
          "Quay lại lab ở lecture 31, làm lại mà không mở video. Với mỗi câu, nêu một bằng chứng kiểm tra được qua API hoặc hành vi ứng dụng. Nếu chỉ nhớ đáp án mà chưa giải thích được nguyên nhân, quay lại nhóm bài khái niệm."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "37": {
    "lead": "Đọc lại cách giải lab Service: tập trung quy trình điều tra và xác minh, không học thuộc giá trị đáp án của môi trường mẫu.",
    "sections": [
      {
        "title": "Diễn giải cách giảng viên đi qua lab",
        "origin": "source",
        "paragraphs": [
          "Video khám phá Service có sẵn và giải thích endpoints là các đích thực mà lưu lượng sẽ đi tới, khác cổng của Service.",
          "Giảng viên đối chiếu nhãn và cổng của ứng dụng rồi tạo Service theo yêu cầu. Các cách tạo khác nhau được nhắc để chuẩn bị nhóm imperative command phía sau."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Tách quy trình để tự làm lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Đọc type và các port mapping trước.",
          "Tìm selector rồi đối chiếu Pod cùng namespace.",
          "Xem backend rồi thử đúng địa chỉ/cổng từ vị trí có route phù hợp."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Quan sát",
            "Xác định trạng thái và đối tượng trước thay đổi."
          ],
          [
            "Giả thuyết",
            "Từ Events/spec, chọn nguyên nhân có bằng chứng."
          ],
          [
            "Thay đổi",
            "Sửa đúng trường hoặc controller theo yêu cầu."
          ],
          [
            "Kiểm chứng",
            "Đọc lại trạng thái và thử hành vi liên quan."
          ]
        ]
      },
      {
        "title": "Bộ lệnh quan sát để luyện lại",
        "origin": "practice",
        "paragraphs": [
          "Các lệnh là bộ tự biên soạn từ phương pháp của lời giải. Tên tài nguyên/số lượng phải lấy từ lab hiện tại. Không tuyên bố đây là bản chép nguyên terminal trong video."
        ],
        "bullets": [],
        "code": "kubectl describe svc <ten-service> -n <namespace>\nkubectl get pods -n <namespace> --show-labels\nkubectl get endpointslices -n <namespace> -l kubernetes.io/service-name=<ten-service>",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi dễ lặp lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Service label không tự là selector.",
          "Không có backend có thể do sai nhãn hoặc Pod chưa ready.",
          "Không gọi ClusterIP bằng cổng nodePort và ngược lại."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Bài tự kiểm tra sau khi xem",
        "origin": "practice",
        "paragraphs": [
          "Quay lại lab ở lecture 36, làm lại mà không mở video. Với mỗi câu, nêu một bằng chứng kiểm tra được qua API hoặc hành vi ứng dụng. Nếu chỉ nhớ đáp án mà chưa giải thích được nguyên nhân, quay lại nhóm bài khái niệm."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "40": {
    "lead": "Đọc lại cách giải lab Namespace: tập trung quy trình điều tra và xác minh, không học thuộc giá trị đáp án của môi trường mẫu.",
    "sections": [
      {
        "title": "Diễn giải cách giảng viên đi qua lab",
        "origin": "source",
        "paragraphs": [
          "Giảng viên liệt kê namespace, tìm Pod trong namespace yêu cầu và dùng phạm vi toàn cụm để tìm một Pod chưa biết nằm ở đâu.",
          "Phần cuối dùng hai Service cùng tên ở hai namespace để chọn cách gọi đúng: tên ngắn trong cùng namespace và thêm namespace khi gọi sang môi trường khác."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Tách quy trình để tự làm lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Bắt đầu với namespace của đề, không mặc định default.",
          "Dùng -A để tìm, rồi thu hẹp -n khi chỉnh sửa.",
          "Đọc vị trí của bên gọi và bên nhận trước khi chọn tên DNS."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Quan sát",
            "Xác định trạng thái và đối tượng trước thay đổi."
          ],
          [
            "Giả thuyết",
            "Từ Events/spec, chọn nguyên nhân có bằng chứng."
          ],
          [
            "Thay đổi",
            "Sửa đúng trường hoặc controller theo yêu cầu."
          ],
          [
            "Kiểm chứng",
            "Đọc lại trạng thái và thử hành vi liên quan."
          ]
        ]
      },
      {
        "title": "Bộ lệnh quan sát để luyện lại",
        "origin": "practice",
        "paragraphs": [
          "Các lệnh là bộ tự biên soạn từ phương pháp của lời giải. Tên tài nguyên/số lượng phải lấy từ lab hiện tại. Không tuyên bố đây là bản chép nguyên terminal trong video."
        ],
        "bullets": [],
        "code": "kubectl get namespaces\nkubectl get pods -A\nkubectl get pods -n <namespace>\nkubectl get svc -n <namespace>\n# Ví dụ DNS, không chạy như lệnh shell:\n# <service>.<namespace>.svc.<cluster-domain>",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi dễ lặp lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Tìm thấy tên Pod ở namespace khác chưa có nghĩa câu hỏi đã được trả lời.",
          "Namespace có thể trùng tên một context nhưng không phải cùng đối tượng.",
          "DNS lookup thành công chưa khẳng định giao tiếp ứng dụng được phép."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Bài tự kiểm tra sau khi xem",
        "origin": "practice",
        "paragraphs": [
          "Quay lại lab ở lecture 39, làm lại mà không mở video. Với mỗi câu, nêu một bằng chứng kiểm tra được qua API hoặc hành vi ứng dụng. Nếu chỉ nhớ đáp án mà chưa giải thích được nguyên nhân, quay lại nhóm bài khái niệm."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "45": {
    "lead": "Đọc lại cách giải lab Imperative Commands: tập trung quy trình điều tra và xác minh, không học thuộc giá trị đáp án của môi trường mẫu.",
    "sections": [
      {
        "title": "Diễn giải cách giảng viên đi qua lab",
        "origin": "source",
        "paragraphs": [
          "Video luyện tạo Pod với image và label cụ thể, sau đó expose thành Service. Giảng viên so sánh việc suy selector từ đối tượng với cách sinh Service bằng lệnh create service.",
          "Một điểm cần chú ý là Service phải chọn đúng nhãn được đặt lúc tạo Pod. Việc đúng tên Service và port nhưng selector không khớp vẫn làm bài chưa đạt."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Tách quy trình để tự làm lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Đọc help khi cần xác nhận tùy chọn thay vì nhớ nhầm tên cờ.",
          "Nhìn YAML sinh ra trước nếu Service cần selector hoặc nodePort cụ thể.",
          "Xác minh Pod, Service và backend sau thao tác."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [
          [
            "Quan sát",
            "Xác định trạng thái và đối tượng trước thay đổi."
          ],
          [
            "Giả thuyết",
            "Từ Events/spec, chọn nguyên nhân có bằng chứng."
          ],
          [
            "Thay đổi",
            "Sửa đúng trường hoặc controller theo yêu cầu."
          ],
          [
            "Kiểm chứng",
            "Đọc lại trạng thái và thử hành vi liên quan."
          ]
        ]
      },
      {
        "title": "Bộ lệnh quan sát để luyện lại",
        "origin": "practice",
        "paragraphs": [
          "Các lệnh là bộ tự biên soạn từ phương pháp của lời giải. Tên tài nguyên/số lượng phải lấy từ lab hiện tại. Không tuyên bố đây là bản chép nguyên terminal trong video."
        ],
        "bullets": [],
        "code": "kubectl run labels-demo --image=nginx:stable --labels=tier=frontend \\\n  -n cka-core-demo --dry-run=client -o yaml\n# Với Pod nguồn đã tồn tại trong lab:\nkubectl expose pod <ten-pod> --name=<ten-service> --port=80 \\\n  -n <namespace> --dry-run=client -o yaml",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Lỗi dễ lặp lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Không suy rằng create service luôn tự lấy label của Pod có tên giống.",
          "Khi đề yêu cầu image tag cụ thể, nginx:stable trong sổ tay không phải đáp án thay thế.",
          "Tạo resource nhanh không cho phép bỏ qua bước kiểm tra."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Bài tự kiểm tra sau khi xem",
        "origin": "practice",
        "paragraphs": [
          "Quay lại lab ở lecture 44, làm lại mà không mở video. Với mỗi câu, nêu một bằng chứng kiểm tra được qua API hoặc hành vi ứng dụng. Nếu chỉ nhớ đáp án mà chưa giải thích được nguyên nhân, quay lại nhóm bài khái niệm."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "47": {
    "lead": "Mục khích lệ học tập được giữ đúng thứ tự; không gán nội dung Kubernetes cho một trang hình ảnh.",
    "sections": [
      {
        "title": "Trạng thái nguồn",
        "origin": "source",
        "paragraphs": [
          "Trong phiên đối chiếu, mục này không cung cấp văn bản để đọc, chỉ có nội dung hình ảnh. Sổ tay chưa xác minh được nội dung chữ trong ảnh, nên không tự đặt một bài giảng hay câu trích dẫn vào đây."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Điểm dừng để tự đánh giá",
        "origin": "practice",
        "paragraphs": [
          "Bài ôn ngắn tự biên soạn, độc lập với hình ảnh của tác giả:"
        ],
        "bullets": [
          "Tôi giải thích được API server, etcd, scheduler và kubelet khác nhau thế nào.",
          "Tôi phân biệt Pod, ReplicaSet và Deployment.",
          "Tôi biết Service chọn backend bằng label và namespace.",
          "Tôi biết tìm thông tin trước khi sửa cấu hình."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "48": {
    "lead": "Lời nhắc của giảng viên: hoàn thành mạch video và lab chính trước khi tản ra quá nhiều nguồn.",
    "sections": [
      {
        "title": "Ý chính trong video",
        "origin": "source",
        "paragraphs": [
          "Giảng viên nhắc người học tránh chuyển sang quá nhiều tài liệu bên ngoài khi còn chưa hoàn tất khóa. Video và lab được sắp thành lộ trình, nên học dở nhiều nguồn có thể tạo khoảng trống hoặc làm gián đoạn nhịp thực hành.",
          "Điều này không cấm tra cứu khi cần. Với ghi chú phiên bản của sổ tay, bạn vẫn nên kiểm tra tài liệu chính thức trước khi áp dụng lệnh cũ vào môi trường mới."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Áp dụng cho buổi học này",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Làm hết nhóm lab của chủ đề đang học trước khi đổi sang chủ đề mới.",
          "Đánh dấu câu chưa hiểu và quay lại đúng lecture nguồn.",
          "Tách lỗi khái niệm, lỗi lệnh và lỗi môi trường trong ghi chú của bạn.",
          "Dùng lời giải sau một lượt tự làm, rồi luyện lại độc lập."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Cách kết thúc Section 2",
        "origin": "practice",
        "paragraphs": [
          "Chọn một ví dụ tự tạo: Deployment có hai Pod, Service chọn đúng nhãn, mọi đối tượng ở namespace lab. Tự giải thích luồng từ file YAML tới Pod và từ client tới Service; sau đó đối chiếu các bài cần ôn. Đây là bài tổng kết do sổ tay đặt, không phải yêu cầu của video."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "49": {
    "lead": "Kho ghi chú và nguồn tham khảo chính thức của tác giả cho các bài và lab.",
    "sections": [
      {
        "title": "Nội dung bài đọc",
        "origin": "source",
        "paragraphs": [
          "Bài nguồn dẫn tới repository của KodeKloud, nơi có ghi chú, đường dẫn tài liệu và nội dung hỗ trợ bài tập. Nó là điểm tham chiếu theo tiến trình học, không phải một video triển khai mới."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Cách dùng để ôn lại",
        "origin": "practice",
        "paragraphs": [],
        "bullets": [
          "Tìm phần ghi chú tương ứng với lecture đang học, không chỉ đọc file đầu tiên trong repository.",
          "Tự làm lab trước rồi mới đối chiếu lời giải.",
          "Nếu câu lệnh trong repository và môi trường khác nhau, kiểm tra phiên bản API/client và thông báo cập nhật.",
          "Ghi lại lý do sửa thay vì sao chép đáp án vào source cá nhân."
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      },
      {
        "title": "Nguồn để mở",
        "origin": "source",
        "paragraphs": [
          "Repository được bài đọc liên kết:"
        ],
        "bullets": [
          "https://github.com/kodekloudhub/certified-kubernetes-administrator-course"
        ],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": [],
        "url": "https://github.com/kodekloudhub/certified-kubernetes-administrator-course"
      },
      {
        "title": "Bài tổng kết tự biên soạn",
        "origin": "practice",
        "paragraphs": [
          "Không mở lời giải, hãy trình bày: ai lưu trạng thái, ai schedule, ai chạy container, vì sao Deployment tạo ReplicaSet, Service chọn Pod bằng gì, và namespace ảnh hưởng thao tác ra sao. Với câu chưa trả lời được, trở lại đúng nhóm bài của Section 2."
        ],
        "bullets": [],
        "code": "",
        "rows": [],
        "headers": [],
        "flow": []
      }
    ],
    "edition": "section2-detailed-1"
  },
  "7": {
    "lead": "Theo dấu một Pod từ khai báo tới node thực thi; tách rõ ai quyết định, ai lưu và ai chạy.",
    "html": "<section id=\"s2-concept\"><span class=\"label\">DIỄN GIẢI VIDEO</span><h2><span class=\"num\">01</span> Hai nhóm trách nhiệm trong cụm</h2><div class=\"body\"><p>Một cluster gồm các node vật lý hoặc máy ảo. <strong>Control plane</strong> giữ trạng thái và đưa ra quyết định điều phối; các node chạy workload cung cấp nơi thực thi container. “Quyết định chạy ở đâu” và “thực sự làm cho ứng dụng chạy” là hai công việc khác nhau.</p><p>Hãy đặt câu hỏi theo trách nhiệm: yêu cầu đi vào qua đâu, trạng thái được lưu ở đâu, ai chọn node, rồi ai quản lý container trên node đó? Cách đọc này giúp bạn tìm đúng thành phần khi ứng dụng không chạy.</p></div><div class=\"table-wrap\"><table><thead><tr><th>Thành phần</th><th>Vai trò cần nhớ</th></tr></thead><tbody><tr><td>kube-apiserver</td><td>Cửa API để người dùng và thành phần cụm đọc, thay đổi tài nguyên.</td></tr><tr><td>etcd</td><td>Lưu trạng thái cụm; không phải kho chứa dữ liệu ứng dụng trên volume.</td></tr><tr><td>kube-scheduler</td><td>Chọn node cho Pod chưa được gán node, theo tài nguyên và ràng buộc.</td></tr><tr><td>kube-controller-manager</td><td>Chạy các vòng điều khiển để điều chỉnh trạng thái thực tế về trạng thái mong muốn.</td></tr><tr><td>kubelet</td><td>Agent trên node, phối hợp runtime để quản lý các Pod được giao.</td></tr><tr><td>Container runtime</td><td>Thực hiện thao tác chạy container; ví dụ containerd hoặc CRI-O.</td></tr><tr><td>kube-proxy</td><td>Trong triển khai dùng kube-proxy, thiết lập cơ chế chuyển lưu lượng Service tới backend.</td></tr></tbody></table></div><p class=\"sources\">Bảng vai trò được làm rõ theo <a href=\"https://kubernetes.io/docs/concepts/overview/components/\" target=\"_blank\" rel=\"noopener\">Kubernetes Components</a>. Control plane cũng có thể chạy dưới dạng Pod trên các node; cách chia ở đây mô tả trách nhiệm, không khẳng định node control plane không chạy container.</p></section>\n<section id=\"s2-analogy\"><span class=\"label\">VÍ DỤ GIẢNG VIÊN DÙNG · DIỄN GIẢI</span><h2><span class=\"num\">02</span> Hình dung một đội tàu chở hàng</h2><div class=\"body\"><p>Giảng viên dùng tàu hàng và tàu điều phối để giải thích vì sao “có máy chạy container” chưa đủ. Đội tàu còn cần biết chỗ nào còn sức chứa, kiện hàng nằm ở đâu và ai chịu trách nhiệm xử lý khi có sự cố.</p></div><div class=\"table-wrap\"><table><thead><tr><th>Trong ví dụ tàu hàng</th><th>Liên hệ Kubernetes</th></tr></thead><tbody><tr><td>Tàu chở hàng</td><td>Node cung cấp tài nguyên để chứa workload.</td></tr><tr><td>Tàu điều phối</td><td>Nhóm chức năng control plane quản lý toàn đội.</td></tr><tr><td>Hồ sơ hàng và tàu</td><td>etcd giữ thông tin trạng thái cần theo dõi.</td></tr><tr><td>Chọn tàu đủ điều kiện</td><td>Scheduler cân nhắc khả năng và ràng buộc trước khi chọn node.</td></tr><tr><td>Các bộ phận chuyên trách</td><td>Controller theo dõi từng loại đối tượng hoặc điều kiện.</td></tr><tr><td>Thuyền trưởng</td><td>Kubelet quản lý công việc trên node và báo tình trạng.</td></tr></tbody></table></div><div class=\"note\"><b>ĐỪNG HIỂU VÍ DỤ QUÁ SÁT NGHĨA</b>Scheduler chọn nơi đặt Pod; nó không trực tiếp “bốc container” hoặc chạy image. Cần thêm kubelet và runtime để thực thi. Đây là điểm làm rõ khi chuyển từ hình ảnh minh họa sang cơ chế kỹ thuật.</div></section>\n<section id=\"s2-flow\"><span class=\"label practice\">GIẢI THÍCH BỔ SUNG · KHÔNG PHẢI DEMO TRONG VIDEO</span><h2><span class=\"num\">03</span> Theo dấu một Pod từ đầu đến cuối</h2><div class=\"body\"><p>Giả sử tạo trực tiếp một Pod tên <code>web</code>, chưa đặt <code>nodeName</code>. Bấm từng bước để theo dõi đường điều khiển. Sơ đồ rút gọn các trao đổi, không biểu diễn mọi API call hay thứ tự thời gian tuyệt đối.</p></div><div class=\"flow\"><div class=\"flow-nodes\" aria-label=\"Các bước tạo Pod\"><button class=\"node\" data-architecture-step=\"0\" aria-pressed=\"true\"><small>BƯỚC 01</small>kubectl → API</button><button class=\"node\" data-architecture-step=\"1\" aria-pressed=\"false\"><small>BƯỚC 02</small>API → etcd</button><button class=\"node\" data-architecture-step=\"2\" aria-pressed=\"false\"><small>BƯỚC 03</small>Scheduler chọn node</button><button class=\"node\" data-architecture-step=\"3\" aria-pressed=\"false\"><small>BƯỚC 04</small>Kubelet tiếp nhận</button><button class=\"node\" data-architecture-step=\"4\" aria-pressed=\"false\"><small>BƯỚC 05</small>Runtime thực thi</button><button class=\"node\" data-architecture-step=\"5\" aria-pressed=\"false\"><small>BƯỚC 06</small>Trạng thái quay về</button></div><div class=\"flow-detail\" aria-live=\"polite\"><h3 id=\"s2-flow-title\"></h3><p id=\"s2-flow-text\"></p></div><div class=\"flow-controls\"><button id=\"s2-prev-step\">← Bước trước</button><span id=\"s2-step-count\"></span><button id=\"s2-next-step\">Bước tiếp →</button></div></div><div class=\"note\"><b>CONTROLLER NẰM Ở ĐÂU TRONG VÍ DỤ NÀY?</b>Ví dụ tạo Pod trực tiếp nên không có Deployment/ReplicaSet đứng ra duy trì số bản sao. Nếu tạo Deployment, controller sẽ tạo và quản lý các đối tượng phía dưới; Pod sau đó vẫn đi qua scheduling và kubelet. Đừng mặc định xóa Pod trực tiếp thì lúc nào cũng có Pod thay thế.</div><p class=\"sources\">Đối chiếu <a href=\"https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/\" target=\"_blank\" rel=\"noopener\">kube-scheduler</a> và <a href=\"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/\" target=\"_blank\" rel=\"noopener\">Pod Lifecycle</a>.</p></section>\n<section id=\"s2-lab\"><span class=\"label practice\">LAB TỰ BIÊN SOẠN</span><h2><span class=\"num\">04</span> Tạo Pod và tìm dấu vết từng thành phần</h2><div class=\"body\"><p><strong>Mục tiêu:</strong> quan sát node được chọn, sự kiện kéo image và khởi chạy container. Cần một cluster lab đang hoạt động, có quyền tạo Namespace/Pod và khả năng lấy image. Trang này chỉ hiển thị lệnh, không chạy lệnh trên máy của bạn.</p><div class=\"labstep\"><h3>Bước A · Xác nhận cụm đang dùng</h3><div class=\"codebox\"><button class=\"copy\" data-rich-copy aria-label=\"Sao chép đoạn mã\">Sao chép</button><pre><code>kubectl config current-context\nkubectl get nodes -o wide</code></pre></div><p>Context phải là cụm lab bạn định dùng. Cần có node <code>Ready</code> đủ điều kiện nhận Pod; nếu chỉ có control plane bị taint, Pod có thể chưa được schedule.</p></div><div class=\"labstep\"><h3>Bước B · Lưu manifest</h3><p>Tạo file <code>architecture-demo.yaml</code> với nội dung dưới. Namespace riêng giúp nhận diện tài nguyên của ví dụ. CPU request <code>100m</code> là 0,1 CPU; <code>64Mi</code> là lượng memory yêu cầu. Đây là thông tin scheduler cân nhắc, không phải giới hạn sử dụng tối đa.</p><div class=\"codebox\"><button class=\"copy\" data-rich-copy aria-label=\"Sao chép đoạn mã\">Sao chép</button><pre><code>apiVersion: v1\nkind: Namespace\nmetadata:\n  name: cka-architecture-demo\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: web\n  namespace: cka-architecture-demo\n  labels:\n    app: web\nspec:\n  containers:\n    - name: nginx\n      image: nginx:stable\n      ports:\n        - containerPort: 80\n      resources:\n        requests:\n          cpu: 100m\n          memory: 64Mi\n</code></pre></div><p>Không khai báo <code>nodeName</code> để scheduler tự chọn node. <code>containerPort: 80</code> mô tả cổng container; nó chưa tạo Service hoặc mở cổng ra ngoài cụm.</p></div><div class=\"labstep\"><h3>Bước C · Gửi yêu cầu và quan sát</h3><div class=\"codebox\"><button class=\"copy\" data-rich-copy aria-label=\"Sao chép đoạn mã\">Sao chép</button><pre><code>kubectl apply -f architecture-demo.yaml\nkubectl get pods -n cka-architecture-demo -o wide --watch</code></pre></div><p>Dùng <code>Ctrl+C</code> để dừng theo dõi. Pod có thể chuyển trạng thái quá nhanh để bạn thấy từng bước; xem Events và Conditions để tìm dấu vết đã xảy ra.</p></div><div class=\"labstep\"><h3>Bước D · Kiểm tra thay vì chỉ nhìn Running</h3><div class=\"codebox\"><button class=\"copy\" data-rich-copy aria-label=\"Sao chép đoạn mã\">Sao chép</button><pre><code>kubectl describe pod web -n cka-architecture-demo\nkubectl get events -n cka-architecture-demo \\\n  --field-selector involvedObject.name=web \\\n  --sort-by=.metadata.creationTimestamp\nkubectl wait --for=condition=Ready pod/web \\\n  -n cka-architecture-demo --timeout=90s</code></pre></div><ul><li><strong>Node:</strong> đã được gán tên node; đối chiếu cột NODE từ đầu ra <code>-o wide</code>.</li><li><strong>PodScheduled:</strong> cho biết bước gán node đã thành công. Nó không chứng minh container đã khởi động.</li><li><strong>Events:</strong> có thể gặp Scheduled, Pulling/Pulled, Created, Started. Thông điệp và thời gian lưu Events phụ thuộc môi trường.</li><li><strong>Ready:</strong> trong ví dụ chưa có readiness probe riêng. Trạng thái này chưa chứng minh ứng dụng đáp ứng mọi kiểm tra nghiệp vụ.</li></ul><p>Lệnh <code>wait</code> hết thời gian không xóa Pod. Khi đó đọc <code>describe</code> để tìm lỗi ở scheduling, image, runtime hoặc cấu hình.</p></div><div class=\"labstep\"><h3>Bước E · Kiểm tra HTTP bằng cổng chuyển tiếp</h3><div class=\"codebox\"><button class=\"copy\" data-rich-copy aria-label=\"Sao chép đoạn mã\">Sao chép</button><pre><code>kubectl port-forward -n cka-architecture-demo pod/web 8080:80\n# Giữ terminal này mở. Ở terminal khác:\ncurl -I http://127.0.0.1:8080</code></pre></div><p>Kỳ vọng nhận phản hồi HTTP thành công từ NGINX. <strong>Port-forward không kiểm tra đường đi qua Service hoặc kube-proxy</strong>; lab này chưa tạo Service. Dừng port-forward bằng <code>Ctrl+C</code>.</p></div><h3>Checklist kết quả</h3><ul class=\"checks\"><li><label><input type=\"checkbox\"> Tôi biết Pod nằm trên node nào và tìm được bằng chứng.</label></li><li><label><input type=\"checkbox\"> Tôi phân biệt được Scheduled với Started/Ready.</label></li><li><label><input type=\"checkbox\"> Tôi nhận được phản hồi HTTP qua port-forward.</label></li><li><label><input type=\"checkbox\"> Tôi giải thích được vì sao lab này chưa kiểm tra kube-proxy.</label></li></ul><details><summary>Dọn tài nguyên của lab này</summary><p>Lệnh sau xóa Namespace <code>cka-architecture-demo</code> và mọi tài nguyên bên trong. Chỉ dùng nếu namespace đó dành riêng cho ví dụ này.</p><div class=\"codebox\"><button class=\"copy\" data-rich-copy aria-label=\"Sao chép đoạn mã\">Sao chép</button><pre><code>kubectl delete namespace cka-architecture-demo</code></pre></div></details><p class=\"sources\">Các lệnh là bài tập bổ sung, chưa được chạy trên cluster của bạn. Không có đầu ra thực tế được gán thành kết quả đã kiểm thử.</p></div></section>\n<section id=\"s2-mistakes\"><span class=\"label practice\">TỔNG HỢP ĐỂ TỰ ÔN</span><h2><span class=\"num\">05</span> Những điểm dễ nhầm và cách phân biệt</h2><div class=\"body\"><details open><summary>Pod Pending: scheduler hỏng hay chưa đủ điều kiện?</summary><p>Đọc Events trước. <code>FailedScheduling</code> có thể do thiếu tài nguyên, taint, affinity hoặc các điều kiện khác. Đừng kết luận scheduler hỏng chỉ từ chữ Pending; Pod cũng có thể đã được gán node nhưng còn chờ chuẩn bị container.</p></details><details><summary>Đã có node mà vẫn ImagePullBackOff</summary><p>Việc chọn node đã qua. Kiểm tra tên/tag image, quyền truy cập registry và kết nối từ node. Sửa scheduler không xử lý lỗi pull image. Dòng Events trong describe thường cho biết lỗi cụ thể hơn.</p></details><details><summary>API server chạy thì ứng dụng tự chạy được?</summary><p>API nhận và lưu yêu cầu chưa đủ. Pod còn cần được schedule và kubelet/runtime thực hiện. Ngược lại, API tạm thời không truy cập được cũng không có nghĩa mọi container đang chạy lập tức dừng.</p></details><details><summary>Không thấy kube-apiserver trong kube-system</summary><p>Trên cụm kubeadm, nhiều thành phần control plane xuất hiện dưới dạng mirror Pod của static Pod. Cụm được quản lý hoặc cài kiểu khác có thể không cho bạn thấy chúng như vậy. Không kết luận thành phần vắng mặt chỉ vì một lệnh liệt kê Pod không thấy.</p></details><details><summary>kube-proxy tạo toàn bộ mạng của Pod?</summary><p>Không. Mạng Pod và cơ chế chuyển tiếp Service là các phần khác nhau. CNI/network implementation thiết lập kết nối Pod; kube-proxy, khi được dùng, xử lý lớp Service. Một số giải pháp mạng có thể thay thế chức năng kube-proxy.</p></details></div><div class=\"quiz\"><span class=\"eyebrow\">TỰ KIỂM TRA · TỰ BIÊN SOẠN</span><h3>Pod đã có Node, nhưng Events báo lỗi lấy image. Nên kiểm tra gì trước?</h3><div class=\"answers\"><button data-answer=\"0\">A · Xóa scheduler vì nó đã chọn sai node</button><button data-answer=\"1\">B · Tên image, registry, credential và kết nối từ node</button><button data-answer=\"2\">C · Tăng replicas để mọi Pod tự hết lỗi</button></div><p id=\"s2-feedback\" role=\"status\">Chọn một đáp án để xem giải thích.</p></div></section>\n<section id=\"s2-updates\"><span class=\"label update\">NGUỒN &amp; ĐỐI CHIẾU PHIÊN BẢN</span><h2><span class=\"num\">06</span> Phần nào đến từ đâu?</h2><div class=\"table-wrap\"><table><thead><tr><th>Phạm vi</th><th>Cách sử dụng nguồn</th></tr></thead><tbody><tr><td>Video lecture 7</td><td>Ý tưởng phân chia trách nhiệm, tổng quan thành phần và ví dụ tàu hàng. Diễn giải tiếng Việt, không phải transcript hoặc bản dịch nguyên văn.</td></tr><tr><td>Tự biên soạn</td><td>Luồng tương tác, YAML, lệnh, checklist, cách khoanh vùng lỗi và câu hỏi ôn tập. Không gán thành demo trong video.</td></tr><tr><td>Tài liệu hiện hành</td><td>Làm rõ runtime qua CRI, vai trò kube-proxy, scheduler và vòng đời Pod. Liên kết ngay cạnh phần tương ứng.</td></tr></tbody></table></div><div class=\"body\"><div class=\"update-box\"><h3>Runtime: đọc ví dụ Docker theo bối cảnh</h3><p>Video nhắc Docker và các runtime khác trong phần tổng quan. Kubernetes hiện yêu cầu runtime hỗ trợ CRI; Docker Engine cần lớp tích hợp phù hợp như cri-dockerd. Image xây bằng Docker vẫn có thể chạy với runtime tương thích.</p><p class=\"sources\"><a href=\"https://kubernetes.io/docs/concepts/containers/cri/\" target=\"_blank\" rel=\"noopener\">Container Runtime Interface · Kubernetes ↗</a></p></div><div class=\"update-box\"><h3>kube-proxy: thành phần có thể được thay thế</h3><p>Không phải mọi cụm đều phải có process kube-proxy. Một số network implementation đảm nhiệm lớp Service bằng cơ chế khác. Khi tìm lỗi, xác định giải pháp thực tế trước khi đi tìm Pod kube-proxy.</p><p class=\"sources\"><a href=\"https://kubernetes.io/docs/concepts/services-networking/service/\" target=\"_blank\" rel=\"noopener\">Service · Kubernetes ↗</a></p></div><p class=\"sources\">Nguồn Udemy đối chiếu từ phụ đề đã truy cập ngày 05/11/2026. Tài liệu chính thức được kiểm tra khi biên soạn trang mẫu. Tag <code>nginx:stable</code> có thể trỏ tới image khác theo thời gian; ví dụ không cố định phiên bản image hoặc phiên bản cluster.</p></div></section>",
    "edition": "section2-detailed-1"
  }
};
