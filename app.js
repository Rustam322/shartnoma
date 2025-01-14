document.getElementById('dataForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const orderNumber = document.getElementById('orderNumber').value;
  const orderDate = document.getElementById('orderDate').value;
  const studentFullName = document.getElementById('studentFullName').value;
  const studentClass = document.getElementById('studentClass').value;
  const reason = document.getElementById('reason').value;

  const message = `
📋 <b>Номер приказа:</b> ${orderNumber}
📅 <b>Дата:</b> ${orderDate}
👤 <b>Ученик:</b> ${studentFullName}
🏫 <b>Класс:</b> ${studentClass}
📝 <b>Причина:</b> ${reason}
`.trim();

  const TOKEN = '2037935664:AAF2N1cOebMKGWlpgIsQ_RduiLTg48QT294'; // Замените на токен вашего бота
  const CHAT_ID = '-1002332297441'; // Замените на chat_id вашей группы
  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const payload = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: 'HTML',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      document.getElementById('statusMessage').textContent = 'Данные успешно отправлены!';
      document.getElementById('dataForm').reset();
    } else {
      document.getElementById('statusMessage').textContent = 'Ошибка при отправке данных.';
    }
  } catch (error) {
    document.getElementById('statusMessage').textContent = 'Ошибка при отправке данных.';
  }
});
