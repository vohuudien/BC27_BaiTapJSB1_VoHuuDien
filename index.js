//Bài 1 
// input: tiền lương mỗi ngày và số ngày làm
// process: 
// B1: đặt biến salaryPerDay là số tiền lương một ngày và workDay là số ngày làm, cuối cùng là biến Salary là lương của nhân viên
// B2: gán giá trị cho biến salaryPerDay và workDay
// B3: sử dụng công thức salary = salaryDay * workday
// B4: in ra kết quả Console
// Output: Tiền lương nhân viên

var salaryPerDay = 100000;
var workday = 26;
var salary = salaryPerDay * workday;
console.log("Tiền lương nhân viên là",salary);

//Bài 2
// input: 5 số thực
// Process:
//B1: Đặt biến cho lần lượt 5 số thực từ realNumber1 đến realNumber5 và biến average là giá trị trung bình của 5 số thực trên
//B2: Gán giá trị cho 5 số thực
//B3: Sử dụng công thức average = (realNumber1 + realNumber2 + realNumber3 +realNumber4+realNumber5)/5
//B4: in ra kết quả Console
// Output: Giá trị trung bình của 5 số thực
var realNumber1 = 1.1;
var realNumber2 = 2.3;
var realNumber3 = 3.3;
var realNumber4 = 4.4;
var realNumber5 = 5.5;
var average = (realNumber1 + realNumber2 + realNumber3 +realNumber4+realNumber5)/5;
console.log("Giá trị trung bình của 5 số thực là", average);

//Bài 3:
//input: tỉ giá USD hiện nay và số tiền người dùng muốn quy đổi
//process:
//B1: Đặt biến cho tỉ giá USD hiện nay là dollarRate và số tiền người dùng muốn quy đổi là moneyOfUser, cuối cùng là exchangeCost là số tiền được quy đổi 
//B2: gán giá trị cho 2 biến vừa đặt
//B3: Sử dụng công thức exchangeCost =dollarRate * moneyOfUser
//B4: In ra kết quả Console
//Output: Số tiền sau khi quy đổi
var dollarRate = 23500;
var moneyOfUser = 5;
var exchangeCost = dollarRate * moneyOfUser;
console.log("Số tiền sau khi quy đổi là", exchangeCost,"VNĐ");

//Bài 4:
//input: chiều dài và chiều rộng
//process:
//B1: đặt biến 
// +chieuDai: là chiều dài hình chữ nhật
// +chieuRong: là chiều rộng Hình chữ nhật
// +dienTich: là diện tích hình chữ nhật
// +chuVi: là chu vi hình chữ nhật
//B2: gán giá trị cho biến chieuDai và chieuRong
//B3: Sử dụng công thức dienTich = chieuDai * chieuRong và chuVi = (chieuDai + chieuRong)*2
//B4: in ra kết quả Console
//Output: Diện tích và chu vi hình chữ nhật

var chieuDai = 5;
var chieuRong = 3;
var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong)*2;
console.log("Hình Chữ Nhật có diện tích bằng",dienTich,"và Chu vi bằng",chuVi);

//Bài 5:
//input: 1 số có hai chữ số
//process: 
//B1: đặt biến
// + numberUser là số có hai chữ số mà người dùng nhập
// + soHangDonVi là số hàng đơn vị
// + soHangChuc là số hàng chục
// + sum là tổng của số hàng đơn vị và số hàng chục
//B2: gán giá trị cho numberUser
//B3: sử dụng công thức soHangDonVi = numberUser % 10 và soHangChuc = (numberUser - soHangDonVi)/10,sum = soHangChuc + soHangDonVi
//B4: in ra kết quả Console
//Output: Tổng hai ký số vừa nhập 
var numberUser = 23;
var soHangDonVi = numberUser % 10;
var soHangChuc = (numberUser - soHangDonVi)/10;
var sum = soHangChuc + soHangDonVi;
console.log("Tổng hai ký số vừa nhập là",sum)