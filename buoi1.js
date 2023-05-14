// Dữ liệu trận đấu
const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
      ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
      ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2023',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // Nhiệm vụ 1
  const [players1, players2] = game.players;
  
  // Nhiệm vụ 2
  const [gk, ...fieldPlayers] = players1; // ...fieldPlayers trích xuất các cầu thủ còn lại
  
  // Nhiệm vụ 3
  const allPlayers = [...players1, ...players2];
  
  // Nhiệm vụ 4
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  // Nhiệm vụ 5
  const { team1, x: draw, team2 } = game.odds; // x thay thế cho draw
  
  // Nhiệm vụ 6
  function printGoals(...players) { // truyền vào 1 mảng
    // for (const player of players) {
    //   console.log(player);
    // }
    console.log(`Số cầu thủ đã ghi bàn: ${players.length}`);
  }
  
  // Nhiệm vụ 7
  const winner = team1 < team2 ? game.team1 : game.team2; 
  
  // Kiểm tra kết quả
//   console.log('Mảng cầu thủ của đội 1:', players1);
//   console.log('Mảng cầu thủ của đội 2:', players2);
//   console.log('Thủ môn đội 1:', gk);
//   console.log('Các cầu thủ sân cỏ đội 1:', fieldPlayers);
//   console.log('Tất cả cầu thủ trên sân:', allPlayers);
//   console.log('Cầu thủ cuối cùng của đội 1:', players1Final);
  console.log('Tỉ lệ kết quả trận đấu:', team1, draw, team2);
//   printGoals(...game.scored);
//   console.log('Đội chiến thắng:', winner);

//2.1 
//1 
for (const [i,player] of game.scored.entries()) {
    console.log(`Goal ${i+1} : ${player}`);
} 
//2
const odds = Object.values(game.odds); // biến object thành mảng 
let average = 0 ;
for(const odd of odds) {
    average += odd;
}
average /= odds.length;
console.log(average);
//3 
for (const [team,odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'hòa' : `thắng ${game[team]}`;
    console.log(`Tỷ lệ ${teamStr} ${odd}`);
}

//2.2 

const gameEvents = new Map([
    [3, 'yellow card'],
    [7, '⚽ goal'],
    [13, 'substitution'],
    [25, '⚽ goal'],
    [32, '⚽ goal'],
    [42, 'red card'],
    [64, 'yellow card'],
    [75, 'substitution'],
    [84, '⚽ goal'],
    [89, '⚽ goal'],
  ]);
//   console.log(gameEvents);
  //1 
  const events = [...new Set(gameEvents.values())]; // set để lọc được những phần tử trùng nhau
  console.log(events);
  //2 
  gameEvents.delete(64);
  console.log(gameEvents);
  // 3 
  console.log("")
  // kiểm tra ảnh trên IPAD

  function convertToCamelCase(str) {
    const words = str.split('_'); // tách chuỗi thành các phần tử theo dấu gạch dưới "_"
    
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word; // nếu là từ đầu tiên thì không cần viết hoa chữ cái đầu
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1); // viết hoa chữ cái đầu và loại bỏ dấu "_"
      }
    });
    
    return camelCaseWords.join(''); // ghép các phần tử lại với nhau để tạo ra camelCase
  }
  
  // test với dữ liệu đầu vào cho trước
  const input = "underscore_case\nfirst_name\nSome_Variable\ncalculate_AGE\ndelayed_departure";
  const words = input.split('\n');
  let output = '';
  
  words.forEach(word => {
    const camelCaseWord = convertToCamelCase(word);
    const ticks = '✅'.repeat(camelCaseWord.length); // đánh dấu độ dài camelCase bằng dấu tick ✅
    output += `${camelCaseWord} ${ticks}\n`; // thêm vào kết quả đầu ra
  });
  
  console.log(output);