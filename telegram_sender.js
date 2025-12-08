// ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА СВОИ:
const TELEGRAM_BOT_TOKEN = "8219884696:AAEG0CfCc-ghHnloLNKbZ8MmEgpoLAHUzjg";
const TELEGRAM_CHAT_ID = "-1003394839903"; // Например, '-1234567890'
// ------------------------------------------

const form = document.getElementById("reservationForm");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Предотвращаем стандартную отправку формы

  status.textContent = "Отправка...";

  const formData = new FormData(this);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const date = formData.get("date");
  const time = formData.get("time");
  const guests = formData.get("guests");
  const occasion = formData.get("occasion");
  const notes = formData.get("notes"); // Формируем текст сообщения для отправки
  const text = `Новая заявка с сайта:\n\nИмя: ${name}
  \Телефон:${phone}
   \Дата: ${date}
   \Время:${time}
   \Гости:${guests}
   \Повод:${occasion}
   \Пожелания:${notes}`;

  // URL для отправки сообщения через API Telegram
  const url = `https://api.telegram.org/bot8219884696:AAEG0CfCc-ghHnloLNKbZ8MmEgpoLAHUzjg/sendMessage`;

  // Отправляем запрос с использованием fetch API
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: -1003394839903,
      text: text,
      parse_mode: "HTML", // Можно использовать HTML-разметку в сообщении
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        status.textContent = "Заявка успешно отправлена!";
        form.reset(); // Очищаем форму
      } else {
        status.textContent = "Ошибка отправки: " + data.description;
      }
    })
    .catch((error) => {
      status.textContent = "Произошла ошибка сети при отправке.";
      console.error("Error:", error);
    });
});
