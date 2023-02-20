// Problem #1
const https = require('https');

async function getNumTransactions(username) {
  // Fetch the user's ID
  const userPromise = new Promise((resolve, reject) => {
    https.get(`https://jsonmock.hackerrank.com/api/article_users?username=${username}`, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        const userData = JSON.parse(data);
        if (userData.data.length === 0) {
          resolve('Username not found');
        } else {
          const userId = userData.data[0].id;
          resolve(userId);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });

  // Fetch the user's transactions
  const userId = await userPromise;
  if (userId === 'Username not found') {
    return userId;
  } else {
    const transactionPromise = new Promise((resolve, reject) => {
      https.get(`https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          const transactionData = JSON.parse(data);
          resolve(transactionData.total);
        });
      }).on('error', (err) => {
        reject(err);
      });
    });
    // Return the number of transactions
    return transactionPromise;
  }
}


// Problem #2

function Employee(title) {
}

function Engineer(title, isManager) {
}