const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// Yêu cầu 1: Tính toán khẩu phần ăn đề nghị cho mỗi chó và thêm thuộc tính recommendedFood vào mỗi đối tượng chó
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// Yêu cầu 2: Tìm chó của Sarah và xác định xem chó đó ăn quá nhiều hay quá ít
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
if (sarahDog) {
  if (sarahDog.curFood > sarahDog.recommendedFood) {
    console.log("Chó của Sarah ăn quá nhiều!");
  } else if (sarahDog.curFood < sarahDog.recommendedFood) {
    console.log("Chó của Sarah ăn quá ít!");
  } else {
    console.log("Chó của Sarah ăn đúng lượng!");
  }
}

// Yêu cầu 3: Tạo mảng chứa các chủ của các chó ăn quá nhiều và ăn quá ít
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

// Yêu cầu 4: In ra chuỗi tương ứng với mỗi mảng đã tạo ở Yêu cầu 3
console.log(`Các chó của ${ownersEatTooMuch.join(' và ')} ăn quá nhiều!`);
console.log(`Các chó của ${ownersEatTooLittle.join(' và ')} ăn quá ít!`);

// Yêu cầu 5: Kiểm tra xem có chó nào có khẩu phần ăn đúng với khẩu phần ăn đề nghị không
const isCorrectPortion = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(`Có chó nào có khẩu phần ăn đúng không? ${isCorrectPortion}`);

// Yêu cầu 6: Kiểm tra xem có chó nào có khẩu phần ăn ở mức hợp lý không
const isProperPortion = dogs.every(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log(`Có chó nào có khẩu phần ăn ở mức hợp lý không? ${isProperPortion}`);

// Yêu cầu 7: In ra tất cả các chó có khẩu phần ăn hợp lý
const dogsWithProperPortion = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log('Các chó có khẩu phần ăn hợp lý:', dogsWithProperPortion);

// Yêu cầu 8: Tạo một mảng mới chứa các chó và sắp xếp theo khẩu phần ăn đề nghị theo thứ tự tăng dần
const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log('Các chó đã được sắp xếp:', sortedDogs);
// Kết quả khi chạy đoạn mã trên sẽ hiển thị các thông tin theo yêu cầu của bài toán.





// User
// comment chi tiết ý  nghĩa của các hàm được sử dụng trong bài tập
// ChatGPT
// Dưới đây là ý nghĩa của các hàm được sử dụng trong bài tập:

// forEach(): Hàm này được sử dụng để lặp qua từng phần tử của mảng và thực hiện một hành động nào đó cho mỗi phần tử.

// Math.trunc(): Hàm này được sử dụng để loại bỏ phần thập phân của một số và trả về phần nguyên của số đó.

// find(): Hàm này được sử dụng để tìm phần tử đầu tiên trong mảng thỏa mãn một điều kiện được xác định bởi một hàm callback.

// includes(): Hàm này được sử dụng để kiểm tra xem một mảng có chứa một phần tử cụ thể hay không.

// filter(): Hàm này được sử dụng để tạo một mảng mới chứa các phần tử của mảng ban đầu thỏa mãn một điều kiện được xác định bởi một hàm callback.

// flatMap(): Hàm này được sử dụng để kết hợp một mảng kết quả của một hàm callback vào một mảng mới.

// join(): Hàm này được sử dụng để tạo một chuỗi bằng cách nối các phần tử của một mảng thành một chuỗi, với một chuỗi phân tách được xác định.

// some(): Hàm này được sử dụng để kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn một điều kiện được xác định bởi một hàm callback hay không.

// every(): Hàm này được sử dụng để kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện được xác định bởi một hàm callback hay không.

// sort(): Hàm này được sử dụng để sắp xếp các phần tử trong mảng theo một thứ tự được xác định.

// slice(): Hàm này được sử dụng để tạo một bản sao nông (shallow copy) của một mảng hoặc lấy một phần của mảng ban đầu.

// console.log(): Hàm này được sử dụng để hiển thị thông điệp hoặc giá trị trong cửa sổ console.

// Các hàm trên được sử dụng để thực hiện các yêu cầu cụ thể trong bài tập, như tính toán khẩu phần ăn đề nghị, tìm kiếm chó của Sarah, lọc chủ của chó ăn qu






