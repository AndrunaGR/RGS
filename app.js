let tg = window.Telegram.WebApp;
//tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
	tg.MainButton.setText("Отправлено");
	tg.MainButton.show();
	let data = { name: "Andruna"}
	tg.answerWebAppQuery(web_app_query_id = document.GetElementById("web_app_query_id").value, result-data);
	//tg.sendData("sendTestMessage");
});
