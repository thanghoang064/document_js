function checkDogs(dogsJulia, dogsKate) {
    // Tạo bản sao của mảng dogsJulia và xoá tuổi mèo
     const juliaCopy = [...dogsJulia]; 
     juliaCopy.splice(0,1);
     juliaCopy.splice(-2); // xóa 2 phần tử cuối cùng của mảng
     console.log(juliaCopy);
    // juliaCopy.splice(catIndex, 1);
    // juliaCopy.pop();
    // const juliaCopy = dogsJulia;
    // Tạo mảng chứa dữ liệu của Julia (đã sửa) và Kate
    const combinedArray = juliaCopy.concat(dogsKate);
  
    // Kiểm tra trạng thái của mỗi con chó còn lại
    combinedArray.forEach((age, index) => {
      if (age >= 3) {
        console.log(`Chó số ${index + 1} là người lớn và ${age} tuổi`);
      } else {
        console.log(`Chó số ${index + 1} vẫn là chó con 🐶`);
      }
    });
  }
  
  // Test Data 1
  const dogsJulia = [3, 5, 2, 12, 7];
  const dogsKate = [4, 1, 15, 8, 3];
  checkDogs(dogsJulia, dogsKate);
  
  // Test Data 2
//   const dogsJulia = [9, 16, 6, 8, 3];
//   const dogsKate = [10, 5, 6, 1, 4];
//   checkDogs(dogsJulia, dogsKate);

function calcAverageHumanAge(ages) {
    // Tính tuổi người tương ứng với tuổi của chó
    const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
    //map tạo ra 1 mảng mới 
    // Lọc ra chỉ những chó có tuổi lớn hơn 18
    const filteredAges = humanAges.filter(age => age >= 18);
    //lọc từ mảng gốc 
    // Tính tuổi trung bình của các chó trưởng thành
    const averageAge = filteredAges.reduce((sum, age) => sum + age, 0) / filteredAges.length;
  
    return averageAge;
  }
  
  // Test Data 1
  const ages1 = [5, 2, 4, 1, 15, 8, 3];
  const averageAge1 = calcAverageHumanAge(ages1);
  console.log(`Tuổi trung bình của chó theo tuổi người là: ${averageAge1} tuổi`);
  
  // Test Data 2
  const ages2 = [16, 6, 10, 5, 6, 1, 4];
  const averageAge2 = calcAverageHumanAge(ages2);
  console.log(`Tuổi trung bình của chó theo tuổi người là: ${averageAge2} tuổi`);


  
// Trong đoạn mã const averageAge = filteredAges.reduce((sum, age) => sum + age, 0) / filteredAges.length;, chúng ta sử dụng phương thức reduce() để tính tuổi trung bình của các chó trưởng thành.

// Phương thức reduce() được sử dụng để tích lũy giá trị từ các phần tử của mảng thành một giá trị duy nhất. Trong trường hợp này, chúng ta tích lũy tổng của các phần tử trong mảng filteredAges.

// Đối số đầu tiên của reduce() là một hàm gọi là hàm reducer, được áp dụng lần lượt cho từng phần tử của mảng. Trong hàm reducer này, chúng ta có hai tham số là sum và age. sum là giá trị tích lũy từ các lần thực hiện trước đó, và age là giá trị của phần tử hiện tại. Trong hàm này, chúng ta thực hiện phép cộng giữa sum và age để tích lũy tổng các phần tử.

// Đối số thứ hai của reduce() là giá trị khởi đầu của sum, được đặt là 0 trong trường hợp này.

// Kết quả cuối cùng của reduce() sẽ là tổng của các phần tử trong mảng filteredAges. Sau đó, chúng ta chia tổng này cho độ dài của mảng filteredAges bằng cách sử dụng filteredAges.length để tính tuổi trung bình.

// Kết quả cuối cùng được gán cho biến averageAge, là tuổi trung bình của các chó trưởng thành.

// Ví dụ, nếu mảng filteredAges ban đầu là [36, 32, 18, 76, 48, 24], sau khi áp dụng reduce() và tính tuổi trung bình, averageAge sẽ trở thành 39, tức là tuổi trung bình của các chó trưởng thành.