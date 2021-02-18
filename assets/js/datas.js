let skills = [];
let educations = [];
let experiences = [];
let projects = [];
let certificates = [];
let referencePersons = [];

let shortTaget = "Phải vượt qua được vòng phỏng vấn và trở thành nhân viên chính thức của công ty. Hòa nhập với môi trường làm việc mới trong vòng 2 tuần. Tìm tòi và học tập từ đàn anh/chị để hoàn thành tốt các công việc được giao và trở thành Junior trong 3 tháng. Luyện anh văn thành thạo trong 6 tháng.";
let longTaget = "Tham gia vào nhiều dự án tầm trung và lớn để phát triển thêm các kiến thức và kỹ năng để trở thành Senior trong 4 năm. Tiếp tục phấn đấu thành Leader trong 3 năm và thành Manager trong 2 năm tiếp theo.";
let introduce = "Là một người có niềm đam mê với lập trình và toán học. Có khả năng tự tìm kiếm và học tập khá cao.";
let character = "Hiền lành, vui vẻ, thẳng thắng, cầu tiến và có tinh thần trách nhiệm."

var person = {}
person.id = 1;
person.avatar = "assets/img/image0.jpeg";
person.name = "Võ Long";
person.gender = "Nam";
person.dob = "24/01/1995";
person.level = "Cao đẳng"

let contacts = new Contacts(1, "0327 865 438", "volong24071995@gmail.com", "Phú Đa, Phú Vang,TT Huế", "https://maps.google.com/maps?q=UBND%20Th%E1%BB%8B%20Tr%E1%BA%A5n%20Ph%C3%BA%20%C4%90a%20Ph%C3%BA%20Vang%20TT%20hu%E1%BA%BF&t=&z=13&ie=UTF8&iwloc=&output=embed", 1);
person.contacts = contacts;

person.gitHub = "https://github.com/volong24071995";
person.character = character;
person.interests = "Chơi game league of legends và suduku, nghe nhạc, xem phim hoạt hình.";
person.shortTaget = shortTaget;
person.longTaget = longTaget;
person.introduce = introduce;

let html_css_js = new Skill(1, "HTML, CSS, JAVASCRIPT, BOOTSTRAP", 40, 1);
let java_core = new Skill(2, "JAVA CORE", 45, 1);
let servlet_spring = new Skill(3, "JAVA SERVLET, SPRING FRAMEWORK", 50, 1);
let ajax_jquery = new Skill(4, "AJAX, JQUERY", 50, 1);
let database = new Skill(5, "MYSQL, POSTGRESQL", 40, 1);
let scrum_git = new Skill(6, "SCRUM, GIT", 40, 1);
let kanban = new Skill(7, "PERSONAL KANBAN", 50, 1);
let teamwork_search = new Skill(8, "TEAMWORK, SEARCH", 60, 1);

skills.push(html_css_js, java_core, servlet_spring, ajax_jquery, database, scrum_git, kanban, teamwork_search);
person.skills = skills;

let nursing = new Education(1, "2015 - 2018", "Cao đẳng y tế Huế", "Chuyên ngành: Điều dưỡng đa khoa", "Sinh viên giỏi toàn khóa", 1);
let technology = new Education(2, "7/2020 - Hiện tại", "CODEGYM HUẾ", "Khóa học: Java Bootcamp", "", 1);

educations.push(nursing, technology);
person.educations = educations;

let exps = [];
let exp1 = "Từ một người không biết gì về lập trình sau 1 tháng đã có thể sử dụng HTML, CSS, JavaScript để tạo một website cơ bản. Trong thời gian này bản thân đã biết quản lý mã nguồn bằng Github, thu nhặt cho bản thân khả năng tìm kiếm thông tin và quản lí công việc.";
let exp2 = "Tiếp đó được hướng dẫn các kiến thức cơ bản cho đến nâng cao về ngôn ngữ Java để xây dựng ứng dụng backend. Sau 3 tháng đã sử dụng công nghệ JSP/ Servlet, Framework Spring MVC xây dựng được website quản lý và bán hàng và bản thân đã biết quản lý công việc bằng Product Backlog.";
let exp3 = "Trong tháng tiếp theo được biết thêm công nghệ Spring Boot để rồi cùng hai thành viên khác tạo thành nhóm xây dựng nên ứng dụng web quản lý và bán hàng online. Từ đó thu nhặt được kĩ năng làm việc nhóm cho bản thân mình, rút ra được tinh thần đồng đội và tinh thần trách nhiệm với công việc mình đã và đang làm.";

exps.push(exp1, exp2, exp3);
let codeGym = new Experience(1, "7/2020 - Hiện tại", "CODEGYM HUẾ", "Học viên", exps, 1);
experiences.push(codeGym);
person.experiences = experiences;

let project1 = new Project(1, "Web bán vật tư y tế", "assets/img/portfolio/khovattuyte1.png", "assets/img/portfolio/khovattuyte2.png", "portfolio-details1.html", 1);
let project2 = new Project(2, "Web bán trang thiết bị điện tử", "assets/img/portfolio/thietbidientu1.png", "assets/img/portfolio/thietbidientu2.png", "portfolio-details2.html", 1);
let project3 = new Project(3, "Shop bán dụng cụ âm nhạc online", "assets/img/portfolio/dungcuamnhac1.png", "assets/img/portfolio/dungcuamnhac2.png", "portfolio-details3.html", 1);

projects.push(project1, project2, project3);
person.projects = projects;

let description_hoccachhoc = "Giúp bản thân tiếp thu kiến thức nhanh hơn, dễ dàng hơn.";
let description_kanban = "Là một phương pháp giúp quản lý quy trình làm việc bằng việc hiển thị các hạng mục công việc trong từng giai đoạn của quá trình từ việc cần làm, đang làm và đã hoàn thành. Trực quan hóa quy trình và giới hạn lượng công việc thực tế đi qua quy trình đó. Phương pháp này giúp bản thân hoàn thành tốt quy trình của dự án.";
let description_scrum = "Là một quy trình quản lý và phát triển theo phương pháp phát triển linh hoạt (Agile) tập trung đặc biệt vào việc quản lý các công việc trong một môi trường phát triển theo nhóm. Srum giúp bản thân biết làm việc theo nhóm và quản lý công việc tốt."

let hoccachhoc = new Certificate(1, "Học cách học", "7 ngày", description_hoccachhoc, "", "icofont-computer", 1);
let do_kanban = new Certificate(2, "Hoàn thành mọi việc với Kanban", "7 ngày", description_kanban, "", "icofont-chart-bar-graph", 1);
let scrum = new Certificate(2, "Scrum Essence", "7 ngày", description_scrum, "http://bit.ly/39Gt6Qd", "icofont-earth", 1);

certificates.push(hoccachhoc, do_kanban, scrum);
person.certificates = certificates;

let NguyenHuuAnhKhoa = new ReferencePerson(1, "Nguyễn Hữu Anh Khoa", "assets/img/testimonials/AnhKhoa.png", "Giám đốc đào tạo chi nhánh Huế", "CODEGYM VIETNAM JSC", "0935.216.417", "khoa.nguyen@codegym.vn", 1);
let LeTuongPhuc = new ReferencePerson(2, "Lê Tường Phúc", "assets/img/testimonials/AnhPhuc.png", "Giám đốc chi nhánh Huế", "CODEGYM VIETNAM JSC", "0983.339.720", "phuc.le@codegym.vn", 1);

referencePersons.push(NguyenHuuAnhKhoa, LeTuongPhuc);
person.referencePersons = referencePersons;